import React, {Component} from 'react'

class UserInfo extends Component{
    state = {
        name: null,
        phone: null,
        email: null,
        message: null,
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render(){
        return(
            <div className="UserInfo">
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="form-group">
                                <input className="form-control" id="name" type="text" placeholder="Your Name" onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <input className="form-control" id="phone"  type="text" placeholder="Your Phone Number" onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <input className="form-control" id="email" type="text" placeholder="Your E-mail" onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group form-group-textarea">
                                <textarea className="form-control" id="message" placeholder="Any further information you need or want to provide" onChange={this.handleChange}></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="text-center"><button>SUBMIT</button></div>
                </form>
            </div>
        )
    }

}

export default UserInfo;