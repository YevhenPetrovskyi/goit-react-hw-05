import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './Navigation.module.css';

const getNavLinkClassNames = ({ isActive }) =>
  clsx(css.link, {
    [css.active]: isActive,
  });

const Navigation = () => {
  return (
    <header className={css.header}>
      <div className="container">
        <nav className={css.nav}>
          <NavLink className={getNavLinkClassNames} to="/">
            Home
          </NavLink>
          <NavLink className={getNavLinkClassNames} to="/movies">
            Movies
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
