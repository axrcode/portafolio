import Home from './pages/Home'
import Navbar from './components/General/Navbar';

import logo from './assets/img/icons/logo-axrcode.png'

function App() {

  return (
    <div className="bg-[#090c0f]">
      <Navbar logo={logo} />
      <Home />
    </div>
  )
}

export default App
