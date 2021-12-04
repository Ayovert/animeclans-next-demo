import Link from 'next/link'
import Layout from '../../components/Layout/Layout';
import { Card, CardContent, Box, Typography, CardActions, Button, Grid, CardMedia, CardActionArea, IconButton} from '@material-ui/core';
import { Favorite, Share } from '@material-ui/icons'
import Image from 'next/image';
import styles from './index.module.css';
 
export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { clans: data }
  }
}

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);
const classes = {
  root: {
    flexGrow: 1
  },
  paper: {
    padding: 30,
    textAlign: "center",
    color: "#777"
  }
};



export default function Products( {clans} ){
  let clanx= clans.slice(0, 3);

  
  return (
    <>
    
    
      <h1 style={{fontFamily : "'Estonia', cursive", fontSize: '4rem', top: 15, left: 30}}>Products</h1>
      <div className={styles.trending}>
      <Button variant="contained" style={{ top: 15, left: 10}}>Trending</Button>
      <Grid container columns={{ xs: 2, sm: 4, md: 12 }}>
      {clanx.map(clan => (
      
      <>
       

       
  
    <Grid item xs={12} sm={6} md={4}
    style={classes.paper}>
    <Card sx={{minWidth : 200}} style={{width: 300}} key={clan.id} >
    <CardActionArea>
        <CardMedia
          component="img"
          width= "150"
          image="/back1.jpeg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Anime Hoodie
          </Typography>
          <Typography variant="body2" color="text.secondary">
            #6000
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Favorite />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
      </Card>
    </Grid>
  

        </>
      ))}
      </Grid>
    
    </div>

<>


<Button variant="contained">Categories</Button>
<Grid container columns={{ xs: 2, sm: 4, md: 12 }}>
{clanx.map(clan => (
  <>
 

 

<Grid item xs={12} sm={6} md={4} 
style={classes.paper}>
<Card sx={{minWidth : 200}} key={clan.id}  style={{width: 300}}>
<CardActionArea>
  <CardMedia
    component="img"
    width= "150"
    image="/back1.jpeg"
    alt="green iguana"
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
      Anime Hoodie
    </Typography>
    <Typography variant="body2" color="text.secondary">
      #6000
    </Typography>
  </CardContent>
</CardActionArea>
<CardActions disableSpacing>
  <IconButton aria-label="add to favorites">
    <Favorite />
  </IconButton>
  <IconButton aria-label="share">
    <Share />
  </IconButton>
</CardActions>
</Card>
</Grid>


  </>
))}
</Grid>

</>
</>



    
  )
}

//export default Products;

Products.getLayout = function getLayout(product) {
  return (
    <Layout product>
      {product}
    </Layout>
  )
}

