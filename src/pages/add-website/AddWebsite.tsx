import React, { useState } from "react";
import saveWebsiteDetailsToDB from "../../methods/save-web-detail";
import { getRandomId } from "../../methods/get-random-id";
import { useNavigate } from "react-router-dom";

const AddWebsite = () => {
  const [websiteUrl, setWebsiteUrl] = useState("");
  const useNaviagte = useNavigate();

  const onInputChange = (e: any) => {
    setWebsiteUrl(e.target.value);
  };

  const onFormSubmit = (e: any) => {
    e.preventDefault();
    saveWebsiteDetailsToDB("websiteDetails", {
      id: getRandomId(),
      name: websiteUrl,
      status: "200",
      lastUpdated: new Date().toISOString(),
    });
    useNaviagte("/");
  };

  return (
    <div className="m-5">
      <form onSubmit={onFormSubmit}>
        <div className="form-group">
          <label htmlFor="websiteUrl">Website Url</label>
          <input
            type="text"
            className="form-control"
            id="websiteUrl"
            placeholder="Enter website url"
            onChange={onInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          Add Website
        </button>
      </form>
    </div>
  );
};

export default AddWebsite;
