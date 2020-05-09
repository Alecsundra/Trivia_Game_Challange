import React from 'react';
import { Link } from 'react-router-dom';
import '../Home/Home.css'

const Home = ()=>(

<div className='home'>
<div className= 'game-title'>Game Title</div>
<div className='instruct'>Choose the level and start the game!</div>

<div className='start-btn'>
    <Link to='/easy'><button>Take it easy!</button></Link>
    <Link to='/medium'><button>Take it to medium!</button></Link>
    <Link to='/hard'><button>Take it hard!</button></Link>
    {/* <Link to='/'><button>Reset</button></Link> */}
    </div>
</div>
)

export default Home 