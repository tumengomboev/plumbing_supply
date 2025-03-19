import mysql.connector
import os
from dotenv import load_dotenv

load_dotenv()


db = mysql.connector.connect(
    host=os.getenv('DB_HOST'),
    user=os.getenv('DB_USER'),
    password=os.getenv('DB_PASSWORD'),
    database=os.getenv('DB_NAME'),
    port=os.getenv('DB_PORT')
)

cursor = db.cursor()

if db.is_connected():
    print('successful_connection')

# class DB:
#     def __init__(self, )