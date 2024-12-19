import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/index";
import { closeHeader } from "../store/header-slice";

export default function HeaderAd() {
  const dispatch = useDispatch();
  const isVisible = useSelector((state: RootState) => state.header.isVisible);

  if (!isVisible) return null;

  return (
    <>
      <div
        className="w-screen h-auto bg-black text-white flex flex-col items-center space-y-2 
        md:h-[38px] md:flex-row md:justify-between md:items-center md:space-y-0 md:space-x-8
        px-4 md:px-[50px]"
      >
        <p className="text-center md:pl-[550px] text-sm md:text-base">
          Sign up and get 20% off your first order.{" "}
          <span className="underline cursor-pointer">Sign Up Now</span>
        </p>

        <button
          className="border-2 w-[30px] h-[30px] flex justify-center items-center text-sm rounded-full
          md:w-[20px] md:h-[20px] md:text-xs"
          onClick={() => dispatch(closeHeader())}
        >
          X
        </button>
      </div>
    </>
  );
}
