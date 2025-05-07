from db_connect import db

class ProductService:

    @staticmethod
    def get_product_types():
        cursor = db.cursor(dictionary=True)
        cursor.execute("SELECT * FROM `product_types`")
        return cursor.fetchall()
    
    @staticmethod
    def get_product_by_type(type_name):
        cursor = db.cursor(dictionary=True)
        cursor.execute(f"""SELECT p.*
            FROM `products` p
            INNER JOIN `product_types` pt ON pt.`id` = p.`product_type_id`
            WHERE pt.`name` = '{type_name}'""")
        return cursor.fetchall()
