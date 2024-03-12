// Layout.js
import MyNavbar from './NavBar';
import Footer from './Footer';
import PropTypes from 'prop-types';
import { UserProvider, useUserContext } from "../../../context/UserProvider";

const Layout = ({ children }) => {
  const { user, logout } = useUserContext();

  return (
    <>
      <MyNavbar />
        <main>{children}</main>
        <Footer isLoggedIn={!!user} handleLogout={logout} />
    </>
  );
};

Layout.propTypes =  {
    children: PropTypes.node.isRequired
};

export default Layout;