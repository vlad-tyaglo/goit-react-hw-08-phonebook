import { Toolbar } from '@mui/material';
import { Link, StyledButton } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <Toolbar disableGutters sx={{ display: 'flex', gap: '16px' }}>
      <StyledButton sx={{ color: 'white', display: 'block' }}>
        <Link to="/register" >
        REGISTRATION
        </Link>
      </StyledButton>
      <StyledButton sx={{ color: 'white', display: 'block' }}>
        <Link to="/login">
          LOG IN
        </Link>
      </StyledButton>
    </Toolbar>
  );
};

export default AuthNav;