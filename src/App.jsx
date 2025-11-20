import { useState } from 'preact/hooks'

import './app.css'
import Header from './components/Header'
import Banner from './components/Banner'
 export function App() {
  return (
    <>
      <div>
       <Header></Header> 
         <Banner />
      </div>
     
    </>
  )
}
