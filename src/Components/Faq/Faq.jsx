import Styles from './Faq.module.css'
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "How do I rent an item?",
    answer: "Simply browse the listings, choose the item you like, and click the 'Request to Book' button."
  },
  {
    question: "What payment methods are accepted?",
    answer: "We accept credit cards, debit cards, and secure online transfers."
  },
  {
    question: "Can I cancel my booking?",
    answer: "Yes, cancellations are allowed up to 24 hours before pickup for a full refund."
  },
];


export const Faq = () => {

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  
  return (
    <div className={Styles.Faq}>
      <h3 className={Styles.faqH}>
        Frequently Asked Questions
      </h3>
      <div className={Styles.accordion}>
        {faqData.map((item, index) => (
          <div key={index} className={Styles.accordionItem}>
            <button
              className={Styles.accordionButton}
              onClick={() => toggleAccordion(index)}
            >
              <span className={Styles.question}>{item.question}</span>
              <ChevronDown
                className={`${Styles.icon} ${
                  openIndex === index ? Styles.rotate : ""
                }`}
                size={20}
              />
            </button>
            <div
              className={`${Styles.accordionContent} ${
                openIndex === index ? Styles.open : ""
              }`}
            >
              <p className={Styles.answer}>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
 