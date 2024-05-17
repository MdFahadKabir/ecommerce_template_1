import Image from "next/image";
import Banner from "./_component/Banner";
import NavBar from "@/components/shared/NavBar";
import Category from "./_component/Category";
import ExclusiveDeals from "./_component/ExclusiveDeals";
import Discover from "./_component/Discover";
import Footer from "@/components/shared/Footer";
import FlashSales from "./_component/FlashSales";
import ProductList from "@/components/flashSaleProductCard/ProductList";
import TrendyProductList from "@/components/trendyProductCard/TrendyProductList";
import DropDownNav from "@/components/shared/DropDownNav";
import LatestArrival from "./_component/LatestArrival";

export default function HomePage() {
  return (
    <main className="max-w-screen-2xl mx-auto">

      <Banner></Banner>

      <Category></Category>

      <LatestArrival></LatestArrival>

      <ExclusiveDeals></ExclusiveDeals>

      {/* <FlashSales></FlashSales> */}
      <ProductList></ProductList>

      <Discover></Discover>

      <TrendyProductList></TrendyProductList>
    </main>
  );
}
