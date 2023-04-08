import { useSelector } from "react-redux";
import { selectIsAccessDenied } from "redux/selectors";
import { Toolbar } from "@mui/material";

import GiteIcon from '@mui/icons-material/Gite';
import { Link, StyledButton } from "./Navigation.styled";

const Navigation = () => {
  const isAccessDenied = useSelector(selectIsAccessDenied);
  
  return (
    <Toolbar disableGutters sx={{ display: 'flex', gap: '16px' }}>
      <StyledButton sx={{ color: 'white', display: 'block' }}>
        <Link to="/">
          <GiteIcon fontSize="large" />
        </Link>
      </StyledButton>
      {!isAccessDenied && <StyledButton sx={{ color: 'white', display: 'block' }}>
        <Link to="/contacts">
          Contacts
        </Link>
      </StyledButton>}
    </Toolbar>
  );
};

export default Navigation;