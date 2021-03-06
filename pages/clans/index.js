import styles  from '../../styles/Clans.module.css'
import  Link  from 'next/link'
import Layout from '../../components/Layout/Layout';
import { Card } from '@material-ui/core';

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return{
        props:{ clans : data }
    }
}

const Clans = ({clans}) => {
    return(
        <div>
            <h1>Clans</h1>
            {clans.map(clan =>(
                <>
                
                <Link href={'/clans/' + clan.id} key={clan.id}>
                    <a className={styles.single}>
                    <h3>{clan.name}</h3>
                    </a>
                </Link>
                </>
            ))}
        </div>
    )
}

export default Clans;

Clans.getLayout = function getLayout(page) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }