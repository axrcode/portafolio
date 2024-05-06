const RedSocial = ({ enlace, icono }) => {
    return (
        <a  href={enlace} target="_blank" rel="noreferrer"
            className="py-3 text-gray-400 hover:text-gray-200">
            <span className="px-2 text-3xl ">
                <i className={icono}></i>
            </span>
        </a>
    )
}

export default RedSocial
