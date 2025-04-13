import React, { useState, useEffect } from "react";

const Header = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <header>
      <div className="HeaderContents">
        <div className="time">
          {time.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
          <div className="logoset">
            <img
              className="headerContent"
              src="images/splashscreen/Cellular Connection.png"
              alt=""
            />
            <img
              className="headerContent two"
              src="images/splashscreen/Wifi.png"
              alt=""
            />
            <img
              className="headerContent three"
              src="images/splashscreen/Battery.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
