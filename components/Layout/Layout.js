import Footer from "../Footer"
import Navbar from "../NavBar/Navbar"
import Banner from "../Banner/Banner"
import Link from "next/link";
import styles from './Layout.module.css';
import Image from "next/image";



const Layout = ({ children, home, product }) => {
  return (
    <div className="content">
      {
        home ? (
          <>

            <Banner />
            <div className="children-content">
              {children}
            </div>
          </>
        ): 
        
        product ? (
          <>
            <Navbar />
            <div className="product-content">
              {children}
            </div>
            
          </>
        ):(
          <>
            <Navbar />
            <div className={styles.productContent}>
              {children}
            </div>
            
          </>
        )
        
        }
      {
        !home && (
          <div>
            <Link href="/">
              <a>🔙 Back to home</a>
            </Link>

          </div>
        )
      }
      <Footer />
    </div>
    
  );
}

export default Layout;
/*

<Image
                      priority
                      src="/../public/logo.png"
                      className={styles.borderCircle}
                      height={108}
                      width={108}
                      alt='image'
                    />
return <div className={styles.container}>
    <Head>
        <link rel="icon" href="/favicon.ico"/>

        <meta
        name="description"
        content="Learn how to build a personal website using Next.js"
        />
        <meta
        property="og:image"
        content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content ={siteTitle}/>
        <meta name="twitter:card" content="summary_large_image"/>
    </Head>

    <header className={styles.header}>
        {home?(
            <>
            <Image
            priority
            src="/images/profile.jpg"
            className={utilStyles.borderCircle}
            height={108}
            width={108}
            alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </>
        ):(
            <>
            <Link href="/">
            <a>
            <Image
            priority
            src="/images/profile.jpg"
            className={utilStyles.borderCircle}
            height={108}
            width={108}
            alt={name}
            />
            </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
                <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
                </Link>
            </h2>
            </>
        )}
    </header>
    <main>{children}</main>
    {
        !home && (
            <div>
                <Link href="/">
                <a>🔙 Back to home</a>
                </Link>
            </div>
        )
    }
    </div>*/