import styles from './Footer.module.css'
import Link from "next/link";
import { FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton, TelegramIcon, TelegramShareButton, LinkedinShareButton,LinkedinIcon  } from 'next-share';
const Footer = () => {
    return (
      <>
    
      <footer>
      <div className={styles.footerContent}>
        <h3>Anime Clans</h3>
        <ul className={styles.socials}>
    <li>
      <div className={styles.shareButton}>
      <FacebookShareButton
        url={'http://localhost:8888'} disabled= "disabled" >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
        </div>
        </li>
    <li>
    <div className={styles.shareButton}>
    <TwitterShareButton
        url={'http://localhost:8888'} disabled= "disabled" >

        <TwitterIcon size={32} round />
      </TwitterShareButton>
        </div>
      </li>
    <li>
    <div className={styles.shareButton}>
    <LinkedinShareButton
        url={'http://localhost:8888'} disabled= "disabled" >
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
        </div>
      </li>
 </ul>
 <div className={styles.footerBottom}>
     
    <p>copyright &copy;2021 <a href="#">AnimeClans</a>  </p>
    <div className={styles.footerMenu}>
 <ul className={styles.footerMenu}>
    <li><a href="">Home</a></li>
    <li><a href="">About</a></li>
    <li><a href="">Contact</a></li>
    <li><a href="">Blog</a></li>
 </ul>
</div>
      </div>
      </div>
      </footer>
      
      
      </>
    );
  }
   
  export default Footer;