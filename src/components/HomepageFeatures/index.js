import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row wrapper">
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Расписание богослужений
          </Link>
          <img src="img/Under_construction.png"/>
          <h2 className="center">На сайте ведутся технические работы</h2>
        </div>
      </div>
    </section>
  );
}
