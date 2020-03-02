#!/usr/bin/env python3
from bs4 import BeautifulSoup
from urllib.request import urlopen
import csv
import connect
import requests
import sys

# document.querySelectorAll(".maincounter-number") SEACHING ALL DIVS

data = ''
totalInfected = 0
totalDead = 0
totalCured = 0

country_list_url = 'https://www.worldometers.info/coronavirus/countries-where-coronavirus-has-spread/'
overview_url = 'https://www.worldometers.info/coronavirus/'
# opening connection and reading info into variable
country_list_html = urlopen(country_list_url).read()
overview_html = urlopen(overview_url).read()

# closing connection
urlopen(country_list_url).close()
urlopen(overview_url).close()

# need to install pip install lxml if you want to do xml
# html parsing
country_list_soup = BeautifulSoup(country_list_html, 'lxml')
overview_soup = BeautifulSoup(overview_html, 'lxml')

# used to write overview_soup to file, need to cast it as str
# fileformatOverview = overview_soup.prettify('utf-8')

# gets the date of last updated from page
# overview_soup.find('div', style=lambda value: value and 'font-size:13px' in value and 'color:#999' in value):

# web scraped most recent infected total
webTotalInfectedDead = overview_soup.find_all(
    'div', {"class": "maincounter-number"})

webTotalInfected = webTotalInfectedDead[0].text.replace(
    ',', '').replace(" ", "")

webTotalDead = webTotalInfectedDead[1].text.replace(
    ',', '').replace(" ", "")

# Finds the amount cured
totalOVcured = overview_soup.find_all(
    'div', {'style': 'color:#8ACA2B '})

for tag in totalOVcured:
    tdtags = tag.find_all("span")
    for tag in tdtags:
        totalCured = int(tag.text.replace(',', ''))

# gets our recent infected total from api
results = requests.get('https://www.ianmatlak.com/api/stat.php')
json = results.json()
dbTotalInfected = json['data'][0]['infected']
dbTotalDead = json['data'][0]['dead']
dbTotalCured = json['data'][0]['cured']

# compares if they are the same then end, if they are different then continue
if(webTotalInfected == dbTotalInfected and webTotalDead == dbTotalDead and str(totalCured) == dbTotalCured):
    print('true')
    print(webTotalInfectedDead[0])
    print(dbTotalInfected)
    sys.exit()

# writes the parsed html data to a file while adding data to a string variable
with open('CountryCount.txt', 'w') as file:
    for td_tag in country_list_soup.find_all('td'):
        file.write(td_tag.text)
        file.write('\n')
        # data.append(td_tag.text)
        data += str(td_tag.text) + '\n'
        print('Writing Data to file...', td_tag.text)

# filters though html string and parses all td tags and take the text values from each and stores it into an array(ex.td_tag[o].text) and uses
# .next_sibling to navigate between page elements
# .text grabs the text
# for td_tag in country_list_soup.find_all('td'):
    # print(td_tag.text, td_tag.next_sibling)

# groups the data that was parsed to the .txt file into rows of 4
# so each row will look like Country:Infected:Deaths:Continent
# Using : in place of a , because numbers that reach 1,000 need the comma
with open('CountryCount.txt', 'w') as file:
    # sets variable to equal a function that returns a list of lines
    # essentially it makes each line be represented by lines_iters
    lines_iters = iter(data.splitlines())
    file.write("Country:Infected:Deaths:Continent\n")
    # takes the 1st 4 elements in the iterable and put them in country_infected_deaths_continent
    for country_infected_deaths_continent in zip(lines_iters, lines_iters, lines_iters, lines_iters):
        print('Re-Formatting Data to file...')
        # joins the data and seperates each part with a space
        print(" ".join(country_infected_deaths_continent))
        # joins/writes the data and seperates each part with a :
        file.write(":".join(country_infected_deaths_continent))
        # after each section is done do a new line.
        file.write('\n')

# opens file
with open('CountryCount.txt', newline='\n') as csvfile:
    # reads the data as if it was csv data seperated by :
    csv_reader = csv.reader(csvfile, delimiter=':')
    line_count = 0
    # Open connection to database

    mycursor = connect.mysql.cursor()
    # delete and recreate table
    print('DELETING OLD RECCORDS...')
    sql = ('TRUNCATE TABLE tbl_Outbreak')
    mycursor.execute(sql)
    # iterates through the rows of each data. Each row has 4 colums and can be acces with an array
    for row in csv_reader:
        if line_count == 0:
            print(f'Column names are {", ".join(row)}')
            line_count += 1
        else:
            print('Sending Data to Database...',
                  f'Country: {row[0]} Infected: {row[1]} Deaths: {row[2]} Continent: {row[3]}')
            Country = (f'{row[0]}')
            Infected = (f'{row[1]}')
            Dead = (f'{row[2]}')
            Continent = (f'{row[3]}')
            # Converts values into integers
            # Need to remove the comma, I think [0] referes to the first comma it reaches which is replace with empty space
            numInfected = int(Infected.replace(',', ''))
            numDead = int(Dead.replace(',', ''))
            totalInfected += numInfected
            totalDead += numDead
            sql = ('INSERT INTO tbl_Outbreak(Country,Infected,Dead,Continent) VALUES ('"'{0}', '{1}', '{2}', '{3}')").format(
                Country, numInfected, numDead, Continent)
            mycursor.execute(sql)
            connect.mysql.commit()
            line_count += 1

print('Sending Data to Database...', totalInfected)
print('Sending Data to Database...', totalDead)
print('Sending Data to Database...', totalCured)
mycursor = connect.mysql.cursor()
sql = ('INSERT INTO tbl_OutbreakTotals(Infected,Dead,Cured) VALUES ('"'{0}', '{1}', '{2}')").format(
    totalInfected, totalDead, totalCured)
mycursor.execute(sql)
connect.mysql.commit()
