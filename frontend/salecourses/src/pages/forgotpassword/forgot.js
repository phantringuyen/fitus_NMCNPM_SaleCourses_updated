// forgot password template
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { forgotPassword } from '../../actions';
import { Form, Icon, Input, Button, Checkbox, Alert } from 'antd';
import './forgot.css';

const FormItem = Form.Item;

class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
        email: '',
        error: '',
        success: false
        };
    }
    
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
        if (!err) {
            this.props.forgotPassword(values.email);
        }
        });
    };
    
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
        <div className="forgotpassword">
            <div className="forgotpassword__container">
            <div className="forgotpassword__container__header">
                <h1>Forgot Password</h1>
            </div>
            <div className="forgotpassword__container__body">
                <Form onSubmit={this.handleSubmit} className="forgotpassword__container__body__form">
                <FormItem>
                    {getFieldDecorator('email', {
                    rules: [
                        { required: true, message: 'Please input your email!' },
                        { type: 'email', message: 'Please input a valid email!' }
                    ]
                    })(
                    <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Email"
                    />
                    )}
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit" className="forgotpassword__container__body__form__button">
                    Send Reset Link
                    </Button>
                </FormItem>
                </Form>
            </div>
            <div className="forgotpassword__container__footer">
                <Link to="/login">Login</Link>
            </div>
            </div>
        </div>
        );
    }
    }

const WrappedForgotPassword = Form.create()(ForgotPassword);

export default connect(null, { forgotPassword })(WrappedForgotPassword);

