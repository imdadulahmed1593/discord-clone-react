import React from "react";
import NotificationsIcon from "@material-ui/icons/Notifications";
import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded";
import EditLocationRoundedIcon from "@material-ui/icons/EditLocationRounded";
import { SearchRounded } from "@material-ui/icons";
import HelpRoundedIcon from "@material-ui/icons/HelpRounded";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import "./ChatHeader.css";

function ChatHeader({ channel }) {
  return (
    <div className="chatHeader">
      <div className="chatHeader__left">
        <h3>
          <span className="chatHeader__hash">#</span>
          {channel.channelName}
        </h3>
      </div>
      <div className="chatHeader__right">
        <NotificationsIcon />
        <EditLocationRoundedIcon />
        <PeopleAltRoundedIcon />
        <div className="chatHeader__search">
          <input type="text " placeholder="Search..." />
          <SearchRounded />
        </div>
        <SendRoundedIcon />
        <HelpRoundedIcon />
      </div>
    </div>
  );
}

export default ChatHeader;
