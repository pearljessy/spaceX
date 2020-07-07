import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import LaunchItem from './LaunchItem';
 const LAUNCHES = gql`
    {
    	get_launches{
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

function Launches () {
	const { loading, error, data } = useQuery(LAUNCHES);

	 if (loading) return <h4>Loading...</h4>;
	 if (error) return <p>Error :</p>


	return(
		<React.Fragment>
        <h1 className="display-4 my-4">Launches</h1>

        <p>
         <span className="bg-success px-3 mr-2" /> = Success
        </p>

         <p>
         <span className="bg-danger px-3 mr-2" /> = fail
        </p>

      

       {
        	data.get_launches.map(launch => (
            <LaunchItem key={launch.flight_number} deploy={launch} />
             
       ))}
       

       </React.Fragment>
	)
}


export default Launches