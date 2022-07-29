import React from "react";
import PropTypes from 'prop-types';
import ContactItem from "components/ContactItem";

const ContactList = ({ foundContacts }) => (
    <ul>
        {foundContacts.map((contact) => (
            <ContactItem
                key={contact.number}
                name={contact.name}
                number={contact.number}
            />
        ))}
    </ul>
);

ContactList.propTypes = {
    foundContacts: PropTypes.arrayOf(PropTypes.shape ({
        number: PropTypes.string.isRequired,
        })
    )
};

export default ContactList;