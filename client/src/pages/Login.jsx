import { useContext } from "react";
import { Alert, Button, Form, Row, Col, Stack } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const { loginInfo, loginError, updateLoginInfo, loginUser, isLoginLoading } = useContext(AuthContext);

  return (
    <>
      <Row>
        <Col xs={12} md={4}> {/* xs=12 will make the image column take the full width on smaller screens */}
          <img src="/login.svg" alt="" style={{ width: "100%" }} /> {/* Set the width to 100% to scale the image */}
        </Col>

        <Col xs={12} md={8}>
          <Form onSubmit={loginUser}>
            <Row style={{
              height: "100vh",
              justifyContent: "center",
              paddingTop: "10%"
            }}>
              <Col xs={10} md={8}> {/* Adjust the column size for the form content */}
                <Stack gap={3}>
                  <h2 className="text-center text-white">Login</h2>

                  <Form.Control placeholder="Email" type="email" onChange={(e) => { updateLoginInfo({ ...loginInfo, email: e.target.value }) }} />
                  <Form.Control placeholder="Password" type="password" onChange={(e) => { updateLoginInfo({ ...loginInfo, password: e.target.value }) }} />

                  <Button variant="primary" type="submit">
                    {isLoginLoading ? "Logging into your account" : "Login"}
                  </Button>

                  {
                    loginError?.error && <Alert variant="danger"><p>{loginError?.message}</p></Alert>
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

export default Login;
