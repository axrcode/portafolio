import Home from './pages/Home'
import Navbar from './components/General/Navbar';

import logo from './assets/img/icons/logo-axrcode.png'

function App() {

  return (
    <div className="bg-zinc-950">
      <Navbar logo={logo} />
      <Home />
    </div>
  )
}

export default App
