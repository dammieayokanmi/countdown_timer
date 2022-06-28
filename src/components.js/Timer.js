import React, { useState, useEffect } from 'react'
import { Input, Button } from '../components.js'
import styled from 'styled-components'

const Wrapper = styled.div`
  .row {
    display: grid;
    grid-gap: 10px;
  }
`

const Timer = () => {
  const [seconds, setSeconds] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [showButton, setShowButton] = useState(false)

  function toggle() {
    setIsActive(!isActive)
  }
  function toggleStartButton() {
    setIsActive(!isActive)
    setShowButton(true)
  }

  function resetTimer() {
    setSeconds(0)
    setIsActive(false)
    setShowButton(false)
  }

  const getHours = () => {
    return ('0' + Math.round(seconds / 3600)).slice(-2)
  }

  const getMinutes = () => {
    return ('0' + Math.round((seconds % 3600) / 60)).slice(-2)
  }

  const getSeconds = () => {
    return ('0' + (seconds % 60)).slice(-2)
  }

  const handleTimeChange = (e) => {
    setSeconds(Number(e.target.value))
  }

  useEffect(() => {
    let interval = null
    if (isActive) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds((seconds) => seconds - 1)
        }
      }, 1000)
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [isActive, seconds])

  return (
    <Wrapper>
      <Input time={seconds} setTime={handleTimeChange} />

      <h1>
        {getHours()}:{getMinutes()}:{getSeconds()}
      </h1>
      <div className="row">
        {!showButton && (
          <Button buttonText="Start" onClick={toggleStartButton} disabled={seconds === 0} />
        )}

        {showButton && (
          <Button
            buttonText={isActive ? 'Pause' : 'Resume'}
            onClick={toggle}
            isActive={isActive ? 'active' : 'inactive'}
            disabled={seconds === 0}
          />
        )}

        <Button buttonText="Reset" onClick={resetTimer} disabled={seconds === 0} />
      </div>
    </Wrapper>
  )
}

export { Timer }
