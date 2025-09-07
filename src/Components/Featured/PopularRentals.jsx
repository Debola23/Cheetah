import Styles from './PopularRentals.module.css';
import { useEffect, useState } from 'react';
import { RentalCard } from '../RentalCard/RentalCard';
import { LoginDrawer } from '../LoginDrawer/LoginDrawer';

const mockRentals = [
  {
    id: 1,
    title: 'DJI Mavic Air 2',
    category: 'drone',
    views: 120,
    bookings: 14,
    image: '/Images/d11.jpg',
    lastActive: '2025-11-17T09:00:00Z',
  },
  {
    id: 2,
    title: 'Sony A7 III Camera',
    category: 'camera',
    views: 300,
    bookings: 8,
    image: '/Images/cam1.jpg',
    lastActive: '2025-11-17T09:00:00Z',
  },
  {
    id: 3,
    title: 'Canon EOS R5',
    category: 'camera',
    views: 280,
    bookings: 12,
    image: '/Images/cam2.jpg',
    lastActive: '2025-11-17T09:00:00Z',
  },
  {
    id: 4,
    title: 'GoPro HERO11',
    category: 'camera',
    views: 220,
    bookings: 6,
    image: '/Images/cam3.jpg',
    lastActive: '2025-11-17T09:00:00Z',
  },
  {
    id: 5,
    title: 'Yamaha Speakers',
    category: 'speakers',
    views: 100,
    bookings: 15,
    image: '/Images/yahama.webp',
    lastActive: '2025-11-17T09:00:00Z',
  },
  {
    id: 6,
    title: 'Ps5',
    category: 'game',
    views: 100,
    bookings: 15,
    image: '/Images/p5.jpg',
    lastActive: '2025-11-17T09:00:00Z',
  },
  {
    id: 7,
    title: 'Rake',
    category: 'garden',
    views: 159,
    bookings: 19,
    image: '/Images/rake2.jpg',
    lastActive: '2025-11-17T09:00:00Z',
  },
  {
    id: 8,
    title: 'Dell laptop',
    category: 'electronics',
    views: 109,
    bookings: 115,
    image: '/Images/delllaptop.jpg',
    lastActive: '2025-11-17T09:00:00Z',
  },
];

export const PopularRentals = () => {
  const [popularItems, setPopularItems] = useState([]);
  
  // Bookmarked IDs only for quick checking
  const [bookmarkedIds, setBookmarkedIds] = useState(() => {
    const saved = localStorage.getItem("bookmarkedItems");
    return saved ? JSON.parse(saved).map((item) => item.id) : [];
  });

  useEffect(() => {
    const twoWeeksAgo = new Date();
    twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14);

    const recentItems = mockRentals.filter(
      (item) => new Date(item.lastActive) >= twoWeeksAgo
    );

    const sorted = recentItems.sort((a, b) => {
      if (b.bookings !== a.bookings) {
        return b.bookings - a.bookings;
      }
      return b.views - a.views;
    });

    setPopularItems(sorted);
  }, []);

  const maxBookings = Math.max(...popularItems.map((item) => item.bookings || 0));

  const handleBookmarkToggle = (itemId) => {
  if (!isLoggedIn) {
    setDrawerOpen(true);
    return;
  }

  const isBookmarked = bookmarkedIds.includes(itemId);
  const updatedIds = isBookmarked
    ? bookmarkedIds.filter((id) => id !== itemId)
    : [...bookmarkedIds, itemId];

  setBookmarkedIds(updatedIds);

  const rentalToSave = mockRentals.find((item) => item.id === itemId);
  const savedItems = JSON.parse(localStorage.getItem("bookmarkedItems")) || [];

  const updatedSavedItems = isBookmarked
    ? savedItems.filter((item) => item.id !== itemId)
    : [...savedItems, rentalToSave];

  localStorage.setItem("bookmarkedItems", JSON.stringify(updatedSavedItems));
};

    const [drawerOpen, setDrawerOpen] = useState(false);
    const isLoggedIn = false;

  return (
    <>
     <div className={Styles.Featured}>
      <h2 className={Styles.FText}>Popular Rentals</h2>
      <div className='px-6'>
        <div
          className={`${Styles.scrollWrap} flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 pt-6`}
        >
          {popularItems.length > 0 ? (
            popularItems.map((item) => (
              <RentalCard
                key={item.id}
                item={item}
                isBookmarked={bookmarkedIds.includes(item.id)}
                onBookmarkToggle={handleBookmarkToggle}
                isHottest={item.bookings === maxBookings}
              />
            ))
          ) : (
            <p className={Styles.errText}>No popular rentals this week 😞.</p>
          )}
        </div>
      </div>
    </div>
    <LoginDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
   
  );
};
