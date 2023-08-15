import {createRoot} from 'react-dom/client'
import {Routes} from '@generouted/react-router'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

const queryClient = new QueryClient()

const container = document.getElementById('root')!
createRoot(container).render(<QueryClientProvider client={queryClient}><Routes/></QueryClientProvider>)