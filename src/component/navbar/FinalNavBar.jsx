import { useEffect, useState } from "react";
import NavBarResponsive from "./NavBarResponsive";
import NavBar from "./NavBar";



function FinalNavBar() {
    const [width, setWidth] = useState(0);


    console.log(width);


    useEffect(() => {
        // Update the width state when the window is resized
        const handleResize = () => {
          setWidth(window.innerWidth);
        };
    
        // Add an event listener for the "resize" event
        window.addEventListener("resize", handleResize);
    
        // // Clean up the event listener when the component unmounts
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      });


    return (
        <div>
            {width <= 507 ? <NavBarResponsive /> : <NavBar />}
        </div>
    );
}


export default FinalNavBar;