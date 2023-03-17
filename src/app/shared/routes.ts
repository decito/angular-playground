export type Route = { name: 'servers' | 'assignments' | 'accounts' | 'test' }

export const routes: Route[] = [
  { name: 'servers' },
  { name: 'assignments' },
  { name: 'accounts' },
  { name: 'test' },
]

export const currentRoute: Route["name"] = 'assignments'