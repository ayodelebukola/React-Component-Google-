import Buttom from "./Buttom.js";
import "../styles/footer.css"

const Footer = () => {
    return (
        <div className="whole-footer">
            <div className="top-section">
            <p className="country">Nigeria</p>
            </div>

            <div className="buttom-section">
                <div className="start">
                <Buttom others={"About"}/>
                <Buttom others={"Advertising"}/>
                <Buttom others={"Business"}/>
                <Buttom others={"How Search Works"}/>
                </div>

                <p className="middle">Carbon neutral since 2007</p>

                <div className="end">
                    <Buttom others={"Privacy"}/>
                    <Buttom others={"Terms"}/>
                    <Buttom others={"Settings"}/>
                </div>
            </div>
        </div>
    )
}

export default Footer;