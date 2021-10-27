import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Navbar />
      <div className="children-content">
      { children }
      </div>
      <Footer />
    </div>
  );
}
 
export default Layout;