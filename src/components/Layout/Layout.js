import React, { useState, useEffect } from "react";
import './style.css';

const Layout = (props) => {



    return (
        <>
            <div class="header">
                <h1>Header</h1>
                <p>My supercool header</p>
            </div>

            <div class="content">
                <h1>Content</h1>
                <p>Some content blablabla, some content blablabla.</p>
                
            </div>
        
            <main>
        <div/>
        {props.children}
      </main>
        </>
    )
}

export default Layout;