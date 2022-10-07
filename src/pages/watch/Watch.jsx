import React from "react";
import { ArrowBackOutlined } from "@material-ui/icons";
import "./watch.scss";
function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video
        className="video"
        src="../../assest/SPY-FAMILY-01.mp4"
        type="video/mp4"
        autoPlay
        progress="true"
        controls
      />
    </div>
  );
}

export default Watch;
