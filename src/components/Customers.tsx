import { useState, useEffect } from "react";
import ReviewCard from "./ReviewCard";
import REVIEWS from "../REVIEWS";
import Back from "../assets/back-arrow.svg";
import Next from "../assets/next-arrow.svg";

export default function Customers() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3); // Default to 3 cards for laptops

  // Adjust the number of visible cards based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(1); // Show 1 card for mobile
      } else {
        setCardsToShow(3); // Show 3 cards for larger screens
      }
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize); // Listen for window resize

    return () => window.removeEventListener("resize", handleResize); // Cleanup listener
  }, []);

  const handleNext = () => {
    if (currentIndex < REVIEWS.length - cardsToShow) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <>
      <div className="flex flex-row justify-between">
        <div className="ml-[10px] w-[286px] md:h-[58px] h-[72px] md:w-[654px] text-[32px] md:text-[48px] font-black uppercase mt-[30px] md:mt-[80px] md:ml-[150px] md:overflow-y-hidden">
          our happy customers
        </div>
        <button className="md:ml-[500px] md:mt-[100px]" onClick={handleBack}>
          <img src={Back} alt="Back" />
        </button>
        <button className="mr-[100px] md:mt-[100px]" onClick={handleNext}>
          <img src={Next} alt="Next" />
        </button>
      </div>

      <div className="relative overflow-hidden w-full mt-8">
        <div
          className="flex mt-[50px] ml-[-90px] md:ml-0 md:mt-0 mb-[50px] md:mb-0 space-x-[10px] transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
          }}
        >
          {REVIEWS.map((item, index) => (
            <div
              key={index}
              className={`pl-[100px] pr-[100px] flex-row transition-opacity duration-300 ${
                index < currentIndex || index >= currentIndex + cardsToShow
                  ? "opacity-50 blur-sm"
                  : "opacity-100 blur-0"
              }`}
            >
              <ReviewCard name={item.name} review={item.review} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
