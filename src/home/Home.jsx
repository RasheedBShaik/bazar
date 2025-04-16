import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSwipeable } from "react-swipeable";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const updateCarousel = (newIndex) => {
    const items = document.querySelectorAll(".carousel-item");
    items[currentIndex]?.classList.remove("active");
    items[newIndex]?.classList.add("active");
    setCurrentIndex(newIndex);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      const items = document.querySelectorAll(".carousel-item");
      const nextIndex = (currentIndex + 1) % items.length;
      updateCarousel(nextIndex);
    },
    onSwipedRight: () => {
      const items = document.querySelectorAll(".carousel-item");
      const prevIndex = (currentIndex - 1 + items.length) % items.length;
      updateCarousel(prevIndex);
    },
    trackMouse: true,
  });

  useEffect(() => {
    const items = document.querySelectorAll(".carousel-item");
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % items.length;
      updateCarousel(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  });

  return (
    <div className="container3">
      <div className="homeHead">
        <div className="headhome">Home</div>
      </div>

      {/* Carousel */}
      <div {...handlers} className="Homecarousel">
        <div className="carousel-item active">
          <div className="HomecarouselContent">
            <div className="carouselOffer">Special Offer</div>
            <div className="carouselDiscount">Discount 25%</div>
            <div className="carouselOrder">Order Now</div>
          </div>
          <img
            className="HomecarouselImage"
            src="images/homepage/books/carouselBook2.png"
            alt=""
          />
        </div>

        <div className="carousel-item">
          <div className="HomecarouselContent">
            <div className="carouselOffer">Super Offer</div>
            <div className="carouselDiscount">Discount 50%</div>
            <div className="carouselOrder">Order Now</div>
          </div>
          <img
            className="HomecarouselImage"
            src="images/homepage/books/carouselBook3.png"
            alt=""
          />
        </div>

        <div className="carousel-item">
          <div className="HomecarouselContent">
            <div className="carouselOffer">Bumper Offer</div>
            <div className="carouselDiscount">Discount 75%</div>
            <div className="carouselOrder">Order Now</div>
          </div>
          <img
            className="HomecarouselImage"
            src="images/homepage/books/carouselBook4.png"
            alt=""
          />
        </div>
      </div>

      {/* Dots */}
      <div className="dots-wrapper">
        {[0, 1, 2].map((dot, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}>
            ●
          </span>
        ))}
      </div>

      {/* Home Body */}
      <div className="HomeBody">
        <div className="HomeHeading">
          <div>Top of Week</div>
          <Link to="/topofweek" className="HomeHeadingSeeAll">
            See all
          </Link>
        </div>

        <div className="AllBooks">
          <div className="book">
            <img src="images/homepage/books/carouselBook2.png" alt="" />
            <div className="BookName">Book of book</div>
            <div className="BookPrice">$20</div>
          </div>

          <div className="book">
            <img src="images/homepage/books/carouselBook3.png" alt="" />
            <div className="BookName">Book of book</div>
            <div className="BookPrice">$20</div>
          </div>

          <div className="book">
            <img src="images/homepage/books/carouselBook4.png" alt="" />
            <div className="BookName">Book of book</div>
            <div className="BookPrice">$20</div>
          </div>
        </div>

        <div className="HomeHeading">
          <div>Best Vendors</div>
          <Link to="/vendors" className="HomeHeadingSeeAll">
            See all
          </Link>
        </div>

        <div className="AllVendors">
          <div className="vendor">
            <img src="images/homepage/vendors/vendor1.png" alt="" />
          </div>
          <div className="vendor">
            <img src="images/homepage/vendors/vendor2.png" alt="" />
          </div>
          <div className="vendor">
            <img src="images/homepage/vendors/vendor3.png" alt="" />
          </div>
        </div>

        <div className="HomeHeading">
          <div>Authors</div>
          <Link to="/authors" className="HomeHeadingSeeAll">
            See all
          </Link>
        </div>

        <div className="AllAuthors">
          <div className="author">
            <img src="images/homepage/authors/author1.png" alt="" />
            <div className="AuthorName">John Freeman</div>
            <div className="authorSpeciality">Writer</div>
          </div>

          <div className="author">
            <img src="images/homepage/authors/author2.png" alt="" />
            <div className="AuthorName">Tess Gunty</div>
            <div className="authorSpeciality">Novelist</div>
          </div>

          <div className="author">
            <img src="images/homepage/authors/author3.png" alt="" />
            <div className="AuthorName">Richard Perston</div>
            <div className="authorSpeciality">Writer</div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bottomBar">
        <Link to="/home" className="bottomBarItem">
          <div className="bottomBarItemHome">
            <img src="images/homepage/bottombar/Home-Fill2.png" alt="Home" />
            <div style={{ color: "#54408C" }}>Home</div>
          </div>
        </Link>

        <Link to="/category" className="bottomBarItem">
          <div className="bottombarItemCategory">
            <img src="images/homepage/bottombar/Menu-Fill.png" alt="Category" />
            <div style={{ color: "#A6A6A6" }}>Category</div>
          </div>
        </Link>

        <Link to="/cart" className="bottomBarItem">
          <div className="bottombarItemCart">
            <img src="images/homepage/bottombar/Cart-Fill.png" alt="Cart" />
            <div style={{ color: "#A6A6A6" }}>Cart</div>
          </div>
        </Link>

        <Link to="/profile" className="bottomBarItem">
          <div className="bottombarItemProfile">
            <img
              src="images/homepage/bottombar/Profile-Fill.png"
              alt="Profile"
            />
            <div style={{ color: "#A6A6A6" }}>Profile</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
