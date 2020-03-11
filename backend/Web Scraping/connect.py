import mysql.connector

mysql = mysql.connector.connect(
    host="",
    user="",
    passwd="",
    database="",
)

if(mysql):
    print("Connection Successful")
else:
    print("Connection Error")
