import Styles from './How.module.css';
import { FaSearchLocation, FaUserPlus, FaClipboardCheck, FaCreditCard, FaBoxOpen, FaStar } from "react-icons/fa";
import { motion } from 'framer-motion';
import { SlideLeft } from '../../Utils/Animation/animation';

const howBox = [
    {
        id: '1',
        icon: <FaUserPlus className="text-[#D6A95A] text-2xl" />,
        title: "1. Create Account",
        desc: "This enables you to have your own profile so as to be able to rent items from other users and also to be able to list your own items for rent.",
        delay:0.3,
    },
    {
        id:'2',
        icon: <FaSearchLocation className="text-[#D6A95A] text-2xl" />,
        title: "2. Search For Item",
        desc: "Use the search bar to find items you want to rent or go through the categories. ",
        delay:0.6,
    },
    {
        id:'3',
        icon: <FaClipboardCheck className="text-[#D6A95A] text-2xl" />,
        title: "3. Request to Book",
        desc: "Submit a rental request with your chosen dates, pickup/dropoff is usually done in person or delivered to agreed location.",
        delay:0.9,
    },
    {
        id:'4',
        icon: <FaCreditCard className="text-[#D6A95A] text-2xl" />,
        title: "4. Transaction",
        desc: "After item has been found and delivery/pick up location is agreed upon you can proceed to payment and finalize the rental.",
        delay: 1.2,
    },
    {
        id:'5',
        icon: <FaBoxOpen className="text-[#D6A95A] text-2xl" />,
        title: "5. Pick up",
        desc: "After payment, you can pick up the item from the owner or arrange for delivery.",
        delay:1.5,
    },
    {
        id:'6',
        icon: <FaStar className="text-[#D6A95A] text-2xl" />,
        title: "6. Review",
        desc: "After the rental period, ensure to leave a review to help future users.",
        delay:1.8,
    }

]

export const How = () => {

  return (
  <section className={Styles.How} id="how">
      <div className="container text-center py-12">
        <h2 className={Styles.HowText}>How It Works</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 px-4">
          {howBox.map((item) => (
            <motion.div
              key={item.id}
              className="bg-white shadow-md p-6 rounded-xl text-left"
              variants={SlideLeft(item.delay)}
              initial="hidden"
              whileInView="visible"
            >
              <div className="flex justify-center items-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                {item.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
