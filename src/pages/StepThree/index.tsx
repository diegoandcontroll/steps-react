/* eslint-disable react-hooks/exhaustive-deps */
import React, { ChangeEvent, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { StepBar } from '../../components/StepBar';
import { StepActions, useStep } from '../../context/StepsContext';
import * as C from './style';
export const StepThree = () => {
  const history = useHistory();
  const {state, dispatch} = useStep();
  useEffect(() => {
    if(state.unit === ''){
      history.push('/');
    }else{
      dispatch({
        type: StepActions.setCurrentStep,
        payload: 3
      })
    }
    
  },[])
  const handleNextStep = () => {
    if(state.participants > 0){
      history.push('/step4');
    }else{
      alert('Not Participants');
    }
    
  }
  const handleChangeParticipants = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: StepActions.setParticipants,
      payload: e.target.value
    })
  }
  
  return (
    <>
    <StepBar currentStep={3} />
    <C.Container>
      <C.Content>
        <h1>{state.subject}</h1>

        <div className='inputs_step_1'>
          <label htmlFor="participants">
            Participantes
            <input 
            type='text' 
            autoFocus 
            value={state.participants}
            onChange={handleChangeParticipants}
            />
          </label>
        </div>
        <C.WrapperButtons>
          <Link to="/step2" className='button'>voltar</Link>
          <button onClick={handleNextStep} className='button'>Avançar</button>
        </C.WrapperButtons>
        
      </C.Content>
    </C.Container>
    </>
  )
}
