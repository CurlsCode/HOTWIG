import psycopg2

def get_connection():
    """Connect to PostgreSQL database"""
    connection = psycopg2.connect(
        host="localhost",
        database="hotwig",
        user="postgres",
        password="hotwig"
    )
    return connection

def test_connection():
    """Test if connection works"""
    try:
        conn = get_connection()
        print("✓ Connected to database successfully!")
        conn.close()
    except Exception as e:
        print("✗ Connection failed:", e)

if __name__ == "__main__":
    test_connection()

def get_all_people():
    conn = get_connection()
    cursor = conn.cursor()
    
    cursor.execute("SELECT id, name, born, died FROM people")
    
    rows = cursor.fetchall()
    
    people = []
    for row in rows:
        people.append({
            "id": row[0],
            "name": row[1],
            "born": row[2],
            "died": row[3]
        })
    
    cursor.close()
    conn.close()
    
    return people