/*
    Author: David Melnyk
    This page serves as the about page for the website.
*/

import Head from 'next/head';
import Footer from "./components/footer";

import styles from '../styles/Home.module.css'
import { makeStyles } from '@material-ui/core/styles';
import NavigationBar from './components/navigationBar'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CardMedia from '@material-ui/core/CardMedia';

// JSS used for some of the styles.
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
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className='aboutPage'>
      <NavigationBar/>
      <div className={styles.container}>
      <Head>
          <title>DEVELOPMENT - Dan Segin Golf Tournament Website</title>
          <link rel="icon" href="ddsm-logo.png" />
          <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
          <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></script>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script>
     </Head>
      <div className="container-fluid">
        <div className="row">
          <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src="aboutPagePic3.png" alt="First slide"/>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="aboutPagePic2.png" alt="Second slide"/>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="aboutPagePic1.png" alt="Third slide"/>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div className='row'>
          <br/>
          <br/>
        </div>

        <div className='row '>
          <div className="col">
            <h2 className="aboutPageContentHeader"> Signs of a Heart Attack </h2>
              <hr></hr>
              <div className="aboutPageContentText">
                <ul>
                  <li className='customAboutPageList'>Chest discomfort, pressure, squeezing, fullness or pain, burning or heaviness</li>
                  <li  className='customAboutPageList'>Sweating</li>
                  <li  className='customAboutPageList'>Upper body discomfort. Neck, jaw, shoulder, arms or back</li>
                  <li  className='customAboutPageList'>Nausea</li>
                  <li  className='customAboutPageList'>Shortness of breath</li>
                  <li  className='customAboutPageList'>Light-headedness</li>
                </ul>
              </div>
          </div>
          <div className="col">
            <CardMedia
              className={classes.media}
              image="pictures/examplePicture1.png"
              title="Paella dish"
            /></div>
        </div>
        <div className='row'>
          <div className="col">
            <CardMedia
                className={classes.media}
                image="pictures/cheque.png"
                title="Paella dish"
              />
          </div>
          <div className="col">
          <h2 className="aboutPageContentHeader"> The Tournament </h2>
            <hr></hr>
            <p className="aboutPageContentText"> The tournament we host today originated from the Segin family wanting to do something to honour the memory of their Father, Brother, Grandfather and Great Grandfather, Dan D Segin, who passed from a Heart attack due to complications from a broken hip in 2013. The event started with modest expectations, and snowballed into an event that exceeded expectations each and every year. In 2019, the Segin family eclipsed the $115,000 mark in funds raised. To date, the family has raised $122,000 for the Heart & Stroke foundation for the Southwest Ontario Region serving Halton, Hamilton, Niagara, Brantford regions. It is the single biggest independant fundraiser for this chapter. </p>

          </div>
        </div>

        <div className='row'>
          
          <div className="col">
            <h2 className="aboutPageContentHeader"> Dan D. Segin </h2>
            <hr></hr>
            <p className="aboutPageContentText">  We celebrate this event in honour of our Father, Brother, Grandfather and Great Grandfather who passed in 2013 from a Heart attack due to complications from hip surgey. Dan D. Segin was a career millitary man who served in Korea at the age of 16, and later joined the P.P.C.L.I and served with the United Nations Peace Keeping Core in Cypress in 1974-1974 and finally the Canadian Airborne regiment up until his retirement in 1984 . His 35 years of service to our country is what we are so proud of. And we wish to thank all supporters of our annual event in celebrating his memory.</p>   
          </div>
          <div className="col">
          <CardMedia
              className={classes.media}
              image="pictures/milli.png"
              title="Paella dish"
            />
          </div>
        </div>
        <div className='row'>
        <br/>
        <br/>
      </div>
      </div>      
       
      </div>
            {/* Footer */}
            <Footer />
    </div>
  )
}
