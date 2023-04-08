import Header from './Header';
import Midpage from './Midpage';
import Footer from './Footer'
import "../styles/theapp.css"


const GoogleApp = () => {
    return (
       <div className='whole-page'> 
        <Header/>
        <Midpage/>
        <Footer/>
       </div>
    )
}
export default GoogleApp;