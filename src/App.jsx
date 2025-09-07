import { useEffect, useState } from "react";
import  Styles from './App.module.css'
import { Navv } from './Components/Navv/Navv'
import { Loader } from './Components/Loader/Loader'
import { Hero } from "./Components/Hero/Hero";
import { Footer } from "./Components/Footer/Footer";
import { How } from "./Components/HowItWorks/How";
import { PopularRentals } from "./Components/Featured/PopularRentals";
import { Faq } from "./Components/Faq/Faq"
import { ExploreProducts } from "./Components/ExploreProducts/ExploreProducts";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
  // fake loader timer
  const timer = setTimeout(() => {
    setLoading(false);
  }, 1500); 

  return () => clearTimeout(timer);
}, []);

return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className={Styles.App}>
          <Navv/>
          <Hero/>
          <How/>
          <PopularRentals/>
          <ExploreProducts/>
          <Faq/>
          <Footer/>
        </div>
      )}
    </>
  );
}

export default App
