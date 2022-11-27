import React, { useEffect } from "react";
// import {useState} from 'react-usestateref';
import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";

export default function UseSession({children}) {
    const [verify, setVerify] = useState(true);
    // const navigate = useNavigate();

    
    const verification = () => {
        setVerify(true)
    }

    useEffect(() => {
        console.log('inside useeffect', verify);
    }, [verify])

    // const userDetails = () => {
        const sessionId = localStorage.getItem('token');
        console.log(sessionId);

        new Promise ((resolve, reject) => {
            if(!sessionId) {
                reject(new Error("User not Signed In"))
            }
            return fetch(`http://localhost:5000/v1/signin/get-current-user?sessionId=${sessionId}`)
                .then(res => res.json())
                .then(data => {
                    if(data) {
                        console.log('from session-utils', data);
                //         setVerify(true);
                // console.log('verify1', verify);
                        resolve(data);
                        return;
                    }
                    reject(new Error("User not Signed In"))
                })
                .catch(err => {
                    reject(err);
                });

        })
            .then(data => {
                // setVerify(true);
                verification();
                console.log('verify', verify);
            })
            .catch(e => console.log(e));

    return verify ? children : <Navigate to="/"/>;

}