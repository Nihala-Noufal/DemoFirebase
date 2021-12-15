import React , {useState , useEffect} from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox,Layout } from 'antd';
import './loginform.css'

import { db } from "../firebase";



  
  const Login = () => {
    
    const [user,setUser]=useState("");
    const [password,setPassword]= useState("");
    
   
   //inserting into firestore database

         
   
    const clickLogin = (e) =>
      {
      
        e.preventDefault();
        
         
         db.collection('users').add({
           user : user,
           password : password
         })
         .then(() =>{
           alert('loggedin');
           setUser('')
           setPassword('')
           
         })
         .catch((error) => {
           alert(error.message);
         })
           
           
      
        };

    return (
    <div >
    <Layout className="login">
       <Form 
            
       >
        <h1 align="center">Login form</h1>
        
        <Form.Item
          label="Username"
          name="username"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          label="Password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password  />
        </Form.Item>
  
        <Form.Item  name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
  
        <Form.Item >
          <Button type="primary" htmlType="submit" onClick={clickLogin} >
            Login
          </Button>
        </Form.Item>
      </Form>
      </Layout>
    </div>
    );
    
  };
  
export default Login;