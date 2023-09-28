import {createRoot} from 'react-dom/client'
import {Routes} from '@generouted/react-router'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

const queryClient = new QueryClient()

const container = document.getElementById('root')!
createRoot(container).render(<QueryClientProvider client={queryClient}><Routes/><ReactQueryDevtools initialIsOpen={false} /></QueryClientProvider>)