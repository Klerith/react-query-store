import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// Create a client
const queryClient = new QueryClient()

export const TanStackProvider = ({ children }: React.PropsWithChildren ) => {
  return (
    <QueryClientProvider client={queryClient}>
      { children }

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}