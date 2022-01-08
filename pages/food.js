import { useContext, useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import AuthContext from "../stores/authContext";
function Food() {
const { user, authReady } = useContext(AuthContext)
const [foods, setFoods] = useState(null)
const [error, setError] = useState(null)

  useEffect(() => {
    if (authReady) {
      fetch('/.netlify/functions/food', user && {
        headers:{
          Authorization: 'Bearer ' + user.token.access_token
        }
      })
      .then(res => {
        console.log(res)
        if(!res.ok){
          throw Error('you must be logged in to view this content')
        }

        return res.json()
      })

      .then(data => {
        setFoods(data)
        setError(null)
      })
      .catch((err) => {
        setError(err.message)
        setFoods(null)
      })
    } 
  }, [user, authReady])
    return <div>
      {!authReady && <div>Loading...</div>}
      {error && (
        <div className="error">
          { error }
        </div>
      )}
      {foods && foods.map(food =>(
        <div key={food.cuisine} className="card">
          <h3>{food.cuisine}</h3>
          <h4>Prepared by {food.chef}</h4>
          <p>
            This delicacy was prepared by the ever gracious chef
          </p>
        </div>
        )

      )}

      </div>
  }
  
  export default Food;

  Food.getLayout = function getLayout(page) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }