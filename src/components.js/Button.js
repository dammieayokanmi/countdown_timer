import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
  button {
    border: none;
    height: 40px;
    padding: 10px;
    margin-right: 10px;
    background-color: #1da1f2;
    color: #fff;
    width: 100%;
    cursor: pointer;
    font-size: 15px;

    &:hover {
      opacity: 0.7;
    }
  }

  .active {
    background-color: #14a5ae;
  }

  .inactive {
    background-color: #ca843f;
  }
  button:disabled {
    background-color: gray;
  }
`

const Button = ({ isActive, onClick, disabled, buttonText }) => {
  return (
    <Wrapper>
      <button
        className={`btn ${isActive ? 'active' : 'inactive'}`}
        onClick={onClick}
        disabled={disabled}
      >
        {buttonText}
      </button>
    </Wrapper>
  )
}

Button.propTypes = {
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  buttonText: PropTypes.string,
}

export { Button }
