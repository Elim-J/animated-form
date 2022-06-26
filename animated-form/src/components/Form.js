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


    function updateForm(event){
        
        setFormData(prevFormData => {

            const {name, value, type, checked} = event.target
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event){
        event.preventDefault() //this function prevents the page from refreshing and starting back at default values
        
        //if we had a function to submit to API function, we could do: submitToAPI(formData)
        //because our form is already updated

        //I'm just logging it to the console so that we can see our state object
        console.log(formData)
    }

    return (
        <div className="form--container">
            <form onSubmit={handleSubmit}>
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

                <label htmlFor="favLanguage">What's your favorite Programming Language?</label>
                <br />
                <select 
                    value={formData.languages} 
                    id="favLanguage"
                    onChange={updateForm}
                    name="languages"    
                >
                    <option value="">--Choose Option--</option>
                    <option value="Javascript">Javascript</option>
                    <option value="Python">Python</option>
                    <option value="Java">Java</option>
                    <option value="C">C</option>
                    <option value="C++">C++</option>
                    <option value="Machine Language">Machine Language</option>
                    <option value="Only Human Languages">Only Human Languages</option>
                    <option value="What's a language?">What's a language?</option>
                </select>

                <br />
                <br />
                <button>Submit</button>
            </form>
        </div>
    )
}