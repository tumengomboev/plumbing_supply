from db_connect import cursor, db

cursor.execute("SELECT * FROM `product_types`")
for row in cursor.fetchall():
    print(row)

cursor.close()
db.close()

