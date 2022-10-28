/* eslint-disable react-hooks/exhaustive-deps */
import React, { ChangeEvent, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { StepActions, useStep } from '../../context/StepsContext';
import * as C from './style';
export const StepTwo = () => {
  const history = useHistory();
  const {state, dispatch} = useStep();
  useEffect(() => {
    if(state.unit === ''){
      history.push('/')
    }else {
      dispatch({
        type: StepActions.setCurrentStep,
        payload: 2
      })
    }
  },[])
  const handleNextStep = () => {
    if(state.dateEvent !== '' && state.dateEvent !== '00/00/0000'){
      history.push('/step3');
    }else{
      alert('Change date time!');
    }
    
  }
  const handleChangeDateEvent = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: StepActions.setDateEvent,
      payload: e.target.value
    })
  }
  const handleChangeHours  = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: StepActions.setHours,
      payload: e.target.value,
    })
  }
  
  return (
    <>
    <div style={{marginTop: '8rem'}}>
      <div style={{marginLeft: '8rem',width: '1000px', height: '10px', backgroundColor: '#F8C70E', borderRadius: '10px'}}>
        <C.Point />
        <C.SecondPoint />
        <C.ThreePoint />
        <C.FourPoint />
        <C.FivePoint />
      </div>
    </div>
    <C.Container>
      <C.Content>
        <h1>Português</h1>

        <div className='inputs_step_1'>
          <label htmlFor="dateEvent">
            Data
            <input 
            type='text' 
            autoFocus 
            value={state.dateEvent}
            onChange={handleChangeDateEvent}
            />
          </label>
          <label htmlFor="hours">
            Tempo de Aula
          </label>
          <C.Select name="" id="" onChange={handleChangeHours} value={state.hours}>
            <option value="1">1 Hora</option>
            <option value="2">2 Horas</option>
            <option value="3">3 Horas</option>
          </C.Select>
        </div>
        <C.WrapperButtons>
          <Link to="/" className='prev-button'>voltar</Link>
          <button onClick={handleNextStep} className='button'>Avançar</button>
        </C.WrapperButtons>
        
      </C.Content>
    </C.Container>
    </>
  )
}
