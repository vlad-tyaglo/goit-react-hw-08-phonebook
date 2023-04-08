import { Box } from "@mui/material";
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';


const HomePage = () => {
  return (<Box component="section" sx={{ textAlign: "center", paddingTop: "100px", }}>
    <ContactPhoneIcon fontSize='large' color='primary' sx={{ marginBottom: '16px' }} />
    <h1>
     PHONE BOOK
    </h1>
    <p>Here you can store your contacts</p>
  </Box>)
};

export default HomePage;