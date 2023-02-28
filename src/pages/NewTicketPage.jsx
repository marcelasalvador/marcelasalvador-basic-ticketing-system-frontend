import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function NewTicketPage() {

    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [description, setDescription] = useState("")
   
    
    const updateName = e => setName(e.target.value)
    const updateEmail = e => setEmail(e.target.value)
    const updateDescription = e => setDescription(e.target.value)

    const handleFormSubmit = e => {
        e.preventDefault();
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/new-ticket`, {
          name,
          email,
          description
        }, {
          headers: {
            authorization: `Bearer ${localStorage.getItem('authToken')}`
          }
        })
          .then(axiosResponse => {
            console.log(axiosResponse.data);
            navigate('/user-dashboard')
          })
          .catch(err => console.log(err))
      };

    return (
        <div>
        <h3>New Ticket</h3>
        <form onSubmit={handleFormSubmit}>
          <label>Name</label>
          <input value={name} onChange={updateName} />
          <label>Email</label>
          <input value={email} onChange={updateEmail} />
          <label> Description</label>
          <input value={description} onChange={updateDescription} />
          <button>Submit Ticket</button>
        </form>
      </div>
            
      
    )
}

export default NewTicketPage