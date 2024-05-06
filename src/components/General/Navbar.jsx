const Navbar = ({ logo }) => {
    return (
        <nav className="md:flex p-3 mx-auto navbar-movil">
            <h1 className="md:w-1/2 flex justify-center text-2xl">
                <img src={logo} alt="AXRCODE" height="10" className="md:h-8 md:w-auto h-8"/>
            </h1>
        </nav>
    )
}

export default Navbar
