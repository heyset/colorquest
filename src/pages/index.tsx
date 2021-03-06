import { Fragment, useEffect} from 'react';
import Head from 'next/head';
import * as _ from 'lodash';
import styles from '../styles/modules/Home.module.css';

import Header from '../components/Header';
import Main from '../components/Main';
import Info from '../components/Info';
import Footer from '../components/Footer';
import Modal from '../components/Modal';
import FAQ from '../components/FAQ';
import ClearConfigButton from '../components/ClearConfigButton';

import { GameProvider } from '../contexts/GameContext';

export default function Home() {

  const fixMainHeight = (e?) => {
    if (!e || e.target?.innerWidth >= 600 || e.originalTarget?.innerWidth >= 600) {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
  }

  useEffect(() => {
    fixMainHeight();

    // window.addEventListener('resize', _.throttle(fixMainHeight, 200));

    // return () => window.removeEventListener('resize', _.throttle(fixMainHeight, 200));
  }, [fixMainHeight]);

  return (
    <Fragment>
      <Head>
        <title>ColorQuest</title>
        <meta name="description" content="ColorQuest is a color guessing game for you to practice your color eye-balling skills." />
      </Head>

      <GameProvider>
        <Modal/>
      
        <main>
          <Header />
          <div className={styles.flexContainer}>
            <Main className={styles.mainSection} />
            <Info className={styles.secondarySection} />
          </div>
          <Footer style='main' />
        </main>

        <FAQ />
        <ClearConfigButton />
      </GameProvider>
      <Footer style='alt' />
    </Fragment>
  )
}
