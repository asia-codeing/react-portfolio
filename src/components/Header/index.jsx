import React from 'react';
import "./header.scss";

export default function Header() {
    return (
        <div className="header">
           <div className="wrapper">
               <div className="left">
                    <div class="logo">
                        <a href="#intro">aa</a>
                    </div>
               </div>
               <div className="right">
                  <div className="hamburger">
                      <span className="line1"></span>
                      <span className="line2"></span>
                      <span className="line3"></span>
                  </div>
               </div>
           </div>
            
        </div>
    )
}
