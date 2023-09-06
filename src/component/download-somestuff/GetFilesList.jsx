import { useState, useEffect } from "react";
import axios from "axios";
import DownloadSelectedFile from "./DownloadSelectedFile";



function GetFilesList() {
    const [files, setFiles] = useState([]);
    const [flag, setFlag] = useState(null);
    const [chooseFile, setChooseFile] = useState('');


    useEffect(() => {
        axios.get('http://localhost:3000/app/files/')
            .then(res => {
                setFiles(res.data);
                console.log(res);
            })
            .catch(err => console.log(err));

        if (files.length !== 0) {
            setFlag(true);
        } else {
            setFlag(false);
        }

    }, [flag]);


    return (
        <div>
        {files.map((v) => {
          
          let arr = String(v).split('/');

          return (
            <div>
              <a href='#' value={v} onClick={e => setChooseFile(v)}>{arr[arr.length-1]}</a> <br/>
            </div>
          )
        })}

        <DownloadSelectedFile chooseFile={chooseFile}/>
      </div>
    )
}

export default GetFilesList;