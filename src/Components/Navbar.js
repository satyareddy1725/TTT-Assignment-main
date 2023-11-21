import logo from "../assets/logo.png"
// import bg from "../assets/bg.jpg"
const Navbar = ()=>{
    return(
        <div>
        <div className="nav-bar">
            <div className="nav">
                <img src={logo} className="logo" />
                <p className="stories">STORIES</p>
            </div>
            <button className="course-button">Courses</button>
        </div>
        <div>
        {/* <img src={bg} className="bg" /> */}
        </div>
        </div>
    )
}

export default Navbar;