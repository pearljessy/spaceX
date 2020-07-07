import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import classnames from 'classnames';





function Launch () {

const { flight_number } = useParams()

  const LAUNCH_Detail = gql`

 query Launch ($flight_number: Int!) {
  get_single_launch(flight_number: $flight_number) {
      flight_number
          mission_name
          launch_year
          launch_date_local
          upcoming
          launch_success
          details
          rocket{
            rocket_id
            rocket_name
            rocket_type
    }
   }
  }
`; 

     const newFlightNumber = parseInt(flight_number, 10);


	const { loading, error, data } = useQuery(LAUNCH_Detail, {
    variables: { 
      flight_number: newFlightNumber 
    }
  });

	  if (loading) return <h5>Loading...</h5>;
   if (error) return <p>Error :</p>;

   const { 
            mission_name,
            launch_year,
            launch_date_local,
            upcoming,
            launch_success,
            details,
            rocket: {
              rocket_id,
              rocket_name,
              rocket_type
            }

          } = data.get_single_launch

  return(
     <div>
       <h3 className="display-4 my-4">Mission: {mission_name}</h3>
        <h4 className="mb-3">Launch Details</h4>
           
          <ul className="list-group mb-4">
               <li className="list-group-item">
                  Flight Number: {flight_number}
               </li>

                <li className="list-group-item">
                  Launch Year: {launch_year}
               </li>

                <li className="list-group-item">
                  Launch Successful: <span className={classnames({
              'text-success': launch_success,
              'text-danger': !launch_success
             })}>{launch_success ? 'Yes' : 'No'}</span>
               </li>
          </ul> 

          <h4 className="mb-3">Rocket Details</h4>

          <ul className="list-group mb-4">
              <li className="list-group-item">
                Rocket ID: {rocket_id}
              </li>

              <li className="list-group-item">
                Rocket Name: {rocket_name}
              </li>

              <li className="list-group-item">
                Rocket Type: {rocket_type}
              </li>
          </ul>

          
         <Link to="/" className="btn btn-secondary mb-5">Back</Link>
        
     </div>  
  ) 	
}

export default Launch