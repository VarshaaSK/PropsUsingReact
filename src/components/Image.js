// complete this file

import React from 'react'
import Data from './Data'
import '../design/imageDesign.css'

export default function Image(props) {
  
  // return (
  //   <div className='lakeImage'>
  //     {/* <img src='sample.jp' alt="checkFor"/> */}
  //     {Data.map(({id,img}) => (
  //       <div >
  //           <img src={img} alt={id}/>
  //       </div>
  //     ))}
  //   </div>
  // )


  const { data } = props;
  // console.log(data);
  const imageList = data.map((item) => {
    // console.log(item);
    return (
      <img src={item.img} alt={item.id} />
    );
  });

  return (
    <div className="lakeImage">
      {/* <img src='./images/lake.jpg' alt="checkFor"/> */}
      {imageList}
    </div>
  );
}
