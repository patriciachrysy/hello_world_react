import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loadDeveloperDatas, deleteDeveloper, startLoader } from '../redux/developer/developer';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import '../styles/Developer.css';
import DefaultProfile from '../images/default-profile.jfif';

const Developer = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const developerState = useSelector((state) => state.developer);

  useEffect(() => {
    dispatch(startLoader());
    dispatch(loadDeveloperDatas(id));
  }, [dispatch]);

  const deleteDev = (e) => {
    dispatch(startLoader());
    dispatch(deleteDeveloper(id));
  }

  return (
    <div className="developer">
        <div className='profile-pic'>
            {developerState.developer.image_url && <img scr={developerState.developer.image_url} alt="developer profile" />}
            {!developerState.developer.image_url && <img scr={DefaultProfile} alt="developer profile" />}
        </div>
        <div className='developer-data'>
            <h1>{developerState.developer.name}</h1>
            <h3>{developerState.developer.title}</h3>
            <p>{developerState.developer.description}</p>
            <span>Hourly rate: {developerState.developer.hourly_rate}$</span>
        </div>
        <div className='socials'>
            <a href={developer.linkedin_url}><FaLinkedin /></a>
            <a href={developer.twitter_url}><FaTwitter /></a>
            <a href={developer.github_url}><FaGithub /></a>
        </div>
        <div>
          <Link to={'/developer/update/'+id}>Update</Link>
          <button onClick={e => deleteDev(e)}>Delete</button>
          <Link to="">Book a meeting</Link>
        </div>
    </div>
  );
};

export default Developer;
