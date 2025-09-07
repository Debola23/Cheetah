import Style from './Footer.module.css'
import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

export const Footer = () => {
  return (
    <div className={Style.Footer}>
        <div className='container' id={Style.contBox}>
            <div className={Style.columns}>
                <div className={Style.hold1}>
                    <ul className={Style.columnsList}>
                        <li>
                            <a href="">
                              About Cheetah
                            </a>
                        </li>
                        <li>
                            <a href="">
                              Guarantee
                            </a>
                        </li>
                        <li>
                            <a href="#">
                              Extra
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={Style.hold1}>
                    <ul className={Style.columnsList}>
                        <li>
                            <a href="">
                              Terms & Condition
                            </a>
                        </li>
                        <li>
                            <a href="">
                              Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="">
                              Partnership
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={Style.hold1}>
                    <ul className={Style.columnsList}>
                        <li>
                          <Link to="/categories">
                            All Categories
                          </Link>
                        </li>
                        <li>
                            <a href="">
                              Desktop App
                            </a>
                        </li>
                        <li>
                            <a href="">
                              Area To Use Cheetah
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={Style.hold1}>
                    <ul className={Style.columnsList}>
                        <li>
                            <p className='text-white'>
                              Address: 85 Great Portland Street,<br/> Vancouver, Canada
                            </p>
                        </li>
                        <li>
                            <a href="mailto:info@cheetah.com">rent@cheetah.com</a>
                        </li>
                        <li>
                            <a href="">
                              Cancellation Help
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={Style.socials}>
              <ul className={Style.iconList}>
                <li>
                  <a href="CheetahFacebook.com">
                    <FaFacebookF className="text-amber-600 hover:text-amber-800 text-1xl" />
                  </a>
                </li>
                <li>
                  <a href="CheetahX.com">
                    <FaTwitter className="text-amber-600 hover:text-amber-800 text-1xl" />
                  </a>
                </li>
                <li>
                  <a href="CheetahInstagram.com">
                    <FaInstagram className="text-amber-600 hover:text-amber-800 text-1xl" />
                  </a>
                </li>
              </ul>
            </div>
            <p className={Style.copyRight}>
              <span>
                © 2024–2025 <strong>Cheetah®</strong>. Built with passion by <a href="/" className="underline hover:text-gray-600">boladev</a>.
              </span>
            </p>
        </div>
    </div>
  )
}
