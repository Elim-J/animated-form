import React from "react"
import "../styles/Form.css"
export default function Form(){

    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        userName: "",
        comments: "",
        knowReact: false,
        languages: ""
    })

    console.log(formData)

    function updateForm(event){
        
        setFormData(prevFormData => {

            const {name, value, type, checked} = event.target
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
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
                    value={formData.firstName}
                />

                <input 
                    type="text" 
                    placeholder="Last Name"
                    name="lastName"
                    onChange={updateForm}
                    value={formData.lastName}
                />

                <input 
                    type="email" 
                    placeholder="Email"
                    name="email"
                    onChange={updateForm}
                    value={formData.email}
                />

                <input 
                    type="text" 
                    placeholder="Username"
                    name="userName"
                    onChange={updateForm}
                    value={formData.userName}
                />

                <textarea 
                    placeholder="Add Comments Here"
                    name="comments"
                    value={formData.comments}
                    onChange={updateForm}
                />

                <input 
                    type="checkbox"
                    id="knowReact"
                    checked={formData.knowReact}
                    onChange={updateForm}
                    name="knowReact"
                />
                <label htmlFor="knowReact">Do you know React?</label>
                <br />
                <br />
                <fieldset>
                    <legend>How many programming languages do you know?</legend>
                    <input 
                        type="radio"
                        id="none"
                        checked={formData.languages === "none"}
                        onChange={updateForm}
                        name="languages"
                        value="none"
                    />
                    <label htmlFor="none">None</label>

                    <br />

                    <input 
                        type="radio"
                        id="one"
                        value="one"
                        name="languages"
                        onChange={updateForm}
                        checked={formData.languages === "one"}

                    />
                    <label htmlFor="one">One</label>

                    <br />

                    <input 
                        type="radio"
                        id="more"
                        name="languages"
                        value="Too many to count"
                        onChange={updateForm}
                        checked={formData.languages === "Too many to count"}
                    />

                    <label htmlFor="more">Too many to count</label>

                    <br />
                </fieldset>
            </form>
        </div>
    )
}