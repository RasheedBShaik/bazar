import React from "react";
import { useNavigate } from "react-router-dom";
const TopOfWeek = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/home");
  };
  return (
    <div className="container3">
      <div className="homeHead">
        <div>
          <img
            style={{ cursor: "pointer" }}
            src="images/signin/back.png"
            alt="Back"
            onClick={goBack}
          />
        </div>
        <div className="headhome">Top of Week</div>
        <div>
          <img src="images/homepage/notification.png" alt="" />
        </div>
      </div>
      <div className="pageHead">
        <div className="pageName">Check out this week's top books.</div>
        <div className="pageHeading">Books</div>
      </div>

      <div className="AllBooksTopofWeek">
        <div className="bookInTopOfWeek">
          <img src="images/homepage/books/carouselBook2.png" alt="" />
          <div className="BookName">Book of book</div>
          <div className="BookPrice">$20</div>
        </div>
        <div className="bookInTopOfWeek">
          <img src="images/homepage/books/carouselBook3.png" alt="" />
          <div className="BookName">Book of book</div>
          <div className="BookPrice">$20</div>
        </div>

        <div className="bookInTopOfWeek">
          <img src="images/homepage/books/carouselBook4.png" alt="" />
          <div className="BookName">Book of book</div>
          <div className="BookPrice">$20</div>
        </div>

        <div className="bookInTopOfWeek">
          <img src="images/homepage/books/carouselBook2.png" alt="" />
          <div className="BookName">Book of book</div>
          <div className="BookPrice">$20</div>
        </div>

        <div className="bookInTopOfWeek">
          <img src="images/homepage/books/carouselBook2.png" alt="" />
          <div className="BookName">Book of book</div>
          <div className="BookPrice">$20</div>
        </div>

        <div className="bookInTopOfWeek">
          <img src="images/homepage/books/carouselBook2.png" alt="" />
          <div className="BookName">Book of book</div>
          <div className="BookPrice">$20</div>
        </div>
      </div>
    </div>
  );
};

export default TopOfWeek;
