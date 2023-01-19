import classes from "./Topbar.module.css";

const Topbar = () => {
  return (
    <div className={classes.topbar}>
      <div className={classes["company-contact"]}>
        <p className={classes.phone}>+91 9657 3351 22 &nbsp;&nbsp;|</p>
        <p className={classes.email}>&nbsp;&nbsp;deepak@momentumrobotics.in</p>
      </div>
      <div className={classes["company-timings"]}>
        Dynamic Logistics Trade Park, Bhosari Pune 411015 @Mon - Fri: 9:00 AM -
        6:00 PM
      </div>
    </div>
  );
};

export default Topbar;