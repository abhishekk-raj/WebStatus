import React, { ChangeEvent, useState } from "react";
import saveWebsiteDetailsToDB from "../../methods/save-web-detail";
import { getRandomId } from "../../methods/get-random-id";
import { useNavigate } from "react-router-dom";
import { saveWebsiteDetails } from "../../utils/db.service";
import { Web } from "../../types/web";
import { RouteNames } from "../../utils/constants";

const AddWebsite = () => {
  const [websiteDetail, setWebsiteDetail] = useState<{
    name: string;
    url: string;
  }>({ name: "", url: "" });
  const useNaviagte = useNavigate();

  const onInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { id, value } = e.target;
    setWebsiteDetail({ ...websiteDetail, [id]: value });
  };

  const onFormSubmit = (e: any) => {
    e.preventDefault();
    /* Code for local storage */
    // saveWebsiteDetailsToDB("websiteDetails", {
    //   id: getRandomId(),
    //   name: websiteDetail.name,
    //   url: websiteDetail.url,
    //   status: "200",
    //   lastUpdated: new Date().toISOString(),
    // });
    // useNaviagte("/");

    const dataToSave: Web = {
      id: getRandomId(),
      name: websiteDetail.name,
      url: websiteDetail.url,
      status: "200",
      lastUpdated: new Date().toISOString(),
    };
    saveWebsiteDetails(dataToSave).then(() => {
      useNaviagte(RouteNames.WebsiteList);
    });
  };

  return (
    <div className="m-5">
      <form onSubmit={onFormSubmit}>
        <div className="align-items-baseline d-flex flex-column form-group">
          <label htmlFor="name">Website Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter website name"
            onChange={onInputChange}
          />

          <label htmlFor="url" className="mt-3">
            Website Url
          </label>
          <input
            type="text"
            className="form-control"
            id="url"
            placeholder="Enter website url"
            onChange={onInputChange}
          />
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-primary mt-3">
            Add Website
          </button>
          <button className="btn btn-outline-secondary mt-3 ms-2">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddWebsite;
