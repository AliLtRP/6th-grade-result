import axios from "axios";
import { useEffect, useState } from "react";
import DownloadSelectedFile from "./DownloadSelectedFile";


/**
 * this component return 
 * @returns 
 */
function GetData() {
    const [data, setData] = useState([]);

    useEffect(() => {

        let fetchData = async () => {
            await axios.get('http://localhost:3000/app/get/all/files')
                .then(res => {
                    console.log(res);
                    setData(res.data);
                }).catch(err => console.log(err));
        };

        fetchData();

    }, []);



    // console.log(data);
    return (
        <>
            <div>
                {data.map(v => {
                    return (
                        <div key={v._id}>
                            {v.name}
                            <DownloadSelectedFile chooseFile={v.name} />
                        </div>
                    )
                })}
            </div>

        </>
    )
}


export default GetData;