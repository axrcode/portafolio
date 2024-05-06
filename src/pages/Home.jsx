import Header from "../components/Home/Header"
import Footer from "../components/General/Footer"

import foto from '../assets/img/others/perfil-axrcode.png'

const Home = () => {

    return (
        <div className="bg-zinc-900 container">
            <Header
                foto={foto}
                etiqueta="Hello World"
                my={true}
                text="I am from Quetzaltenango, Guatemala. I have been a programmer since 2020, mainly focusing on Web Development with technologies for both Frontend and Backend. I am a student of Systems Engineering at Mariano Gálvez University in Guatemala"
            />

            <Footer />
        </div>
    )
}

export default Home
