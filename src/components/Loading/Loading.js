import React, { useState, useEffect } from "react";
import './style.css';
import axios from 'axios';
import Layout from "../Layout/Layout";
import Loader from "../Loader/Loader";

const Loading = () => {

    const [ajay, setAjay] = useState([])

    const [ajay2, setAjay2] = useState([])
    const [ajay3, setAjay3] = useState([])
    const [loading, setLoading] = useState(true)
    const [loading2, setLoading2] = useState(true)

    // const axiosInstance = axios.create({
    //     baseURL: `http://localhost:500/`,
    //      withCredentials: true 
    // });
    console.log(loading);
    useEffect(() => {
        console.log('useEffect');
        axios.get(`http://localhost:500/api/load`).then(res => {
         //   setLoading(false)
            setAjay(res.data);
            setTimeout(()=>{
                setLoading2(false)
            },1000)
        })
        axios.get(`http://localhost:500/api/load2`).then(res => {
            setAjay2(res.data);
            setTimeout(()=>{
                setLoading(false)
            },4000)
            
        })
        axios.get(`http://localhost:500/api/load3`).then(res => {
            setAjay3(res.data);
        })
    },[])

    return (
       
        <> {console.log('return')}
        
            <Layout>{console.log(loading)}
          
                    <div className="main">
                    {loading2 ? (
                
                <Loader />
              ) : (
                        <div>
                            <table id="customers">
                                <tr>
                                    <th>Company</th>
                                    <th>Contact</th>
                                    <th>Country</th>
                                </tr>
                                {ajay2.data && ajay2.data.map((item, i) => (
                                    <tr>
                                        <td>{item.company}</td>
                                        <td>{item.contact}</td>
                                        <td>{item.country}</td>
                                    </tr>
                                ))}

                            </table>



                        </div>)}
                        
                        {loading ? (
                
               <Loader />
             ) : (
                        <div>
                            <table id="customers">
                                <tr>
                                    <th>Company</th>
                                    <th>Contact</th>
                                    <th>Country</th>
                                </tr>
                                {ajay.data && ajay.data.map((item, i) => (
                                    <tr>
                                        <td>{item.company}</td>
                                        <td>{item.contact}</td>
                                        <td>{item.country}</td>
                                    </tr>
                                ))}

                            </table>


                        </div>  )}
                    </div>
                    
                
               
            </Layout>
          
        </>
    )
}

export default Loading;