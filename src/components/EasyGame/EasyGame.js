import React ,{ useState } from 'react';


const EasyGame =({ easyQ })=>{
    let [index, setIndex] = useState(0);
    // console.log(props.easyQ)
    return(
    <p>{easyQ[0].question}</p>
    
    )}

export default EasyGame 