import React, { Component } from 'react'
import { Button,Form,FormGroup,label,Input,FormText} from 'reactstrap';
import'./Main.css';
import axios from 'axios';
import { Link , Redirect} from 'react-router-dom';
export default class CarBooking extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            name: '',
            contact: '',
            location:',',
            carnumber:'',
            problem:'',
            model:'',
            type:'',
            servicing:'',
            date:'',
            time:''
        }
    }


handleChange=(event) =>{
    this.setState({
        [event.target.name]:event.target.value
    })
}
isBooked=(event) =>{
    event.preventDefault();
    console.log(this.state);
    axios.post('http://localhost:3000/carbooking', this.state)
    .then((response)=>{
        console.log(response.data);
        localStorage.setItem('token',response.data.token)
        this.setState({
            name: '',
            contact: '',
            location:',',
            carnumber:'',
            problem:'',
            model:'',
            type:'',
            servicing:'',
            date:'',
            time:'',
        });
    }).catch((err)=>console.log(err))
    
}

 



render() {
    return (
        <div className="box">
        <h1>Booking</h1>
        <Form >
                <FormGroup align="left">
                    <label for='name'>Name</label>
                    <Input type="text" name='name' placeholder="Enter Name" id="name " value={this.state.name}
                    onChange={this.handleChange}/>
                </FormGroup>

                <FormGroup align="left">
                    <label for='contact  '>contact </label>
                    <Input type="text" name='contact' placeholder="Enter contact number" id="contact" value={this.state.contact}
                    onChange={this.handleChange}/> 
                </FormGroup>

                <FormGroup align="left">
                    <label for='location'>location</label>
                    <Input type="text" name='location' placeholder="Enter location" id="location" value={this.state.location}
                    onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup align="left">
                    <label for='carnumber'>Carnumber</label>
                    <Input type="Text" name='carnumber' placeholder="Enter carnumber" id="carnumber" value={this.state.carnumber}
                    onChange={this.handleChange}/>
                </FormGroup>

                <FormGroup align="left">
                    <label for='problem'>Problem</label>
                    <Input type="text" name='problem' placeholder="Enter problem" id="problem" value={this.state.problem}
                    onChange={this.handleChange}/>
                </FormGroup>

                <FormGroup align="left">
                    <label for='model'>Model</label>
                    <Input type="text" name='model' placeholder="Enter Model" id="model" value={this.state.model}
                    onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup align="left">
                    <label for='type'>Type</label>
                    <Input type="text" name='type' placeholder="type" id="type" value={this.state.type}
                    onChange={this.handleChange}/>
                </FormGroup>

                <FormGroup align="left">
                    <label for='servicing'>servicing</label>
                    <Input type="text" name='servicing' placeholder="servicing" id="servicing" value={this.state.servicing}
                    onChange={this.handleChange}/>
                </FormGroup>

                <FormGroup align="left">
                    <label for='date'>Date</label>
                    <Input type="text" name='date' placeholder="date" id="date" value={this.state.date}
                    onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup align="left">
                    <label for='time'>Time</label>
                    <Input type="text" name='time' placeholder="time" id="time" value={this.state.time}
                    onChange={this.handleChange}/>
                </FormGroup>

                <Button className="btn-primary" onClick={this.isBooked}>Book Now</Button>
                 
            </Form>

        </div>
    )
}
}