import React, {FunctionComponent, useEffect, useState} from 'react';
import {Card, CardBody, CardHeader, Table} from "reactstrap";

import styles from './WebsiteDetail.module.scss';

type WebsiteDetailProps = {
    websiteName: string;
    websiteUrl: string;
}

enum networkStatus {
    NetworkFail = 'Internet connection error',
    Active = 'Active',
    Inactive = 'Inactive'
}

const WebsiteDetail: FunctionComponent<WebsiteDetailProps> = ({websiteName, websiteUrl}: WebsiteDetailProps) => {

    const [status, setStatus] = useState('Fetching...');

    const checkWebsiteStatus = async () => {
        if (!navigator.onLine) {
            setStatus(networkStatus.NetworkFail);
            return;
        }
        await fetch(websiteUrl, {mode: 'no-cors'})
            .then((res) => {
                setStatus(networkStatus.Active);
            }).catch((err) => {
                setStatus(networkStatus.Inactive);
            })
    }

    useEffect(() => {
        const interval = setInterval(() => {
            checkWebsiteStatus();
        }, 6000);

        return () => clearInterval(interval);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className={`container d-flex align-items-center justify-content-center ${styles.WebsiteDetails}`}>
            <Card className="w-100">
                <CardHeader className="d-flex">Website Status</CardHeader>
                <CardBody className={styles.CardBody}>
                    <Table bordered>
                        <tbody>
                        <tr>
                            <td>Name</td>
                            <td>{websiteName}</td>
                        </tr>
                        <tr>
                            <td>Url</td>
                            <td><a href={websiteUrl} target='_blank' rel='noreferrer'>{websiteUrl}</a></td>
                        </tr>
                        <tr>
                            <td>Status</td>
                            <td className={`${status === networkStatus.Active? styles.green: styles.red} ${styles.bold}`}>{status}</td>
                        </tr>
                        </tbody>
                    </Table>
                </CardBody>
            </Card>
        </div>
    )
}

export default WebsiteDetail;
