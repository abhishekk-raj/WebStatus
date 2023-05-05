import React, { useEffect, useState } from "react";
import { Card, CardBody, CardHeader, Table } from "reactstrap";
import { Link, useParams } from "react-router-dom";

import styles from "./WebsiteDetail.module.scss";
import useGetWebDetail from "../../hooks/use-get-web-detail";
import {
  WebsiteStatus,
  getWebsiteStatus,
} from "../../methods/get-website-status";
import updateWebsiteDetailsToDB from "../../methods/update-web-details";
import { useAuth } from "../../context/auth-provider";
import useGetWebsiteDetailFirestore from "../../hooks/use-get-website-detail-fs";
import { updateWebsiteDetails } from "../../utils/db.service";
import { Web } from "../../types/web";

const WebsiteDetail = () => {
  const [webStatus, setWebStatus] = useState<WebsiteStatus>();
  const { websiteId } = useParams();
  const { user } = useAuth();
  const website = useGetWebsiteDetailFirestore(user, websiteId!);
  const { data, error } = useGetWebDetail(website.url);

  useEffect(() => {
    if (data) {
      const websiteStatus = getWebsiteStatus(
        data.status,
        "error" in data ? data.error : undefined
      );
      setWebStatus(websiteStatus);
      // updateWebsiteDetailsToDB("websiteDetails", websiteId!, data.status);
      const dataToUpdate: Web = {
        id: website.id,
        name: website.name,
        url: website.url,
        status: data.status.toString(),
        lastUpdated: new Date().toISOString(),
      };
      updateWebsiteDetails(user.uid, website.id, dataToUpdate)
        .then(() => {
          console.log("Updated Successfully!");
        })
        .catch((error) => {
          console.log("Error occurred while updating: ", error);
        });
    }
  }, [data]);

  return (
    <div
      className={`container d-flex align-items-center justify-content-center ${styles.WebsiteDetails}`}
    >
      <Card className="w-100">
        <CardHeader className="d-flex">Website Status</CardHeader>
        <CardBody className={styles.CardBody}>
          {data ? (
            <>
              <Table bordered>
                <tbody>
                  <tr>
                    <td>Name</td>
                    <td>{website.name}</td>
                  </tr>
                  <tr>
                    <td>Url</td>
                    <td>
                      <a href={website.name} target="_blank" rel="noreferrer">
                        {website.url}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>Status</td>
                    <td
                      className={`${styles.bold}`}
                      style={{ color: webStatus?.color }}
                    >
                      {webStatus?.message}
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Link to="/" className="text-primary">
                See All Websites
              </Link>
            </>
          ) : (
            <div>
              {error instanceof Error ? error.message : "Getting Details..."}
            </div>
          )}
        </CardBody>
      </Card>
    </div>
  );
};

export default WebsiteDetail;
