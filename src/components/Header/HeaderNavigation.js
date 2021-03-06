import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./HeaderNavigation.module.scss";
import AppContext from "../../context";

const HeaderNavigation = () => (
  <AppContext.Consumer>
    {context => (
      <nav>
        <ul className={styles.wrapper}>
          <li className={styles.navItem}>
            <NavLink
              exact
              activeClassName={styles.navItemLinkActive}
              onClick={() => context.setActiveType("menu")}
              className={styles.navItemLink}
              to="/"
            >
              Menu
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink
              activeClassName={styles.navItemLinkActive}
              className={styles.navItemLink}
              onClick={() => context.setActiveType("news")}
              to="/news"
            >
              News
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink
              activeClassName={styles.navItemLinkActive}
              className={styles.navItemLink}
              onClick={() => context.setActiveType("gallery")}
              to="/gallery"
            >
              Gallery
            </NavLink>
          </li>
        </ul>
      </nav>
    )}
  </AppContext.Consumer>
);

export default HeaderNavigation;
