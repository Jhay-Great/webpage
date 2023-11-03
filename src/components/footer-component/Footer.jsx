import Contact from './Contacts'
import './footer.css'
import twitter from '../../assets/iconTwitter.svg'
import youtube from '../../assets/iconYoutube.png'
import instagram from '../../assets/Instagram.png'

const Footer = function() {
    return (
        <footer>
            <div className="contact-container">
                <Contact contactLogo={twitter} />
                <Contact contactLogo={youtube} />
                <Contact contactLogo={instagram} />
            </div>
            <p> &copy;2023 _greatCodes </p>
        </footer>
    )
}

export default Footer