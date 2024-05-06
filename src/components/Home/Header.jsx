import RedSocial from './RedSocial'

const Header = ({ foto, etiqueta, my, text }) => {
    return (
        <div className="py-14">

            {
                foto && (
                    <div>
                        <img src={foto} alt="Perfil"
                            className="perfil mx-auto rounded-full h-auto md:h-40 w-auto md:w-40 flex items-center justify-center mb-10"
                        />
                    </div>
                )
            }

            <h1 className="font-medium text-2xl md:text-4xl text-center md:w-1/2 mx-auto mb-5 text-gray-100"
                id="title-primary">
                {'<'}{ etiqueta }{'/>'}
            </h1>

            {
                my && (
                    <h1 className="text-2xl md:text-4xl text-center md:w-1/2 mx-auto mb-8 text-gray-400">
                        My name is {''}
                        <span className="font-bold text-gray-200">Axel Castillo</span>
                        <p className='text-xl font-bold mt-5 text-gray-200 uppercase'>Fullstack Developer</p>
                    </h1>
                )
            }

            <article className="text-gray-300 font-normal text-center px-8 md:px-80 text-md md:text-lg">
                { text }
            </article>
        </div>
    )
}

export default Header
