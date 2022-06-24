import React from "react"
import "../styles/Form.css"
export default function Form(){

    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        userName: ""
    })

    console.log(formData)

    function updateForm(event){
        
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    return (
        <div className="form--container">
            <form>
                <input 
                    type="text" 
                    placeholder="First Name"
                    name="firstName"
                    onChange={updateForm}
                />

                <input 
                    type="text" 
                    placeholder="Last Name"
                    name="lastName"
                    onChange={updateForm}
                />

                <input 
                    type="text" 
                    placeholder="Email"
                    name="email"
                    onChange={updateForm}
                />

                <input 
                    type="text" 
                    placeholder="Username"
                    name="userName"
                    onChange={updateForm}
                />
            </form>
        </div>
    )
}