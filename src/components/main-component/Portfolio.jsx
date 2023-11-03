import './Portfolio.css';
import Project from './Project';
import sm from "../../assets/sm.jpg";
import guessTheNumber from '../../assets/guess_the_number.png'

const Portfolio = function({darkTheme}) {
    return (
        <section className="portfolio">
            <h2>Portfolio</h2>
            <div className="portfolio-container">
                <Project image={guessTheNumber} darkTheme={darkTheme} link={'https://jhay-great.github.io/basicProjects'} />
                <Project image={sm} darkTheme={darkTheme} link={'https://jhay-great.github.io/basicProjects'} />
                <Project image={sm} darkTheme={darkTheme} link={'https://jhay-great.github.io/basicProjects'} />
            </div>
            <a className='see-more' style={{backgroundColor: darkTheme}} href="#">See more &gt;&gt; </a>
        </section>
    )
}
export default Portfolio