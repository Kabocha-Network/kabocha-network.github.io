import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';



const FeatureList = [
  {
    title: 'Decentralised',
    // Svg: require('@site/static/img/pumpkin-orange.svg').default,
    imageUrl: 'img/seedOne.jpg',
    description: (
      <>
        Decentration builds decentralised open-source technologies and blockchain networks. 
      </>
    ),
  },
  {
    title: 'Holistic ',
    // Svg: require('@site/static/img/pumpkin-green.svg').default,
    imageUrl: 'img/seed1.jpg',
    description: (
      <>
        Our approach to building is holistic, humanistic, focussing on values. 
      </>
    ),
    pageUrl: "https://wiki.kabocha.network",
    linkName: "Learn More",
  },
  {
    title: 'Sovereign',
    // Svg: require('@site/static/img/pumpkin-yellow.svg').default,
    imageUrl: 'img/seed2.jpg',
    description: (
      <>
        Sovereign, self-evolving, self-governing, self-determining. 
      </>
    ),
  },
];

function Feature({imageUrl, title, description, pageUrl, linkName}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (

    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
        {/* <img className={styles.featureSvg} src={SeedOne} role="img" /> */}
        <img className={styles.featureSvg} src={imgUrl} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3 className={styles.descriptStyle}>{title}</h3>
        <p>{description}</p>
        <p className={styles.learnMore}><a href={pageUrl}>{linkName}</a></p>
        
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
