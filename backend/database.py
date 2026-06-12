from psycopg2 import pool
import os

conn_pool = pool.SimpleConnectionPool(1, 10,
  host=os.environ.get("POSTGRES_HOST"),
  port=os.environ.get("POSTGRES_PORT"),
  dbname=os.environ.get("POSTGRES_DB"),
  user=os.environ.get("POSTGRES_USER"),
  password=os.environ.get("POSTGRES_PASSWORD")
)