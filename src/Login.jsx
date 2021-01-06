import React from "react";

class Login extends React.Component{
    state={
        email:"",
        password:""
    }
    emailHandler=(event)=>{
        this.setState({
            email:event.target.value,
        })
        console.log(this.state.email);
    }
    passHandler=(event)=>{
        this.setState({
            password:event.target.value,
        })
        console.log(this.state.password);
    }
    btnHandler=(e)=>{
        e.preventDefault();
        alert(JSON.stringify(this.state));
    }

    render(){
        return(<React.Fragment>
            <div className="container">
                <div className="row justify-content-center ">
                    <div className="col-md-6 bg-secondary">
                        <h1>Login Form</h1>
                        <form>
                            <div className="form-group">
                            <input type="text" className="form-control" placeholder="Enter Email" value={this.state.email} onChange={this.emailHandler}/>
                            </div>
                            <div className="form-group">
                            <input type="text" className="form-control" placeholder="Enter Password" value={this.state.Password} onChange={this.passHandler}/>
                            </div>
                            <button className="btn btn-primary"onClick={this.btnHandler}>Submit</button>
                        </form>

                    </div>

                </div>

            </div>
        </React.Fragment>)
    }
}
export default Login;