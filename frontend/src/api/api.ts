import { GraphQLClient } from 'graphql-request'
import { schemas } from './schema.ts'
import type { GetDashboardSummaryQuery, GetEventsPerDayQuery, GetEventsPerTypeQuery } from '#/api/generated.ts'

const endpoint = import.meta.env.VITE_GRAPHQL_ENDPOINT

if (!endpoint) throw new Error('VITE_GRAPHQL_ENDPOINT is not defined in .env')

const client = new GraphQLClient(endpoint)

const getDashboardSummary = async () => client.request<GetDashboardSummaryQuery>(schemas.dashboardSummary)
const getEventsPerDay = async () => client.request<GetEventsPerDayQuery>(schemas.eventsPerDay)
const getEventsPerType = async () => client.request<GetEventsPerTypeQuery>(schemas.eventsPerType)

export { getDashboardSummary, getEventsPerDay, getEventsPerType }