import Navbar from '../components/Navbar'
import '../styles/globals.css'
import { AuthProvider } from '../store/AuthContext'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <AuthProvider>
      <Navbar />
      <Component {...pageProps} />
      </AuthProvider>
    </div>
    
  )
}

export default MyApp
