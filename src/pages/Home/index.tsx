/* eslint-disable react-hooks/exhaustive-deps */
import React, { ChangeEvent} from 'react';
import { useHistory } from 'react-router-dom';
import { StepBar } from '../../components/StepBar';
import { StepActions, useStep } from '../../context/StepsContext';
import * as C from './style';
export const Home = () => {
  const history = useHistory();
  const {state, dispatch} = useStep();
  const handleNextStep = () => {
    if(state.subject !== ''){
      history.push('/step');
    }else{
      alert('Subject is empty');
    }
    
  }
  const handleChangeSubject  = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: StepActions.setSubject,
      payload: e.target.value,
    })
  }
  return (
    <>
    <StepBar currentStep={0} />
    <C.Container>
      <C.Content>
        <h3>Informe a disciplina!</h3>

        <div className='inputs_step_1'>
          <label htmlFor="unit">
            Disciplina
            <input 
            type='text' 
            autoFocus 
            value={state.subject}
            onChange={handleChangeSubject}
            />
          </label>
          
          {/* <SelectOption title="Aulão - Prova" selected={state.eventType === '0'} onClick={() => setEventType('0')}/>
          <SelectOption title="Aulão - Teórica" selected={state.eventType === '1'} onClick={() => setEventType('1')}/> */}
        </div>
        <div style={{marginLeft: '28.8rem'}}>
          <button onClick={handleNextStep} className='button'>Avançar</button>
        </div>
        
      </C.Content>
    </C.Container>
    </>
  )
}
