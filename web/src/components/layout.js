import React from "react";
import Header from "./header";

import "../styles/layout.css";
import * as styles from "./layout.module.css";
import Nav from '../components/navigation'
import Footer from '../components/footer'

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => (
  <>
    {/*<Header
      siteTitle={siteTitle}
      onHideNav={onHideNav}
      onShowNav={onShowNav}
      showNav={showNav}
    />*/}
    <Nav/>
    <div className={styles.content}>{children}</div>
   <Footer/>
  </>
);

export default Layout;
