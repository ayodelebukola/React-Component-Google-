import Buttom from "./Buttom.js";

const Footer = () => {
    return (
        <div>
            <p>Nigeria</p>

            <div>
                <div>
                <Buttom others={"About"}/>
                <Buttom others={"Advertising"}/>
                <Buttom others={"Business"}/>
                <Buttom others={"How Search Works"}/>
                </div>

                <p>Carbon neutral since 2007</p>

                <div>
                    <Buttom others={"Privacy"}/>
                    <Buttom others={"Terms"}/>
                    <Buttom others={"Settings"}/>
                </div>
            </div>
        </div>
    )
}

export default Footer;