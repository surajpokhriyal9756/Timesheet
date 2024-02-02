import React from 'react';
import '../style/styleMain.css';

function Mainbar(){
    return(
        <div className="container-fluid">
            <div id="header" className="row">
                <h2 id="ts">Timesheet</h2>
            </div> 
            <div id="timestamp" className="row">
                <div className="text-a">Total Hours: 0.0</div>
                <div className="text">05 Feb 2024 - 11 Feb 2024</div>
            </div>
            <div id="ae" className="row">
              <h7 id="aet" >Allocation Extension</h7>
            </div> 
            <div id="ae" className="row">
              <h7 id="aet" >Timesheet</h7>
              <div id="pink" className="row">
                <div id="pt-1" style={{color:"#19105B"}} class="col"><h6 id="pt">Project Type</h6> </div>
              </div>  
            </div>
            
        </div>
    );
}
export default Mainbar;