import React from 'react'
import Banner from '../layout/Banner'

const Home:React.FC = () => {
  return (
    <div className='content'>
        <div className="container mx-auto">
            <Banner title="Home" description='Aliquip duis mollit commodo in laborum minim ex amet id magna ex reprehenderit.'/>
        </div>
    </div>
  )
}

export default Home