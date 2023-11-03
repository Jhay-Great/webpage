const Contact = function ({contactLogo}) {
    return (
        <span className="contacts">
            <img src={contactLogo} alt={`${contactLogo} logo`} />
        </span>
    )
}

export default Contact