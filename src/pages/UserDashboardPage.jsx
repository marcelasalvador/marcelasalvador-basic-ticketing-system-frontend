import { Link } from "react-router-dom";
function UserDashboardPage() {

    return (
        <div>
            <h1>USER DASHBOARD PAGE</h1>
            
                 <Link to="/new-ticket">
                 <button>Submit New Ticket</button>
                </Link>
          
           
        </div>
    )
}

export default UserDashboardPage