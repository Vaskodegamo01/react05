import React, {Component, Fragment} from 'react';
import axios from '../../axios-shop';
import Header from "../../Components/UI/Header";

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.fileInput = React.createRef();
        this.state = {
            products: null,
            name: '',
            description: '',
            price: 0,
            image: '',
            category: ''
        };
    }
    user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
    handleChangeName = (event) => {
        this.setState({name: event.target.value});
    };
    handleChangeDescription = (event) => {
        this.setState({description: event.target.value});
    };
    handleChangePrice = (event) => {
        this.setState({price: event.target.value});
    };
    handleChangeCategory = (event) => {
        this.setState({category: event.target.value});
    };

    componentDidMount() {
        axios.get('products').then(response=>{
            this.setState({products: response.data})
        })
    }

    Add = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.set('name', this.state.name);
        formData.set('description', this.state.description);
        formData.set('price', this.state.price);
        formData.set('image', this.fileInput.current.files[0]);
        formData.set('category', this.state.category);
        const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
        if(user !== null) {
            const header = {"Token": user.token};
            axios.post('products',formData,{
                headers: header})
            .then(()=>{
                window.location.assign('http://localhost:3000');
            })
            .catch((response) => alert(response));
    }};


    render() {
        const url = 'http://localhost:8000/uploads/';
        const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
        return (
            <Fragment>
                <Header/>
                {user !== null ?
                    <form>
                        <label>
                            name:
                            <input type="text" name="name" value={this.state.name} onChange={(event)=>this.handleChangeName(event)}/>
                        </label>
                        <label>
                            description:
                            <input type="text" name="description" value={this.state.description} onChange={(event)=>this.handleChangeDescription(event)}/>
                        </label>
                        <label>
                            price:
                            <input type="number" name="price" value={this.state.price} onChange={(event)=>this.handleChangePrice(event)}/>
                        </label>
                        <label>
                            category:
                            <input type="text" name="category" value={this.state.category} onChange={(event)=>this.handleChangeCategory(event)}/>
                        </label>
                        <label>
                            image:
                            <input type="file" name="image" ref={this.fileInput}/>
                        </label>
                        <button onClick={(e)=>this.Add(e)}>send info</button>
                    </form> : null}
                {!this.state.products ? <div>loading</div> : this.state.products.map((item,index)=>{
                    return(
                        <div key={index}>
                            <img src={url+ item.image} alt=""/>
                            <span>{item.name}</span>
                            <span>{item.price}</span>
                        </div>
                    )
                })}
            </Fragment>

        );
    }
}

export default HomePage;