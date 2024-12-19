import { useState, useEffect } from "react";
import axios from "axios";
import ClothCard from "./ClothCard";
import { useNavigate } from "react-router-dom";
import { Products } from "../types";

type ErrorType = Error | null;

export default function Arrivals() {
  const [products, setProducts] = useState<Products[]>([]);
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
        setProducts(response.data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Something went wrong"));
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const navigate = useNavigate();

  const handleCardClick = (id: number) => {
    navigate(`/product/${id}`); 
  };

  return (
    <>
      {isLoading && <p>Loading products...</p>}
      {error && <p>Error: {error.message}</p>}
      <div className="w-[231px] h-[38px] text-[32px] ml-[80px] mb-[20px] mt-[10px] font-black md:w-[403px] md:h-[58px] md:text-[48px] md:overflow-y-hidden md:ml-[620px] md:mt-[70px] md:mb-[50px] ">
        New Arrivals
      </div>
      <div className="flex flex-row space-x-2 pl-[10px] md:pl-0 md:space-x-5 md:ml-[150px] md:mb-[20px]">
        {products.map((item) => (
          <div
            key={item.id}
            onClick={() => handleCardClick(item.id)}
            className="cursor-pointer"
          >
            <ClothCard items={item} />
          </div>
        ))}
      </div>
      <button className="w-[358px] h-[46px] mt-[20px] ml-[8px] md:w-[218px] md:h-[52px] border-2 border-black rounded-[62px] md:ml-[661px] md:mt-[30px] md:mb-[20px]">
        View All
      </button>
      <div className="h-px w-[1440px] bg-gray-300 my-4 mx-auto mt-[50px]"></div>
    </>
  );
}
