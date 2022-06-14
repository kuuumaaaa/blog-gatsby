import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  LineShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  LineIcon,
  LinkedinIcon,
} from "react-share";

const Share = props => {
  const articleTitle = props.title;
  const articleUrl = props.url;
  const articleDescription = props.description;
  const iconSize = 50;

  return (
    <div>
      <h3 className="flex justify-center text-3xl">SHARE!!</h3>
      <div className="flex justify-center">
        <div className="m-4">
          <TwitterShareButton url={articleUrl} title={articleTitle}>
            <TwitterIcon round size={iconSize} />
          </TwitterShareButton>
        </div>
        <div className="m-4">
          <FacebookShareButton url={articleUrl} quote={articleDescription}>
            <FacebookIcon round size={iconSize} />
          </FacebookShareButton>
        </div>
        <div className="m-4">
          <LineShareButton url={articleUrl} quote={articleDescription}>
            <LineIcon round size={iconSize} />
          </LineShareButton>
        </div>
        <div className="m-4">
          <LinkedinShareButton url={articleUrl} quote={articleDescription}>
            <LinkedinIcon round size={iconSize} />
          </LinkedinShareButton>
        </div>
      </div>
    </div>
  );
};

export default Share;