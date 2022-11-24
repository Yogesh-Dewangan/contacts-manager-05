import axios from "axios"

import React, { useState } from "react"
const NavBar = ({ getcontacts, setcontacts }) => {
    const [search, setsearch] = useState("")
    const searchHandle = async (event) => {
        //    
        //     if(key){

        //     }
        //     let result=await axios.get(`https://jsonplaceholder.typicode.com/posts/${key}`)
        //     .then(res=>{
        //         console.log(res.data)


        //     })
        //     .catch(err=>console.log(err));

        try {
            let key = event.target.value
            if (key) {
                let res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${key}`)
                res = await res.data
                console.log(res);
                if (res) {
                    setcontacts(res)
                }
            }
            else{
                getcontacts()
            }


        } catch (err) {
            console.log(err)
        };

    }
    return (
        <div className="nav-bar">
            <div className="navtext">
                <h3>Total Contacts</h3>
            </div>
            <div className="search-container">
                <i className="fa fa-search icon"></i>
                <input className="input-field" type="text" onChange={searchHandle} />

            </div>
            <div className="profile">
                <div>
                    <img className="profile-img" src="" />
                </div>

                <div>
                    <div>name</div>
                    <div>Super Admin</div>
                </div>
            </div>
        </div>
    )
}
export default NavBar;