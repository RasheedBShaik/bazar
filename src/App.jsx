// https://www.figma.com/design/I7MRr4k2cnSlIHNJcJh50R/Bazar---Books-Mobile-App--Community-?node-id=0-1&p=f&t=FIMmtbAAb35yICMr-0
import "./App.css";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import SplashScreen from "./SplashScreen/SplashScreen";
import OnBoardingOne from "./OnBoarding/OnBoardingOne";
import OnBoardingTwo from "./OnBoarding/OnBoardingTwo";
import OnBoardingThree from "./OnBoarding/OnBoardingThree";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
import Congrats from "./SignUp/Congrats";
import ForgetPass from "./SignIn/ForgetPass";
import ChangePass from "./SignIn/ChangePass";
import PasswordChangedCongrats from "./SignIn/PasswordChangedCongrats";
import Home from "./home/Home";
import Vendors from "./home/Vendors";
import Authors from "./home/Authors";
import Profile from "./profile/Profile";
import Cart from "./cart/Cart";
import Category from "./category/Category";
import TopOfWeek from "./home/TopOfWeek";

const MainContent = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const slides = [
    <OnBoardingOne key="1" navigate={navigate} />,
    <OnBoardingTwo key="2" navigate={navigate} />,
    <OnBoardingThree key="3" navigate={navigate} />,
  ];

  useEffect(() => {
    const splashTimer = setTimeout(() => setShowSplash(false), 2000);
    return () => clearTimeout(splashTimer);
  }, []);

  useEffect(() => {
    if (!showSplash) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  });

  return <div>{showSplash ? <SplashScreen /> : slides[currentSlide]}</div>;
};
function App() {
  return (
    <Router basename="bazar">
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signupcongrats" element={<Congrats />} />
        <Route path="forgetpass" element={<ForgetPass />} />
        <Route path="changepassword" element={<ChangePass />} />
        <Route
          path="passwordchangedcongrats"
          element={<PasswordChangedCongrats />}
        />
        <Route path="home" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="cart" element={<Cart />} />
        <Route path="category" element={<Category />} />
        <Route path="vendors" element={<Vendors />} />
        <Route path="authors" element={<Authors />} />
        <Route path="topofweek" element={<TopOfWeek />} />
      </Routes>
    </Router>
  );
}
<script>location.replace("/bazar")</script>;

export default App;
