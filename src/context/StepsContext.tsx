import { createContext, ReactNode, useContext, useReducer } from "react";
type State = {
  currentStep: number;
  unit: string;
  eventType: '0' | '1';
  hours: '1' | '2' | '3';
  dateEvent: string;
  participants: number;
  vacancies: 150 | 180
}
type Action = {
  type: StepActions;
  payload: any;
}

type ContextType = {
  state: State;
  dispatch: (action: Action) => void;
}

type StepProviderProps = {
  children: ReactNode;
}
const initialData: State = {
  currentStep: 0,
  unit: '',
  eventType: '0',
  hours: '1',
  dateEvent: '27/10/2022',
  participants: 0,
  vacancies: 150,
}
const StepsContext = createContext<ContextType | undefined>(undefined)

export enum StepActions {
  setCurrentStep,
  setUnit,
  setEventType,
  setDateEvent,
  setHours,
  setParticipants,
  setVacancies
}
const stepReducer = (state: State, action: Action) => {
  switch(action.type){
    case StepActions.setCurrentStep:
      return {...state, currentStep: action.payload}
    case StepActions.setUnit:
      return {...state, unit: action.payload}
    case StepActions.setEventType:
      return {...state, eventType: action.payload}
    case StepActions.setHours:
      return {...state, hours: action.payload}
    case StepActions.setDateEvent:
      return {...state, dateEvent: action.payload}
    case StepActions.setParticipants: 
      return {...state, participants: action.payload}
    case StepActions.setVacancies:
      return {...state, vacancies: action.payload}
    default:
      return state
  }
}

export const StepProvider = ({children}: StepProviderProps) => {
  const [state, dispatch] = useReducer(stepReducer, initialData);
  const value = {state, dispatch};
  return (
    <StepsContext.Provider value={value}>
      {children}
    </StepsContext.Provider>
  )
}

export const useStep = () => {
  const context = useContext(StepsContext);
  if(context === undefined){
    throw new Error('Hook bad used');
  }
  return context;
}