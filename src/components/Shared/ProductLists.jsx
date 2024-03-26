import PageTitle from "./PageTitle";
import ProductList from "./ProductList";

function ProductLists() {
  return (
    <>
      <div className="mt-20 mb-20 lg:px-40">
        <div>
          <PageTitle
            mainText="Best"
            highlightText="Sellers"
            color="#424242"
            secondaryColor="red-500"
          />
        </div>

        <ProductList />
      </div>

      <div className="mt-20 mb-20 lg:px-40">
        <div>
          <PageTitle
            mainText="Boneless"
            highlightText="Cuts"
            color="#424242"
            secondaryColor="red-500"
          />
        </div>

        <ProductList />
      </div>

      <div className="mt-20 mb-20 lg:px-40">
        <div>
          <PageTitle
            mainText="Frozen"
            highlightText="Items"
            color="#424242"
            secondaryColor="red-500"
          />
        </div>

        <ProductList />
      </div>
    </>
  );
}

export default ProductLists;
