import { Form, Input, Button, Checkbox, notification, message } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom'
import { useEffect } from "react";
import './index.css'
import { connect } from "react-redux";
import { compose } from "recompose";
import { createStructuredSelector } from "reselect";
import { loginRequestAction } from './stores/actions'
import { selectLoading } from './stores/selector'

const Login = (props) => {
    const navigate = useNavigate()
    const onFinish = (values) => {
        console.log('Success:', values);
        const payload = {
            params: {
                userName: 'admineh',
                password: 'Estella1230'
            },
            navigate
        }
        if (values.username === 'admineh' && values.password === 'Estella1230') {
            console.log(payload)
            props.loginAction(payload)
            notification.open({
                message: 'Login',
                description:
                    'Login success',
                icon: <SmileOutlined style={{ color: '#108ee9' }} />,
            });
        } else {
            notification.open({
                message: 'Login',
                description:
                    'Login Failed',
                icon: <SmileOutlined style={{ color: 'red' }} />,
            });
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div class="container login">
        <div class="body d-md-flex align-items-center justify-content-between">
            <div class="box-1 mt-md-0 mt-5">
                <img src="https://images.pexels.com/photos/2033997/pexels-photo-2033997.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    class="" alt=""/>
            </div>
            <div class=" box-2 d-flex flex-column h-100">
                <div class="mt-5">
                    <p class="mb-1 h-1">Login</p>
                    <p class="text-muted mb-2"><i>Imagination is more important than knowledge</i> Albert Einstein</p>
                    <div class="d-flex flex-column ">
                    <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Login
                    </Button>
                </Form.Item>
            </Form>
                    </div>
                </div>
                <div class="mt-auto">
                    <p class="footer text-muted mb-0 mt-md-0 mt-4">By register you agree with our
                        <span class="p-color me-1">terms and conditions</span>and
                        <span class="p-color ms-1">privacy policy</span>
                    </p>
                </div>
            </div>
        </div>
    </div>

    );
};
// export default Login;

const mapStatetoProps = createStructuredSelector({
    isLoading: selectLoading
})

const mapDispatchtoProps = (dispatch) => ({
    loginAction: (payload) => dispatch(loginRequestAction(payload))
})

const withConnect = connect(mapStatetoProps, mapDispatchtoProps)

export default compose(withConnect)(Login);