import React, { useState } from 'react'
import Banner from '../layout/Banner'
import Card from './../components/card/Card';
import { API_BASE_URL, BUTTON_TXT_CANCEL, BUTTON_TXT_SUBMIT } from '../constants/constants';
import { Post } from '../interface/interface';
import BtnPrimary from '../components/Button/BtnPrimary';
import StatusComponents from '../components/StatusComponents';
import FunctionHooks from '../components/functionhooks/1';
import EventHandlers from '../components/event-handlers-dom-elements/1';
import ChildPatternApp from './../components/ChildrenPattern/1';
import PropsComponent from '../components/Props/1';
import CustomHooks from '../components/customhooks/4';
import MultipleStates from '../components/multiplestates/2';
import TrackSelected from '../components/selectedTrack/2';
import ManagingFilters from '../components/ManagingFIlters/1';
const Home = () => {
  const [data, setData] = useState<Post[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  
  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(API_BASE_URL);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result: Post[] = await response.json();
      setData(result);
    } catch (error) {
      setError('Failed to fetch data');
      console.error('Failed to fetch data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleClear  =() => {
    setData(null)
  }

  const [isModalOpen,setIsModalOpen] = useState<boolean>(false)

  const handleModalOpen = () => {
    setIsModalOpen(true)
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
  }

  return (
    <div className='content'>
        <Banner title='Home' description='Aute consectetur tempor consectetur culpa fugiat ad nisi pariatur exercitation dolor minim.'/>
        <div className="container mx-auto">
          <ManagingFilters/>
          <br />
          <TrackSelected/>
          <br />
          <MultipleStates/>
          <br />
          <CustomHooks/>
          <PropsComponent/>
          <BtnPrimary isOpen={handleModalOpen}>Open</BtnPrimary>
          <br />
          {isModalOpen && (<><ChildPatternApp isOpen={handleModalOpen} onClose={handleModalClose}>
            <h2>Modal</h2></ChildPatternApp></>)}
          <EventHandlers/>
          <FunctionHooks/>
          <StatusComponents/>
          <Card title="Card Title">
          <p>Card content goes here.</p>
          </Card>
          <div className='flex gap-4'>
          <BtnPrimary onClick={fetchData} disabled={loading}>
            {loading ? 'Loading...' : BUTTON_TXT_SUBMIT}
          </BtnPrimary>
          <BtnPrimary onClick={handleClear}>{BUTTON_TXT_CANCEL}</BtnPrimary>
          </div>
          {error && <div className='error'>{error}</div>}
          {data && (
            <>
            {data.map(post => (
                <div key={post.id}>
                  <h3>{post.title}</h3>
                  <p>{post.body}</p>
                </div>
              ))}
            </>
          )}
        </div>
    </div>
  )
}

export default Home