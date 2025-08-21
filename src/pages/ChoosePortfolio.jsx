import { useNavigate } from "react-router-dom";

const ChoosePortfolio = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Choose Your Portfolio</h1>
      <div className="flex flex-col space-y-4 w-full max-w-md md:max-w-lg md:flex-row md:space-y-0 md:space-x-6">
        <button
          onClick={() => navigate("/cool-portfolio")}
          className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-4 px-6 w-full rounded-lg transition"
        >
          My Portfolio If I Was Cool
        </button>
        <button
          onClick={() => navigate("/homepage")}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-6 w-full rounded-lg transition"
        >
          My Current Portfolio
        </button>
      </div>
    </div>
  );
};

export default ChoosePortfolio;
