import React from 'react';
import { CardContainer } from './styles';
import CalculatorCard from './CalculatorCard';
import { simpleSum } from './utils';

const Calculari: React.FC = () => {
  return (
    <CardContainer>
      <CalculatorCard title="Card 1" onCalculate={simpleSum}/>
      <CalculatorCard title="Card 3" onCalculate={simpleSum} />
      <CalculatorCard title="Card 2" onCalculate={simpleSum}/>
      <CalculatorCard title="Card 4" onCalculate={simpleSum}/>
    </CardContainer>
  );
};

export default Calculari;