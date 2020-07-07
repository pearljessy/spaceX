import React from 'react';
import classnames from 'classnames';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';



 function LaunchItem ({deploy: { flight_number, mission_name, launch_year, launch_date_local, upcoming, launch_success, details,
 	rocket: { rocket_id, rocket_name, rocket_type}} }) {

 	return <div className= "card card-body mb-4">
     <div className="row">

       <div className="col-md-9">
         <h4>Mission: <span className={classnames({
         	'text-success': launch_success,
         	'text-danger': !launch_success
         })}>
         { mission_name }</span>

         </h4>

         <p>Date: <Moment format="YYYY/MM/DD HH:mm">{ launch_date_local }</Moment></p>
       </div>

       <div className="col-md-3">
         <Link to={`/Launch/${flight_number}`} className="btn btn-secondary">Launch Details</Link>
       </div>


     </div>

 	</div>
 }

 export default LaunchItem



