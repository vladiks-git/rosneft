import { Paper, Step, StepContent, StepLabel, Stepper } from '@mui/material';
import React from 'react';

const steps = [
  {
    label: 'Осуществлять аэробные нагрузки',
    description: `Легкий бег, ходьба`,
  },
  {
    label: 'Осуществлять контроль давления с записью в электронный журнал',
    description: '',
  },
  {
    label: 'Отказаться от употребления сигарет, алкоголя',
    description: ``,
  },
  {
    label: 'Минимизировать употребление животных жиров',
    description: ``,
  },
  {
    label: 'Увеличение потребления морепродуктов богатых Омега-3',
    description: ``,
  },
];

export default function PersonPlanPage() {
  const [activeStep, setActiveStep] = React.useState(1);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel optional={<p>{step.description}</p>}>
              {step.label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}
