import React from "react";
import styles from './styles.module.css';

const Filter = ({ value, onChange }) => {
    return (
    <label className={styles.label__filter}>Find contacts by name
        <input className={styles.input}
            type="text"
            value={value}
            onChange={onChange}
        />
    </label>
    )
};

export default Filter;