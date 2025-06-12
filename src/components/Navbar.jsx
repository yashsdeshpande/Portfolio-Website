import { FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa"
import logo from "../assets/yashdeshpandelogo.png"
import { FaSquareXTwitter } from "react-icons/fa6"

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <a href="/" aria-label="Home">
                <img src={logo} className="mx-2" width={50} height={33} alt="Logo" />
                </a>
            </div>
            <div className="m-8 flex item-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/yashdeshpande108/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn">
                    <FaLinkedin />
                </a>

                <a href="https://github.com/yashsdeshpande"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github">
                    <FaGithub />
                </a>
                
                <a href="https://www.instagram.com/yash_agasti/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram">
                    <FaInstagram />
                </a>

                <a href="https://x.com/yash_agasti"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter">
                    <FaSquareXTwitter />
                </a>
            </div>
        </nav>
    )
}
 export default Navbar