import React from 'react';
import './HeroSection.css';
import { Link } from 'react-router-dom';
import { Button } from '../../ui/Button';
import StockMarketWidget from '../../ui/StockMarketWidget';



function HeroSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  imgStart
}) {
  return (
    <>
      <div
        className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}
      >
        <div className='container'>
          <div
            className='row home__hero-row'
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
            }}
          >
            <div className='col'>
              <div className='home__hero-text-wrapper'>
                <ul className='list-container'>
                  <div className='list-item'>
                <div className='top-line'>{topLine}</div>
                <h1 className={lightText ? 'heading' : 'heading'}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? 'home__hero-subtitle'
                      : 'home__hero-subtitle dark'
                  }
                >
                  {description}
                </p>
                <Link to='/stocks'>
                  <Button buttonSize='btn--wide' buttonColor='blue'>
                    {buttonLabel}
                  </Button>
                </Link>
                </div>
                <div className='list-item'>
                  <StockMarketWidget />
                </div>
                </ul>
              </div>
            </div>
            <div className='col'>
            </div>
          </div>
          </div>
        </div>
    </>
  );
}

export default HeroSection;
