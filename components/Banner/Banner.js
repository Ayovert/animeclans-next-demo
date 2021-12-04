import Navbar from "../NavBar/Navbar"
import Link from "next/link";
import styles from './Banner.module.css'
import Image from "next/image";


 const Banner = () =>{
    return(
        <section className={styles.homepageBanner} >
              <div className={`${styles.bannerContent} ${styles.container}`}>
               <Navbar home/>
                <div className={styles.row}>
                <div style={{flex:1, float:'left'}}>
                <h2 className={styles.bannerTitle}>Test</h2>
                <div className={styles.bannerDescription}>
                  Description
                </div>

                </div>
                

                
                </div>
                <div>
                <Link href="/">
                  <a>
                    Go to store
                  </a>
                </Link>
                </div>
              </div>

            </section>
    )
}

export default Banner;

/*
<div style={{flex:1, float:'left'}}>
                  
                <Image
            priority
            src="/../public/logo.png"
            className={styles.borderCircle}
            height={108}
            width={108}
            alt='image'
            />
                </div>
                
*/