import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Products } from "../types";
import { useDispatch } from "react-redux";
import { addItem } from "../store/cart-slice";
import stars from "../assets/StarRating.png";

type ErrorType = Error | null;

export default function Product() {
  const { id } = useParams(); // Get product ID from the URL
  const [product, setProduct] = useState<Products | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<ErrorType>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          "https://dummyjson.com/c/4436-0789-4f78-8734"
        );
       
        const foundProduct = response.data.find(
          (item: Products) => item.id === parseInt(id || "")
        );
        setProduct(foundProduct || null); // Set the found product or null if not found
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error("Something went wrong")
        );
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    if (product) {
      dispatch(addItem(product)); 
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {product ? (
        <>
          <div className="h-px w-[300px] md:w-[1440px] bg-gray-300 my-4 mx-auto mt-[30px]"></div>
          <div className=" md:ml-[200px] flex flex-col md:flex-row md:space-x-[20px] md:mb-0 mb-[30px]">
            <img className="ml-[8px] md:ml-0 w-[358px] h-[290px] md:w-[444px] md:h-[530px]" src={product.image} alt={product.details} />
            <div className="flex  md:ml-0 items-center flex-col space-y-[20px]">
              <div className="w-[267px] text-wrap md:text-nowrap h-[56px] md:w-[600px] md:h-[48px] text-[24px] md:text-[40px] text-black font-black uppercase">
                {product.details}
              </div>
              <img className="w-[120px] h-[25px]" src={stars} alt="Stars" />
              <div className="text-[24px] md:text-[32px] font-medium">
                ${product.price}
              </div>
              <button
                className=" md:ml-0 md:mb-0 mb-[20px] w-[200px] md:w-[400px] h-[52px] bg-black text-[16px] text-white rounded-[62px]"
                onClick={addToCartHandler}
              >
                Add to cart
              </button>
            </div>
          </div>
        </>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
}
