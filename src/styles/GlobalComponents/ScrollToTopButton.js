import { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import "../../layout/LayoutStyles";

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className={`scroll-to-top-button ${isVisible ? "show" : "hide"}`}>
      <FaArrowCircleUp onClick={scrollToTop} />
    </div>
  );
};
