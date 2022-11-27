import "./Main.css";
import picture from "../../assets/picture.png";
const Main = () => {
  return (
    <div className="container">
      <div className="sloganAndPicture">
        <div className="sloganDescriptionAndButton">
          <div className="slogan">We Are A Winning Digital Agency</div>
          <div className="description">
            Lorem ipsum is a pseudo-Latin text used in web design, typography,
            layout, and printing in place of English to emphasise design
            elements over content
          </div>

          <button className="getStartedButton">
            <svg
              width="180px"
              height="60px"
              viewBox="0 0 180 60"
              class="border"
            >
              <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
              <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
            </svg>
            Get started
          </button>
        </div>
        <img src={picture} className="picture" alt="main" />
      </div>
      <div className="rssBlock">
        <p className="stripe">
          <span className="firstItem">
            * DESIGN * DEVELOP * PUBLISH * DESIGN * DEVELOP * PUBLISH * DESIGN *
            DEVELOP * PUBLISH * DESIGN * DEVELOP * PUBLISH
          </span>
          <span className="secondItem">
            * DESIGN * DEVELOP * PUBLISH * DESIGN * DEVELOP * PUBLISH * DESIGN *
            DEVELOP * PUBLISH * DESIGN * DEVELOP * PUBLISH
          </span>
        </p>
      </div>
    </div>
  );
};

export default Main;
