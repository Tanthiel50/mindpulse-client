// Layout.js
import MyNavbar from './NavBar';
import Footer from './Footer';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return (
    <>
      <MyNavbar />
        <main>{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes =  {
    children: PropTypes.node.isRequired
};

export default Layout;