import "./App.css";
import Header from "./components/Header/Header";
import FilterBar from "./components/FilterBar/FilterBar";
import JobsList from "./components/JobsList/JobsList";

function App() {
  return (
    <div className={"App"}>
      <Header />
      <div style={{}}>
        <FilterBar />
        <JobsList />
      </div>
    </div>
  );
}

export default App;
