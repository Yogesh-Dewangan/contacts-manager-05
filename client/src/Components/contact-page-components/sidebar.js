import React  from "react"
import logo from "./images/logoimage.png"
import logout from "./images/im/logout.png"
import contact from "./images/contact.png"

const Sidebar=()=>{
    return(
        <div className="side-bar">
            <div>
                <div className="logo">
                    <img src={logo} styles={{height:"30px",width:"50px"}} alt="image"/>
                </div>
                <div className="dash">
                <h3 className="dashboard">
                    
                     Dashboard</h3>
                <div className="total-contactstext">
                <img src={contact} style={{marginRight:"10px"}}/>
                    total contacts</div>
                </div>
                <footer className="footer">
                    <button style={{display:"flex",flexDirection:"row",width:"80%",marginLeft:"10px"}}>
                        <img src={logout}/>
                        <div className="logtext">Log out</div>
                    </button>
                    
                </footer>
            </div>
        </div>
    )
}
export default Sidebar
