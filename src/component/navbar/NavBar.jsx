import { Link, Outlet } from "react-router-dom";
import './style.css';



function NavBar() {


    return (
        <header style={{ width: '100%', height: '100px', display: 'flex', justifyContent: 'center' }}>

            <nav>
                
                <div>
                    <p className="logo">
                        <a href="/" className="anker" >FastResultAI</a>
                    </p>
                </div>

                <ul className="ul-list">
                    <li className="li-list">
                        <Link to='/user/auth' className="nav-link">Login</Link>
                    </li>

                    <li className="li-list">
                        <Link to='/about' className="nav-link">About</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </header>
    );
}


export default NavBar;