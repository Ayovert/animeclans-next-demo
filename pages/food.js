import Layout from "../components/Layout/Layout";
function Food() {
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