import Menu from "./Menu";
import Icon from "./Icon";
import Photo from "./Photo";
// import Icon from "./Icon";
import "../styles/header.css";
import "../styles/photo.css"

const Header = () => {
    return (
      <div className="full-header">
        <div className="right-menu-items">
          <Menu name = {'Gmail'}/> 
          <Menu name={'Images'}/>
          <Icon/>
          <Photo/>
        </div>
      </div>
    );
  };
  
  export default Header;