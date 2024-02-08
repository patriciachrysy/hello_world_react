import React, {useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createDeveloperDatas, updateDeveloperDatas, loadDeveloperDatas, startLoader } from '../redux/developer/developer';
import '../styles/DeveloperForm.css';

const DeveloperForm = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const developerState = useSelector((state) => state.developer);
  const [data, setDatas] = useState({
    name: "",
    title: "",
    description: "",
    hourly_rate: "",
    image_url: "",
    linkedin_url: "",
    twitter_url: "",
    github_url: "",
    email: "",
    phone: "",
    city: ""
  });
  const [error, setError] = useState('');

  const save = async (e) => {
    e.preventDefault();
    let dataKeys = Object.keys(data);
    if(dataKeys.find(key => !data[key])) {
      setError("Please provide the "+key.split('_').join(' '));
      return;
    }

    if(id) {
        dispatch(startLoader());
        dispatch(updateDeveloperDatas(id, data));
    }else{
        dispatch(startLoader());
        dispatch(createDeveloperDatas(data));
    }
  }

  useEffect(() => {
    if(id) {
        dispatch(startLoader());
        dispatch(loadDeveloperDatas(id));
    }
  }, [dispatch]);

  useEffect(() => {
    if(id && Object.keys(developerState.developer).length > 0) {
        setData(developerState.developer);
    }
  }, [developerState.developer]);

  return (
    <div className="developer-form">
        {developerState.error && <span>*** {developerState.error}</span>}
        {error && <span>*** {error}</span>}
        <form onSubmit={e => save(e)}>
            <div className='form-field'>
                <label>Name</label>
                <input type="text" required disabled={developerState.loader} value={data.name} onChange={e => setData({...data, name: e.target.value})} />
            </div>
            
            <div className='form-field'>
                <label>Title</label>
                <input type="text" required disabled={developerState.loader} value={data.title} onChange={e => setData({...data, title: e.target.value})} />
            </div>
            
            <div className='form-field'>
                <label>Description</label>
                <textarea required disabled={developerState.loader} value={data.description} onChange={e => setData({...data, description: e.target.value})}></textarea>
            </div>
            
            <div className='form-field'>
                <label>Hourly Rate</label>
                <input type="text" required disabled={developerState.loader} value={data.hourly_rate} onChange={e => setData({...data, hourly_rate: e.target.value})} />
            </div>
            
            <div className='form-field'>
                <label>Email</label>
                <input type="email" required disabled={developerState.loader} value={data.email} onChange={e => setData({...data, email: e.target.value})} />
            </div>
            
            <div className='form-field'>
                <label>Phone</label>
                <input type="tel" required disabled={developerState.loader} value={data.phone} onChange={e => setData({...data, phone: e.target.value})} />
            </div>
            
            <div className='form-field'>
                <label>City</label>
                <input type="text" required disabled={developerState.loader} value={data.city} onChange={e => setData({...data, city: e.target.value})} />
            </div>
            
            <div className='form-field'>
                <label>Picture</label>
                <input type="text" required disabled={developerState.loader} value={data.image_url} onChange={e => setData({...data, image_url: e.target.value})} />
            </div>
            
            <div className='form-field'>
                <label>Github Profile</label>
                <input type="text" required disabled={developerState.loader} value={data.github} onChange={e => setData({...data, github: e.target.value})} />
            </div>
            
            <div className='form-field'>
                <label>Twitter Profile</label>
                <input type="text" required disabled={developerState.loader} value={data.twitter_url} onChange={e => setData({...data, twitter_url: e.target.value})} />
            </div>
            
            <div className='form-field'>
                <label>LinkedIn Profile</label>
                <input type="text" required disabled={developerState.loader} value={data.linkedin_url} onChange={e => setData({...data, linkedin_url: e.target.value})} />
            </div>

            <div className='form-field'>
                <input type="submit" disabled={developerState.loader} value={authState.loader ? "Wait..." : "save"} />
            </div>
        </form>
    </div>
  );
};

export default DeveloperForm;
