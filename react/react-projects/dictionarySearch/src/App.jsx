import Header from "./components/Header";
import Search from "./components/Search";

import MainComponent from "./components/Main";

import { QueryProvider } from "./context/queryContext";

function App() {
  return (
    <QueryProvider>
      <div className="flex flex-col justify-center max-w-[737px] px-4">
        <Header />
        <Search />
        <MainComponent />
      </div>
    </QueryProvider>
  );
}

export default App;
