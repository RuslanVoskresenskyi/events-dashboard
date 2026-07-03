import { gql } from 'graphql-request'

export const schemas = {
  dashboardSummary: gql`
  {
    dashboardSummary {
      totalEvents
      totalUsers
    }
  }
  `,
  eventsPerDay: gql`
  {
    eventsPerDay {
      date
      count
    }
  }
  `,
  eventsPerType: gql`
  {
    eventsPerType {
      eventName
      count
    }
  }
  `,
}