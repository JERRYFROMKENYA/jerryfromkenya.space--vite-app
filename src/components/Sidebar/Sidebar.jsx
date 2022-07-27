import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT</span>
           <img src="" alt="about"></img>
            <p>lorem ipsum dolor sit amet considarate</p>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
        <li className="sidebarListItem">Category 1</li>
        <li className="sidebarListItem">Category 2</li>
        <li className="sidebarListItem">Category 3</li>
        <li className="sidebarListItem"> Category 4</li>
        </ul>
        </div>
        <div className="sidebarItem">
        
        <span className="sidebarTitle">Follow Jerr</span>
                <div className="sidebarSocialContainer">
    <a href="https://facebook.com"><i className="SideIcon fa-brands fa-facebook"></i></a>
    <a href="https://twitter.com/JERRYFROMKENYA"><i className="SideIcon fa-brands fa-twitter"></i></a> 
    <a href="https://instagram.com/JERRYFROMKENYA"><i className="SideIcon fa-brands fa-instagram"></i></a> 
                </div>
        </div>
    </div>
  )
}
