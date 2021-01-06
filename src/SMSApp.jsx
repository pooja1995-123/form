import React from "react";

class SMSApp extends React.Component{
    state={
        chars_left:100,
        max_char:100
    }

    handleCount=(e)=>{
        const count=e.target.value.length;//used for getting the total length
        const maxChar=this.state.max_char;
        const charLength=maxChar-count;//how many character left
        this.setState({
            chars_left:charLength
        })

    }
    render(){
    return(<>
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-6">
            <div className="card">
                <div className="card-header">
                    <h1>Message Box</h1>
                </div>
                <div className="card-body">
                <div className="form-floating">
                    <textarea className="form-control" placeholder="Write Something" id="floatingTextarea2"
                    row={8} type="text" maxLength="100" onChange={this.handleCount}
                    ></textarea>
                    <span>{this.state.chars_left}/
                    {this.state.max_char}</span>
                    
                    
                    </div>
                </div>

            </div>
            </div>
        </div>
        </div>

    </>)
}
}

export default SMSApp;