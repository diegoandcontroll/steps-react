/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-mixed-operators */
import React, { ChangeEvent, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { StepActions, useStep } from '../../context/StepsContext';
import * as C from './style';
import {} from './style';
export const StepFive = () => {
  const history = useHistory();
  const {state, dispatch} = useStep();
  useEffect(() => {
    if(state.unit === ''){
      history.push('/');
    }else{
      dispatch({
        type: StepActions.setCurrentStep,
        payload: 5
      })
    }
   
  },[])
  
  
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
        <div style={{marginLeft: '20rem', marginTop: '7.5rem'}}>
          <button className='finally_button' onClick={() => window.location.href = '/'}>Finalizar</button>
        </div>
        
      </C.Content>
    </C.Container>
    </>
  )
}
