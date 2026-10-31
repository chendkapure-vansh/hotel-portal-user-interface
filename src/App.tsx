import { BrowserRouter } from "react-router-dom"
import { Toaster } from "sonner"
import { AppRoutes } from "./routes"

/**
 * Root Application Component
 * Sets up routing and toast notification system
 */
export function App() {
  return (
    <BrowserRouter>
      {/* Toast notifications positioned at top right */}
      <Toaster
        position="top-right"
        richColors
        closeButton
        toastOptions={{
          style: {
            fontFamily: "Montserrat, sans-serif",
            borderRadius: "12px",
          },
        }}
      />
      {/* Application page routes */}
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
