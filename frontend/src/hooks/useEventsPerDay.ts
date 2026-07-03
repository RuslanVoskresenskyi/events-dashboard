import { useQuery } from '@tanstack/react-query'
import { getEventsPerDay } from '#/api/api.ts'
import type { GetEventsPerDayQuery } from '#/api/generated.ts'

export const useEventsPerDay = () => {
  return useQuery<GetEventsPerDayQuery>({
    queryKey: ['dashboard', 'eventsPerDay'],
    queryFn: getEventsPerDay,
  })
}
