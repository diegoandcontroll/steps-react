/* eslint-disable react-hooks/exhaustive-deps */
import React, { ChangeEvent, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { SelectOption } from '../../components/selectInput';
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
    if(state.dateEvent.length !== 10){
      alert('Date Invalid insert */  dd/mm/yy  */')!
      history.push('/step2');
    } 
    
  }
  const setHours = (hours: string) => {
    dispatch({
      type: StepActions.setHours,
      payload: hours
    })
  }
  const handleChangeDateEvent = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: StepActions.setDateEvent,
      payload: e.target.value
    })
  }
  return (
    <>
    <div style={{marginTop: '4rem'}}>
      <div style={{marginLeft: '11rem',width: '1000px', height: '10px', backgroundColor: '#F8C70E', borderRadius: '10px'}}>
        <C.Point />
        <C.SecondPoint />
        <C.ThreePoint />
        <C.FourPoint />
        <C.FivePoint />
      </div>
    </div>
    <C.Container>
      <C.Content>
        <h1>{state.subject}</h1>

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
          <SelectOption 
          title="1 Hora" 
          selected={state.hours === '1'} 
          onClick={() => 
          setHours('1')}/>
          <SelectOption 
          title="2 Horas" 
          selected={state.hours === '2'} 
          onClick={() => setHours('2')}/>
          <SelectOption 
          title="3 Horas" 
          selected={state.hours === '3'} 
          onClick={() => setHours('3')}/>
        </div>
        <C.WrapperButtons>
          <Link to="/step" className='button'>voltar</Link>
          <button onClick={handleNextStep} className='button'>Avançar</button>
        </C.WrapperButtons>
        
      </C.Content>
    </C.Container>
    </>
  )
}
