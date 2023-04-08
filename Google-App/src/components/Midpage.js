import Logo from "./Logo";
import "../styles/midpage.css"
import "../styles/searchbar.css"
import "../styles/button.css"
import Language from "./Language";
import "../styles/language.css"
const Midpage = () => {
    return (
        <div className="middle-section">
            <Logo />
            <form className="searchbar">
                <input type="text" />
            </form>
            <div className="button">
                <button>Google Search</button>
                <button>I'm Feeling Lucky</button>
            </div>
            <div>
                <p className="language-link">Google offered in:
                    <Language name={'Hausa'} />
                    <Language name={'Igbo'} />
                    <Language name={'Èdè Yorùbá'}/>
                    <Language name={'Nigerian Pidgin'}/>
                </p>
            </div>

        </div>
    );
};

export default Midpage;