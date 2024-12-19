import twitter from "../assets/icons/1.svg";
import facebook from "../assets/icons/2.svg";
import instagram from "../assets/icons/3.svg";
import github from "../assets/icons/4.svg";

import b1 from "../assets/badges/Badge.svg";
import b2 from "../assets/badges/Badge (1).svg";
import b3 from "../assets/badges/Badge (2).svg";
import b4 from "../assets/badges/Badge (3).svg";
import b5 from "../assets/badges/Badge (4).svg";

export default function Footer() {
  return (
    <>
      <div className="relative z-0 w-screen overflow-y-hidden h-[946px] md:h-[499px] bg-[#F0F0F0] mt-[160px] md:mt-[200px]">
        <div className="flex flex-col pl-[30px] md:flex-row justify-between pt-[150px] md:pl-[150px] md:pr-[150px]">
          <div className="flex flex-col space-y-5 ">
            <div className="text-[33px] font-black uppercase">shop.co</div>
            <div className="text-[14px] text-gray-500 ">
              We have clothes that suits your style and{" "}
              <br className="hidden md:block" />
              which your're proud to wear. From <br /> women to men.
            </div>

            <div className="flex flex-row space-x-2">
              <img src={twitter}></img>
              <img src={facebook}></img>
              <img src={instagram}></img>
              <img src={github}></img>
            </div>
          </div>

          <div className="flex flex-row space-x-[100px] mt-[20px]">
            <div className="flex flex-col space-y-5">
              <div className="text-[16px] uppercase font-medium">Company</div>
              <div className="text-[14px] text-gray-500">About</div>
              <div className="text-[14px] text-gray-500">Features</div>
              <div className="text-[14px] text-gray-500">Works</div>
              <div className="text-[14px] text-gray-500">Careers</div>
            </div>

            <div className="flex flex-col space-y-5">
              <div className="text-[16px] uppercase font-medium">Help</div>
              <div className="text-[14px] text-gray-500">Customer Suppor</div>
              <div className="text-[14px] text-gray-500">Delivery Details</div>
              <div className="text-[14px] text-gray-500">
                Terms & Conditions
              </div>
              <div className="text-[14px] text-gray-500">Privacy Policy</div>
            </div>
          </div>

          <div className=" flex flex-row md:ml-[-200px] space-x-[70px] mt-[20px]">
            <div className="flex flex-col space-y-5">
              <div className="text-[16px] uppercase font-medium">faq</div>
              <div className="text-[14px] text-gray-500">Account</div>
              <div className="text-[14px] text-gray-500">Manage Deliveries</div>
              <div className="text-[14px] text-gray-500">Orders</div>
              <div className="text-[14px] text-gray-500">Payments</div>
            </div>

            <div className="flex flex-col space-y-5">
              <div className="text-[16px] uppercase font-medium">Resources</div>
              <div className="text-[14px] text-gray-500">Free eBooks</div>
              <div className="text-[14px] text-gray-500">
                Development Tutorial
              </div>
              <div className="text-[14px] text-gray-500">How to - Blog</div>
              <div className="text-[14px] text-gray-500">YouTube Playlist</div>
            </div>
          </div>
        </div>
        <div className="h-px w-[358px] md:w-[1280px] bg-gray-300 my-4 mx-auto mt-[50px]"></div>
        <div className="flex flex-col mb-[50px] space-y-[20px] md:space-y-0 md:mb-0 overflow-x-hidden  md:flex-row justify-between md:pl-[150px] md:pr-[150px]">
          <div className="text-[12px] text-gray-500 pl-[60px] md:pl-0">
            Shop.co &copy; 2000-2003, All Rights Reserved
          </div>
          <div className="flex flex-row space-x-0 md:space-x-3 pl-[20px] md:pl-0">
            <img src={b1} />
            <img src={b2} />
            <img src={b3} />
            <img src={b4} />
            <img src={b5} />
          </div>
        </div>
      </div>
    </>
  );
}
