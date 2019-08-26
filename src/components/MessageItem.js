import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import DefaultProfileImg from "../images/default-profile-image.jpg"

const MessageItem = ({ date, profileImgUrl, text, userName }) => (
  <div>
    <li className=".list-group-item">
      <img
        src={ profileImgUrl || DefaultProfileImg }
        alt={ userName }
        height="100"
        width="100"
        className="timeline-image"
      />
      <div className="message-area">
        <Link to='/'>@{ userName } &nbsp;</Link>
        <span className="text-muted">
          <Moment className="text-muted" format="Do MMM YYYY">
            { date }
          </Moment>
        </span>
      </div>
    </li>
  </div>
);

export default MessageItem;