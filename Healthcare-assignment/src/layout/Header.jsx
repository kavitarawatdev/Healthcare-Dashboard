import "../styles/header.css"
import { MdOutlineAdd } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { RiSearchLine } from "react-icons/ri";

export const Header = () => {
  return (
    <>
      <header className="header header-section">
        {/* left part of header */}
        <div className="header-left-section flex flex-centered">
          <div className="app-logo flex flex-centered">
            <h3>Health<span>care.</span></h3>
          </div>
        </div>

        {/* header miidle part */}
        <div className="header-middle-section flex flex-centered">
          <form className="form flex flex-centered">
            <div className="search-bar-container flex align-center">
              <div className="search-icon flex flex-centered icon-medium">
                <RiSearchLine />
              </div>
              <input type="text" name="user-input" id="user-input" placeholder="Search" aria-label="Search" />
            </div>
            <div className="notification-icon flex flex-centered icon-medium">
              <IoNotifications />
            </div>
          </form>
        </div>

        {/* header right part */}
        <div className="header-right-section flex justify-end align-center">
          <div className="user-profile flex flex-col align-center">
            <picture className="avatar">
              <source src="/Images/avatar.jpg" type="jpg" />
              <source src="/Images/avatar.webp" type="webp" />
              <img src="/Images/avatar.webp" alt="user-avatar" />
            </picture>
            <p className="user-name">John</p>
          </div>
          <button className="add-btn icon-medium flex flex-centered">
            <MdOutlineAdd />
          </button>
        </div>

      </header>
    </>
  );
};