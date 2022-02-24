/*
  A re-usable footer used throughout the site
*/
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
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
 

export default function Home() {

  return (
    <footer className='customFooter'>
      
        <div className="row justify-content-md-center">
          <div className="col-md-auto">
          <div className="d-flex flex-column align-items-center">
          <br/>
          <h2 className="mb-4">Follow us</h2>
              <figure>
                    <a href="#"><img src="icons/gmail.png" alt="Emai" width="60" height="60"/></a>
                    <a href="#"><img src="icons/facebook.png" alt="Facebook" width="60" height="60"/></a>
                    <a href="#"><img src="icons/instagram.png" alt="Instagram" width="60" height="60"/></a>
                    <a href="#"><img src="icons/twitter.png" alt="Twitter" width="60" height="60"/></a>
                    <br/>
                                        
                </figure>
            </div>
          </div>
        </div>  
      </footer>
  )
}