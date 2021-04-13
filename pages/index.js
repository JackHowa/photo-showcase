import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Landing.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Destination Wedding and Elopement Photographer || Brigette Burgman</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <header className={styles.header}>
        <a
          href="/"
          rel="noopener noreferrer"
        >
          <img src="/brand-transparent.png" alt="Vercel Logo" className={styles.logo} />
        </a>
      </header>

      <main className={styles.main}>
        <Image
          src={"/page-arizona-elopement-1.jpeg"}
          layout="fill"
          objectFit="cover"
          alt="Couple poses with a backdrop of Arizona nature reserve for elopement"
        />
      </main>
      <footer className={styles.footer}>
        <form className={styles.form} action="" method="POST">
          <label htmlFor="email">
            Email
            <input className={styles.input} id="email" type="email" autoComplete="email" required />
          </label>
          <label htmlFor="name">
            Name
            <input className={styles.input} id="name" type="name" autoComplete="name" required />
          </label>
          <label htmlFor="date">
            Projected date
            <input className={styles.input} id="date" type="date" />
          </label>
          <label htmlFor="note">
            Anything Else?
            <input className={styles.input} id="note" type="text" />
          </label>
          <button type="submit">Plan Your Dreams</button>
        </form>
      </footer>
    </div>
  )
}
