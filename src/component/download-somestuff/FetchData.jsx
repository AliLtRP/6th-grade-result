import { useEffect } from 'react';
import axios from 'axios';




/**
 * 
 */
function FetchData({ name, year, round, covnName, region, studentNumber }) {

    useEffect(() => {

        let fetchData = async() => {
    
            await axios.get('http://localhost:3000/get/result', {
                responseType: 'arraybuffer',
                params: {
                    name: name,
                    year: year,
                    round: round,
                    covn: {
                        covnName: covnName,
                        region: region
                    },
                    studentNumber: studentNumber
                }
            }).then(() => {
                console.log('done');
            }).catch(err => console.log(err));
    
    
        };

        fetchData();
        
    },[]);



    return(
        <>
        
        </>
    );

}


export default FetchData;