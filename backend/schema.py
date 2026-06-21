import strawberry
from database import conn_pool
from datetime import date

@strawberry.type
class DashboardSummary:
  total_events: int
  total_users: int

@strawberry.type
class EventPerDay:
  date: date
  count: int

@strawberry.type
class EventPerType:
  event_name: str
  count: int

@strawberry.type
class Query:
  @strawberry.field
  def dashboard_summary(self) -> DashboardSummary:
    conn = conn_pool.getconn()
    cursor = conn.cursor()
    cursor.execute("SELECT COUNT(*) FROM events")
    (total_events,)= cursor.fetchone()
    cursor.execute("SELECT COUNT(*) FROM users")
    (total_users,) = cursor.fetchone()
    conn_pool.putconn(conn)

    return DashboardSummary(
      total_events=total_events,
      total_users=total_users
    )
  @strawberry.field
  def events_per_day(self) -> list[EventPerDay]:
    conn = conn_pool.getconn()
    cursor = conn.cursor()
    cursor.execute("SELECT DATE(occurred_at), COUNT(*) FROM events GROUP BY DATE(occurred_at) ORDER BY DATE(occurred_at)")
    rows = cursor.fetchall()
    conn_pool.putconn(conn)

    return [
      EventPerDay(date=row[0], count=row[1]) for row in rows
    ]
  @strawberry.field
  def events_per_type(self) -> list[EventPerType]:
    conn = conn_pool.getconn()
    cursor = conn.cursor()
    cursor.execute("SELECT event_name, COUNT(*) FROM events GROUP BY event_name")
    rows = cursor.fetchall()
    conn_pool.putconn(conn)

    return [
      EventPerType(event_name=row[0], count=row[1]) for row in rows
    ]

schema = strawberry.Schema(query=Query)