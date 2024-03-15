import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import ReceipeItem from "../../components/ReceipeItem";

function Home() {
  const { receipeList, loading, error } = useContext(GlobalContext);

  if (loading) return <div>Loading...Please wait!</div>;
  if (error) return <div>Some Error Occured!</div>;

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {receipeList && receipeList.length > 0 ? (
        receipeList.map((item) => <ReceipeItem key={item} item={item} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Nothing to show. Please search something
          </p>
        </div>
      )}
    </div>
  );
}

export default Home;
