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
  const [timeInSeconds, setTimeInSeconds] = useState('')
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
    setTimeInSeconds('')
    setIsActive(false)
    setShowButton(false)
  }

  const getHours = () => {
    const hours = parseInt((timeInSeconds / 3600) % 24)
    return String(hours).length === 1 ? `0${hours}` : hours
  }

  const getMinutes = () => {
    const minutes = parseInt((timeInSeconds / 60) % 60)
    return String(minutes).length === 1 ? `0${minutes}` : minutes
  }

  const getSeconds = () => {
    const second = parseInt(timeInSeconds % 60)
    return String(second).length === 1 ? `0${second}` : second
  }

  const handleTimeChange = (e) => {
    setTimeInSeconds(parseInt(e.target.value) || '')
  }

  useEffect(() => {
    let interval = null
    if (isActive) {
      interval = setInterval(() => {
        if (parseInt(timeInSeconds) > 0) {
          setTimeInSeconds((timeInSeconds) => timeInSeconds - 1)
        }
      }, 1000)
    } else if (!isActive && parseInt(timeInSeconds) !== 0) {
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [isActive, timeInSeconds])

  return (
    <Wrapper>
      <Input time={timeInSeconds} setTime={handleTimeChange} />

      <h1>
        {getHours()}:{getMinutes()}:{getSeconds()}
      </h1>
      <div className="row">
        {!showButton && (
          <Button buttonText="Start" onClick={toggleStartButton} disabled={timeInSeconds === 0} />
        )}

        {showButton && (
          <Button
            buttonText={isActive ? 'Pause' : 'Resume'}
            onClick={toggle}
            isActive={isActive ? 'active' : 'inactive'}
            disabled={timeInSeconds === 0}
          />
        )}

        <Button buttonText="Reset" onClick={resetTimer} disabled={timeInSeconds === 0} />
      </div>
    </Wrapper>
  )
}

export { Timer }
