/* eslint-disable react-hooks/exhaustive-deps */
import React, { ChangeEvent, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
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
  const handleChangeVacancy = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: StepActions.setVacancies,
      payload: e.target.value
    })
  }
  
  return (
    <>
    <div style={{marginTop: '8rem'}}>
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
        <h1>Português</h1>

        <div className='inputs_step_1'>
          <label htmlFor="vacancies">
          Vagas Disponiveis 
          </label>
          <C.Select name="" id="" onChange={handleChangeVacancy} value={state.vacancies}>
            <option value={180}>180 Vagas Disponiveis</option>
            <option value={150}>150 Vagas Disponiveis</option>
          </C.Select>
        </div>
        <C.WrapperButtons>
          <Link to="/step3" className='prev-button'>voltar</Link>
          <button onClick={handleNextStep} className='button'>Avançar</button>
        </C.WrapperButtons>
        
      </C.Content>
    </C.Container>
    </>
  )
}
