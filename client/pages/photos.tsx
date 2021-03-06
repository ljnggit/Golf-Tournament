/*
    Author: Connor Mckail
    This page serves as the photos page for the website.

    Page Currently uses a json array of photolinks to display in a gallery.
    Using When an image is clicked, a modal is opened and the carousel starting point becomes
    the picture clicked on. 
    Main functionality from npm packahes: react-photo-gallery and react-images
    TODO: link to database of photos
*/

import Head from "next/head";
import Footer from "./components/footer";
import React, { useState, useCallback, useEffect } from "react";
import styles from "../styles/Home.module.css";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import NavigationBar from "./components/navigationBar";
import IPhotoView from "@local/shared/view-models/photo";

import { photos } from "./components/images";
import axios from "../utils/axios";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 500,
      height: 450,
    },
    icon: {
      color: "rgba(255, 255, 255, 0.54)",
    },
  })
);

export default function Home() {
  const classes = useStyles();

  /*
    Setting up states used in the program
*/
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [images, setImages] = useState<IPhotoView[]>();
  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  /*
    Used when the 'gallery' view mode is open for pictures
*/
  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  useEffect(() => {
    let mounted = true;

    axios
      .get("/photos")
      .then((res) => {
        if (mounted) setImages(res.data);
      })
      .catch((err) => console.error(err));

    return function cleanup() {
      mounted = false;
    };
  }, []);

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
        <div>
          {images && <Gallery photos={images} onClick={openLightbox} />}
          {/*
                  The modal viewer for when an image is clicked.
            */}
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={photos.map((x) => ({
                    ...x,
                    key: x.src,
                    srcset: "source",
                    caption: "Picture",
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}
