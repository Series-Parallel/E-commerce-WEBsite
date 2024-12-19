import SmallStar from "../assets/SmallVector.svg";
import BigStar from "../assets/BigVector.svg";
import Brands from "./Brands";
import SmallBG from "../assets/SmallBG.png";

export default function HomePage() {
  return (
    <>
      <div className="bg-custom-pattern  md:bg-cover md:bg-center md:h-screen md:flex md:flex-row md:space-x-0">
        <div className=" flex flex-col space-y-5 md:space-y-20 overflow-y-hidden overflow-x-hidden pl-[100px]">
          <p
            className="w-[315px] h:[83px] mt-[50px] ml-[-60px] text-[36px] uppercase leading-[1] font-black mb-[10px]
           md:w-[600px] md:h-[173px] md:mt-[100px] md:ml-[-30px] md:text-[64px] md:uppercase md:leading-[1] md:font-black"
          >
            Find clothes <br /> that matches
            <br /> your style
          </p>
          <p
            className="w-[358px] h-[50px] leading-[1.3] font-[350] ml-[-85px] text-[14px]
          md:w-[560px] md:h-[33px]  md:ml-[-50px] md:leading-[1.4] md:font-[350] md:text-[16px]"
          >
            Browse through our diverse range of meticulously crafted garments,
            designed <br className="hidden" />
            to bring out your individuality and cater to your sense of style.
          </p>
          <button
            className=" ml-[-90px] w-[358px] h-[52px] bg-black rounded-[62px] text-white pb-[5px]
          md:ml-[-30px] md:w-[210px] "
          >
            Show Now
          </button>
          <div className="flex flex-row space-x-2 overflow-x-hidden md:space-x-8 ml-[-80px] md:w-[596px] md:ml-[-50px]">
            <div className="flex flex-col space-y-0 ">
              <div className="font-bold text-[24px] md:text-[40px]">200+</div>
              <div className="text-[12px] md:text-[16px] font-[350]">
                International Brands
              </div>
            </div>
            <div className="border-l border-gray-300 h-30 mx-4"></div>
            <div className="flex flex-col space-y-0 ">
              <div className="font-bold text-[24px] md:text-[40px]">2000+</div>
              <div className="text-[12px] md:text-[16px] font-[350]">
                High-Quality Products
              </div>
            </div>
            <div className="border-l border-gray-300 h-30 mx-4"></div>
            <div className="flex flex-col space-y-0 ">
              <div className="font-bold text-[24px] md:text-[40px]">
                30,000+
              </div>
              <div className="text-[12px] md:text-[16px] font-[350]">
                Happy Customers
              </div>
            </div>
          </div>
          <div className="md:hidden ml-[-100px] overflow-x-hidden">
            <img className="overflow-x-hidden" src={SmallBG} />
          </div>
        </div>
        {/* end */}
        <div className="hidden md:block md:pl-[100px] md:mt-[350px]">
          <img src={SmallStar} />
        </div>
        <div className="hidden md:block md:pl-[550px] md:pt-[100px]">
          <img src={BigStar} />
        </div>
        <div className="w-[44px] h-[44px] ml-[10px] mt-[-300px] md:hidden overflow-x-hidden">
          <img src={SmallStar}></img>
        </div>
        <div className="w-[76px] h-[76px] mt-[-150px] ml-[280px] md:hidden overflow-x-hidden">
          <img src={BigStar}></img>
        </div>
      </div>
      <Brands />
    </>
  );
}
