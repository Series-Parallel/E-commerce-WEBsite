import { useDispatch, useSelector } from "react-redux";
import FrameIcon from "../assets/Frame.svg";
import LoginIcon from "../assets/LoginIcon.svg";
import { toggleSidebar } from "../store/sideBar-slice";
import Menu from "../assets/icons/MenuIcon.svg";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();

  const homeHandler = () => {
    navigate("/");
  };

  const dispatch = useDispatch();

  const isSidebarOpen = useSelector(
    (state: any) => state.sidebar.isSidebarVisible
  );

  const toggleSidebarHandler = () => {
    dispatch(toggleSidebar());
  };

  const cartQuantity = useSelector((state: any) => state.cart.totalQuantity);

  return (
    <>
      <div className=" flex md:flex  md:flex-row md:justify-between md:mt-[20px] md:mb-[20px] md:ml-[150px] md:mr-[150px]">
        {/* only for mobile view! */}
        <div
          className={`fixed pt-[20px] text-white top-0 left-0 w-full h-screen bg-gray-900/50 z-50 transition-all duration-300 
                 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="md:hidden flex flex-col pl-[20px] text-[22px] pt-[5px]">
            <div className="pt-[10px] ">Shop</div>
            <div className="pt-[10px] ">On Sale</div>
            <div className="pt-[10px] ">New Arrivals</div>
            <div className="pt-[10px] ">Brands</div>
          </div>
        </div>
        <button
          className="md:hidden absolute top-4 left-4 z-50"
          onClick={toggleSidebarHandler}
        >
          <img
            src={Menu}
            alt="Menu Icon"
            className="w-[20px] h-[20px] mt-[-5px]"
          />
        </button>

        <div
          className="font-black pl-[40px] text-[22px] pt-[5px] cursor-pointer"
          onClick={homeHandler}
        >
          SHOP.CO
        </div>

        <div className="hidden md:flex md:flex-row md:space-x-4 md:justify-between">
          <div className="md:pt-[10px] md:ml-[20px] ">Shop</div>
          <div className="md:pt-[10px] ">On Sale</div>
          <div className="md:pt-[10px] ">New Arrivals</div>
          <div className="md:pt-[10px] ">Brands</div>
          <div className="md:w-[577px] md:h-[48px] md:border md:rounded-[62px] md:bg-[#F0F0F0] "></div>
        </div>

        <button className="flex flex-row mt-[10px] ">
          <img className="ml-[80px] mr-[10px]" src={FrameIcon}></img>
          {cartQuantity > 0 && (
            <div className=" w-[30px] h-[30px] rounded-[60px] bg-black text-white ">
              {cartQuantity}
            </div>
          )}
        </button>
        <button>
          <img className="ml-[10px]" src={LoginIcon}></img>
        </button>
      </div>
    </>
  );
}
