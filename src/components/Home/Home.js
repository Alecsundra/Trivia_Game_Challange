import React from 'react';
import { Link } from 'react-router-dom';
import '../Home/Home.css'

const Home = ()=>{

return (
<div className='home'>
<div className= 'game-title'>ArtyQuiz</div>
<div className='instruct'>Choose the level and start the game!</div>
I

<div className='start-btn'>
{/*  CONTROL WHAT HAPPENS WHEN THE ARRAY IS EMPTY =TO DO*/}
    <Link to='/easy'><button className='btn'>Take it easy!</button></Link>
    <Link to='/medium'><button className='btn'>Medium rare!</button></Link>
    <Link to='/hard'><button className='btn'>Take it hard!</button></Link>
    
    </div>
</div>
)}

export default Home 