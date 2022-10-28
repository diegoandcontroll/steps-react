/* eslint-disable react-hooks/exhaustive-deps */
import React, { ChangeEvent, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { SelectOption } from '../../components/selectInput';
import { StepBar } from '../../components/StepBar';
import { StepActions, useStep } from '../../context/StepsContext';
import * as C from './style';
export const StepOne = () => {
  const history = useHistory();
  const {state, dispatch} = useStep();
  useEffect(() => {
    dispatch({
      type: StepActions.setCurrentStep,
      payload: 1
    })
  },[])
  const handleNextStep = () => {
    if(state.unit !== ''){
      history.push('/step2');
    }else{
      alert('Unit is empty');
    }
    
  }
  const handleChangeUnit = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: StepActions.setUnit,
      payload: e.target.value
    })
  }
  const setEventType = (arg: string) => {
    dispatch({
      type: StepActions.setEventType,
      payload: arg
    })
  }
  return (
    <>
    <StepBar currentStep={1} />
    <C.Container>
      <C.Content>
        <h1>{state.subject}</h1>

        <div className='inputs_step_1'>
          <label htmlFor="unit">
            Unidade
            <input 
            type='text' 
            autoFocus 
            value={state.unit}
            onChange={handleChangeUnit}
            />
          </label>
          <label htmlFor="typeEvent">
            Evento
          </label>
          <SelectOption title="Aulão - Prova" selected={state.eventType === '0'} onClick={() => setEventType('0')}/>
          <SelectOption title="Aulão - Teórica" selected={state.eventType === '1'} onClick={() => setEventType('1')}/>
          <SelectOption title="Aulão - Laboratório" selected={state.eventType === '2'} onClick={() => setEventType('2')}/>
        </div>
        <C.WrapperButtons>
          <Link to="/" className='button'>voltar</Link>
          <button onClick={handleNextStep} className='button'>Avançar</button>
        </C.WrapperButtons>
        
      </C.Content>
    </C.Container>
    </>
  )
}
