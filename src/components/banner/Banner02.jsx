import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "../button";

import img from "../../assets/images/layout/banner-02.png";
import { useTranslation } from "react-i18next";

Banner02.propTypes = {};

function Banner02(props) {
  const { t } = useTranslation();

  const [dataBlock] = useState({
    heading: "A trusted and secure cryptocurrency exchange.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  });
  return (
    <section className="banner">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-md-12">
            <div className="banner__content">
              <h2 className="title">{t(dataBlock.heading)}</h2>
              <p className="fs-20 desc">{t(dataBlock.desc)}</p>
              <Button title="Trading Now" path="#" />
            </div>
          </div>
          <div className="col-xl-6 col-md-12">
            <div className="banner__image">
              <img src={img} alt="Rockie" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner02;
