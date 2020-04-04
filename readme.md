# Corona Times Online

http://coronatimes.online/

This project was assembled at the 2020 Hack CEWIT Hackathon by [Ian Matlak](https://github.com/mnai01), [Julian Hecker](https://github.com/julian-hecker), and [Philip Guerrero](https://github.com/guerpc).

Updates after hackathon:

- UI color scheme created by [Stefanie Mendoza](https://www.linkedin.com/in/stefanie-m-3b4832183/)

## Summary

Corona Times Online aims to provide awareness to users about the 2020 Corona Virus outbreak, live data and updates about its spread, and what one can do to prevent getting sick.

The app gets live data by scraping sites that are reporting on cases of Corona Virus, and organizes it into an easy to digest dashboard complete with map, statistics, and table.

There is a section to subscribe for updates about Coronavirus in one's own home country, a page with information about the virus, as well as a questionnaire which can help determine if a person is at risk for the virus and what they can do if they are.

## Languages

Corona Times has a frontend built in React, backend server running PHP, web scraping running in python, databases in SQL, and a whole mess.

## Web Scraping

Python 3.8.0
Required packages:

```
pip3 install mysql-connector-python
pip3 install beautifulsoup4
pip3 install requests
```

Uses webscraping to collect information of the corona virus off the web and stores it in a database.

**connection.php and index.php are help on the webserver.
Everything else is stays in the same folder and is executed by running main.py**

**Trigger for tbl_Outbreak**

Time: Before

Event: Insert

```sql
INSERT INTO tbl_OutbreakHistory (Country, Infected, Dead, Continent, Date) VALUES (new.Country, new.Infected, new.Dead, new.Continent, new.Date)
```

**Table Layout**

```sql
CREATE TABLE tbl_Outbreak (
 Country varchar(20) NOT NULL,
 Infected int(12) NOT NULL,
 Dead int(12) NOT NULL,
 Continent varchar(20) NOT NULL,
 Date datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4

CREATE TABLE tbl_OutbreakHistory (
 Country varchar(20) NOT NULL,
 Infected int(12) NOT NULL,
 Dead int(12) NOT NULL,
 Continent varchar(20) NOT NULL,
 Date datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4

CREATE TABLE tbl_OutbreakTotals (
 Infected int(11) NOT NULL,
 Dead int(11) NOT NULL,
 Cured int(11) DEFAULT NULL,
 Date datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
```

## APIs

## React
