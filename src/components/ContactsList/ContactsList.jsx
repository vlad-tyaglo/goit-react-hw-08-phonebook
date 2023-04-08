import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectFilteredContacts, selectIsLoading } from "redux/selectors";
import { fetchContacts } from "redux/operations";
import { Box, Container, Grid, List} from "@mui/material";

import ContactItem from "components/ContactItem/ContactItem";
import ContactsSceleton from "components/Sceleton/Sceleton";


const ContactsList = () => {
  const dispatch = useDispatch();

  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);


  const [selectedIndex, setSelectedIndex] = useState('');

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  
  const handleListItemClick = (event, id) => {
    setSelectedIndex(id);
  };
  
  
  return (
    <Container component="div">
      <Grid container columnSpacing={3}>
        <Grid item xs={7}>
          <Box sx={{ width: '100%', maxWidth: 400, bgcolor: 'background.paper' }}>
            {filteredContacts.length !== 0 &&
              <List component="ul" aria-label="Contacts list">
                {filteredContacts.map((contact) => (
                  <ContactItem
                    key={contact.id}
                    contact={contact}
                    handleListItemClick={handleListItemClick}
                    selected={contact.id === selectedIndex}>
                    </ContactItem>
                ))}
              </List>}
            {isLoading && !error && <ContactsSceleton />}
            {error && <p>Oh no! Something went wrong. Please, try again later.</p>}
          </Box>
        </Grid>
      </Grid>
   </Container>
  )
};

export default ContactsList;