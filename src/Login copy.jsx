import React from "react";

class Loginmore extends React.Component{
    state={
        email:"",
        password:"",
        PasswordShown:false,
    }
    formHandler=(event)=>{
        this.setState({
            [event.target.name]:event.target.value,
        })
        console.log(this.state);
    }
    btnHandler = (event) => {
        event.preventDefault();
    }
    showPassword=()=>{
        this.setState({
            PasswordShown: !this.state.PasswordShown,
        });
    }

    render(){

        return(<React.Fragment>
            <div className="container">
                <pre>{JSON.stringify(this.state)}</pre>
                <div className="row">
                    <div className="col-md-6">
                        <h1>Login Form</h1>
                        <form>
                            <div className="form-group">
                            <input type="text" className="form-control" placeholder="Enter Email" value={this.state.email} onChange={this.formHandler} name="email"/>
                            </div>
                            <div className="form-group">
                            <input type={(this.state.PasswordShown)? "text":"password"} className="form-control" placeholder="Enter Password" 
                            value={this.state.Password} onChange={this.formHandler} name="password"/>
                            <i className="fa fa-eye fa-lg" onClick={this.showPassword}></i> 
                            
                            </div>
                        
                            <button className="btn btn-primary" onClick={this.btnHandler}>Submit</button>
                        </form>

                    </div>

                </div>

            </div>
        </React.Fragment>)
    }
}
export default Loginmore;