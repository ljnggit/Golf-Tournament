/*
    Author: David Melnyk
    This page serves as the landing page for the website.
*/
import 'bootstrap/dist/css/bootstrap.min.css';

import Head from "next/head";
import styles from "../styles/Home.module.css";
import { makeStyles } from "@material-ui/core/styles";
import NavigationBar from "./components/navigationBar";
import Footer from "./components/footer";
import Link from 'next/link'


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


{/* The index page serves as the landing page, on this page there is a header which is called the jumbotron, and then multiple sub-cards beneath that which serve to occupy the action items
beneath the jumbotron.*/}
export default function Home() {
  const classes = useStyles();

  return (
    <div>
      <Head>
          <title>DEVELOPMENT - Dan Segin Golf Tournament Website</title>
          <link rel="icon" href="ddsm-logo.png" />
          <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
          <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></script>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script>
     </Head>
      <NavigationBar />
       {/* The jumbotron is an image which is defined in globals.css */}
      <div className="container-fluid">


        <div className="row">
          <div className="jumbotron">
            <h2 className={styles.title}>9TH ANNUAL Southwest Ontario Heart & Stroke</h2>        
            <div className={styles.logoHeader}>
              <br></br>
              <img
                src="ddsm-logo.png"
                width="200"
                height="100"/>
            </div>
            

            <div className="row">
              <div className="col-md-12 text-center">
                <p className="animate-charcter"> Dan D Segin Memorial Golf for Heart Tournament</p>
              </div>
            </div>
            <div>
              <div className="content">
                <div className="customBtn-registration">
                <a href="/registration" className="customBtn btn--registration">Register</a>
                </div>
              </div>
            </div>
          </div>   
        </div>

        <div className='row'></div>
        <div className="row justify-content-md-center">
          <div className="col"></div>
          <div className="col-md-auto">
            {/* The individual card components responsible for the bottom half of the landing page. */}
            <div className={styles.grid}>
              <Link href="/donate">
                <a href="https://nextjs.org/learn" className={styles.card}>
                <br></br>
                  <img
                    src="icons/support_heart_and_stroke.png"
                    alt="Girl in a jacket"
                    width="80"
                    height="60"
                  />
                  <h3>Support Heart and Stroke &rarr;</h3>
                  <p>
                    Make a donation today!
                  </p>
                  <p>(Click Here)</p>
                  <br></br>
                </a>
              </Link>
              <Link href="/auction">
                <a href="https://github.com/vercel/next.js/tree/master/examples"className={styles.card} >
                  <img
                    src="icons/virtual_silent_auction.png"
                    alt="Girl in a jacket"
                    width="70"
                    height="50"
                  />
                  <h3>Virtual Silent Auction &rarr;</h3>
                  <p>
                    Virtual Silent Auction with a chance to win sport memoriabilia
                    such as [Examples] from our partners (Company Hosting Auction)
                  </p>
                </a>
              </Link>
              <Link href="/registration">
                <a href="https://github.com/vercel/next.js/tree/master/examples" className={styles.card}>
                  <img
                    src="icons/scheduled_tee_times.png"
                    alt="Girl in a jacket"
                    width="70"
                    height="50"/>
                  <h3>Scheduled Tee Times &rarr;</h3>
                  <p>
                    To keep you safe, tee off is in groups of up to 4 players every 15
                    minutes. Tee times selected during registration.
                  </p>
                </a>
              </Link>
              <Link href="/store">
                <a href="https://github.com/vercel/next.js/tree/master/examples" className={styles.card}>
                  <img
                    src="icons/raffle.png"
                    alt="Girl in a jacket"
                    width="70"
                    height="50"
                  />
                  <h3>Raffle Prizes Day &rarr;</h3>
                  <p>
                    Buy raffle tickets on our Web Store or the day of the tournament!
                    Prizes include: Prize 1, Prize 2 etc.
                  </p>
                </a>
              </Link>
              <Link href="/registration">
                <a href="https://github.com/vercel/next.js/tree/master/examples" className={styles.card}>
                  <img
                    src="icons/dinner_or_lunch.png"
                    alt="Girl in a jacket"
                    width="70"
                    height="50"/>
                  <h3>Dinner or Lunch Included &rarr;</h3>
                  <p>
                    Every Registrant gets to choose between a BBQ Lunch or Dinner!
                    Options include Beef, Chicken, or a Vegetarian option.
                  </p>
                </a>
              </Link>
              <Link href="/sponsors">
                <a href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" className={styles.card}>
                  <img
                    src="icons/corporate_sponsorships.png"
                    alt="Girl in a jacket"
                    width="70"
                    height="50"/>
                  <h3>Corporate Sponsorships &rarr;</h3>
                  <p>
                    Does your business want to give back? Business donation can pay
                    for Hole Sponsorship, Website Footer space and a feature on our
                    Sponsor Page!
                  </p>
                </a>
              </Link>

            </div> {/*end grid */}
              </div>
            <div className="col"></div>
        </div>
      </div>   
      {/* Footer */}
      <Footer />
    </div>
  );
}
