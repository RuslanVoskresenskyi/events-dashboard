import { useQuery } from '@tanstack/react-query'
import { getEventsPerType } from '#/api/api.ts'
import type { GetEventsPerTypeQuery } from '#/api/generated.ts'

export const useEventsPerType = () => {
  return  useQuery<GetEventsPerTypeQuery>({
    queryKey: ['dashboard', 'eventsPerType'],
    queryFn: getEventsPerType,
  })
}
