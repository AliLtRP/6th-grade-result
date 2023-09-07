import axios from "axios";
import { useEffect, useState } from "react";
import './style.css';






function ResultImg({ length }) {
    const [data, setData] = useState('');



    let fetchData = async () => {

        await axios.get(process.env.REACT_APP_GET_IMAGE, {
            responseType: 'arraybuffer'
        })
            .then(res => {
                console.log(res);
                const blob = new Blob([res.data], { type: 'image/png' });

                // Create a Blob URL
                const imageUrl = URL.createObjectURL(blob);

                console.log(res);
                setData(imageUrl);
            }).catch(err => console.log(err));
    };



    useEffect(() => {
        fetchData();
    }, [length]);




    return (
        <div style={{ margin: '50px' }}>

            <img src={data} alt="" className="result-img" /> 

            <div>
                {Array.from({ length: length }, (v, i) => {
                    return <img className="result-img-all-pdf" key={Date.now() + i} src={`http://3.64.179.220:3000/result/images/ilyes${i}.png`} alt="" />
                })}
            </div>

        </div>
    )
}



export default ResultImg;