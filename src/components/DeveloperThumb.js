import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import DefaultProfile from '../images/default-profile.jfif';


const DeveloperThumb = (props) => {
  const {developer} = props;

  return (
    <div className="developer-thumb">
        {developer.image_url && <img scr={DefaultProfile} alt="developer profile" />}
        <Link to={"/developer/"+developer.id}><h1>{developer.name}</h1></Link>
        <h3>{developer.title}</h3>
        <div className='socials'>
            <a href={developer.linkedin_url}><FaLinkedin /></a>
            <a href={developer.twitter_url}><FaTwitter /></a>
            <a href={developer.github_url}><FaGithub /></a>
        </div>
    </div>
  );
};

export default DeveloperThumb;
