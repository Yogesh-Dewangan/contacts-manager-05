import React  from "react"
import Contacts from "./contact-page-components/contactpage"
import NavBar from "./contact-page-components/navbar"
import Sidebar from "./contact-page-components/sidebar"
const MainContactsPage=()=>{
    return(
        <>
            <NavBar/>
            <Sidebar/>
            <Contacts/>
        </>
    )
}
export default MainContactsPage