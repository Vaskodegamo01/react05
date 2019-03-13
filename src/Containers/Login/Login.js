import React, {Component, Fragment} from 'react';
import axios from '../../axios-shop';
import Header from "../../Components/UI/Header";
import './Login.css';

class Login extends Component {
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

    Login = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.set('username', this.state.username);
        formData.set('password', this.state.password);

        axios.post('users/sessions', formData)
            .then(response=>{
               response.status === 200 ? localStorage.setItem('user', JSON.stringify(response.data)): alert(response.data);
                window.location.assign('http://localhost:3000');
        })
            .catch((response) => alert(response));
    };
    render() {
        return (
            <Fragment>
                <Header/>
                <div>
                    <h1>Форма Авторизации</h1>
                    <form>
                        <label>
                            username:
                            <input type="text" name="username"  value={this.state.username} onChange={(event)=>this.handleChangeUserName(event)}/>
                        </label>
                        <label>
                            password:
                            <input type="text" name="password" value={this.state.password} onChange={(event)=>this.handleChangePassword(event)}/>
                        </label>
                        <button onClick={(e)=>this.Login(e)}>Login</button>
                    </form>
                </div>
            </Fragment>

        );
    }
}

export default Login;