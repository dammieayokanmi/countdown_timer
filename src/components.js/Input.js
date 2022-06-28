import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
  input {
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    height: 20px;
    border-radius: 5px;
    padding: 0.375rem 0.75rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji';
    font-size: 20px;
  }
`

const Input = ({ time, setTime }) => {
  return (
    <Wrapper>
      <input
        type="number"
        name="inputTime"
        placeholder="Enter seconds"
        id="inputTime"
        value={time}
        onChange={setTime}
      />
    </Wrapper>
  )
}

Input.propTypes ={ 
    time: PropTypes.number,
    setTime: PropTypes.func
}

export { Input }
