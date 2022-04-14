import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';


const FeatureList = [
  {
    title: 'Decentralised',
    Svg: require('@site/static/img/pumpkin-orange.svg').default,
    description: (
      <>
        Decentration builds decentralised open-source technologies and blockchain networks. 
      </>
    ),
  },
  {
    title: 'Holistic ',
    Svg: require('@site/static/img/pumpkin-green.svg').default,
    description: (
      <>
        Our approach to building is holistic, humanistic, focussing on values. 
      </>
    ),
  },
  {
    title: 'Sovereign',
    Svg: require('@site/static/img/pumpkin-yellow.svg').default,
    description: (
      <>
        Sovereign, self-evolving, self-governing, self-determining. 
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
