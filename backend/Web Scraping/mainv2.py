from bs4 import BeautifulSoup
from urllib.request import urlopen
import csv
import connect

data = ''

country_list_url = 'https://www.worldometers.info/coronavirus/#countries'
# opening connection and reading info into variable
country_list_html = urlopen(country_list_url).read()

# closing connection
urlopen(country_list_url).close()

# need to install pip install lxml if you want to do xml
# html parsing
country_list_soup = BeautifulSoup(country_list_html, 'lxml')


with open('NewCountryCount.txtls', 'w') as file:
    for td_tag in country_list_soup.find_all('td'):
        file.write(td_tag.text)
        file.write('\n')
        # data.append(td_tag.text)
        data += str(td_tag.text) + '\n'
        print('Writing Data to file...', td_tag.text)
    file.close()

with open('NewCountryCount.txt', 'w') as file:
    # sets variable to equal a function that returns a list of lines
    # essentially it makes each line be represented by lines_iters
    lines_iters = iter(data.splitlines())
    file.write("Country;Total Cases;New Cases;New Deaths;Total Recovered;Active Cases;Serious Critical;Total Cases/1Million Population\n")
    # takes the 1st 4 elements in the iterable and put them in country_infected_deaths_continent
    for country_infected_deaths_continent in zip(lines_iters, lines_iters, lines_iters, lines_iters, lines_iters, lines_iters, lines_iters, lines_iters, lines_iters):
        print('Re-Formatting Data to file...')
        # joins the data and seperates each part with a space
        print(" ".join(country_infected_deaths_continent))
        # joins/writes the data and seperates each part with a :
        file.write(";".join(country_infected_deaths_continent))
        # after each section is done do a new line.
        file.write('\n')


with open('NewCountryCount.txt', newline='\n') as csvfile:
    # reads the data as if it was csv data seperated by :
    csv_reader = csv.reader(csvfile, delimiter=';')
    line_count = 0
    # Open connection to database
    mycursor = connect.mysql.cursor()
    # delete and recreate table
    print('DELETING OLD RECCORDS...')
    sql = ('TRUNCATE TABLE tbl_OutbreakDetailed')
    mycursor.execute(sql)
    # iterates through the rows of each data. Each row has 4 colums and can be acces with an array
    for row in csv_reader:
        if line_count == 0:
            print(f'Column names are {", ".join(row)}')
            line_count += 1
        else:
            print('Sending Data to Database...',
                  f'Country: {row[0]} Total Cases: {row[1]} New Cases: {row[2]} Total Deaths: {row[3]} New Deaths: {row[4]} Total Recovered: {row[5]} Active Cases: {row[6]} Serious Critical: {row[7]} Tot Cases/1Mil Pop: {row[8]}')
            Country = (f'{row[0]}')
            Total_Cases = (f'{row[1]}')
            New_Cases = (f'{row[2]}')
            Total_Deaths = (f'{row[3]}')
            New_Deaths = (f'{row[4]}')
            Total_Recovered = (f'{row[5]}')
            Active_Cases = (f'{row[6]}')
            Serious_Critical = (f'{row[7]}')
            Tot_Cases_1Mil_Pop = (f'{row[8]}')

            # Converts values into integers
            Total_Cases = int(Total_Cases.replace(',', ''))
            Active_Cases = int(Active_Cases.replace(',', ''))
            sql = ('INSERT INTO tbl_OutbreakDetailed(Country,Total_Cases,New_Cases,Total_Deaths,New_Deaths,Total_Recovered,Active_Cases,Serious_Critical,TotCasesOf1MilPop) VALUES ('"'{0}', '{1}', '{2}', '{3}', '{4}', '{5}', '{6}', '{7}', '{8}')").format(
                Country, Total_Cases, New_Cases, Total_Deaths, New_Deaths, Total_Recovered, Active_Cases, Serious_Critical, Tot_Cases_1Mil_Pop)
            mycursor.execute(sql)
            connect.mysql.commit()
            line_count += 1
