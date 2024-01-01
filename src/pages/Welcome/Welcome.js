import { useNavigate } from "react-router-dom";
import "./Welcome.css";
export default function Welcome() {
const navigate=useNavigate()

  return (
    <div className="welcome flex flex-column justify-center items-start p-10 lg:p-20">
      <div className="bg-[rgba(0,0,0,0.3)] w-[250px] text-start rounded-2xl p-5 ">
        <h1 className="text-2xl  text-slate-100 font-semibold text-center mb-2 block sm:hidden">
          Finding Recipes
        </h1>
        <h1 className="text-3xl text-slate-100 font-semibold hidden sm:block">
          
          Cooking a Delicious Food
        </h1>
        <p className="text-slate-300 text-sm mb-2 hidden sm:block">
          Discover more than 1200 food in your hands and cooking it easily.
        </p>

        <div>
          <button
            onClick={() => navigate("/register")}
            type="button"
            className="text-white w-full bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Signup
          </button>
        </div>
        <div>
          <button
            onClick={() => navigate("/login")}
            type="button"
            className="text-white w-full border-2 border-red-300  hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
