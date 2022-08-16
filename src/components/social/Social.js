import React from 'react';
import './social.css';
import { Link } from 'react-router-dom';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaRedditAlien } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { RiSlackFill } from 'react-icons/ri';
import { MdPeopleAlt } from 'react-icons/md';


function Social() {
  return (
    <div className='social-container'>
      <Link to="" className='social-container__links'>Community</Link>
      <Link to="" className='social-container__links'>Contact us</Link>
      <Link to="" className='icon-header'><AiOutlineTwitter /></Link>
      <Link to="" className='icon-header'><FaLinkedinIn /></Link>
      <Link to="" className='icon-header'><FaRedditAlien /></Link>
      <Link to="" className='icon-header'><BsGithub /></Link>
      <Link to="" className='icon-header'><RiSlackFill /></Link>
      <Link to="" className='icon-header'><MdPeopleAlt /></Link>
      <input placeholder="Search" className='social-container__input' />
    </div>
  )
}

export default Social