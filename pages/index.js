function BangEquals() {
  return (
    <>
     <style jsx>{`
       html {
        scroll-behavior: smooth;
       }
       .bottom_text {
         color: gray;
        text-align: center;
         font-family: Sans-serif; 
       }
       .flex-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
      }
      .flex-container > div {
        margin: 10px;
        padding: 20px;
        font-size: 30px;
      }
      .header {
        padding: 10vH;
        background-color: #448FA3;
      }
      .body-middle {
        background-color: #D6D6D6;
        padding: 2vH;
      }
      .reveal {
        background-color: #C2C6A7;
        padding: 1vH;
      }
      .flex-container > .noPadding {
        padding: 0px;
        margin: 30px;
      }
      .flex-container-column > .centerOf {
        align-items: center;
        justify-content: center;
      }

    `}</style>
    <div className="header flex-container" >
      this is header 
    </div>

    <div className="flex-container body-middle">
      <svg height="350" width="350">
          <path fill d="M172.8,0C77.364,0,0,77.365,0,172.8c0,95.435,77.364,172.8,172.8,172.8
        c95.433,0,172.798-77.365,172.798-172.8C345.598,77.365,268.232,0,172.8,0z M80.25,69.387h33.533v128.877H80.25V69.387z
         M95.967,275.8c-12.153,0-22.001-9.854-22.001-22.007c0-12.147,9.848-22.002,22.001-22.002c12.153,0,22.001,9.854,22.001,22.002
        C117.968,265.946,108.12,275.8,95.967,275.8z M284.645,220.011h-128.87v-33.533h128.87V220.011L284.645,220.011z M284.645,155.566
        h-128.87v-33.532h128.87V155.566L284.645,155.566z"></path>
        </svg>
      <div className="noPadding" ><img src="noun_plus.png" height="100"/></div>
      <div className="noPadding"><img src="/joshprofile_circle.png" height='350'/></div>
    </div>
    <div className="flex-container-column centerOf reveal"> 
      <a href="#down" className="flex-container-column centerOf reveal"> 
        <img src="/angle-arrow-down.png" height='50'></img>
      </a>
          <div id="down" >
            <img src="/confetti.png" height='100'/>
            <img src="/balloons.png" height='100'/>

            <div>
              <p>I accept your offer!</p>  
              <p>Super exited to get to work together!</p>  
              <p>Thanks for taking the time to answer my questions and sharing your work!</p> 
            </div>
          </div>
    </div>
    </>
  )
}

export default BangEquals

