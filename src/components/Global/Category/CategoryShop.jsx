import PageTitle from "../../Shared/PageTitle";
import CategoryList from "./CategoryList";
import SearchFilter from "./SearchFilter";

function CategoryShop() {
  return (
    <div className="mt-20 mb-20 px-40">
      <PageTitle
        mainText="Shop by"
        highlightText="Category"
        color="#424242"
        secondaryColor="red-500"
      />

      <div className="mt-10 grid grid-cols-5 gap-2 justify-center cursor-pointer">
        <div className="flex bg-[#F5F5F5] flex-col gap-6 justify-center items-center py-10 font-bold text-center">
          <img src="chicken.png" alt="chicken" />
          <h2>Chicken</h2>
        </div>
        <div className="flex bg-[#F5F5F5] flex-col gap-6 justify-center items-center py-10 font-bold text-center">
          <img src="beef.png" alt="beef" />
          <h2>Beef</h2>
        </div>
        <div className="flex bg-[#F5F5F5] flex-col gap-6 justify-center items-center py-10 font-bold text-center">
          <img src="sheep.png" alt="sheep" />
          <h2>Goat</h2>
        </div>
        <div className="flex bg-[#F5F5F5] flex-col gap-6 justify-center items-center py-10 font-bold text-center">
          <img src="coldcuts.png" alt="coldcuts" />
          <h2>Cold Cuts</h2>
        </div>
        <div className="flex bg-[#F5F5F5] flex-col gap-6 justify-center items-center py-10 font-bold text-center">
          <img src="eggs.png" alt="eggs" />
          <h2>Eggs</h2>
        </div>
      </div>

      <div className="mt-10 bg-[#F5F5F5] flex justify-between p-20">
        <SearchFilter />
        <CategoryList />
      </div>
    </div>
  );
}

export default CategoryShop;
