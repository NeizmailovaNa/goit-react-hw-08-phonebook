import { NavLink } from '../AuthNav/AuthNav.Styled.jsx';


export const AuthNav = () => {
  return (
    <div>
      <NavLink  to="/register">
        Register
      </NavLink>
      <NavLink to="/login">
        Log In
      </NavLink>
    </div>
  );
};
