import hero from "../../assets/hero.jpg";
import "./About.css";
import { Link } from "react-router-dom";
import sleep from "../../assets/sleep.jpg";
import nutrition from "../../assets/nutrition.jpg";

export default function About() {
  return (
    <div className="About" id="About">
      <div className="content">
        <div className="exercise">
          <Link to="/exercise">
            <img src={hero} alt="hero" />
          </Link>
          <p>Exercise</p>
        </div>
        <div className="nutrition">
          <Link to="/nutrition">
            <img src={nutrition} alt="hero" />
          </Link>
          <p>Nutrition</p>
        </div>

        <div className="sleep">
          <Link to="sleep">
            <img src={sleep} alt="hero" />
          </Link>
          <p>Sleep</p>
          {/* <div className="summary">
          <div className="text">
            <ol>
              <li>Exercise controls weight</li>
              <li>Exercise combats health conditions and diseases</li>  
              <li>Exercise improves mood</li>
              <li>Exercise boosts energy</li>
              <li>Exercise promotes better sleep</li>
            </ol> */}
          {/* <p>
              Exercise controls weight.
            </p>
            <p>
              Exercise combats health conditions and diseases.
            </p>
            <p>Exercise improves mood.</p> */}
          {/* </div> */}
          {/* <div className="media">
            <Link to="/exercise">
              <img src={hero} alt="hero" />
            </Link>
          </div> */}

          {/* <div className="test">
          <p>test</p>
          <p>test2</p>
        </div> */}
        </div>
      </div>
    </div>
  );
}
