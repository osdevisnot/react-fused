import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  border: 1px solid #eee;
  border-radius: 3;
  background-color: #ffffff;
  cursor: pointer;
  font-size: 15;
  padding: 3px 10px;
  margin: 10;
`;

class Button extends Component {
  static propTypes = {
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func
  };
  static defaultProps = {
    onClick: () => console.log('Awesome Button Clicked !!')
  };
  render() {
    return (
      <StyledButton onClick={this.props.onClick} {...this.props}>
        {this.props.children}
      </StyledButton>
    );
  }
}

export default Button;
