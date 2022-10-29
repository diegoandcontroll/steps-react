/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-mixed-operators */
import React, { ChangeEvent, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { StepBar } from '../../components/StepBar';
import { StepActions, useStep } from '../../context/StepsContext';
import { getItemLocalStorage, setLocalStorage } from '../../utils/localstorage';
import * as C from './style';

export const StepFive = () => {
  const history = useHistory();
  const {state, dispatch} = useStep();
  useEffect(() => {
    let eventType = 'Aula';
    let unit = state.unit;
    let vacanciesRest = (state.vacancies - state.participants);
    let participants = state.participants;
    let date = state.dateEvent;
    let hours = state.hours === '1' ? `${state.hours} Hora` : `${state.hours} Horas`;
    setLocalStorage('@event_type', eventType);
    setLocalStorage('@unit', `${unit}`);
    setLocalStorage('@vacancies_rest', `${vacanciesRest}`);
    setLocalStorage('@participants', `${participants}`);
    setLocalStorage('@date', date);
    setLocalStorage('@hours', hours);
    setLocalStorage('@subject', state.subject);
    if(state.unit === ''){
      history.push('/');
    }else{
      dispatch({
        type: StepActions.setCurrentStep,
        payload: 5
      })
    }
   
  },[])
  const saveFile = async (blob: Blob) => {
    const a = document.createElement('a');
    a.download = 'data.txt';
    a.href = URL.createObjectURL(blob);
    a.addEventListener('click', (e) => {
      setTimeout(() => URL.revokeObjectURL(a.href), 30 * 1000);
    });
    a.click();
  };
  const handleFinish = async () => {
    let obj = {
      eventType: 'Aula',
      unit: getItemLocalStorage('@unit'),
      vacancies_rest: getItemLocalStorage('@vacancies_rest'),
      participants:  getItemLocalStorage('@participants'),
      hours: getItemLocalStorage('@hours'),
      date: getItemLocalStorage('@date'),
      subject: getItemLocalStorage('@subject')
    }
    const blob = new Blob([JSON.stringify(obj, null, 2)], {type : 'application/json'});
    await saveFile(blob);
    window.location.href = '/';
  }
  
  
  
  return (
    <>
    <StepBar currentStep={5} />
    <C.Container>
      <C.Content>
        <h1>{state.subject}</h1>
        <C.Wrapper>
          <C.WrapperItem>
            <h4 style={{paddingBottom: '10px'}}>Evento: Aula</h4>
            <h4 style={{paddingBottom: '10px'}}>Unidade: {state.unit}</h4>
            <h4 style={{paddingBottom: '10px'}}>Vagas Restantes: {(state.vacancies) - state.participants} </h4>
            <h4 style={{paddingBottom: '10px'}}>Participantes: {state.participants}</h4>
          </C.WrapperItem>
          <C.WrapperItem>
            <h4 style={{paddingBottom: '10px'}}>Data: {state.dateEvent}</h4>
            <h4 style={{paddingBottom: '10px'}}>Tempo de aula: {state.hours === '1' ? `${state.hours} Hora` : `${state.hours} Horas`} </h4>

          </C.WrapperItem>
        </C.Wrapper>
        <C.WrapperItem>
          <button className='finally_button' onClick={handleFinish}>Finalizar</button>
        </C.WrapperItem>
        
      </C.Content>
    </C.Container>
    </>
  )
}
