import React, { useEffect } from "react";
// import {useState} from 'react-usestateref';
import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";

export default function UseSession({children}) {
    // const navigate = useNavigate();
    const [verify, setVerify] = useState(true);

        const sessionId = localStorage.getItem('token');
        // console.log(sessionId);

        new Promise ((resolve, reject) => {
            if(!sessionId) {
                reject(new Error("User not Signed In"))
            }
            return fetch(`http://localhost:5000/v1/signin/get-current-user?sessionId=${sessionId}`)
                .then(res => res.json())
                .then(data => {
                    if(data) {
                        setVerify(() => true)
                        resolve(data);
                    }
                    reject(new Error("User not Signed In"))
                })
                .catch(err => {
                    reject(err);
                });

        })
            .then(data => {
                console.log(data);
                setVerify(() => true)
                // console.log('from session-utils', data);
            })
            .catch(e => {
                console.log(e);
            });

    return verify ? children : <Navigate to="/"/>;

}