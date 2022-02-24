/*
  Author: David Melnyk, Connor Mckail
  This navigation bar is used on most pages in the site, it is imported as a component at the top of the screen.
*/

import 'bootstrap/dist/css/bootstrap.min.css';


///////////////////////////////
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Link from "next/link";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import MenuItem from "@material-ui/core/MenuItem";
import Badge from "@material-ui/core/Badge";
import { useEffect, useState } from "react";
import axios from "../../utils/axios";
 

// JSS used in some of the styles for the framework Material-Ui
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavigationBar({
  updateIcon,
  num,
}: {
  updateIcon?: boolean;
  num?: number;
}) {
  const classes = useStyles();

  const [numItems, setNumItems] = useState(0);
  const [initial, setInitial] = useState(true);

  useEffect(() => {
    let mounted = true;
    if (updateIcon || initial) {
      axios
        .get("/cart")
        .then((res) => {
          let total = 0;
          let data = res.data;

          total = Object.keys(data).reduce(
            (acc, key) => acc + (data[key] as any[]).length,
            0
          );
          if (mounted) {
            setNumItems(total);
            setInitial(false);
          }
        })
        .catch((err) => console.error(err));
    }
    return () => {
      mounted = false;
    };
  }, [updateIcon]);

  return (
    //nav
    
    <div>
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="/"> <img
        src="ddsm-logo.png"
        alt="Girl in a jacket"
        width="100"
        height="50"/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon icon-bar"></span>
        </button>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav" >
            <li className="nav-item active ">
              <a className="nav-link " href="/registration">Registration <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/donate">Donate</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/sponsors">Sponsors</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/photos">Photos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/store">Store</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Admin</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/shoppingCart"> <Badge badgeContent={numItems} color="secondary"><ShoppingCart /></Badge></a>
            </li>
          </ul>
        </div>
      </nav>
  </div>
  

  );
}
