import { useEffect, useState } from 'react';
import { Navv } from '../Navv/Navv';
import { Footer } from '../Footer/Footer';
import Styles from './Favourite.module.css';
import { RentalCard } from '../RentalCard/RentalCard';

export const Favourite = () => {

 const [bookmarked, setBookmarked] = useState([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem('bookmarkedItems');
      const parsed = raw ? JSON.parse(raw) : [];

      const filtered = Array.isArray(parsed)
        ? parsed.filter(item => item && typeof item === 'object' && 'id' in item)
        : [];

      setBookmarked(filtered);
    } catch (error) {
      console.error("❌ Failed to load bookmarks:", error);
      setBookmarked([]);
    }
  }, []);

  
  const handleBookmarkToggle = (id) => {
    const updatedBookmarks = bookmarked.filter(item => item.id !== id);
    setBookmarked(updatedBookmarks);
    localStorage.setItem('bookmarkedItems', JSON.stringify(updatedBookmarks));
  };


  return (
    <>
    <div className={Styles.Favourite}>
      <Navv />
      <div className={Styles.How} id="how">
        <div className="container text-center mt-[3rem]">
          <h3 className={Styles.HowText}>Saved Rentals</h3>
        </div>
       <div className="container px-4 mt-10 mb-16">
          {bookmarked.length === 0 ? (
            <p className="text-center text-gray-500 text-lg">No Saves Yet.</p>
          ) : (
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
              {bookmarked.map((item) => (
                <div key={item.id} className="break-inside-avoid">
                  <RentalCard
                    item={item}
                    isBookmarked={true}
                    onBookmarkToggle={handleBookmarkToggle}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className={Styles.foot}>
        <Footer />
      </div>
    </div>

    </>
  );
};
