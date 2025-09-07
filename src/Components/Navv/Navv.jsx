import Styles from './Navv.module.css'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from 'react';
import LanguageRegionModal from '../SelectorBox/LanguageRegionModal';

export const Navv = () => {

  const navigate = useNavigate();
  const location = useLocation();
  
  const navItems = [
    { label: "Categories", path: "/categories" },
    { label: "Favourite", path: "/favourite" },
    { label: "Contact", path: "/contact" },
  ];

  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false)

  return (
    <div className={`${Styles.header} px-4 py-3`}>
        <div className="flex items-center justify-between w-full">
            <div className="flex items-center md:pl-[40px]" >
                <li className="flex gap-2 items-center text-sm md:text-base cursor-pointer" onClick={() => navigate("/")}>
                    <img
                        src="/Images/logo.png"
                        alt="logo"
                        className="h-[20px] w-[20px] md:h-[56px] md:w-[50px]"
                        id={Styles.logo}
                    />
                    <div className={Styles.logoT}>Cheetah</div>
                </li>
            </div>

            <div className="flex-1 flex justify-center" id={Styles.mid}>
                <ul className="hidden md:flex gap-10 text-sm md:text-base text-black pt-[21px] font-semibold">
                    {navItems.map(({ label, path }, index) => {
                    const isActive = location.pathname === path;
                    return (
                        <li
                        key={index}
                        onClick={() => navigate(path)}
                        className={`relative cursor-pointer pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 ${
                            isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'
                        }`}
                        >
                        {label}
                        </li>
                    );
                    })}
                </ul>
            </div>

            <div className="flex items-center gap-4 pr-[40px] pt-[21px]" id={Styles.ed} >
                <img src="/Images/extra.png" alt="extra"
                    className="h-[20px] w-[20px] md:h-[36px] md:w-[36px] cursor-pointer" 
                    id={Styles.extra}
                    onClick={handleOpen}
                />
                <Link to="/listing" className={Styles.btn} id={Styles.mid}>
                    Add Listing
                </Link>
            </div>
        </div>
        {showModal && (
            <LanguageRegionModal
                onClose={handleClose}
                onLogin={() => alert("Login clicked")}
                onSignUp={() => alert("Sign Up clicked")}
                onTranslateLanguageChange={(langCode) => {
                console.log("Language changed to:", langCode);
            }}
            />
      )}
    </div>
    
    
  )
}
