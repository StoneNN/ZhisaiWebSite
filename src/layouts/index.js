import styles from './index.css';
import React from 'react';
import BasicLayout from './BasicLayout.js';
import NoneLayout from './NoneLayout.js';


function Layout(props) {
   console.log('---------rootProps',props);
   const { location:{ pathname } } = props;

   if (pathname.indexOf('/user') >-1) {
      return(
         <NoneLayout { ...props }> {props.children} </NoneLayout>
      )
   } else if(pathname === '/home' ||pathname === '/news'||pathname === '/games'||pathname === '/teaching') {
      return(
         <BasicLayout { ...props }> {props.children} </BasicLayout> 
      );
   } else {
      return(
         <BasicLayout { ...props }> {props.children} </BasicLayout>
      );
   }
}


export default Layout;
