import  './Navbar.css';
function Navbar() {
    return (
        <nav className="navbar">

            <div className="Logo">
                LOGO
            </div>

            <div className="search-bar">
                <input type="text" placeholder="Search..." />
            </div>

            <div className="user-profile">
                <img src="path/to/profile-pic.jpg" alt="User Profile" />
                
            </div>
            
        </nav>
    );
}

export default Navbar;