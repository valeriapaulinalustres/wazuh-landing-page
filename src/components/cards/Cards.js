import React from 'react';
import './cards.css';
import { TiTick } from 'react-icons/ti'

function Cards() {
  return (
    <section className='cards-container'>

      <div className='card-container'>
        <img className='card-container__icon security-endpoint'></img>
        <div className='card-container__list-container'>
          <h3>Endpoint Security</h3>
          <h4><TiTick className='tick' />Configuration Assesment</h4>
          <h4><TiTick className='tick' />Endpoint Detection<br /><span className='response'>& Response</span></h4>
          <h4><TiTick className='tick' />File Integrity Monitoring</h4>
        </div>
      </div>

      <div className='card-container'>
        <img className='card-container__icon threat'></img>
        <div className='card-container__list-container'>
        <h3>Threat Intelligence</h3>
          <h4><TiTick className='tick' />Threat Hunting</h4>
          <h4><TiTick className='tick' />IT Hygiene</h4>
          <h4><TiTick className='tick' />Vulnerabiliy Detection</h4>
        </div>
      </div>

      <div className='card-container'>
        <img className='card-container__icon security'></img>    
        <div className='card-container__list-container'>
        <h3>Security Operation</h3>
          <h4><TiTick className='tick' />Log Data Analysis</h4>
          <h4><TiTick className='tick' />Malware Detection</h4>
          <h4><TiTick className='tick' />Audit & Compliance</h4>
        </div>
      </div>

      <div className='card-container'>
        <img className='card-container__icon cloud'></img>
        <div className='card-container__list-container'>
        <h3>Cloud Security</h3>
          <h4><TiTick className='tick'/>Posture Management</h4>
          <h4><TiTick className='tick'/>Wordload Protection</h4>
          <h4><TiTick className='tick'/>Container Security</h4>
        </div>
      </div>



    </section>
  )
}

export default Cards