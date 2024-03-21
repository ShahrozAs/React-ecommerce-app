import React, { useState } from "react";
import "./SelectDrop.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ClickAwayListener } from '@mui/base/ClickAwayListener';


const SelectDrop = () => {
  const [isOpenSelect, setIsOpenSelect] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedText, setSelectedText] = useState("All Categories");

  const openSelect = () => {
    setIsOpenSelect(!isOpenSelect);
  };

  const closeSelect = (index, value) => {
    setSelectedIndex(index);
    setSelectedText(value);
    setIsOpenSelect(false);
  };

  return (
    <ClickAwayListener onClickAway={()=>setIsOpenSelect(false)}>
    <div className="selectDrop cursor">
      <span className="openSelect" onClick={openSelect}>
        {selectedText} <ExpandMoreIcon className="arrowdown" />
      </span>

      {isOpenSelect && (
        <div className="selectDrop1">
          <div className="searchField">
            <input type="text" name="" id="" placeholder="Search here..." />
          </div>

          <ul className="searchResults">
            <li onClick={() => closeSelect(0, "All Categories")} className={`${selectedIndex === 0 ? 'active' : ''}`}>All Categories</li>
            <li onClick={() => closeSelect(1, "Milks and Dairies")} className={`${selectedIndex === 1 ? 'active' : ''}`}>Milks and Dairies</li>
            <li onClick={() => closeSelect(2, "Wines & Drinks")} className={`${selectedIndex === 2 ? 'active' : ''}`}>Wines & Drinks</li>
            <li onClick={() => closeSelect(3, "Clothing & beauty")} className={`${selectedIndex === 3 ? 'active' : ''}`}>Clothing & beauty</li>
            <li onClick={() => closeSelect(4, "Fresh Seafood")} className={`${selectedIndex === 4 ? 'active' : ''}`}>Fresh Seafood</li>
            <li onClick={() => closeSelect(5, "Pet Foods & Toy")} className={`${selectedIndex === 5 ? 'active' : ''}`}>Pet Foods & Toy</li>
            <li onClick={() => closeSelect(6, "Fast Food")} className={`${selectedIndex === 6 ? 'active' : ''}`}>Fast Food</li>
            <li onClick={() => closeSelect(7, "Baking Material")} className={`${selectedIndex === 7 ? 'active' : ''}`}>Baking Material</li>
            <li onClick={() => closeSelect(8, "Vegetable")} className={`${selectedIndex === 8 ? 'active' : ''}`}>Vegetable</li>
            <li onClick={() => closeSelect(9, "Fresh Fruits")} className={`${selectedIndex === 9 ? 'active' : ''}`}>Fresh Fruits</li>
            <li onClick={() => closeSelect(10, "Bread and Juice")} className={`${selectedIndex === 10 ? 'active' : ''}`}>Bread and Juice</li>
            <li onClick={() => closeSelect(11, "Milks and Dairies")} className={`${selectedIndex === 11 ? 'active' : ''}`}>Milks and Dairies</li>
            <li onClick={() => closeSelect(12, "Wines & Drinks")} className={`${selectedIndex === 12 ? 'active' : ''}`}>Wines & Drinks</li>
            <li onClick={() => closeSelect(13, "Clothing & beauty")} className={`${selectedIndex === 13 ? 'active' : ''}`}>Clothing & beauty</li>
            <li onClick={() => closeSelect(14, "Fresh Seafood")} className={`${selectedIndex === 14 ? 'active' : ''}`}>Fresh Seafood</li>
          </ul>
        </div>
      )}
    </div>
    </ClickAwayListener>
  );
};

export default SelectDrop;
