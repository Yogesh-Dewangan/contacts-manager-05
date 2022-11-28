import axios from "axios"
import prof from "./images/prof.png"
import React, { useState } from "react"
// import { getContacts } from "../apiutils"

const NavBar = ({ setcontacts }) => {
    const localName = localStorage.getItem('userEmail').split('@')[0]
    const localEmail = localStorage.getItem('userEmail')
    const [name, setName] = useState(localName)
    const [email, setEmail] = useState(localEmail)
    const searchHandle = async (e) => {
        let key = e.target.value
        if (key) {
            await axios.get(`http://localhost:5000/v1/contacts/${key}`,
                {
                    headers:
                        { 'Authorization': localStorage.getItem('token') }
                })
                .then(res => {
                    console.log(res.data.contactlist);
                    if (res) {
                        setcontacts([res.data.contactlist])
                    }
                })
                .catch(err => console.log(err))
        } else {
            // getContacts()
            // .then(res => {
            //     console.log(res.data.data);
            //     setcontacts(res.data.data);
            //     //setperpage(res.slice(0,10))
            //     //console.log(perpage);
            //     // setcontacts(res)..
            // })
            // .catch(err => console.log(err));

        }

    }

    return (
        <div className="nav-bar">
            <div className="navtext">
                <h3>Total Contacts</h3>
            </div>
            <div className="search-container">
                <i className="fa fa-search icon"></i>
                <input className="input-field" placeholder="Search..." type="text" onBlur={searchHandle} />
            </div>
            <div className="profile">
                <div>
                    <img className="profile-img" src={prof} />
                </div>
                <div>
                    <div>{`Welcom ${name}`}</div>
                    <div>{email}</div>
                </div>
            </div>
        </div>
    )
}
export default NavBar;