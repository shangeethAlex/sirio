import React from 'react';
import TrainingIntro from './TrainingIntro';
import TrainingSteps from './TrainingSteps';

const TrainingStep = () => {
  return (
    <div className="space-y-8">
      <TrainingIntro />
      <TrainingSteps />
    </div>
  );
};

export default TrainingStep;