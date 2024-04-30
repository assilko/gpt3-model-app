import "./brand.css";
import { google, atlassian, shopify, slack, dropbox } from "./imports";

const Brand = () => {
  return (
    <div className="gpt_brand section_padding">
      <div>
        <img src={google} alt="google-logo" />
      </div>
      <div>
        <img src={atlassian} alt="atlassian-logo" />
      </div>
      <div>
        <img src={shopify} alt="shopify-logo" />
      </div>
      <div>
        <img src={slack} alt="slack-logo" />
      </div>
      <div>
        <img src={dropbox} alt="dropbox-logo" />
      </div>
    </div>
  );
};

export default Brand;
