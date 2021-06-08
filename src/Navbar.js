import {
  AppBar,
  Link,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import BrandButton from "./BrandButton";
import logo from "./logo_2.svg";
const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%",
  },
  toolbar: {
    background: "#ECECF6",
    padding: "5px 15px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  title: {
    color: "#09095B",
  },
  logo: {
    width: "35vh",
  },
});
function NavBar() {
    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();
    return (
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <div style={{ display: "flex" }}>
            <img src={logo} className={classes.logo} alt="brand"/>
          </div>
          <div style={{ display: "flex" }}>
            <ul style={{ listStyleType: "none", display: "flex" }}>
              <Typography variant="subtitle2" style={{ display: "flex" }}>
                <li style={{ padding: "5px 10px" }}>
                  <Link href="#" onClick={preventDefault}>
                    Home
                  </Link>
                </li>
                <li style={{ padding: "5px 10px" }}>
                  <Link href="#" onClick={preventDefault}>
                    Covid-19 Updates
                  </Link>
                </li>
              </Typography>
            </ul>
            <div style={{ display: "flex", padding: "10px 0" }}>
              <BrandButton color="secondary" children="Book Vaccination" />
            </div>
          </div>
        </Toolbar>
      </AppBar>
    );
}
export default NavBar;