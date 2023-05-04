import React, { FunctionComponent, useEffect, useState } from 'react';
import { Button, Card, CardBody, CardHeader, Table } from "reactstrap";

import styles from './WebsiteDetail.module.scss';
import useGetWebDetail from '../../hooks/use-get-web-detail';
import { getWebsiteName } from '../../methods/get-website-name';
import { WebsiteStatus, getWebsiteStatus } from '../../methods/get-website-status';
import { Link, useParams } from 'react-router-dom';
import useGetWebsite from '../../hooks/use-get-website';
import updateWebsiteDetailsToDB from '../../methods/update-web-details';

const WebsiteDetail: FunctionComponent = () => {
    const [webStatus, setWebStatus] = useState<WebsiteStatus>();
    const { websiteId } = useParams();
    const website = useGetWebsite('websiteDetails', websiteId!);
    const { data, error } = useGetWebDetail(website?.name);

    useEffect(() => {
        if (data) {
            const websiteStatus = getWebsiteStatus(data.status, 'error' in data ? data.error : undefined);
            setWebStatus(websiteStatus);
            updateWebsiteDetailsToDB('websiteDetails', websiteId!, data.status);
        }
    }, [data]);

    return (
        <div className={`container d-flex align-items-center justify-content-center ${styles.WebsiteDetails}`}>
            <Card className="w-100">
                <CardHeader className="d-flex">Website Status</CardHeader>
                <CardBody className={styles.CardBody}>
                    {
                        data ? (
                            <>
                                <Table bordered>
                                    <tbody>
                                        <tr>
                                            <td>Name</td>
                                            <td>{getWebsiteName('url' in data ? data.url : website.name)}</td>
                                        </tr>
                                        <tr>
                                            <td>Url</td>
                                            <td>
                                                <a href={website.name} target='_blank' rel='noreferrer'>{'url' in data ? data.url : website.name}</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Status</td>
                                            <td className={`${styles.bold}`} style={{ color: webStatus?.color }}>
                                                {webStatus?.message}
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <Link to='/' className='text-primary'>See All Websites</Link>
                            </>
                        ) : (
                            <div>{error instanceof Error ? error.message : 'Getting Details...'}</div>
                        )
                    }
                </CardBody>
            </Card>
        </div>
    )
}

export default WebsiteDetail;
