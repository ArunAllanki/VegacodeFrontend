import React from "react";
import "./Home.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../Images/img1.jpg";
import img2 from "../Images/img2.jpg";
import img3 from "../Images/img4.jpg";
import fb from "../Images/facebook.png";
import insta from "../Images/instagram.png";
import x from "../Images/twitter.png";
import youtube from "../Images/youtube.png";
import logo from "../Images/NewLogo.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { useEffect } from "react";

export const Home = () => {
  const navigate = useNavigate();

  const scrollToFooter = () => {
    const footerElement = document.getElementById("Footer");
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAboutUs = () => {
    const footerElement = document.getElementById("AboutUs");
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToHome = () => {
    const footerElement = document.getElementById("Home");
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const Counter = ({ target }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCount((prev) => (prev < target ? prev + 1 : target));
      }, 5); // Adjust speed by changing time

      return () => clearInterval(interval);
    }, [target]);

    return <h1>{count}+</h1>;
  };

  const images = [img1, img2, img3];
  return (
    <>
      <div className="header">
        <img className="logo" src={logo}></img>
        <nav>
          <h3
            onClick={() => {
              navigate("/Home");
              scrollToHome();
            }}
            className="in"
          >
            Home
          </h3>
          <h3 onClick={() => navigate("/inventory")}>Inventory</h3>
          <h3 onClick={() => navigate("/supply")}>Supply Requests</h3>

          <h3 onClick={() => scrollToAboutUs()}>About us</h3>
          <h3 onClick={() => scrollToFooter()}>Contact us</h3>
        </nav>
      </div>

      <div className="carousel" id="Home">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img src={src} alt={`Slide ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="info" id="AboutUs">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <p>
          Established in 2025, SEVA Foundation is an Indian development
          organization, impacting the lives of over 15 lakh children and their
          families every year. We have more than 400 projects on education,
          healthcare, livelihood, and women empowerment in over 2,000 remote
          villages and urban slums across 25 states of India.
        </p>

        <p>
          SEVA Foundation works as a catalyst in the cycle of change,
          complementing and supplementing government efforts to achieve the
          Sustainable Development Goals. We sensitize and partner with
          like-minded institutions and individuals to implement high-impact
          programmes that enable access, enhance quality and help bring long
          term behavioural change at the grassroots.
        </p>
      </div>
      <div className="ourImpact">
        <h1>OUR IMPACT</h1>
        <div className="impacts">
          <div className="impact">
            <Counter target={15} />
            <p>LAC</p>
            <p className="impact-text">
              children and their families are impacted every year
            </p>
          </div>
          <div className="impact">
            <Counter target={75} />
            <p>VILLAGES</p>
            <p className="impact-text">
              and slums are reached out to across the country
            </p>
          </div>
          <div className="impact">
            <Counter target={369} />
            <p>PROJECTS</p>
            <p className="impact-text">
              focused on education, healthcare, and women empowerment
            </p>
          </div>
          <div className="impact">
            <Counter target={19} />
            <p>STATES</p>
            <p className="impact-text">
              are reached including the remotest areas
            </p>
          </div>
        </div>
      </div>
      <footer>
        <div className="fEle" id="Footer">
          <div>
            <h4>ABOUT US</h4>
            <p>About Smile</p>
            <p>Impact</p>
            <p>Reach & Presence</p>
            <p>Smilestones</p>
            <p>Privacy Policy</p>
          </div>
          <div>
            <h4>OUR WORK</h4>
            <p>Education</p>
            <p>Health</p>
            <p>Livelihood</p>
            <p> Women Empowerment</p>
            <p> Disaster Response</p>
          </div>
          <div>
            <h4>CAMPAIGNS</h4>
            <p> Shiksha Na Ruke</p>
            <p> Health Cannot Wait</p>
            <p> She Can Fly</p>
            <p> Swabhiman</p>
            <p>Tayyari Kal Ki</p>
          </div>
          <div>
            <h4>GET INVOLVED</h4>
            <p> Individual Support</p>
            <p> Corporate Partnerships</p>
            <p>Volunteer</p>
            <p> School Partnerships</p>
            <p> Careers</p>
          </div>
          <div>
            <h4> RESOURCE CENTRE</h4>
            <p> Annual Report</p>
            <p>Newsletter</p>
            <p> Stories of Change</p>
            <p> The Smile Blog</p>
            <p> Films</p>
          </div>
        </div>
        <div className="bottom">
          <div className="address">
            <span>Seva Foundation</span>
            <span>
              161 B/4, 3rd Floor, Gulmohar House, Yusuf Sarai Community Centre
            </span>
            <span> New Delhi - 110049 Delhi, India</span>
          </div>
          <div className="connects">
            <img src={fb}></img>
            <img src={insta}></img>
            <img src={x}></img>
            <img src={youtube}></img>
          </div>
        </div>
        <div className="contacts">
          <p>Contact Number : +91 12345 67890</p>
          <p>Mail to : sevafoundation@gmail.com </p>
        </div>
      </footer>
    </>
  );
};
