import { useEffect, useState } from 'react';
import axios from 'axios';






function DownloadSelectedFile({ chooseFile }) {
    
    // fileData of the pdf
    const [fileData, setFileData] = useState(null);


    let downloadFile = () => {


        axios.get('http://localhost:3000/get/result', {
            // Indicate that the response will be binary data
            responseType: 'arraybuffer',
            params: {
                name: chooseFile
            }
        })
            .then(response => {
                console.log(response);
                setFileData(response.data);
            })
            .catch(error => {
                console.log('Error downloading file:', error);
            });
    };


    useEffect(() => {

        if (fileData) {
            const blob = new Blob([fileData], { type: 'image/png' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `sdfs.png`;
            a.click();
            URL.revokeObjectURL(url);
        }

    }, [fileData]);


    return (
        <button onClick={downloadFile}>download file</button>
    )
}

export default DownloadSelectedFile;