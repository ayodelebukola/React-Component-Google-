import Item from "./Menu";
const Header = () => {
    return (
      <div className="full-header">
        <div className="right-menu-items">
          <Item name = {'Gmail'}/> 
          <Item name={'Images'}/>
          <Item name={'Icon'}/>
          <Item name={'Photo'} />
        </div>
      </div>
    );
  };
  
  export default Header;