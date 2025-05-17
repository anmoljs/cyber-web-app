
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import NewSection from "./Components/NewSection";
import Category from "./Components/Category";
import Products from "./Components/Products";
import PopularProduct from "./Components/PopularProduct";
import Discount from "./Components/Discount";
import Sale from "./Components/Sale";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <NewSection/>
      <Category/>
      <Products/>
      <PopularProduct/>
      <Discount/>
      <Sale/>
      <Footer/>
      
      
    </div>
    
  );
}
