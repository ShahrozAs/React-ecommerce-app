import React from "react";
import "./Header.css";
import Logo from "../../assets/images/logo.svg";
import SearchIcon from '@mui/icons-material/Search';
import SelectDrop from "../selectDrop/SelectDrop";


const Header = () => {
  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-2">
              <img src={Logo} alt="" />
            </div>

            {/* Search Start HERE */}
            <div className="col-sm-5">
              <div className="headerSearch d-flex align-items-center">
                <SelectDrop/>
                
                <div className="search">
                  <input type="text" name="" id="" placeholder="Search for items..."/>
                  <SearchIcon className="searchIcon cursor"/>
                </div>
              </div>
            </div>
            {/* SEARCH END HERE */}
    
          <div className="col-sm-5">
            <SelectDrop/>
          </div>
            
          </div>


        </div>
      </header>
    </>
  );
};

export default Header;
