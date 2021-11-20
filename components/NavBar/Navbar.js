import Link from "next/link";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import styles from "./Navbar.module.css";
import Image from 'next/image'
import { useState } from "react";
import { useEffect } from 'react';



 

const Navbar =({home})=>
{

  const [scrolled,setScrolled]= useState(false);
  let navBar =styles.navbar;
const handleScroll=() => {
    const offset=window.scrollY;
    if(offset > 200 ){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  })


  const[isActive, setIsActive] = useState(false);
  let navLink = styles.navLink;
  if (home) {
    navLink = styles.navLinkHome;
  }

  const toggleClass = () =>
  {
    setIsActive(!isActive);
  }
  

    return(
      
        <nav className = {`${navBar} ${scrolled ? styles.scrolled : null} ${styles.row}`}>
        <div className={styles.logo}>
          <Image src="/logo.png" width={50} height={60} alt="Logo"/>
        </div>
        <div className={`${styles.navMenuContainer}`}>
      <ul className={`${styles.navMenu} ${isActive ? styles.active : null}`}>
          <li className={styles.navItem} >
        <Link 
        href="/"><a className={navLink} >Home</a></Link>
        </li>

        <li  className={styles.navItem}>
        <Link 
        href="/clans/"><a className={navLink}>Clans</a></Link>
        </li>

        <li  className={styles.navItem}>
        <Link 
        href="/about"><a className={navLink}>About</a></Link>
        </li>

        <li className={styles.navItem}>
        <Link 
        
        href="/food"><a className={navLink}>Ninja Listing</a>
        </Link>
        </li>

        <li className={styles.navItem}>
        <Link 
        
        href="/products/"><a className={navLink}>Card</a>
        </Link>
        </li>
        </ul>
        </div>
        <div className={`${styles.hamburger} 
        ${isActive ? styles.active : null}`} 
        onClick={toggleClass}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div> 
      </nav>



    )

    
}
export default Navbar;

/*if (typeof window === 'object') {
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navMenu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu(){
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}
}

const[hamburger ,setIsHamburger] = useState(styles.hamburger);
  const[navMenu , setIsNavMenu] = useState(styles.navMenu);

  const mobileMenu = () =>{
    if({hamburger} == styles.hamburger)
    {
      setIsHamburger(styles.hamburger.active);
    }
    else
    {
      setIsHamburger(styles.hamburger);
    }
    if({navMenu} == styles.navMenu)
    {
      setIsNavMenu(styles.navMenu.active);
    }
    else
    {
      setIsNavMenu(styles.navMenu);
    }
    
  };

   <section className={styles.homepageBanner} >
    <div className={`${styles.bannerContent} ${styles.container}`}> 
      <h2 className={styles.bannerTitle}>Test</h2>
      <div className={styles.bannerDescription}>
        Description
      </div>
      <Link href="">
      <a>
        Go to store
      </a>
      </Link>
    </div>
  </section>

  const[hamburger ,setIsHamburger] = useState(styles.hamburger);
  const[navMenu , setIsNavMenu] = useState(styles.navMenu);
*/
