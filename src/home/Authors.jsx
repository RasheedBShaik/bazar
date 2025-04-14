import React from "react";
import { useNavigate } from "react-router-dom";

const Authors = () => {
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
        <div className="headhome">Authors</div>
        <div>
          <img src="images/homepage/notification.png" alt="" />
        </div>
      </div>

      <div className="pageHead">
        <div className="pageName">Check the authors</div>
        <div className="pageHeading">Authors</div>
      </div>
      <div className="Allauthors">
        <div className="authorDetails">
          <img src="images/homepage/authors/author1.png" alt="" />
          <div className="nameandDesc">
            <div className="name">John Freeman</div>
            <div className="desc">
              American writer he was the editor of the{" "}
            </div>
          </div>
        </div>

        <div className="authorDetails">
          <img src="images/homepage/authors/author2.png" alt="" />
          <div className="nameandDesc">
            <div className="name">John Freeman</div>
            <div className="desc">
              American writer he was the editor of the{" "}
            </div>
          </div>
        </div>
        <div className="authorDetails">
          <img src="images/homepage/authors/author3.png" alt="" />
          <div className="nameandDesc">
            <div className="name">John Freeman</div>
            <div className="desc">
              American writer he was the editor of the{" "}
            </div>
          </div>
        </div>
        <div className="authorDetails">
          <img src="images/homepage/authors/author2.png" alt="" />
          <div className="nameandDesc">
            <div className="name">John Freeman</div>
            <div className="desc">
              American writer he was the editor of the{" "}
            </div>
          </div>
        </div>
        <div className="authorDetails">
          <img src="images/homepage/authors/author3.png" alt="" />
          <div className="nameandDesc">
            <div className="name">John Freeman</div>
            <div className="desc">
              American writer he was the editor of the{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authors;
