import React, { Component } from 'react';

import styles from './Thanks.module.scss';

class Thanks extends Component {
  render() {
    return (
      <div>
        <p className={styles.text}>
          Thanks for your feedback. We are waiting for you again soon)))
        </p>
      </div>
    );
  }
}

export default Thanks;
