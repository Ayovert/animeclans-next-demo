import 'bootstrap/dist/css/bootstrap.min.css'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return (
    
      getLayout(<Component {...pageProps} /> )
  
  )
}

export default MyApp
