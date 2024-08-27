import {NavLink} from "react-router-dom"
import Styles from "../styles/Nav.module.css"

const Nav = () => {
  return (
    <div className={Styles.navbar_container}>
      <NavLink className={Styles.navbar} to={"/"}><span>00</span>Home</NavLink>
      <NavLink className={Styles.navbar} to={"Destination"}><span>01</span>Destination</NavLink>
      <NavLink className={Styles.navbar} to={"Crew"}><span>02</span>Crew</NavLink>
      <NavLink className={Styles.navbar} to={"Technology"}><span>04</span>Technology</NavLink>

    </div>
  )
}

export default Nav
