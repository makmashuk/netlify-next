import Link from 'next/link'
import Image from 'next/image'
import { useContext } from 'react'
import { AuthContext } from '../store/AuthContext'

export default function Navbar() {

  const {user,login } = useContext(AuthContext);

  console.log(user);
  const handleLogin = ()=>{
    login();
  }

  return (
    <div className="container">
      <nav>
        <Image src="/rupee.png" width={50} height={48} />
        <h1>Gaming Vibes</h1>
        <ul>
          <li><Link href="/"><a>Home</a></Link></li>
          <li><Link href="/guides"><a>Guides</a></Link></li>
          <li onClick={handleLogin}>Login</li>
        </ul>
      </nav>
      <div className="banner">
        <Image src="/banner.png" width={966} height={276} />
      </div>
    </div>
  )
}
