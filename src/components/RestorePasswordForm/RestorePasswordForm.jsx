import React, {Component} from 'react';
import {CopyRight} from 'components';
import {Button, Label, Grid, Header, Segment} from 'semantic-ui-react';
import {Form} from 'formsy-semantic-ui-react';

export default class RestorePasswordForm extends Component {
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
              Restore Password
            </Header>
            <Form loading={this.state.isSubmit} size="large" onValidSubmit={this.onSubmit} noValidate>
              <Segment textAlign="left">
                <Form.Input
                  fluid
                  type="password"
                  icon="lock"
                  size="large"
                  name="password"
                  iconPosition="left"
                  placeholder="New password"
                  validations="minLength:6"
                  required
                  passRequiredToField={false}
                  validationErrors={{minLength: 'Password too short', isDefaultRequiredValue: 'Password is required'}}
                  errorLabel={errorLabel}/>
                <Form.Input
                  fluid
                  type="password"
                  icon="lock"
                  size="large"
                  name="confirm_password"
                  iconPosition="left"
                  placeholder="Confirm password"
                  validations="minLength:6,equalsField:password"
                  required
                  passRequiredToField={false}
                  validationErrors={{equalsField: 'Password confirmation does not match', minLength: 'Password confirm too short', isDefaultRequiredValue: 'Password confirm is required'}}
                  errorLabel={errorLabel}/>
                <Button className="btn-submit" fluid size="large">Change password</Button>
              </Segment>
            </Form>
            <CopyRight/>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
