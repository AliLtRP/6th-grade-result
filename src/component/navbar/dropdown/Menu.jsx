import './style.css';







function Menu({ style }) {


    return (
        <>
            <div className="dropmenu" style={style}>
                <div className="select">
                    <a className="anker" href="/">Home</a>
                    <a className="anker" href="/user/auth">Login</a>
                    <a className="anker" href="/about">About</a>
                </div>
            </div>
        </>
    )
}


export default Menu;