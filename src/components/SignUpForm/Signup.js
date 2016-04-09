var React = require('react');
import {Input,ButtonInput} from 'react-bootstrap';

var SignUpForm = React.createClass({
  render: function () {
    return <form>
      <h3>New to BINS? Sign Up here! </h3>
      <Input type="text" label="Name" placeholder="Enter Your Name" />
      <Input type="email" label="Email Address" placeholder="Enter email" />
      <Input type="password" label="Password" />
      <ButtonInput type="submit" value="Sign Up" />
    </form>
  }
});

export default SignUpForm;
