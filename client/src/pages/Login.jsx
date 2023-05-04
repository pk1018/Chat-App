/* eslint-disable no-unused-vars */
import {Alert, Button, Form, Row, Col, Stack} from "react-bootstrap";

function Login() {
  return (
    <>
      <Form>
        <Row style={{
          height: "100vh",
          justifyContent: "center",
          paddingTop: "10%"
        }}>
          <Col xs={6}>
            <Stack gap={3}>
              <h2>Login</h2>
              
              <Form.Control placeholder="Email" type="email"/>
              <Form.Control placeholder="Password" type="password"/>

              <Button variant="primary" type="submit">Login</Button>

              <Alert variant="danger"><p>An error occured</p></Alert>
            </Stack>
          </Col>
        </Row>
      </Form>
    </>
  )
}

export default Login;
