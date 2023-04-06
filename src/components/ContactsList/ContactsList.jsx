import { ListContacts, ContactInfo, List } from "./ContactList.styled";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectFilteredContacts, selectIsLoading } from "redux/selectors";
import { fetchContacts, deleteContact } from "redux/operations";

export const ContactsList = () => {
    const filteredContacts = useSelector(selectFilteredContacts);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch]);
    
    const deleteContactById = (contactId) => {
        dispatch(deleteContact(contactId));
    };

    return (
        <div>
        {isLoading && !error && <p>Loading contacts...</p>}
        {error && <b>{error}</b>}
        {!isLoading && filteredContacts.length !== 0 && <List>{filteredContacts.map(({ id, name, phone }) => (
            <ListContacts key={id}>
                <ContactInfo>{name}: {phone}</ContactInfo>
                <button type="button" onClick={() => {deleteContactById(id)}}>Delete</button>
            </ListContacts>))}
        </List>}
        </div>
    )

}

