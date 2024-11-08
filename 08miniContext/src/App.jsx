import UserContextProvider from "./context/UserContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";
{
  /* <div class="flex items-center justify-center h-screen bg-gray-400">
<h1 class="text-4xl  text-white font-mono">Chai aur React</h1>
</div> */
}

function App() {
  return (
    <UserContextProvider>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-500">
        <h1 className="text-4xl m-7">Chai aur React</h1>
        <Login />
        <Profile />{" "}
      </div>
    </UserContextProvider>
  );
}

export default App;
