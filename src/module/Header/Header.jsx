import { NavLink } from 'react-router-dom';

import styles from './header.module.css';
import { items } from './items';

const getLinkClassName = ({ isActive }) => {
  return isActive ? styles.linkActive : styles.link;
};

const Header = () => {
  const elements = items.map(({ id, name, to }) => (
    <li key={id}>
      <NavLink className={getLinkClassName} to={to}>
        {name}
      </NavLink>
    </li>
  ));

  return (
    <nav className={styles.nav}>
      <div className='container'>
        <ul className={styles.header}>{elements}</ul>
      </div>
    </nav>
  );
};

export default Header;
