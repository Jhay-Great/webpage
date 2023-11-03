import Languages from "./Languages"
import Portfolio from "./Portfolio"

const Main = function({darkTheme}) {
    return (
        <>
            <Portfolio darkTheme={darkTheme} />
            <Languages />
        </>
    )
}
export default Main