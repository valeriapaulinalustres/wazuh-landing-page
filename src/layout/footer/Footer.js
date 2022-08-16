import React from 'react';
import './footer.css';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaRedditAlien } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { RiSlackFill } from 'react-icons/ri';
import { MdPeopleAlt } from 'react-icons/md';
import { BiCopyright } from 'react-icons/bi'

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-container__top'>
        <img className='brand footer-brand'></img>
        <div className='footer-container__top__links-container'>
          <div className='footer-container__top__links-container__div'>
            <NavLink to="/src/views/platform" className='footer-links'>PLATFORM</NavLink>
            <Link to="" className='footer-links--text'>Product</Link>
            <Link to="" className='footer-links--text'>Cloud</Link>
          </div>
          <div className='footer-container__top__links-container__div'>
            <NavLink to="/src/views/documentation" className='footer-links'>DOCUMENTATION</NavLink>
            <Link to="" className='footer-links--text'>Quickstart</Link>
            <Link to="" className='footer-links--text'>Getting started</Link>
          </div>
          <div className='footer-container__top__links-container__div'>
            <NavLink to="/src/views/services" className='footer-links'>SERVICES</NavLink>
            <Link to="" className='footer-links--text'>Support</Link>
            <Link to="" className='footer-links--text'>Training</Link>
          </div>
          <div className='footer-container__top__links-container__div'>
            <NavLink to="" className='footer-links'>RESOURCES</NavLink>
            <Link to="" className='footer-links--text'>Blog</Link>
            <Link to="" className='footer-links--text'>Comunity</Link>
          </div>
          <div className='footer-container__top__links-container__div'>
            <h4 className='subscribe'>Subscribe to our newsletter</h4>
            <div className='subscribe-btn-input'>
              <input placeholder="E-mail adress" type="mail"></input>
              <button className='button-footer'><h6>{'>'}</h6></button>
            </div>
          </div>
        </div>

      </div>
      <div className='footer-container__bottom'>
        <div className='footer-container__bottom__copyright'>
          <h6><BiCopyright className='copyright-icon' />2002 Wazuh, Inc.</h6>
          <h6 className='footer-container__bottom__copyright--border padding'>Privacy</h6>
          <h6 className='padding'>Terms of service</h6>
        </div>
        <div>
          <Link to="" ><AiOutlineTwitter className='icon-footer' /></Link>
          <Link to="" ><FaLinkedinIn className='icon-footer' /></Link>
          <Link to="" ><FaRedditAlien className='icon-footer' /></Link>
          <Link to="" ><BsGithub className='icon-footer' /></Link>
          <Link to="" ><RiSlackFill className='icon-footer' /></Link>
          <Link to="" ><MdPeopleAlt className='icon-footer' /></Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
