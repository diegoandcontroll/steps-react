/* eslint-disable react-hooks/exhaustive-deps */
import React, { ChangeEvent, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
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
  const handleChangeTypeEvent  = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: StepActions.setEventType,
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
          <C.Select name="" id="" onChange={handleChangeTypeEvent} value={state.eventType}>
            <option value="0">Aulão - Prova</option>
            <option value="1">Aulão - Teórica</option>
          </C.Select>
          {/* <SelectOption title="Aulão - Prova" selected={state.eventType === '0'} onClick={() => setEventType('0')}/>
          <SelectOption title="Aulão - Teórica" selected={state.eventType === '1'} onClick={() => setEventType('1')}/> */}
        </div>
        <div style={{marginLeft: '28.8rem', marginTop: '0.5rem'}}>
          <button onClick={handleNextStep} className='button'>Avançar</button>
        </div>
        
      </C.Content>
    </C.Container>
    </>
  )
}
