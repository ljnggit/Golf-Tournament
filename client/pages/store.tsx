import Head from 'next/head';
import Footer from "./components/footer";
import styles from '../styles/Home.module.css'
import { makeStyles } from '@material-ui/core/styles';
import NavigationBar from './components/navigationBar'

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

export default function Home() {
  const classes = useStyles();

  
        {/* The store is unused currently and will be developed in the future. */}
  return (
    <div>
      <NavigationBar/>
      <div className={styles.container}>
        <Head>
            <title>DEVELOPMENT - Dan Segin Golf Tournament Website</title>
            <link rel="icon" href="ddsm-logo.png" />
        </Head>
        <main className={styles.main}>
          <h3> WORK IN PROGRESS*</h3>
        </main>
      </div>
       {/* Footer */}
       <Footer />
    </div>
  )
}