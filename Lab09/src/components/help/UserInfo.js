//Rohaan Williams
import React, {Component} from 'react'


class UserInfo extends Component{
    state = {
        name: "",
        phone: "",
        email: "",
        message: "",
        showInfo:false
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.setState({
            showInfo: true,
            name: this.state.name,
            phone: this.state.phone,
            email: this.state.email,
            message:this.state.message
        });
        return(
            alert("Thank you" +this.state.name + ", we will get in touch with you on" +this.state.email+" or on "+this.state.phone+" regarding you message. We hope you have a Lovely day!")
        )
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
                                <input className="form-control" id="phone"  type="text" placeholder="Your Phone Number [Format:XXXXXXXXXX]" onChange={this.handleChange} />
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
                    <div className="text-center"><button disabled={this.state.email.length<1 | this.state.name.length<1 | this.state.phone.length<8 | this.state.phone.length>13 | this.state.message.length<1}>SUBMIT</button></div>
                    <u><hr></hr></u>
                    {this.state.showInfo && <h3>Thank you {this.state.name}, we will get in touch with you on {this.state.email} or on {this.state.phone} regarding you message. We hope you have a Lovely day!</h3>}
                </form>
            </div>
        )
    }

}

export default UserInfo;

///^\([0-9]{1,3}\)[0-9]{1,3}[-][0-9]{1,4}[ ]*$/