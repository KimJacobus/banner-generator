import './App.css'
import { ThemeContextProvider } from './hooks/useThemeContext'
import MainPage from './pages/MainPage'

function App() {
   return (
      <ThemeContextProvider>
         <MainPage />
      </ThemeContextProvider>
   )
}
export default App
