/* eslint-disable no-unused-vars */
import {Alert, Button, Form, Row, Col, Stack} from "react-bootstrap";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Register() {
  const { registerInfo, updateRegisterInfo, registerUser, registerError, isRegisterLoading } = useContext(AuthContext);

  return (
    <>
    <Row>
        <Col xs={12} md={4}> {/* xs=12 will make the image column take the full width on smaller screens */}
          <img src="/register.svg" alt="" style={{ width: "100%", paddingTop: "80px", paddingLeft: "20px" }}/> {/* Set the width to 100% to scale the image */}
        </Col>

        <Col xs={12} md={8}>
        <Form onSubmit={registerUser}>
        <Row style={{
          height: "100vh",
          justifyContent: "center",
          paddingTop: "10%"
        }}>
          <Col xs={9}>
            <Stack gap={3}>
              <h2 className="text-center text-white">Register</h2>
              
              <Form.Control placeholder="Name" type="text" onChange={(e) => {
                updateRegisterInfo({...registerInfo, name: e.target.value});
              }} />
              <Form.Control placeholder="Email" type="email" onChange={(e) => {
                updateRegisterInfo({...registerInfo, email: e.target.value});
              }}/>
              <Form.Control placeholder="Password" type="password" onChange={(e) => {
                updateRegisterInfo({...registerInfo, password: e.target.value});
              }}/>

              <Button variant="primary" type="submit">
                {isRegisterLoading ? "Creating your account": "Register"}
              </Button>

              {
                registerError?.error && <Alert variant="danger"><p>{registerError?.message}</p></Alert>
              }
            </Stack>
          </Col>
        </Row>
      </Form>
        </Col>
      </Row>
      
    </>
  )
}

export default Register
