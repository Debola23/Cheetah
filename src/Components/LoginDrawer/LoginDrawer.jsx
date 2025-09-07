import Style from './LoginDrawer.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaApple, FaGoogle } from 'react-icons/fa';

const countryOptions = {
  NG: { code: '+234', name: 'Nigeria' },
  CA: { code: '+1', name: 'Canada' },
  US: { code: '+1', name: 'United States' },
  GB: { code: '+44', name: 'United Kingdom' },
};

export const LoginDrawer = ({ open, onClose }) => {
  const [selectedCountry, setSelectedCountry] = useState('NG');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const fullNumber = `${countryOptions[selectedCountry].code}${phoneNumber}`;
    if (!phoneNumber.match(/^\d{7,15}$/)) {
      alert('Please enter a valid phone number.');
      return;
    }

    console.log('📱 Phone login attempt:', fullNumber);
    
  };

  return (
    <div className={Style.LoginDrawer}>
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className={Style.overlay}
              onClick={onClose}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className={Style.drawer}
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              <h2 className={Style.drawH}>Log in or Sign up Required</h2>
              <p className={Style.drawT}>
                You need to be logged in to bookmark items.
              </p>

              <div className={Style.bar}></div>

              <div className={Style.sign}>
                <div className={Style.formSection}>
                  <label>
                    Welcome to <span className="text-[#D6A95A]">Cheetah</span>
                  </label>

                  <form onSubmit={handleSubmit}>
                    <div className={Style.phoneRow}>
                      <select
                        className={Style.select}
                        value={selectedCountry}
                        onChange={(e) => setSelectedCountry(e.target.value)}
                      >
                        {Object.entries(countryOptions).map(([key, val]) => (
                          <option key={key} value={key}>
                            {val.name} ({val.code})
                          </option>
                        ))}
                      </select>

                      <div className={Style.phoneInputWrapper}>
                        <span className={Style.countryCode}>
                          {countryOptions[selectedCountry].code}
                        </span>
                        <input
                          type="tel"
                          placeholder="Phone number"
                          value={phoneNumber}
                          onChange={(e) =>
                            setPhoneNumber(e.target.value.replace(/\D/g, ''))
                          }
                          className={Style.phoneInput}
                        />
                      </div>
                    </div>

                    <p className={Style.note}>
                      We’ll send a code to confirm your number. Standard message
                      and data rates apply.
                    </p>

                    <button type="submit" className={Style.continueBtn}>
                      Continue
                    </button>
                  </form>

                  <div className={Style.divider}>
                    <span>or</span>
                  </div>

                  <button
                    type="button"
                    className={Style.altBtn}
                    onClick={() => console.log('Google login')}
                  >
                    <FaGoogle /> Continue with Google
                  </button>

                  <button
                    type="button"
                    className={Style.altBtn}
                    onClick={() => console.log('Apple login')}
                  >
                    <FaApple /> Continue with Apple
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
