import tracking from "../../assets/tracking4.jpg"
import "./Hero.css"

export default function Hero() {
  return (
    <div className="Hero">
      <div className="content">
        <div className="intro">
          {/* <h1>Welcome!</h1> */}
          <h1>Life Trace</h1>
          <p>
            Make your mark today
          </p>
        </div>

        <div className="media">
          <img src={tracking} alt="tracking" />
        </div>
      </div>
    </div>
  )
}
