import DUMMY_ITEMS2 from "../DUMMY_ITEMS2";
import ClothCard2 from "./ClothCard2";
import Casual from "../assets/Frame 61.jpg";
import formal from "../assets/Frame 62.jpg";
import party from "../assets/Frame 64.jpg";
import gym from "../assets/Frame 63.png";

import Casual2 from "../assets/clothes/part2/Frame 105.png";
import formal2 from "../assets/clothes/part2/Frame 106.png";
import party2 from "../assets/clothes/part2/Frame 107.png";
import gym2 from "../assets/clothes/part2/Frame 108.png";

export default function TopSelling() {
  return (
    <>
      <div className="w-[231px] h-[38px] text-[32px] ml-[80px] mb-[20px] md:mb-0 md:w-[346px] md:h-[58px] md:text-[48px] font-black md:ml-[630px] uppercase md:mt-[50px]">
        Top Selling
      </div>
      <div className="flex flex-row space-x-2 pl-[10px] md:pl-0 md:space-x-5 md:ml-[150px] md:mb-[20px] md:mt-[90px]">
        {DUMMY_ITEMS2.map((item, index) => (
          <ClothCard2
            key={index}
            image={item.image}
            details={item.details}
            price={item.price}
            className={`${index >= 2 ? "hidden" : "block"} md:block`}
          />
        ))}
      </div>
      <button className="w-[358px] h-[46px] md:w-[218px] md:h-[52px] border-2 border-black rounded-[62px] md:ml-[661px] mt-[20px] ml-[8px] mb-[50px] md:mt-[30px] md:mb-[50px]">
        View All
      </button>
      <div className="w-[358px] h-[975px] md:w-[1239px] md:h-[866px] bg-[#F0F0F0] rounded-[40px] ml-[8px] md:ml-[150px]">
        <div className="w-[246px] h-[72px] md:w-[687px] md:h-[58px] text-[32px] md:text-[48px] font-black uppercase ml-[70px] leading-[1] md:leading-0 md:ml-[320px] pt-[25px] md:pt-[60px] mb-[30px]">
          Browse By Dress Style
        </div>
        <div className="flex flex-col space-y-[10px] ml-[20px] md:ml-0 md:flex-row md:space-x-[40px]">
          <div className="w-[310px] h-[190px] md:w-[407px] md:h-[289px] md:ml-[50px] md:mt-[80px] md:pt-[30px]">
            <img className="hidden md:block rounded-[20px] " src={Casual} />
            <img className="rounded-[20px] md:hidden " src={Casual2} />
          </div>
          <div className="w-[310px] h-[190px] md:w-[684px] md:h-[289px] md:pt-[100px] ">
            <img className="hidden md:block rounded-[20px]" src={formal}></img>
            <img className="rounded-[20px] md:hidden " src={formal2} />
          </div>
        </div>
        <div className="block ml-[20px]  space-y-[10px] md:space-y-0 mt-[10px] md:mt-0 md:flex md:flex-row md:space-x-[40px] md:pt-[40px] md:ml-[50px]">
          <div className="w-[310px] h-[190px] md:h-[289px] md:w-[684px]">
            <img src={party} className="hidden md:block rounded-[20px]" />
            <img className="rounded-[20px] md:hidden " src={party2} />
          </div>
          <div className=" w-[310px] h-[190px] md:h-[289px] md:w-[407px]">
            <img src={gym} className="hidden md:block rounded-[20px]" />
            <img className="rounded-[20px] md:hidden " src={gym2} />
          </div>
        </div>
      </div>
    </>
  );
}
