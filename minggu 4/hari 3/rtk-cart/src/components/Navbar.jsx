import { useSelector } from "react-redux";
import { IoCartSharp } from "react-icons/io5";

const Navbar = () => {
  
const {amount} = useSelector ( (state) => state.cart )
  return (
    <nav >
      <div>
        <h2>Redux Toolkit - <span className=""><IoCartSharp />{ amount }</span></h2>
      </div>
    </nav>
  );
};

export default Navbar;
