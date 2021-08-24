import React from 'react'
import { SpinnerContainer, StyledSpinner } from './Spinner.elements'
import spinner from '../../assets/Spinner-1s-200px.gif';

const Spinner = () => {
  return (
    <SpinnerContainer>
      <StyledSpinner src={spinner} alt='Loading spinner' />
    </SpinnerContainer>
  )
}

export default Spinner
