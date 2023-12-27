import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { useLocation } from 'react-router-dom';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();

    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <Heading as="h1" className="hero__title">
                    {siteConfig.title}
                </Heading>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/intro">
                        Get Started ⏱️
                    </Link>
                </div>
            </div>
        </header>
    );
}

const Table = () => {
    const [plans, setPlans] = useState(null)

    const GetPlans = async () => {
        try {
            const response = await fetch('https://fuzzy-engine-v66g774r5qp63xqvj-8000.app.github.dev/api/fetch_dataplans/')
            if (!response.ok) {
                throw new Error("Dataplans Fetch fails")
            }
            const plans = await response.json()
            const dataplans = plans.plans
            console.log(dataplans)
            setPlans(dataplans)

        } catch (error) {
            console.error("Error fetching dataplans", error)
        }
    }

    useEffect(() => {
        GetPlans()
    }, []);

    return (
        <>
            {
                plans ? (
                    <div className='flex justify-center' >
                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Plan ID
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Network
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Plan Type
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Price
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Size
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Validity
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {plans.map((plan, i) => (
                                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                            <th scope="row" key={i} className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {plan.id}
                                            </th>
                                            <td className="px-6 py-4">
                                                {plan.network === 1 ? 'MTN' : plan.network === 2 ? 'GLO' : plan.network === 3 ? '9MOBILE' : 'AIRTEL'}
                                            </td>
                                            <td className="px-6 py-4">
                                                {plan.plantype}
                                            </td>
                                            <td className="px-6 py-4">
                                                {plan.plan_amount}
                                            </td>
                                            <td className="px-6 py-4">
                                                {plan.size + ' ' + plan.volume}
                                            </td>
                                            <td className="px-6 py-4">
                                                {plan.validity}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                    </div >
                ) : ('')}
        </>

    )
}

export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">
            <HomepageHeader />
            <main>
                <HomepageFeatures />
                <div className='mb-4'>
                    <h1 className='text-center text-3xl font-bold'>Available Data Plans</h1>
                </div>
                <Table />
            </main>
        </Layout>
    );
}
