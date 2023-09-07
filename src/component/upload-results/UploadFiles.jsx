import { useState } from 'react';
import axios from 'axios';





// done
function UploadFiles() {
    /* to upload data */

    const [fileName, setFileName] = useState('');
    const [year, setYear] = useState(0);
    const [round, setRound] = useState(0);
    const [covn, setCovn] = useState({
        covnName: '',
        region: '',
    });
    // file upload
    const [uploadFile, setUploadFile] = useState(null);


    let style = {
        margin: '10px auto',
        display: "flex",
    };

    function handleCovnName(e) {
        setCovn((prevCovn) => ({
            ...prevCovn,
            covnName: e.target.value
        }));
    };

    function handleRegion(e) {
        setCovn((prevCovn) => ({
            ...prevCovn,
            region: e.target.value
        }));
    };



    let upload = async (e) => {
        e.preventDefault();

        const fromData = new FormData();

        fromData.append('file_name', fileName);
        fromData.append('year', year);
        fromData.append('round', round);
        fromData.append('covnName', covn.covnName);
        fromData.append('region', covn.region);
        fromData.append('file', uploadFile);


        await axios.post(process.env.REACT_APP_UPLOAD, fromData)
            .then(res => {
                console.log(res.data);
            }).catch(err => console.log(err));

    };



    return (
        <>
            <form onSubmit={upload} style={{display: "flex", flexDirection: 'column',width: '100%', height: '100%', margin: '10px auto'}} >

                <div style={style}>
                    <label>file name</label>
                    <input type='text' placeholder='file name' name='file name' value={fileName} onChange={e => setFileName(e.target.value)} />
                </div>

                <div style={style}>
                    <label>Year</label>
                    <input type='number' placeholder='year' name='year' value={year} onChange={e => setYear(e.target.value)} />
                </div>

                <div style={style}>
                    <label>Round</label>
                    <input type='number' placeholder='round' name='round' value={round} onChange={e => setRound(e.target.value)} />
                </div>

                <input type='text' placeholder='اسم المحافطة' name='covn_Name' value={covn.covnName} onChange={handleCovnName} />
                <input type='text' placeholder='قضاء' name='region' value={covn.region} onChange={handleRegion} />
                <input type='file' name='file' disabled={false} onChange={e => setUploadFile(e.target.files[0])} />
                <button type='submit'>submit</button>
            </form>
        </>
    );


}


export default UploadFiles;