import Header from "../../components/Global/Header";
import About from "../../components/Global/Home/About";
import Product from "../../components/Global/Home/Product";
import Services from "../../components/Global/Home/Services";
import FeaturedProduct from "../../components/Shared/FeaturedProduct";

function Home() {
  return (
    <div>
      <Header />
      <Services />
      <About />
      <Product />
      <FeaturedProduct />
    </div>
  );
}

export default Home;
