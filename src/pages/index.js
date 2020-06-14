import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Header from '../components/Header';

import charity from "../assets/images/charity.jpg";
import circus from "../assets/images/circus.jpg";
import happee from "../assets/images/happee.jpg";
import knet from "../assets/images/knet.jpg";
import trivia from "../assets/images/trivia.jpg"

import "../assets/sass/toolsused.scss";

import styled, { keyframes } from 'styled-components';
import { tada, pulse } from 'react-animations';

const tadaAnimation = keyframes`${tada}`;
const TadaDiv = styled.div`
  animation: 1s ${tadaAnimation};
`;


const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-uppercase">{config.heading}</h1>
          <h2 className="text-white-50 mx-auto mt-2 mb-5">
            {config.subHeading}
          </h2>
          <Scroll type="id" element="about">
            <TadaDiv>
              <a href="#about" className="btn btn-primary">
                About
            </a>
            </TadaDiv>
          </Scroll>
        </div>
      </div>
    </header>

    <section id="about" className="about-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-white mb-4">These are pieces of my toolbox</h2>
            <div className="text-white-50">
              <ul className="toolbox">
                <li>
                  Javascript
                </li>
                <li>
                  ES2015
                </li>
                <li>
                  HTML5
                </li>
                <li>
                  CSS/SCSS
                </li>
                <li>
                  React
                </li>
                <li>
                  Git
                </li>
                <li>
                  Github
                </li>
                <li>
                  Node.js
                </li>
                <li>
                  Express
                </li>
                <li>
                  MongoDB
                </li>
                <li>
                  Mongoose
                </li>
                <li>
                  npm
                </li>
                <li>
                  Wordpress
                </li>
                <li>
                  Jira
                </li>
                <li>
                  Confluence
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*         <img src={ipad} className="img-fluid" alt="" /> */}
      </div>
    </section>

    <section id="projects" className="projects-section bg-light">
      <h2 style={{ textAlign: "center", marginBottom: "1em" }}>Projects</h2>
      <div className="container">
        <div className="row align-items-center no-gutters mb-4 mb-lg-5">
          <div className="col-xl-8 col-lg-7">
            <img className="img-fluid mb-3 mb-lg-0" src={charity} alt="" />
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="featured-text text-center text-lg-left">
              <h4>Charity</h4>
              <p className="text-black-50 mb-0">
                A web application making with MERN stack. I'm working on it with 2 more developer.
              </p>
              <ul className="toolsused">
                <li>
                  React
                </li>
                <li>
                  Express
                </li>
                <li>
                  MongoDB
                </li>
                <li>
                  Node.js
                </li>
              </ul>
              <p className="progress-x">The website is in progress..</p>
            </div>
          </div>
        </div>

        <div className="row align-items-center no-gutters mb-4 mb-lg-5">
          <div className="col-xl-8 col-lg-7">
            <img className="img-fluid mb-3 mb-lg-0" src={circus} alt="" />
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="featured-text text-center text-lg-left">
              <h4>Wild Circus</h4>
              <p className="text-black-50 mb-0">
                I had 24 hour to make a web application with MERN stack and to deploy it.
              </p>
              <ul className="toolsused">
                <li>
                  React
                </li>
                <li>
                  Express
                </li>
                <li>
                  MongoDB
                </li>
                <li>
                  Node.js
                </li>
              </ul>
              <a href="https://wildcodecircus.herokuapp.com/" target="_blink" className="btn btn-primary">
                See the website
            </a>
            </div>
          </div>
        </div>


        <div className="row align-items-center no-gutters mb-4 mb-lg-5">
          <div className="col-xl-8 col-lg-7">
            <img className="img-fluid mb-3 mb-lg-0" src={happee} alt="" />
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="featured-text text-center text-lg-left">
              <h4>Happee</h4>
              <p className="text-black-50 mb-0">
                54 hour long hackaton project. I work on it with 4 more developer.
              </p>
              <ul className="toolsused">
                <li>
                  React
                </li>
                <li>
                  Express
                </li>
                <li>
                  MongoDB
                </li>
                <li>
                  Node.js
                </li>
                <li>
                  Leaflet
                </li>
              </ul>
              <a href="https://happee123.herokuapp.com/" target="_blink" className="btn btn-primary">
                See the website
            </a>
            </div>
          </div>
        </div>

        <div className="row align-items-center no-gutters mb-4 mb-lg-5">
          <div className="col-xl-8 col-lg-7">
            <img className="img-fluid mb-3 mb-lg-0" src={knet} alt="" />
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="featured-text text-center text-lg-left">
              <h4>K-net</h4>
              <p className="text-black-50 mb-0">
                2 month long client project. This app is connect accountants to client's who's searching accountants.
              </p>
              <ul className="toolsused">
                <li>
                  React
                </li>
                <li>
                  Express
                </li>
                <li>
                  MongoDB
                </li>
                <li>
                  Node.js
                </li>
                <li>
                  Jira
                </li>
                <li>
                  Confluence
                </li>
              </ul>
              <a href="http://161.35.204.71:5000/" target="_blink" className="btn btn-primary">
                See the website
            </a>
            </div>
          </div>
        </div>

        <div className="row align-items-center no-gutters mb-4 mb-lg-5">
          <div className="col-xl-8 col-lg-7">
            <img className="img-fluid mb-3 mb-lg-0" src={trivia} alt="" />
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="featured-text text-center text-lg-left">
              <h4>Trivia nigth game</h4>
              <p className="text-black-50 mb-0">
                1 week long project. I made this with 4 more developer.
              </p>
              <ul className="toolsused">
                <li>
                  HTML
                </li>
                <li>
                  CSS
                </li>
                <li>
                  Javascript
                </li>

              </ul>
              <a href="https://trivia-night-hun.netlify.app/" target="_blink" className="btn btn-primary">
                See the website
            </a>
            </div>
          </div>
        </div>

      </div>


    </section>

    {/* <Subscribe /> */}

    <SocialLinks />
    <Footer />
  </Layout>
);

export default IndexPage;
