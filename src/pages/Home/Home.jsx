import Header from "../../components/Global/Header";
import About from "../../components/Global/Home/About";
import Blog from "../../components/Global/Home/Blog";
import Newsletter from "../../components/Global/Home/Newsletter";
import Product from "../../components/Global/Home/Product";
import Services from "../../components/Global/Home/Services";
import Testimonial from "../../components/Global/Home/Testimonial";
import FeaturedProduct from "../../components/Shared/FeaturedProduct";
import Footer from "../../components/Shared/Footer";

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
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
