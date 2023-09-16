import React from 'react';
import { CardContainer } from './styles';
import CalculatorCard from './CalculatorCard';
import { divTimeToInteger, multTimeToInteger, simpleSum } from './utils';

const Calculari: React.FC = () => {
  return (
    <CardContainer>
      <CalculatorCard title="Intervalo Horas" onCalculate={simpleSum} description='Realiza soma/subtracao de horas por horas. Insira os tempos no formato HH:mm. '/>
      <CalculatorCard title="Multiplicacao Hora x Inteiro" onCalculate={multTimeToInteger} description='Realiza multiplicacao de horas por inteiro. Insira no Input1 no formato HH:mm e no Input2 tem que ser inteiro '/>
      <CalculatorCard title="Divisao Hora x Inteiro" onCalculate={divTimeToInteger} description='Realiza divisao de horas por inteiro. Insira no Input1 no formato HH:mm e no Input2 tem que ser inteiro '/>
    </CardContainer>
  );
};

export default Calculari;