import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Landing.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsappSquare } from "@fortawesome/free-brands-svg-icons"
const DESCRIPTION = 'Adventurous destination wedding and elopement photographer based in Chicago, Illinois, with a candid and adventurous style.';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Destination Wedding and Elopement Photographer || Brigette Burgman</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:image" content="https://www.brigetteburgmanphotography.com/wp-content/uploads/2018/12/arizona-elopement-photographer-1-1024x683.jpg" />
        <meta property="og:image:width" content="1024" />
        <meta property="og:image:height" content="683" />
      </Head>
      <header className={styles.header}>
        <Image height="100" width="150" src="/brand-transparent.png" alt="Brigette photography" />
      </header>
      {/* <main className={styles.main}> */}
      {/* <Image
          src={"/page-arizona-elopement-1.jpeg"}
          layout="fill"
          objectFit="cover"
          quality={100}
          objectPosition={"right center"}
          alt="Couple poses with a backdrop of Arizona nature reserve for elopement"
        />
      </main> */}
      <footer className={styles.footer}>
        <div className={styles.itemContainer}>
          <FontAwesomeIcon icon={faWhatsappSquare} />
        </div>
        <div className={styles.itemContainer}>
          <FontAwesomeIcon icon={faWhatsappSquare} />
        </div>
        <div className={styles.itemContainer}>
          <FontAwesomeIcon icon={faWhatsappSquare} />
        </div>


      </footer>
    </div>
  )
}
