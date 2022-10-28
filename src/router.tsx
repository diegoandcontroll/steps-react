import { BrowserRouter, Route } from 'react-router-dom';
import { StepFive } from './pages/StepFive';
import { StepFour } from './pages/StepFour';
import { StepThree } from './pages/StepThree';
import { StepTwo } from './pages/StepTwo';
import {StepOne} from './pages/StepOne';

export const Router = () => {
    return (
        <BrowserRouter>
            <Route path="/"  exact component={StepOne}/>
            <Route path="/step2" component={StepTwo} />
            <Route path="/step3" component={StepThree} />
            <Route path="/step4" component={StepFour} />
            <Route path="/step5" component={StepFive} />
        </BrowserRouter>
    );
}