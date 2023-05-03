import React from 'react';
import useGetWebsiteList from '../../hooks/use-get-website-list';
import { Link } from 'react-router-dom';
import { getWebsiteName } from '../../methods/get-website-name';

const WebsiteList = () => {
    const websiteList = useGetWebsiteList('websiteDetails');
    console.log(websiteList);

    return (
        <div>
            <h1>Website List</h1>
            {
                websiteList.map((website, index) => (
                    <div key={index}>
                        <Link to={website.id}>
                            <h5>{getWebsiteName(website.name)}</h5>
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}

export default WebsiteList;
