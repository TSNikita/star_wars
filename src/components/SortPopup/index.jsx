import React, { useEffect, useRef, useState } from "react";

import "./styles.scss";

const SortPopup = ({ items, activeCategory, onClickSort }) => {
  const [visiblePopup, setVisiblePopup] = useState(false);

  const sortRef = useRef();
  const activeName = items.find((name) => name === activeCategory);

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };

  const handleOutsideClick = (e) => {
    if (!e.path.includes(sortRef.current)) {
      setVisiblePopup(false);
    }
  };

  const onSelectItem = (name) => {
    if (onClickSort) {
      onClickSort(name);
    }
    setVisiblePopup(false);
  };

  useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
  }, []);

  return (
    <div className="sort">
      <div className="sort_name">
        <span>color eye</span>
      </div>

      <div ref={sortRef} className="sort_wrapper--block">
        <div className="sort_block--name" onClick={toggleVisiblePopup}>
          <span>{activeName}</span>
          <svg
            className={visiblePopup ? "rotated" : ""}
            width="6"
            height="3"
            viewBox="0 0 6 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              y1="-0.5"
              x2="3.60561"
              y2="-0.5"
              transform="matrix(0.832056 0.554692 -0.35113 0.936327 0 1)"
              stroke="black"
            />
            <line
              y1="-0.5"
              x2="3.60569"
              y2="-0.5"
              transform="matrix(0.832001 -0.554775 0.351197 0.936302 3 3)"
              stroke="black"
            />
          </svg>
        </div>

        {visiblePopup && (
          <div className="sort_block--popup">
            <ul>
              {items &&
                items.map((name, index) => (
                  <li
                    onClick={() => onSelectItem(name)}
                    className={activeCategory === name ? "activeSort" : ""}
                    key={`${index}`}
                  >
                    {name}
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SortPopup;
