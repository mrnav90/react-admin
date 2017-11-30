import React, {Component} from 'react';
import {CopyRight} from 'components';
import {Button, Label, Grid, Header, Segment} from 'semantic-ui-react';
import {Form} from 'formsy-semantic-ui-react';

export default class ForgotPasswordForm extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isSubmit: false
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(formData) {
    this.setState({isSubmit: true});
  }

  render() {
    const errorLabel = <Label color="red" pointing={true} basic={true} />;
    return (
      <div className="guest-page">
        <Grid textAlign="center" verticalAlign="middle">
          <Grid.Column>
            <Header as="h1" textAlign="center">
              Forgot Password
            </Header>
            <Form loading={this.state.isSubmit} size="large" onValidSubmit={this.onSubmit} noValidate>
              <Segment textAlign="left">
                <Form.Input
                  fluid
                  icon="at"
                  size="large"
                  name="email"
                  iconPosition="left"
                  placeholder="E-mail address"
                  validations="isEmail"
                  required
                  passRequiredToField={false}
                  validationErrors={{isEmail: 'Email not valid', isDefaultRequiredValue: 'Email is required'}}
                  errorLabel={errorLabel}/>
                <Button className="btn-submit" fluid size="large">Send</Button>
              </Segment>
            </Form>
            <CopyRight/>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
