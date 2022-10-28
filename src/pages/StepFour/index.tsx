/* eslint-disable react-hooks/exhaustive-deps */
import React, {  useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { SelectOption } from '../../components/selectInput';
import { StepBar } from '../../components/StepBar';
import { StepActions, useStep } from '../../context/StepsContext';
import * as C from './style';
export const StepFour = () => {
  const history = useHistory();
  const {state, dispatch} = useStep();
  useEffect(() => {
    dispatch({
      type: StepActions.setCurrentStep,
      payload: 4
    })
  },[])
  const handleNextStep = () => {
    if(state.participants > 0){
      history.push('/step5');
    }else{
      alert('Not Participants');
    }
    
  }
  const setVacancie = (vacancie: number) => {
    dispatch({
      type: StepActions.setVacancies,
      payload: vacancie
    })
  }
  
  return (
    <>
    <StepBar currentStep={4} />
    <C.Container>
      <C.Content>
        <h1>{state.subject}</h1>

        <div className='inputs_step_1'>
          <label htmlFor="vacancies">
          Vagas Disponiveis 
          </label>
          {/* <C.Select name="" id="" onChange={handleChangeVacancy} value={state.vacancies}>
            <option value={180}>180 Vagas Disponiveis</option>
            <option value={150}>180 Vagas Disponiveis</option>
          </C.Select> */}
          <SelectOption title="100 Vagas Disponiveis" selected={state.vacancies === 100} onClick={() => setVacancie(100)}/>
          <SelectOption title="150 Vagas Disponiveis" selected={state.vacancies === 150} onClick={() => setVacancie(150)}/>

          <SelectOption title="200 Vagas Disponiveis" selected={state.vacancies === 200} onClick={() => setVacancie(200)}/>
        </div>
        <C.WrapperButtons>
          <Link to="/step3" className='button'>voltar</Link>
          <button onClick={handleNextStep} className='button'>Avançar</button>
        </C.WrapperButtons>
        
      </C.Content>
    </C.Container>
    </>
  )
}
