import React  from "react"
import logo from "./images/logoimage.png"
import logout from "./images/im/logout.png"
import contact from "./images/contact.png"
import { Link , useNavigate} from "react-router-dom"

const Sidebar=()=>{
    const navigate=useNavigate();
    return(
        <div className="side-bar">
            <div>
                <div className="logo">
                    <img src={logo} styles={{height:"30px",width:"50px"}} alt="logoImg"/>
                </div>
                <div className="dash">
                <h3 className="dashboard">
                    
                     Dashboard</h3>
                <div className="total-contactstext">
                <img src={contact} style={{marginRight:"10px"}} alt="contacyImg"/>
                    total contacts </div>
                </div>
                <footer className="footer">
                    <Link to="/signIn">
                    <button style={{display:"flex",flexDirection:"row",width:"80%",marginLeft:"10px"}}>
                        <img src={logout} alt="logoutImg"
                        onClick={() => {
                            navigate("/");
                            localStorage.clear("token");
                            window.location.reload();
                          }}
                        />
                        <div className="logtext">Log out</div>
                    </button>
                    </Link>
                    
                    
                </footer>
            </div>
        </div>
    )
}
export default Sidebar
