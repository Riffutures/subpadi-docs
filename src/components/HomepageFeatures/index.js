import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import { useLocation } from 'react-router-dom';


const FeatureList = [
  {
    title: 'Quickstart',
    url: 'docs/intro',
    Svg: require('@site/static/img/trend-up-fill.svg').default,
    description: (
      <>
        Follow this quick guide to get you setup to start using our api
      </>
    ),
  },
  {
    title: 'Authenticate',
    url: 'docs/category/authentication',
    Svg: require('@site/static/img/lock-key-open-fill.svg').default,
    description: (
      <>
        Get Authenticated To Use The API Services
      </>
    ),
  },
  {
    title: 'Blog',
    url: '/',
    Svg: require('@site/static/img/stack-overflow-logo-fill.svg').default,
    description: (
      <>
        Check out our blog for tutorials on api usage and integrationn
      </>
    ),
  },
];

function Feature({Svg, title, description, url}) {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const source = searchParams.get('source');
  return (
    <div className={clsx('col col--4')}>
      <Link to={url} className={styles.decorator}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className={`text--center padding-horiz--md ${styles.decorator}`}>
        <Heading className={styles.decorator} as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
      </Link>
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
