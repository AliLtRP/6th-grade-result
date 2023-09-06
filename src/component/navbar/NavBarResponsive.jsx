import { useState } from "react";
import menu from './menu.svg';
import Menu from "./dropdown/Menu";


let style = {
    display: "none",
};



function NavBarResponsive() {
    const [isOpen, setIsOpen] = useState(false);


    let toggle = () => {
        if (isOpen) {
            style = {
                display: "none",
            };
        } else {
            style = {
                display: "flex",
                gap: "10px",
                position: "absolute",
                width: "100%",
            };
        }

        setIsOpen(!isOpen);
    };


    // add style for burger menu
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>

            <div className="burger-menu">
                <div className="" style={{ display: 'flex', height: 'inherit', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                    <button className="btn btn btn-light" type="button" style={{ backgroundColor: 'white' }} onClick={toggle}>
                        <img src={menu} alt="navbar icon" style={{ width: '25px', height: '25px' }} />
                    </button>
                </div>


                {isOpen && (
                    <>
                        <Menu style={style} />
                    </>
                )}

            </div>
        </div>
    );
}


export default NavBarResponsive;