import React from "react";
import {
  TwitterIcon,
  TwitterShareButton,
  FacebookIcon,
  FacebookShareButton,
  EmailIcon,
  EmailShareButton
} from 'react-share';

export const SocialShare = ({ url, message }) => {
  const size = 48;
  return (
    <div className="text-2xl my-4">
      <div>
        <span className="mr-4">
          <EmailShareButton url={url} subject={message}>
            <EmailIcon size={size} round="true"/>
          </EmailShareButton>
        </span>
        <span className="mr-4">
          <TwitterShareButton url={url} title={message}>
            <TwitterIcon size={size} round="true"/>
          </TwitterShareButton>
        </span>
        <span className="mr-4">
          <FacebookShareButton url={url} quote={message}>
            <FacebookIcon size={size} round="true"/>
          </FacebookShareButton>
        </span>
      </div>
    </div>
  );
};