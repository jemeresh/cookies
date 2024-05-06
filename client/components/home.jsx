import React, { useState, useEffect } from 'react'
import Cookies from 'universal-cookie'
import Head from './head'
// import wave from '../assets/images/wave.jpg'


const cookies = new Cookies()

const Home = () => {
  const [counter, setCounterNew] = useState(0)

useEffect(() => {
  cookies.set('start-date', (new Date()).toString(), { path: '/', maxAge: 9000 * 60})
  fetch('/api/v1/test/cookies') 
}, [])

  return (
    <div>
      <Head title="Dashboard" />
      <img alt="wave" src="images/wave.jpg" />
      <button type="button" onClick={() => setCounterNew(counter + 1)}>
        updateCounter
      </button>
      <div> Hello World Dashboard {counter} </div>
    </div>
  )
}

Home.propTypes = {}

export default Home
