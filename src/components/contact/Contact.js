import React from 'react';

class Contact extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            isSubmitted:false,
            formData:{
                firstName:'',
                lastName:'',
            }
        }
    }

handleChange = (event)=>{
    const formData = {...this.state.formData};
    formData[event.target.name]=event.target.value;//new object

    this.setState({formData});
}

handleSubmit = (event)=>{
    event.preventDefault();

    this.setState({
        submitted: true
    });
}
resetForm = (event)=> {
    this.setState({
        submitted: false,
        formData: {
            firstName:'',
            lastName:''
        }
    });
}

    render(){
        if(this.state.submitted){
            return(
                <div className="Contact">
                    <p>
                        Thank you, {this.state.formData.firstName}, for your submission.
                    </p>
                    <button onClick = {this.resetForm}>Reset Form</button>
                </div>
            )
        }
        return(
            <div className = "Contact">
                <form onSubmit = {this.handleSubmit}>
                    <div>
                    <label htmlFor="firstName">First Name</label>
                    <input 
                    type="text" 
                    name="firstName" 
                    value={this.state.formData.firstName}
                    onChange={this.handleChange}
                    />
                    </div>
                
            

            <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input 
                    type="text" 
                    name="lastName" 
                    value={this.state.formData.lastName}
                    onChange={this.handleChange}
                    />

                    </div>
                    <button>Submit Form</button>
                </form>

                <div>
                    {this.state.formData.firstName}
                    <br/>
                    {this.state.formData.lastName}
                </div>
            </div>

        );

    }
}

export default Contact;