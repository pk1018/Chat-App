/* eslint-disable no-unused-vars */
import { useContext } from "react";
import {Alert, Button, Form, Row, Col, Stack} from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const { loginInfo, loginError, updateLoginInfo, loginUser, isLoginLoading, logoutUser } = useContext(AuthContext);

  return (
    <>
      <Form onSubmit={loginUser}>
        <Row style={{
          height: "100vh",
          justifyContent: "center",
          paddingTop: "10%"
        }}>
          <Col xs={6}>
            <Stack gap={3}>
              <h2>Login</h2>
              
              <Form.Control placeholder="Email" type="email" onChange={(e)=> {updateLoginInfo({...loginInfo, email: e.target.value})}}/>
              <Form.Control placeholder="Password" type="password" onChange={(e)=>{updateLoginInfo({...loginInfo, password: e.target.value})}}/>

              <Button variant="primary" type="submit">
                {isLoginLoading ? "Logging into your account": "Login"}
              </Button>

              { 
                loginError?.error && <Alert variant="danger"><p>{loginError?.message}</p></Alert>
              }
            </Stack>
          </Col>
        </Row>
      </Form>
    </>
  )
}

export default Login;
