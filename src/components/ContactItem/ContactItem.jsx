import { useDispatch } from "react-redux";
import { deleteContact } from "redux/operations";

import { IconButton, ListItemButton, ListItemText, Tooltip } from "@mui/material"
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';

const ContactItem = ({ contact, handleListItemClick, selected }) => {
    const dispatch = useDispatch();

    const { id, name, number } = contact;

    const deleteContactById = (contactId) => {
        dispatch(deleteContact(contactId));
    };

    return <li>
        <ListItemButton
            component="div"
            onClick={(event) => handleListItemClick(event, id)}
            selected={selected}
        >
            <ListItemText primary={<p>{name}: {number}</p>} />
            <Tooltip title="Delete" onClick={() => deleteContactById(id)} sx={{ mr: '2px' }}>
                <IconButton aria-label="delete contact" color="error" size="large">
                    <PersonRemoveIcon />
                </IconButton>
            </Tooltip>
        </ListItemButton>
    </li>
};

export default ContactItem;