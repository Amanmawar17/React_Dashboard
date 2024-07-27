import Dashboard from "./components/Dashboard";
import { DataProvider } from "./context/DataProvider";

function App() {
  return (
    <>
      <DataProvider>
        <Dashboard />
      </DataProvider>
    </>
  );
}

export default App;
