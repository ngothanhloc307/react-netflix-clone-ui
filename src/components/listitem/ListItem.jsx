import "./listItem.scss";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@material-ui/icons";
import { useState } from "react";

export default function ListItem({ index }) {
  const [isHovered, setIsHovered] = useState(false);
  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://occ-0-395-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbqrM1ey46QbJrvAcggCQCF5javR5sT2Kj-CIfAwkFrkEIi2XmNCxmzZRfPtHUzzlSVoZ8URqPbFvuKvDHFhDi2BIMrP6arK8nt7MZKVpMMt4tljNfga5RNEcYVR3VdpC4OsMBpFtJZZQOqvOMyNmK2GDEfKneiqwdZkjUquf8n_YaTWUZXTNXOBqWkMbvH_XvYtte-YpC9Xv3pHhOo2c5uCQIiILcK1TMpRx9xlL6RX6kOBJUOgGCClq065xHe4aU5rGUYSEkfG8koZQZV9FIxuGKn3fHV0uQkp4_3MJ517yPCvE4l-adrS0cUtKQ660fOSIVYN5SJFbesovVtvpDDEHq52b013fDJQDNIfRGTh_i2js-Tf_9hscfDVciouCPrCD_i4f7m4dDKo.jpg?r=0c5"
        alt=""
      />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>2022</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing
              elit.Praesentium hic rem eveniet error possimus, neque ex
              doloribus.
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
}
