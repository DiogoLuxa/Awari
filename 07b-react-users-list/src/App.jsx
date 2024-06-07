// components
import ListItems from "./components/list/";

// data
import users from "./data/data";

function App() {
  return (
    <div className="bg-gray-200 p-6 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">Users List</h1>
        <ListItems users={users} />
      </div>
    </div>
  );
}

export default App;
