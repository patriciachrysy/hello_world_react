import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { listDevelopers, startLoader } from '../redux/developer/developer';
import DeveloperThumb from './DeveloperThumb';
import '../styles/Developers.css';

const Developers = () => {
  const dispatch = useDispatch();
  const developerState = useSelector((state) => state.developer);

  useEffect(() => {
    dispatch(startLoader());
    dispatch(listDevelopers());
  }, [dispatch]);

  return (
    <div className="developers">
      {developerState.developers.loader && <span>One moment please...</span>}
      {!developerState.developers.loader && developerState.developers.lenght === 0 && <span>No developer added, click on the menu to add</span>}
      {!developerState.developers.loader && developerState.developers.length > 0 && 
        <div className="developers-carousel">
          {developerState.developers.map((developer, i) => {
          return <DeveloperThumb key={i} developer={developer} />
          })}
        </div>
      }
    </div>
  );
};

export default Developers;
