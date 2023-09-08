import axios from "axios";
import { useState } from "react";
import ResultImg from "./ResultImg";
import './style.css';





// done, only css
function GetResult() {
    const [name, setName] = useState('');
    const [year, setYear] = useState(0);
    const [round, setRound] = useState(0);
    const [covn, setCovn] = useState({
        covnName: '',
        region: ''
    });

    const [studentNumber, setStudentNumber] = useState(0);

    const [pagesNumber, setPagesNumber] = useState(0);

    const [disable, setDisable] = useState(null);

    const[flag, setFlag] = useState(false);




    let handleCovnName = (e) => {
        let cn = e.target.value;
        setCovn((prevCovn) => ({
            ...prevCovn,
            covnName: cn
        }));

        if (cn === 'baghdad') {
            setDisable(false);
        } else {
            setDisable(true);
        }
    }


    let handleRegion = (e) => {
        setCovn((prevCovn) => ({
            ...prevCovn,
            region: e.target.value
        }));
    }




    let fetchData = async () => {

        await axios.get(process.env.REACT_APP_GET_RESULT, {
            responseType: 'application/json',
            params: {
                name: name,
                year: year,
                round: round,
                covn: {
                    covnName: covn.covnName,
                    region: covn.region
                },
                studentNumber: studentNumber
            }
        }).then((res) => {
            setPagesNumber(res.data);
        }).catch(err => {
            console.log(err);
        });


    };



    let handleSubmit = (e) => {
        e.preventDefault();
        fetchData();
        setFlag(true);
    };



    return (
        <div className="get-result-img">

            
            <form onSubmit={handleSubmit} className="result-form">

                <input id="typeEmail" className="form-control" type="text" name="school name" placeholder="اسم المدرسة" value={name} onChange={e => setName(e.target.value)} />

                <select className="form-select form-select-sm" onChange={e => setYear(e.target.value)}>
                    <option>اختار السنة</option>
                    <option value='2023'>2023</option>
                </select>


                <select className="form-select form-select-sm" onChange={e => setRound(e.target.value)}>
                    <option>اختار الدور</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                </select>


                <select className="form-select form-select-sm" onChange={handleCovnName}>
                    <option>اختار المحافطة</option>
                    <option value='baghdad'>بغداد</option>
                    <option value='basra'>بصرة</option>
                    <option value='kirkuk'>كركوك</option>
                    <option value='babil'>بابل</option>
                    <option value='karbala'>كربلاء</option>
                    <option value='najaf'>نجف</option>
                    <option value='samaoa'>سماوة</option>
                    <option value='nasria'>ناصرية</option>
                    <option value='kut'>كوت</option>
                    <option value='Diwania'>ديوانية</option>
                    <option value='anbar'>انبار</option>
                    <option value='mosul'>موصل</option>
                    <option value='Dyala'>ديالى</option>
                    <option value='salah-alden'>صلاح الدين</option>
                </select>



                <select disabled={disable} className="form-select form-select-sm" onChange={handleRegion}>
                    <option >اختار القضاء</option>
                    <option value='kargh1'>الكرخ الاولى</option>
                    <option value='kargh2'>الكرخ الثانية</option>
                    <option value='kargh3'>الكرخ الثالثة</option>
                    <option value='rasafa1'>الرصافة الاولى</option>
                    <option value='rasafa2'>الرصافة الثانية</option>
                    <option value='rasafa3'>الرصافة الثالثة</option>
                </select>


                <input type="number" style={{}} id="typeEmail" className="form-control" name="studentNumber" placeholder="ادخل الرقم الامتحاني" value={studentNumber} onChange={e => setStudentNumber(e.target.value)} />


                <button type="submit" className="btn btn-success">submit</button>
            </form>


            <ResultImg length={pagesNumber} flag={flag} setFlag={setFlag}/>
        </div>
    );

}



export default GetResult;