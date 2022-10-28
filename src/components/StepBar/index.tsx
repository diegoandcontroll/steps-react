import * as C from './style';
interface Props{
  currentStep: number;
}
export const StepBar = ({currentStep}: Props) => {
  return (
    <C.Container>
      <div className='wrapper_steps'>
        <C.Point step={currentStep}/>
        <C.SecondPoint step={currentStep}/>
        <C.ThreePoint step={currentStep}/>
        <C.FourPoint step={currentStep}/>
        <C.FivePoint step={currentStep}/>
      </div>
    </C.Container>
  )
}
