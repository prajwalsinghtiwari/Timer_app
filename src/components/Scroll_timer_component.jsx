import { useEffect } from "react";

function ScrollListenerComponent() {
  useEffect(() => {
    const handleScroll = () => {
      // Handle scroll event here
      console.log("User scrolled!");
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup: Remove the event listener when unmounting
    };
  }, []);

 return (
    <div>
      <h2>
        scoll down to see the effect
      </h2>
    </div>
 )
}

export default ScrollListenerComponent;
