import Categories from "../Component/Categories";
import HeroSection from "../Component/HeroSection";
import MainNav from "../Component/MainNav";
import SubNav from "../Component/SubNav";
import ProductsGrid from "../Component/ProductsGrid"
import ProductsGridTwo from "../Component/ProductsGridTwo"
import BestSellers from "../Component/BestSellers";
import Ad from "../Component/Ad";
import AllCat from "../Component/AllCat";
import RecentlyAdded from "../Component/RecentlyAdded";
import LogoBrands from "../Component/LogoBrands";
import FirstFooter from "../Component/FirsFooter";
import MainFooter from "../Component/MainFooter";
import LastFooter from "../Component/LastFooter";
export default function Home() {
  return (
    <>
      <section>
        <SubNav />
        <MainNav />
        <HeroSection />
        <Categories />
        <ProductsGrid />
        <ProductsGridTwo />
        <BestSellers />
        <Ad />
        <AllCat />
        <RecentlyAdded />
        <LogoBrands />
        <FirstFooter />
        <MainFooter />
        <LastFooter/>
      </section>
    </>
  );
}
