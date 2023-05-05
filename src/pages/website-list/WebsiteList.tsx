import React from "react";
import { Link } from "react-router-dom";
import { Badge, ListGroup, ListGroupItem } from "reactstrap";

import { getWebsiteName } from "../../methods/get-website-name";
import useGetWebsiteListFirestore from "../../hooks/use-get-website-list-fs";
import { useAuth } from "../../context/auth-provider";

const WebsiteList = () => {
  const { user } = useAuth();
  const websiteList = useGetWebsiteListFirestore(user);

  return (
    <div>
      <div className="d-flex ms-5 me-5 mt-3 mb-3 align-items-center">
        <h4>Website List</h4>
        <Link
          to="/add-website"
          className="border border-primary fs-3 ms-auto rounded-3 ps-1 pe-1"
        >
          <i className="bi-plus" role="img" aria-label="GitHub" />
        </Link>
      </div>
      <hr className="border border-primary border-1 ms-5 me-5"></hr>
      {websiteList.length > 0 ? (
        websiteList.map((website, index) => (
          <div key={index}>
            <ListGroup className="ms-5 me-5 mt-2">
              <ListGroupItem>
                <Link to={website.id} className="d-flex align-items-center">
                  <h6>{getWebsiteName(website.url)}</h6>
                  <Badge
                    className="ms-auto"
                    color={
                      website.status.toString().startsWith("20")
                        ? "success"
                        : website.status.toString().startsWith("30")
                        ? "warning"
                        : "danger"
                    }
                  >
                    {website.status}
                  </Badge>
                </Link>
              </ListGroupItem>
            </ListGroup>
          </div>
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default WebsiteList;
