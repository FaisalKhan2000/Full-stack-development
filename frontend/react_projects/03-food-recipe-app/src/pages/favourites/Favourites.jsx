import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import ReceipeItem from "../../components/ReceipeItem";

function Favourites() {
  const { favouritesList } = useContext(GlobalContext);

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favouritesList && favouritesList.length > 0 ? (
        favouritesList.map((item, index) => (
          <ReceipeItem key={index} item={item} />
        ))
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Nothing is added in favorites.
          </p>
        </div>
      )}
    </div>
  );
}

export default Favourites;
