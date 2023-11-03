import Language from "./Language"
import react from '../../assets/react.svg'
import html from '../../assets/icons/html5-fill.svg'
import javascript from '../../assets/icons/javascript-fill.svg'
import css from '../../assets/icons/css3-fill.svg'
import react2 from '../../assets/icons/reactjs-line.svg'

const Languages = function () {
    return (
        <section className="language">
            <h2>Language</h2>
            <div className="language-container">
                <Language logoName={html} />
                <Language logoName={css} />
                <Language logoName={javascript} />
                <Language logoName={react2} />
                <Language logoName={react} />
            </div>
        </section>
    )
}
export default Languages