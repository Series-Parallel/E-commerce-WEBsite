import Arrivals from "./Arrivals";
import Customers from "./Customers";

import HomePage from "./HomePage";
import TopSelling from "./TopSelling";

export default function MainHomePage() {
  return (
    <>
      <div className="overflow-x-hidden">
        <HomePage />
        <Arrivals />
        <TopSelling />
        <Customers />
      </div>
    </>
  );
}
