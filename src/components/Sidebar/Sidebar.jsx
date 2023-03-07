import css from "./Sidebar.module.css";
import { MdSpaceDashboard } from "react-icons/md";
import { AiFillCalendar, AiOutlineTable } from "react-icons/ai";
import { FaTasks } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className={css.container}>
      <img src="./logo.png" alt="Logo" className={css.logo} />

      <div className={css.menu}>
        <NavLink className={css.item} to="dashboard" title="Dashboard">
          <MdSpaceDashboard size={30} />
        </NavLink>

        <NavLink className={css.item} to="calender" title="Calender">
          <AiFillCalendar size={30} />
        </NavLink>

        <NavLink className={css.item} to="board" title="Trello board">
          <FaTasks size={30} />
        </NavLink>

        <NavLink className={css.item} to="users" title="Users">
          <AiOutlineTable size={30} />
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
