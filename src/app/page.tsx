import Image from "next/image";
import HeroSection from "./components/hero/hero";
import FeaturedProducts from "./components/sections/featuredProduct";
import Categories from "./components/sections/category";
import Bestsellers from "./components/sections/bestSellers";
import Footer from "./components/sections/footer";
import Gallery from "./components/sections/gallery";

export default function Home() {
  return (
    <main className="">
   <HeroSection/>
      <FeaturedProducts/>
      {/* <Categories/> */}
      <Bestsellers/>

      <Gallery/>
      <Footer />
    </main>
  );
}
