const Navbar = ({ logo }) => {
    return (
        <nav className="md:flex p-3 mx-auto navbar-movil">
            <h1 className="md:w-1/2 md:mx-auto flex justify-center text-2xl mt-4">
                <img src={logo} alt="AXRCODE" className="md:h-12 md:w-auto h-10"/>
            </h1>
        </nav>
    )
}

export default Navbar
