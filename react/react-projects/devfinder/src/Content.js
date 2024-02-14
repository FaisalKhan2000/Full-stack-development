import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FaLink } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CgOrganisation } from "react-icons/cg";
import { format } from "date-fns";

export default function Content({ content }) {
  if (!content) {
    return <p>Loading...</p>;
  }

  // Destructuring the 'content' prop
  const {
    avatar_url,
    name,
    login,
    created_at,
    bio,
    public_repos,
    followers,
    following,
    location,
    blog,
    twitter_username,
    company,
  } = content;

  // Format the date and time
  const formattedDate = format(new Date(created_at), "MMMM dd, yyyy");

  return (
    <div className="main-container">
      <div className="image-content">
        <img src={avatar_url} width="150px" alt="" />
      </div>
      <div className="main-content">
        <div className="name-content">
          <div className="name">
            {name} <div className="user-id">@{login}</div>
          </div>
          <div className="joined">Joined {formattedDate}</div>
        </div>
        <div className="bio">{bio || "This profile has no bio"}</div>
        <div className="followers-div">
          <div className="repos">
            Repos <div className="num-data">{public_repos}</div>
          </div>
          <div className="followers">
            Followers <div className="num-data">{followers}</div>
          </div>
          <div className="following">
            Following <div className="num-data">{following}</div>
          </div>
        </div>
        <div className="links">
          <div className="left">
            <div className="location links-content">
              <IoLocationSharp /> <p>{location || "Not available"}</p>
            </div>
            <br />
            <div className="link links-content">
              {" "}
              <FaLink />
              <p>{blog || "Not available"}</p>
            </div>
          </div>
          <div className="right">
            <div className="twitter links-content">
              <FaTwitter /> <p>{twitter_username || "Not available"}</p>
            </div>
            <br />
            <div className="work links-content">
              <CgOrganisation />
              <p>{company || "Not available"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
