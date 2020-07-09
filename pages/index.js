import React from 'react';
import Head from 'next/head';

function BangEquals() {
  return (
    <>
    <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css" />
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"></link>
    </Head>
    <div className="flex-container body-middle">
      <div className="noPadding" ><img src="bang_equals.png" height="250"/></div>
      <div className="noPadding" id="plus-sign"><img src="plus_sign_light_smaller.svg" height="100" className="plus-sign-img"/></div>
      <div className="noPadding"><img src="/circle-cropped.png" height='250'/></div>
    </div>
      <a href="#down" className="flex-container arrow"> 
        <img src="/caret_light.svg" className="arrow-resize" height='50'></img>
      </a>
    <div className="flex-container-moving reveal"> 
      <div id="down" className="huge">
        <p>I'm in.</p>
      </div>

      <div className="flex-container-moving">
        <img src="/dark_noun_celebration.png" height='200'/>
      <div>

      <div id="down" className="flex-container-moving">
        <p className="acceptance-details-headline">I accept your offer!</p>  
        <p className="acceptance-detail">Super exited to get to work together!</p>  
        <p className="acceptance-detail">Thanks for taking the time to answer my questions and sharing your work!</p> 
      </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default BangEquals

