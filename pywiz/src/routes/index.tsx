import React, {FC} from 'react'
import {Routes, Route} from 'react-router-dom'

import CodingPage from '../pages/CodingPage';
import HomePage from '../pages/HomePage';
import RouteWrapper from './utils';

interface RouteRenderProps {
}

const RouteRender: FC<RouteRenderProps> = () => {
  return (
   <Routes>
    <Route path='/' element={<HomePage/>}></Route>
    <Route path='/Coding' element={<RouteWrapper title='Coding' element={<CodingPage/>}/>}></Route>
    <Route path='/Performance' element={<RouteWrapper title='Performance' element={<CodingPage/>}/>}></Route>
    <Route path='/Pip' element={<RouteWrapper title='Pip' element={<CodingPage/>}/>}></Route>
    <Route path='/History' element={<RouteWrapper title='History' element={<CodingPage/>}/>}></Route>
    <Route path='/Settings' element={<RouteWrapper title='Setting' element={<CodingPage/>}/>}></Route>
   </Routes> 
  )
};

export default RouteRender;
