import navBarBgImage from "../assets/images/Navbar/backgroundImage.png";
import logo from "../assets/images/Navbar/logo.png";
import aboutHomePagebgImage from "../assets/images/HomePage/About/1.png";
import successImageLoginPage from "../assets/images/HomePage/Login/1.png";
import dashboardProductsImage1 from "../assets/images/HomePage/Login/Dashboard/Products/Images/1.png";
import dashboardProductsImage2 from "../assets/images/HomePage/Login/Dashboard/Products/Images/2.png";
import dashboardProductsImage3 from "../assets/images/HomePage/Login/Dashboard/Products/Images/3.png";
import dashboardProductsImage4 from "../assets/images/HomePage/Login/Dashboard/Products/Images/4.png";
import dashboardProductsImage5 from "../assets/images/HomePage/Login/Dashboard/Products/Images/5.png";
import profileSectionImage from "../assets/images/HomePage/SignUp/1.png";
import paymentSuccessImage from "../assets/images/HomePage/SignUp/2.png";

const images = {
  navbar: {
    bgImage: navBarBgImage,
    logo: logo,
  },
  homePage: {
    about: aboutHomePagebgImage,
    login: {
      successImage: successImageLoginPage,
      dashboard: {
        products: {
          images: [
            {
              image: dashboardProductsImage1,
            },
            {
              image: dashboardProductsImage2,
            },
            {
              image: dashboardProductsImage3,
            },
            {
              image: dashboardProductsImage4,
            },
            {
              image: dashboardProductsImage5,
            },
          ],
        },
      },
    },
    signUp: {
      profileSectionImage: profileSectionImage,
      paymentSuccessImage: paymentSuccessImage,
    }
  },
};

export default images;
