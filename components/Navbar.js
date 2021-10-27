import Link from "next/link";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import styles from "./Navbar.module.css";
import { makeStyles } from "@material-ui/core/styles";
import Image from 'next/image'

const useStyles = makeStyles(styles);

 
const Navbar =()=>
{
    const classes = useStyles();
    return(
        <nav className ={styles.navbar}>
        <div className="logo">
          <Image src="/logo.png" width={50} height={60}/>
        </div>
      <ul className={styles.list}>
          <li className={styles.listItem} >
        <Link 
        href="/"><a>Home</a></Link>
        </li>

        <li  className={styles.listItem}>
        <Link 
       
        href="/clans/"><a>Clans</a></Link>
        </li>

        <li  className={styles.listItem}>
        <Link 
       
        href="/about"><a>About</a></Link>
        </li>

        <li className={styles.listItem}>
        <Link href="/food"><a >Ninja Listing</a>
        </Link>
        </li>
        </ul>
        
        
      </nav>
    )
}

export default Navbar;
