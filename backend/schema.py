import strawberry
from database import conn_pool

@strawberry.type
class DashboardSummary:
  total_events: int
  total_users: int

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

schema = strawberry.Schema(query=Query)