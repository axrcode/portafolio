const FooterSocial = ({ icon, red, user, name }) => {
    return (
        <div className="w-full md:w-1/2 px-3 pb-3">
            <a  href={`https://${ red }/${ user }`} target="_blank" rel="noreferrer">
                <div className="bg-zinc-900 hover:bg-zinc-800 rounded-md py-2 px-5">
                    <div className="flex items-center justify-center">
                        <div className="w-1/6 text-left text-2xl text-gray-400">
                            <i className={icon}></i>
                        </div>
                        <div className="w-4/6 font-bold text-gray-400">
                            { name }
                        </div>
                        <div className="w-1/6 text-base text-gray-400 text-right">
                            <i className="fa fa-arrow-right"></i>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default FooterSocial
