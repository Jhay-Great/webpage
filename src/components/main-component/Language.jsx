const Language = function({logoName}) {
    return (
        <>
            <span>
                    <img src={logoName} alt={`${logoName} logo`} />
            </span>
        </>
    )
}
export default Language