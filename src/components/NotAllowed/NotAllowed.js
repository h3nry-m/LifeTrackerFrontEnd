import { Link } from "react-router-dom"
import "./NotAllowed.css"

export default function NotAllowed() {
  return (
    <div className="NotAllowed">
      <h2>You must be logged in to see this</h2>
      <span>
        Login <Link to="/login">here</Link>
      </span>
    </div>
  )
}
