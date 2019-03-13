import React, {Component, Fragment} from 'react';
import axios from '../../axios-shop';
import Header from "../../Components/UI/Header";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }


    handleChangeUserName = (event) => {
        this.setState({username: event.target.value});
    };
    handleChangePassword = (event) => {
        this.setState({password: event.target.value});
    };

    Register = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.set('username', this.state.username);
        formData.set('password', this.state.password);

        axios.post('users', formData)
            .then(response=>{
            console.log(response.status);
            response.status === 200 ? window.location.assign('http://localhost:3000/login'): alert(response.data);
        })
            .catch((response) => alert(response));
    };
    render() {
        return (
            <Fragment>
                <Header/>
                <div>
                    <h1>Форма Регистрации</h1>
                    <form>
                        <label>
                            username:
                            <input type="text" name="username"  value={this.state.username} onChange={(event)=>this.handleChangeUserName(event)}/>
                        </label>
                        <label>
                            password:
                            <input type="text" name="password" value={this.state.password} onChange={(event)=>this.handleChangePassword(event)}/>
                        </label>
                        <button onClick={(e)=>this.Register(e)}>Register</button>
                    </form>
                </div>
            </Fragment>

        );
    }
}

export default Register;