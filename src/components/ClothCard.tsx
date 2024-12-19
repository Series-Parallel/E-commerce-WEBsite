import { useDispatch } from "react-redux";
import Stars from "../assets/StarRating.png";
import { addItem } from "../store/cart-slice";
import { Products } from "../types";

type ClothCardProps = {
  items: Products;
  className?: string;
};

export default function ClothCard({ items, className = "" }: ClothCardProps) {
  const { image, details, price } = items;
  const dispatch = useDispatch();

  const addToCartHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    dispatch(addItem(items)); // Dispatch action to add the item to the cart
  };

  return (
    <div className={`card-container ${className}`}>
      <div className="flex flex-col space-y-1 md:space-y-2 overflow-hidden">
        <div className="w-[198px] h-[200px] md:w-[296px] md:h-[300px]">
          <img
            src={image}
            alt={details}
            className="rounded-[20px] object-cover"
          />
        </div>
        <div className="text-[16px] md:text-[27px] h-[26px] mt-[-20px]">
          {details}
        </div>
        <div className="md:pt-[10px] h-[16px] w-[127px] md:h-[19px] md:w-[150px]">
          <img src={Stars} alt="Rating" />
        </div>
        <div className="h-[27px] md:h-[40px] w-[46px] md:w-[55px] text-[20px] md:text-[31px]">
          ${price}
        </div>
        <button
          className="w-[198px] h-[52px] bg-black text-[16px] text-white rounded-[62px]"
          onClick={addToCartHandler}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
