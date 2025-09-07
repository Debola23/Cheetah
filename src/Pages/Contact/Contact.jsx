import { Footer } from '../../Components/Footer/Footer'
import { Navv } from '../../Components/Navv/Navv'
import Styles from './Contact.module.css'

export const Contact = () => {
  return (
    <div className={Styles.contact}>
      <Navv/>
      <div className={Styles.contactH}>
        Feel <span className={Styles.highlight}>free</span> to reach out to us<br/>
        for help in <span  className={Styles.highlight}>renting</span> items or for technical assistance
      </div>
      <h3 className={Styles.heading}>Contact Us</h3>
      <p className='pl-[2rem] pt-2 pb-[1rem]' id={Styles.info}>
        Our cutomer service is here and available to guide you through your challanges<br/>
        from <span className={Styles.highlight}>8:00 am</span> to <span className={Styles.highlight}>7:00 pm</span>
        Monday to Saturday, and from <span className={Styles.highlight}>10:00 am</span> to <span className={Styles.highlight}>6:30 pm</span> on Sundays.
      </p>
      <div className={Styles.mail}>
        <img src="/Images/mailicon.png" className={Styles.imgSize} alt="" />
        <a className='pt-[8px] text-amber-600' href="mailto:info@cheetah.com">info@cheetah.com</a>
      </div>
      <div className={Styles.chat}>
        <img src="/Images/chaticon.png" className={Styles.imgSize} alt="" />
        <p className='pt-[8px] text-amber-600' >Chat with us</p>
      </div>
      <Footer/>
    </div>
  )
}
