import Head from 'next/head'
import styles from '../styles/Home.module.css'

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('http://localhost:1337/articles');
  const articles = await res.json()

  if (!articles) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      articles,
    },
  }
}

export default function Home({ articles }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <div className={styles.grid}>
          {articles.map((article) => (
            <a key={article.id} href="" className={styles.card}>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
            </a>
          ))}
        </div>
          

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
