import React, { Component } from 'react'
import { Button,Form,FormGroup,label,Input,FormText} from 'reactstrap';
import { Layout,Header,Textfield, HeaderRow,Drawer,Navigation,Content, Grid, Cell,Footer,FooterSection,FooterLinkList} from 'react-mdl';
import'./Main.css';
import axios from 'axios';
import { Link , Redirect} from 'react-router-dom';
export default class BikeBooking extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            name: '',
            contact: '',
            location:',',
            bikenumber:'',
            problem:'',
            model:'',
            type:'',
            date:'',
            time:'',
            config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            }
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
    axios.post('http://localhost:3000/bikebooking', this.state, this.state.config)
    .then((response)=>{
        console.log(response.data);
        localStorage.setItem('token',response.data.token)
        this.setState({
            name: '',
            contact: '',
            location:',',
            bikenumber:'',
            problem:'',
            model:'',
            type:'',
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
                    <label for='bikenumber'>Bikenumber</label>
                    <Input type="Text" name='bikenumber' placeholder="Enter bikenumber" id="bikenumber" value={this.state.bikenumber}
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
                <br></br>
                <Footer size="mini">
    <FooterSection type="left" logo="Title">
        <FooterLinkList>
            <a href="#">Help</a>
            <a href="#">Privacy & Terms</a>
        </FooterLinkList>
    </FooterSection>
</Footer>  
            </Form>

        </div>
    )
}
}