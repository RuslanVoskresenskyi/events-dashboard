import { useQuery } from '@tanstack/react-query'
import { getDashboardSummary } from '#/api/api.ts'
import type { GetDashboardSummaryQuery } from '#/api/generated.ts'

export const useDashboardSummary = () => {
  return useQuery<GetDashboardSummaryQuery>({
    queryKey: ['dashboard', 'summary'],
    queryFn: getDashboardSummary,
  })
}
