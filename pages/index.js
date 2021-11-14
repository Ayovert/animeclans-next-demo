import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
        <title>Home Page</title>
        <meta name="keywords" content="features"/>
      </Head>
    <div>
  
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
      <Link href="/food">
        <a className={styles.btn}>See Ninja Listing</a>
      </Link>
    </div>

    </>
    
  )

}

Home.getLayout = function getLayout(home) {
  return (
    <Layout home>
      {home}
    </Layout>
  )
}

