import React from 'react';
import { Link } from 'react-router-dom'

const Home = ()=>(
    
<div className='home'>
    <Link to='/easy'>Take it easy!</Link>
    <Link to='/medium'>Take it to medium!</Link>
    <Link to='/hard'>Take it hard!</Link>
</div>
)

export default Home 