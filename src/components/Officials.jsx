import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from "react-responsive-carousel";
import Vp from "../assets/vice-president.png";
import Vp2 from "../assets/vp.png";
import FinSec from "../assets/financial-secretary.png";
import AssSec from "../assets/ass-sec.png";
import Sec from "../assets/sec.png";
import Welfare from "../assets/welfare.png";
import AssFinSec from "../assets/ass-fin-sec.png";
import ChiefWhip from "../assets/chief-whip.png";
import PRO from "../assets/pro.png";
import Treasurer from "../assets/treasurer.png";
import President from "../assets/president.png";
import Auditor from "../assets/Auditor.png";

function Officials() {
  const officialsData = [
    {
      image: President,
      name: "Mr. Akintirohun Olabode",
      position: "President",
      campus: "Ipaja Campus",
    },
    {
      image: Vp,
      name: "Mr. Samuel Fadare",
      position: "Vice President",
      campus: "Baruwa Campus",
    },
    {
      image: Vp2,
      name: "Mrs. Aluko Olabisi",
      position: "Vice President",
      campus: "Lekki Campus",
    },
    {
      image: FinSec,
      name: "Mr. Michael Akindolani",
      position: "Financial Secretary",
      campus: "Ipaja Campus",
    },
    {
      image: AssFinSec,
      name: "Mr. Olorunfemi Michael",
      position: "Assitant Financial Secretary",
      campus: "Ajasa Campus",
    },
    {
      image: Sec,
      name: "Mrs Apatira .T",
      position: "Secretary",
      campus: "Baruwa Campus",
    },
    {
      image: AssSec,
      name: "Mrs. Ogunjobi Bolanle",
      position: "Assitant Secretary",
      campus: "Ajasa Campus",
    },
    {
      image: Welfare,
      name: "Mrs. Olufunso Ogunsanya",
      position: "Welfare Officer",
      campus: "Baruwa Campus",
    },
    {
      image: ChiefWhip,
      name: "Mr. Bamgbola T.A",
      position: "Chief Whip",
      campus: "Magodo Campus",
    },
    {
      image: Treasurer,
      name: "Mrs. Olajumoke Ajibola",
      position: "Treasurer",
      campus: "Ipaja Campus",
    },
    // Add other officials' data here
  ];

  return (
    <div>
      <p className="md:text-3xl text-2xl mt-4 font-bold text-center">
        Our Officials
      </p>

      <div className="w-full mx-auto">
        <Carousel
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          infiniteLoop
          autoPlay
          interval={2000} // Set the interval time in milliseconds (e.g., 2000ms = 2 seconds)
          renderThumbs={() => null} // Hide thumbnail navigation
          showArrows={true} // Hide default navigation arrows
          //showStatus={false} // Hide carousel status indicators
          // showIndicators={false} // Hide carousel indicators
          emulateTouch // Enable touch emulation for desktop
          swipeable // Enable swipe gestures
          selectedItem={1} // Start at the second item to show three items on large screens
        >
          {officialsData.map((official, index) => (
            <div key={index} className="flex justify-center items-center">
              <div className="flex flex-col justify-center items-center">
                <div className="w-[150px]">
                  <img src={official.image} alt="" />
                </div>
                <div className="-mt-4">
                  <p>{official.name}</p>
                  <p className="text-center font-bold">{official.position}</p>
                  <p>{official.campus}</p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Officials;
