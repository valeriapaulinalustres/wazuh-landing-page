import React, { useRef } from 'react';
import './home.css';
import Carousel from '../../components/carousel/Carousel';
import Cards from '../../components/cards/Cards';
import gsap from "gsap";
import { useIntersection } from "react-use";


function Home() {

  //Button animation

  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#fff4ac" });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#FEDD0B" });
  };

  //---------Animation on scroll fifth section--------------------
  const fifthHomeRef = useRef();

  const intersectionHomeFifth = useIntersection(fifthHomeRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
  });

  const fadeIn = (element) => {
    gsap.to(element, 1, {
      opacity: 1,
      y: -40,
      ease: "power4.out",

      duration: 2,
      stagger: {
        amount: 1
      }
    });
  };

  const fadeOut = element => {
    gsap.to(element, 1, {
      opacity: 0,
      y: -20,
      ease: "power4.out",
    });
  };

  intersectionHomeFifth && intersectionHomeFifth.intersectionRatio < 0.5
    ? fadeOut(".fadeIn")
    : fadeIn(".fadeIn");
  //------------------------------------------------

  return (
    <div>
      <section className='home-first-section'>
        <h1>The Open Source<br />Security Platform</h1>
        <h2 className='home-first-section__subtitle'>Unified XDR and SIEM protection for endpoints<br />and cloud workloads.</h2>
        <button className='button' onMouseEnter={onEnter} onMouseLeave={onLeave}>Install Wazuh</button>
      </section>

      <section className='home-second-section'>
        <img className='salesforce-img'></img>
        <img className='groupon-img'></img>
        <img className='cisco-img' ></img>
        <img className='walgreens-img'></img>
        <img className='nasa-img'></img>
        <img className='pwc-img'></img>
      </section>

      <section className='home-third-section'>
        <h2>Endpoint & Cloud Workload Protection</h2>
        <h4>Wazuh unifies historically separate functions into a single agent and platform architecture.</h4>
        <h4>Protection is provided for public clouds, private clouds, and on-premise data centers.</h4>
      </section>

      <Cards />

      <section className='home-fourth-section'>
        <div className='home-fourth-section__div'>
          <div className='home-fourth-section__div__left'>
            <h2>Active XDR protection<br />from modern threats</h2>
            <h3>Wazuh provides analysts real-time correlation and context. Active responses are granular, encompassing on-device remediation so endpoints are kept clean and operational.</h3>
          </div>
          <img className='xdr-img '></img>
        </div>
        <div className='home-fourth-section__div'>
          <img className='cloud-img  '></img>
          <div className='home-fourth-section__div__right'>
            <h2>Explore the potential of<br />Wazuh Cloud</h2>
            <h3>Wazuh has created an entirely new cloud-based architecture to reduce complexity and improve security while providing stronger endpoint protection.</h3>
            <button className="button" onMouseEnter={onEnter} onMouseLeave={onLeave}>Start your free trial</button>
          </div>
        </div>
      </section>

      <section className='home-fifth-section' ref={fifthHomeRef}>
        <div className='home-fifth-section__subcontainer fadeIn'>
          <img className='protected-icon'></img>
          <div>
            <h2>15+ Million</h2>
            <h3>Protected endpoints</h3>
          </div>
        </div>
        <div className='home-fifth-section__subcontainer fadeIn'>
          <img className='enterprise-icon'></img>
          <div>
            <h2>100+ Thousand</h2>
            <h3>Enterprise users</h3>
          </div>
        </div>
        <div className='home-fifth-section__subcontainer fadeIn'>
          <img className='downloads-icon'></img>
          <div>
            <h2>10+ Million</h2>
            <h3>Dowloads per year</h3>
          </div>
        </div>
      </section>

      <section className='home-sixth-section'>
        <h2 className='home-sixth-section--title'>What our customers say about us</h2>
        <Carousel />
      </section>
    </div>
  )
}

export default Home