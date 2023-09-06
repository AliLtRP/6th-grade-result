import axios from "axios";
import { useEffect, useState } from "react";


function GetDirsList() {
    const[dirs, setDirs] = useState([]);

    let fetchDirs = () => {
        axios.get('http://localhost:3000/app/dirs/')
            .then(res => {
                setDirs(res.data);
            }).catch(err => console.log(err));
    };


    useEffect(() => {
        fetchDirs();
    }, []);


    return (
        <div>
            <h2>List of Directories:</h2>
            <ul>
                {dirs.map(v => {
                    return <li>{v}</li>;
                })} 
            </ul>
        </div>
    );
}

export default GetDirsList;