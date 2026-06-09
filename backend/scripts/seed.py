import psycopg2
import random
from datetime import datetime, timedelta

conn = psycopg2.connect(
  host="localhost",
  port=3005,
  dbname="events_db",
  user="admin",
  password="password"
)

cursor = conn.cursor()
print("Connected!")

events = ["click", "login", "search", "purchase", "logout"]

USER_COUNT = 10000

now = datetime.now()

try:
  for i in range(USER_COUNT):
    username = f"user_{i + 1}"
    cursor.execute("INSERT INTO users (username) VALUES (%s) RETURNING id", (username,))
    user_id = cursor.fetchone()[0]
    events_count = random.randint(3, 7)
    for j in range(events_count):
      event_name = random.choice(events)
      occurred_at = now - timedelta(days=random.randint(0, 60))
      cursor.execute(
        "INSERT INTO events (user_id, event_name, occurred_at) VALUES  (%s, %s, %s)",
        (user_id, event_name, occurred_at)
      )

  conn.commit()
  print("Done!")
except Exception as e:
  conn.rollback()
  print(f"Error: {e}")
finally:
  cursor.close()
  conn.close()



