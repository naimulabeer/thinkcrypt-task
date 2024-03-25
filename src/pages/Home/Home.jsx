import Header from "../../components/Global/Header";
import About from "../../components/Global/Home/About";
import Blog from "../../components/Global/Home/Blog";
import Product from "../../components/Global/Home/Product";
import Services from "../../components/Global/Home/Services";
import Testimonial from "../../components/Global/Home/Testimonial";
import FeaturedProduct from "../../components/Shared/FeaturedProduct";

function Home() {
  return (
    <div>
      <Header />
      <Services />
      <About />
      <Product />
      <FeaturedProduct />
      <Blog />
      <Testimonial />
    </div>
  );
}

export default Home;
