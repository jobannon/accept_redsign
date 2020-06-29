function BangEquals() {
  return (
    <>
     <style jsx>{`
      .page{
          width 350px;
          margin: auto;
          max-width: 500px;
        }
        .plus{
          color: red;
          font-size: 300px; 
          width 600px;
          margin: 100px auto;
          padding-top: -20px; 
          padding-left: 90px; 
        }
        .left{
          padding-left: 150px;
       }
        .my_image{
          padding-bottom: 20px;
        }
       .left:hover {
        transform: translateY(5px);
       }
       html {
        scroll-behavior: smooth;
       }
       #down {
       margin-top: 100%;
       padding-bottom: 25%;
       }
       .bottom_text {
         color: gray;
        text-align: center;
         font-family: Sans-serif; 
       }

    `}</style>
      <section className='page'>
        <svg height="350" width="350">
          <path fill d="M172.8,0C77.364,0,0,77.365,0,172.8c0,95.435,77.364,172.8,172.8,172.8
        c95.433,0,172.798-77.365,172.798-172.8C345.598,77.365,268.232,0,172.8,0z M80.25,69.387h33.533v128.877H80.25V69.387z
         M95.967,275.8c-12.153,0-22.001-9.854-22.001-22.007c0-12.147,9.848-22.002,22.001-22.002c12.153,0,22.001,9.854,22.001,22.002
        C117.968,265.946,108.12,275.8,95.967,275.8z M284.645,220.011h-128.87v-33.533h128.87V220.011L284.645,220.011z M284.645,155.566
        h-128.87v-33.532h128.87V155.566L284.645,155.566z"></path>
        </svg>
          <section className="plus">+</section>
          <div className='page' className='my_image'> <img src="/joshprofile_circle.png" height='350'/></div>
            <div className='page' className="down-arrow" className="left">
              <a href="#down"> 
                <img src="/angle-arrow-down.png" height='50'/>
              </a>
            </div>
          <div id="down">
            <div className='page' className='my_image'> <img src="/confetti.png" height='350'/></div>
            <div className='page' className='my_image'> <img src="/balloons.png" height='350'/></div>
              <div className="bottom_text">
                <p>I accept your offer!</p>  
                  <p>Super exited to get to work together!</p>  
                    <p>Thanks for taking the time to answer my questions and explaining your agency and work!</p>
              </div>
          </div>
      </section>
          </>
        )
}

export default BangEquals

