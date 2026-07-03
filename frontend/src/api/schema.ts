import { gql } from 'graphql-request'

export const schemas = {
  dashboardSummary: gql`
  query getDashboardSummary {
    dashboardSummary {
      totalEvents
      totalUsers
    }
  }
  `,
  eventsPerDay: gql`
  query getEventsPerDay {
    eventsPerDay {
      date
      count
    }
  }
  `,
  eventsPerType: gql`
  query getEventsPerType {
    eventsPerType {
      eventName
      count
    }
  }
  `,
}