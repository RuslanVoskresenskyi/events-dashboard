import { GraphQLClient } from 'graphql-request'
import { schemas } from './schema.ts'

const endpoint = import.meta.env.VITE_GRAPHQL_ENDPOINT

if (!endpoint) throw new Error('VITE_GRAPHQL_ENDPOINT is not defined in .env')

const client = new GraphQLClient(endpoint)

const dashboardSummary = async () => client.request(schemas.dashboardSummary)
const eventsPerDay = async () => client.request(schemas.eventsPerDay)
const eventsPerType = async () => client.request(schemas.eventsPerType)

export { dashboardSummary, eventsPerDay, eventsPerType }