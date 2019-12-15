import React from 'react';
import styles from './popup.module.css'

export const Popup = ({message, reject, accept}) => {
    return (
      <div className={styles.shade}>
        <div className={styles.popupContainer}>
          <p>{message}</p>
          <div>
            <button onClick={accept}>Da</button>
            <button onClick={reject}>Ne</button>
          </div>
        </div>
      </div>
    );
}