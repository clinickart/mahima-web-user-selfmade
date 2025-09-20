import images from "../../lib/exportImages";
import { useNavigate } from "react-router-dom";
import HeaderNav from "../../components/layout/NavBar/HeaderNav";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <section className="mb-4 h-screen">
      <HeaderNav />

      <div className="max-w-7xl mx-auto px-4 py-8 flex justify-center items-center h-[calc(100vh-60px)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="text-xl font-semibold text-pink-600 uppercase mb-2">
                About Vendor
              </h4>
              <h2 className="text-3xl font-bold leading-snug mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Bibendum amet at molestie mattis.
              </h2>
              <p className="text-gray-600 mb-6">
                Rhoncus morbi et augue nec, in id ullamcorper at sit.
                Condimentum sit nunc in eros scelerisque sed. Commodo in viverra
                nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam
                sagittis, pulvinar. Fermentum scelerisque sit consectetur hac
                mi. Mollis leo eleifend ultricies purus iaculis.
              </p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => navigate("/login")}
                className="px-6 py-2 bg-[#C53958] text-white rounded-md hover:bg-[#C53958]/80"
              >
                LOGIN
              </button>
              <button
                onClick={() => navigate("/sign-up")}
                className="px-6 py-2 border border-[#C53958] text-[#C53958] rounded-md hover:bg-[#C53958]/80 hover:text-white hover:border-transparent"
              >
                SIGN UP
              </button>
            </div>
          </div>

          <div className="rounded-lg">
            <img
              src={images.homePage.about}
              alt="About Vendor illustration"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
