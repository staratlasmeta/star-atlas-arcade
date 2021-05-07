import Head from 'next/head';
import Image from 'next/image';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Star Atlas Arcade - Home</title>
        <meta name="description" content="The Star Atlas Arcade" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon-small.png" />
        <link rel="icon" type="image/png" sizes="128x128" href="/icon-large.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the Star Atlas Arcade!
        </h1>

        <p className={styles.description}>
          This is just a placeholder homepage - we are planning having the official UI in some time early this week.
        </p>

        <section>
          <Image src="/banner.png" width={1920 / 2} height={720 / 2} />
        </section>
      </main>
    </div>
  );
}
