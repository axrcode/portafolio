//import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/icons/logo-axrcode.png'
import FooterSocial from './FooterSocial';

const Footer = () => {

    const today = new Date();
    const year = today.getFullYear();

    const contacts = [
        {
            id: 1,
            icon: 'fab fa-github',
            user: 'axrcode',
            red: 'github.com',
            name: 'Github',
        },
        {
            id: 2,
            icon: 'fab fa-linkedin',
            user: 'axrcode',
            red: 'linkedin.com/in',
            name: 'LinkedIn',
        },
    ]

    return (
        <div className="bg-zinc-950">
            <div className="md:flex px-10 md:px-48 py-10">

                <div className="md:w-1/2 mb-8 md:pr-20">
                    <div className="p-5 border-double border-4 border-zinc-900 text-gray-300 text-center pb-8">
                        <h3 className="font-black text-gray-300 text-xl px-3 text-center uppercase pb-2 mb-5 border-zinc-700">
                            Contact by email
                        </h3>
                        <a  href="mailto:axrcode@gmail.com"
                            className="bg-zinc-900 py-2 px-5 md:px-20 text-gray-400 rounded-md uppercase font-bold hover:bg-zinc-800 cursor-pointer transition-all mx-auto">
                            {''} Click here {''}
                        </a>
                    </div>
                </div>

                <div className="md:w-1/2">
                    <h3 className="font-black text-gray-400 text-xl px-3 text-center md:text-left uppercase pb-2 mb-5 border-b-4 border-gray-300">
                        My social networks
                    </h3>

                    <div className="flex flex-wrap">
                        {
                            contacts.map(contact => (
                                <FooterSocial
                                    key={contact.id}
                                    icon={contact.icon}
                                    user={contact.user}
                                    red={contact.red}
                                    name={contact.name}
                                />
                            ))
                        }
                    </div>
                </div>

            </div>

            <div className="bg-zinc-950 flex justify-center py-4">
                <img src={logo} alt="AXRCODE" className="logo h-10 w-auto"/>
                <h1 className="text-lg font-black mt-2 ml-2 text-gray-200">
                    &copy; { year }
                </h1>
            </div>
        </div>

    )
}

export default Footer
