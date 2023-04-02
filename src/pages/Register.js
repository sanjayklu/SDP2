import React from "react";
import { Row, Col, Form, Input } from "antd";
import { Link } from "react-router-dom";
import {useDispatch , useSelector} from 'react-redux'
import { userRegister } from "../redux/actions/userActions";
import AOS from 'aos';
import {GiLoveHowl} from 'react-icons/gi'
import Spinner from '../components/Spinner';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init()
function Register() {
  const dispatch = useDispatch()
  const {loading} = useSelector(state=>state.alertsReducer)
    function onFinish(values) {
           dispatch(userRegister(values))
           console.log(values)
    }

  return (
    <div className="login">
      {loading && (<Spinner />)}
      <Row gutter={16} className="d-flex align-items-center">
        <Col lg={16} style={{ position: "relative" }}>
          <img 
           className='w-100'
           data-aos='slide-left'
           data-aos-duration='1500'
          src="https://media.istockphoto.com/id/962155748/photo/puzzled-young-man-touching-beard-looking-down-over-black-background.jpg?s=170667a&w=0&k=20&c=3zjW2h6LyLI9zsU2ZhdZzMAlZtTVh5JtVBj4c4s9VQE=" />
          <h1 className="login-logo">Welcome to Fashsion World </h1>
        </Col>
        <Col lg={8} className="text-left p-5">
          <Form layout="vertical" className="login-form p-5" onFinish={onFinish}>
            <h1>Register</h1>
            <hr />
            <Form.Item
              name="username"
              label="Username"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="cpassword"
              label="Confirm Password"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>

            <button className="btn1 mt-2 mb-3">Register</button>
            <br />

            <Link to="/login">Click Here to Login</Link>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Register;