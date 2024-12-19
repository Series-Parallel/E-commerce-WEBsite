export default function FooterAd() {
  return (
    <>
      <div className="absolute pl-[30px] w-[358x] space-y-[10px] md:space-y-0 h-[293px] flex-col z-10 md:ml-[150px] md:mt-[100px] md:mb-[-70px] md:w-[1240px] md:h-[180px] bg-black rounded-[20px] flex md:flex-row md:justify-between md:pt-[30px] md:pb-[30px] md:pr-[40px] md:pl-[40px]">
        <div className=" text-white text-[32px] md:text-[40px] font-bold uppercase">
          Stay upto date <br className="md:hidden"/>about
          <br className="hidden md:block" /> our latest offers
        </div>
        <div className="flex flex-col space-y-[20px]">
          <div className="w-[311px] h-[42px] md:w-[349px] md:h-[48px] bg-white rounded-[62px]"></div>
          <button className="w-[311px] h-[42px] md:w-[349px] md:h-[48px]  bg-white rounded-[62px]">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </>
  );
}
