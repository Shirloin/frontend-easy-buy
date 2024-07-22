import { Toaster } from "react-hot-toast"
import AppRoutes from "./routes/AppRoutes"
import { AuthProvider } from "./contexts/AuthContext"

function App() {


  return (
    <>
      <AuthProvider>
        <Toaster />
        <AppRoutes />
      </AuthProvider>
    </>
  )
}

export default App
