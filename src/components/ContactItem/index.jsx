import React from "react";
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const ContactItem = ({ name, number }) => (
    <li className={styles.list__item}>
        {name}: {number}
    </li>
);

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};

export default ContactItem;