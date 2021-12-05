import { useEffect } from "react";
import Layout from "../components/Layout/Layout";
function Food() {

  useEffect(() =>{
    fetch('/.netlify/functions/supermario')
    .then(res => res.json())
    .then(data => console.log(data))
  }, [])
    return <div>Food</div>
  }
  
  export default Food;

  Food.getLayout = function getLayout(page) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }