import React from 'react'

const Video = () => {
  return (
    <div>
      {/* <video  style={{width:'100vw' , height :'600px'}} src="https://www.youtube.com/embed/TtPVlrXQrqU" controls ></video> */}
      <iframe
        title="YouTube Video"
        width="100%"
        height="700"
        src="https://www.youtube.com/embed/TtPVlrXQrqU"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></iframe>
    </div>
  )
}

export default Video