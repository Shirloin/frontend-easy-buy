import { Toaster } from "react-hot-toast"
import AppRoutes from "./routes/AppRoutes"
import { AuthProvider } from "./contexts/AuthContext"
import { BrowserRouter } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

function App() {

  const queryClient = new QueryClient()
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AuthProvider>
            <Toaster />
            <AppRoutes />
          </AuthProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  )
}

export default App
