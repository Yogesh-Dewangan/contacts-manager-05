import React from "react"
import Contacts from "./contact-page-components/contactpage"
// import NavBar from "./contact-page-components/navbar"
import Sidebar from "./contact-page-components/sidebar"
import "./contact-page-components/mainpagestyles.css"
const MainContactsPage = () => {
    return (
        <div className="contact-page">
            <div>
                <Sidebar />
            </div>
            <div>
                 
                <Contacts />
            </div>

        </div>
    )
}
export default MainContactsPage