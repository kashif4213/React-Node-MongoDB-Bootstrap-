import React, { useState } from 'react';
import { Form, Input, InputNumber, Button } from 'antd';
import logo from './logo.svg';
import Navbar from './Navbar';
import './App.css';
import Button1 from './Button1';
import Button2 from './Button2';
import PostData from './PostData';
import PostData1 from './PostData1';
import axios from 'axios';
import SkeletonInput from 'antd/lib/skeleton/Input';
const arr=['SIGN UP','SIGN IN']
var details=[{fName:"",lName:"",email:"", pass:""}];
var placeholders=['First Name', 'Last Name','Email Address', 'Password']


var signUp=false;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 12 },
};




function App()
{
  const [count, setCount] = useState(false);
  const [signUp, setSignUp] = useState(true);
  const [item, setItem] = useState([]);
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [form] = Form.useForm();
  const [form2] = Form.useForm();
function register(){
  
  details.fName=fName;
  details.lName=lName;
  details.email=email;
  details.pass=pass;
  console.log(details);
 // axios.post("http://localhost:3000/postData",details)
  //PostData(details);
   while(true)
   {
 
   }
   
  
  }

function handleChange(event)
{
  setFName(event.target.value);
}

function handleChange1(event)
{
  setLName(event.target.value);
}

function handleChange2(event)
{
  setEmail(event.target.value);
}

function handleChange3(event)
{
  setPass(event.target.value);
}



const onFinish2= (values)=>{
  details.fName=fName;
  details.lName=lName;
  details.email=email;
  details.pass=pass;
  console.log(values);
  PostData(values);
}

  const onFinish1=(values)=>{
    
    console.log(values);
  axios.post("http://localhost:3000/postData1",values)
  .then(res=>
    {
      if (res.data.pass==values.pass)
      {
        console.log(res.data);
        console.log("Validated");

      }
      else{
        
        console.log(res.data);
        console.log("NOT Validated");

      }
    })
  
  }

  function tab(event)
  {
    console.log("clicked");

setSignUp(true);

  
  }
  function tab1()
  {
    console.log("clicked");

setSignUp(false);

  
  }

return <div className="App">
       <Navbar/>
      <div className="outerBox">
      <div className="topButtons">
 {/* {
   arr.map(ar=>
  
     <Button1
   name={ar}
   onClick={tab}
 />

 )} */}
 <button className ="Button1" onClick={tab}>{arr[0]} </button>
 <button className ="Button1" onClick={tab1}>{arr[1]} </button>
      </div>
{
  signUp == true ?


<div>
  
<h1>Create your account</h1>
 <p class="">Build skills for today, tomorrow, and beyond.<br></br>Education to future-proof your career.</p>


      <div className="socialBtn"><Button2 name="google"/>
 <Button2 name="fb"/>

 </div>

 <table className="separation">
   <tr>
     <td className="before">
    
   <hr></hr>

     </td>
     <td
     className="bw"><p>or</p></td>
     <td className="after">

    
 <hr></hr>

     </td>
   </tr>
 </table>

{/* 
 <Form
      name="basic"

      onFinish={register}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form> */}

 {/* <form >
              

                <div className="form-group">
                    <label></label>
                    <input type="text" className="myInput" placeholder="First name" onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label></label>
                    <input type="text" className="myInput" placeholder="Last name" onChange={handleChange1}/>
                </div>

                <div className="form-group">
                    <label></label>
                    <input type="email" className="myInput" placeholder="Enter email" onChange={handleChange2}/>
                </div>

                <div className="form-group">
                    <label></label>
                    <input type="password" className="myInput" placeholder="Enter password" onChange={handleChange3}/>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={register}>Register</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">log in?</a>
                </p>
            </form> */}

 <Form 
 form={form} {...layout} name="nest-messages" onFinish={(values) => {


                  console.log(values);
                  details.fName=fName;
                 
                  axios({
        method:"POST",url :"http://localhost:3000/postData", data:values
    });
                }} >
      <Form.Item   name={[ 'fName']} rules={[{ required: true }]}>
        <Input placeholder={placeholders[0]} className="myInput" onChange={handleChange} />
      </Form.Item>
      <Form.Item  name={['lName']} rules={[{ required: true }]}>
        <Input placeholder={placeholders[1]} className="myInput"  onChange={handleChange1}/>
      </Form.Item>
      <Form.Item  name={['email']} rules={[{ type: 'email', required: true }]}>
        <Input placeholder={placeholders[2]} className="myInput"  onChange={handleChange2}/>
      </Form.Item>
     
      <Form.Item  name={[ 'pass']} rules={[{ required: true }]}>
        <Input type="password" placeholder={placeholders[3]} className="myInput"  onChange={handleChange3}/>
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
      <p>By clicking Sign Up, you agree to our Terms of Use and our Privacy Policy.</p>

        <Button className="signUp" type="primary" htmlType="submit">
         SIGN UP
        </Button>
      </Form.Item>
    </Form>
  


</div>
:
<div>
<Form form={form2} {...layout} name="nest-messages1" onFinish={onFinish1} >
      
      <Form.Item  class="signIn" name={['email']} rules={[{ type: 'email', required: true }]}>
        <Input placeholder={placeholders[2]} className="myInput"/>
      </Form.Item>
     
      <Form.Item  name={[ 'pass']} rules={[{ required: true }]}>
        <Input type="password" placeholder={placeholders[3]} className="myInput"/>
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
      <p>By Signing In, you agree to our Terms of Use and our Privacy Policy.</p>

        <Button className="signUp" type="primary" htmlType="submit">
         SIGN IN
        </Button>
      </Form.Item>
    </Form>
</div>

}
      </div>


 </div>



}



export default App;
