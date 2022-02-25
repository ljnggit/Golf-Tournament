/*
    Author: David Melnyk
    This page serves as the shoppiung cart page for the website.
*/

import React, { useState, useEffect, FormEvent } from "react";
import Head from "next/head";
import Footer from "./components/footer";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import NavigationBar from "./components/navigationBar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import axios from "../utils/axios";
import ItemList from "./components/itemList";
import SessionUserData from "@local/shared/view-models/session";

{/* JSS Styles for some of the objects. */}
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "25ch",
  },
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Home() {
  const classes = useStyles();
  const [data, setData] = useState<SessionUserData>();

  {/* */}
  useEffect(() => {
    let mounted = true;
    reloadData(mounted);
    return function cleanup() {
      mounted = false;
    };
  }, []);

  {/* Method to reload the data from /cart using axios */}
  const reloadData = (mounted: boolean) => {
    axios
      .get("/cart")
      .then((res) => {
        if (res.data && mounted) {
          setData(res.data);
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <NavigationBar />
      <div className={styles.container}>
        <Head>
            <title>DEVELOPMENT - Dan Segin Golf Tournament Website</title>
            <link rel="icon" href="ddsm-logo.png" />
            <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script>
      </Head>
        <main className={styles.main}>
          <h3> Shopping Cart </h3>
          <hr />
          <Typography variant="h6" gutterBottom>
            Order summary
          </Typography>
          {/* Displaying the data using the ItemList component */}
          {data && (
            <ItemList data={data} allowDelete={true} reloadCart={reloadData} />
          )}
          <br />
          <Link href="/checkout">
            <Button
              variant="contained"
              color="secondary"
              disabled={
                // not disabled if any data exists
                !(
                  data &&
                  Object.keys(data).some(
                    (item) => data[item] && data[item].length > 0
                  )
                )
              }
            >
              Checkout
            </Button>
          </Link>
        </main>
      </div>
       {/* Footer */}
       <Footer />
    </div>
  );
}
