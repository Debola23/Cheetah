import Styles from './RentalCard.module.css';

export const RentalCard = ({ item, isBookmarked, onBookmarkToggle, isHottest }) => {
  
  return (
    <div className="min-w-[260px] snap-start bg-white rounded-xl shadow-md overflow-hidden relative">
      {isHottest && (
        <span className="absolute top-[26px] right-[64px] bg-amber-600 text-white text-xs px-2 py-1 rounded z-10">
          Hottest
        </span>
      )}

      <span className="absolute top-2 right-2 z-10">
        <div className={Styles.bookmarkCheckbox}>
          <input
            type="checkbox"
            id={`bookmark-toggle-${item.id}`}
            className={Styles.bookmarkCheckboxInput}
            checked={isBookmarked}
            onChange={() => onBookmarkToggle(item.id)}
          />
          <label htmlFor={`bookmark-toggle-${item.id}`} className={Styles.bookmarkCheckboxLabel}>
            <svg className={Styles.bookmarkCheckboxIcon} viewBox="0 0 24 24">
              <path
                className={Styles.bookmarkCheckboxIconBack}
                d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z">
              </path>
              <path
                className={Styles.bookmarkCheckboxIconCheck}
                d="M8 11l3 3 5-5">
              </path>
            </svg>
          </label>
        </div>
      </span>

      <img
        src={item.image}
        alt={item.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{item.title}</h3>
        <p className="text-sm text-gray-500 capitalize">{item.category}</p>
      </div>
    </div>
  );
};
