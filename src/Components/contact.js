import React from "react";

import './contact.css';

/*----------------React imports ---------------------------*/
import react, { useState } from "react";


/*----------------Firebase imports ---------------------------*/
import { db } from "../firebase";


/*-------------------------ANT imports-----------------------*/
import { Form, Input, Button,Layout } from 'antd';

const Contact = () => {

   
    const [name,setName]=useState("");
    const [address,setAddress]=useState("");

 /*-------------------------Add datainto firestore-----------------------*/
    const handleSubmit=() =>{
      //  e.preventDefault();
        db.collection('userss').add({
                name:name,
                address:address,
            })
         
              setName("")
              setAddress("")
    }


/*-------------------------Delete datainto firestore-----------------------*/
  const  handleDelete=()=>{
}

/*-------------------------Get datainto firestore-----------------------*/
  const handleGet=()=>{
    db.collection('userss').get().then(snapshot =>{
          snapshot.forEach((obj)=>{
              console.log(obj.data())
          })

        })
    }

  
    return(
        
      <div className="maindiv">
 <Layout className="contact">
     
      <Form  
      
      labelCol={{
        span: 5,
      }}
      wrapperCol={{
        span: 8,
      }}
   
    
     
      >
      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input your name!',
          },
        ]}
      >
        <Input  placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
        
      
      </Form.Item>
      <Form.Item
        label="Address"
        name="address"
        rules={[
          {
            required: true,
            message: 'Please input your address!',
          },
        ]}
      >
        <Input placeholder="Enter address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        />
      </Form.Item>


      
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button  type="primary"   onClick={()=>{handleSubmit()}}>
          Submit
        </Button>
        &nbsp;&nbsp;&nbsp;
        <Button  type="primary"   onClick= {()=>{handleDelete()}}>
          Delete
        </Button>
        &nbsp;&nbsp;&nbsp;
        <Button  type="primary"   onClick= {()=>{handleGet()}}>
          Show
        </Button>
      </Form.Item>
      </Form>
      </Layout>
      </div>
    
       
        
    )

}
export default Contact;