import { Link } from "react-router-dom";
import "../style/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  function handelClick() {
    const curr = showNav;
    setShowNav(!curr);
    console.log(showNav);
  }
  return (
    <div className="Navbar">
      <div className="logo">
        <h1>R6S Memory Game</h1>
      </div>

      {/* <button onClick={handelClick} className="drop-down">
        <FontAwesomeIcon icon={faBars} size="lg" />
      </button> */}
      {/* <div className={showNav ? "buttons-reveal" : "buttons"}>
        <Link to="/" className={"Home"}>
          <button>Home</button>
        </Link>
        { <Link to="/history" className="history">
          <button>History</button>
        </Link> }
      </div> */}
    </div>
  );
};

export default Navbar;
