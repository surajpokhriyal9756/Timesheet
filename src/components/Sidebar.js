import React from 'react';
import '../style/sty.css';

function Sidebar(){
    return(
       <div id="sidediv" className="container">
            

        
        <div className="row">
            < img className='image' src="https://th.bing.com/th/id/OIP.82O67gxdYN53SjkR7wgqZQHaHa?rs=1&pid=ImgDetMain" alt="his"></img>

                <div className="row">
                    Dashboard
                </div>
                <div className="row">
                    Timesheet
                </div>
                <div className="row">
                    Leave
                </div>
                <div className="row">
                    Work From Home
                </div>
                <div className="row">
                    Feedback
                </div>
                <div className="row">
                    Survey
                </div>
                <div className="row">
                    Service Desk
                </div>
                <div className="row">
                    Forms
                </div>
                <div className="row">
                    Travel
                </div>
            
                <hr style={{marginTop:"50px"}}  size="2"></hr>
            </div>

       </div>
        // < div classNameName='sidediv'>
        //    < img classNameName='image' src="https://th.bing.com/th/id/OIP.82O67gxdYN53SjkR7wgqZQHaHa?rs=1&pid=ImgDetMain" alt="his"></img>
        //     <div classNameName='detailsside'>
        //             <div>Dashboard</div>
        //             <div>Dashboard</div>
        //             <div>Dashboard</div>
        //             <div>Dashboard</div>
        //             <div>Dashboard</div>
        //     </div>

        // </div>
    );
}

export default Sidebar;