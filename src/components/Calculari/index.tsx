import React from 'react';
import { CardContainer } from './styles';
import CalculatorCard from './CalculatorCard';
import { simpleSum } from './utils';

const Calculari: React.FC = () => {
  return (
    <CardContainer>
      <CalculatorCard title="Intervalo Horas" onCalculate={simpleSum}/>
    </CardContainer>
  );
};

export default Calculari;