import Stars from "../assets/StarRating.png";

type ClothCardProps = {
  image: string;
  details: string;
  price: number;
  className?: string;
 
};

export default function ClothCard2({
  image,
  details,
  price,
  className,
  
}: ClothCardProps) {
  return (
    <>
      <div className={`card-container ${className}`}>
        <div className="flex flex-col space-y-1 md:space-y-2 overflow-y-hidden">
          <div className="w-[198px] h-[200px] md:w-[296px] md:h-[300px]  ">
            <img src={image} className="rounded-[20px]"></img>
          </div>
          <div className="text-[16px] md:text-[27px] h-[26px] mt-[-20px]">
            {details}
          </div>
          <div className=" md:pt-[10px] h-[16px] w-[127px] md:h-[19px] md:w-[150px]">
            <img src={Stars}></img>
          </div>
          <div className="h-[27px] md:h-[40px] w-[46px] md:w-[55px] text-[20px] md:text-[31px] ">
            ${price}
          </div>
        </div>
      </div>
    </>
  );
}
