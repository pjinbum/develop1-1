
import './App.css';
import { useState , useEffect } from 'react';
import Video from './Video';




function App() {
   
  const menuList = [1,2,3]
  const [menuList1 , setMenu] = useState(menuList)


  return (
    <div className="App">
      <div style={{ height:'100px',display:'flex' , justifyContent :'space-between', alignItems :'center' , backgroundColor :'yellowgreen'}}>
        <div>
          <img style={{width : '100px' , height :'100px'}} src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAyMjdfNzIg%2FMDAxNjc3NDc4MzI1ODIy.byrgnAdfx1mzb-r5hB2R4Ih1wCJzcfYLOiWBfnm7SBEg.FNGXlpqrE4lCL98DFTz41b5aB5BcChpOIR2bKQBgLKgg.PNG.theone0714%2Fwatch_darling.png&type=sc960_832" alt="logo" />
        </div>
        <div>
          <ul style={{display :'flex'}}>
            {
              menuList1.map((menu , index)=>{
                return(
                  <li className='menulist' style={{margin:'0 20px'}} key={index} onClick={()=>{

                  }}>
                     <p>Menu{index}and{menu}</p>
                  </li>
          
                )
              })
            }
          </ul>
        </div>
      </div>
      <div>
      <Video></Video>
      </div>
      <div style={{width :'100vw' , height :'100px', backgroundColor :'yellowgreen'}}>

      </div>
      
    </div>
  );
}

export default App;
