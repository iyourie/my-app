import './brand.css';
import { dropbox, shopify, google, slack, atlassian } from './import'



const Brand = () => {
    return (
        <div className="gpt3__brand">
            <div>
                <img src={dropbox} alt="dropbox" />
            </div>
            <div>
                <img src={shopify} alt="shopify" />
            </div>
            <div>
                <img src={google} alt="google" />
            </div>
            <div>
                <img src={slack} alt="slack" />
            </div>
            <div>
                <img src={atlassian} alt="atlassian" />
            </div>
        </div>
    )
}

export default Brand;
