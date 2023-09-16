import { useState } from 'react';
import { ButtonConfirmCard, ButtonContainer, DefaultCard,DescriptionCard,InputCard,TitleCard } from '../../DefaultCard/styles';
interface CardProps {
  title: string;
  onCalculate: (value1: string, value2: string) => string;
  description: string;
}

const CalculatorCard: React.FC<CardProps> = ({ title,onCalculate,description }) => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');

  const handleCalculate = () => {
    if(input1 !== '' && input2 !== ''){
      setInput3(onCalculate(input1,input2));
    }
  }

  const clearInputs = () => {
    setInput1('');
    setInput2('');
    setInput3('');
  }

  return (
    <DefaultCard>
      <TitleCard>{title}</TitleCard>
      <DescriptionCard>{description}</DescriptionCard>
      <InputCard 
        type="text" 
        placeholder="Input 1"
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
      />
      <InputCard 
        type="text" 
        placeholder="Input 2"
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
      />
      <InputCard 
        type="text"  
        placeholder="Input 3"
        value={input3}
        onChange={(e) => setInput3(e.target.value)}
      />
      <ButtonContainer>
        <ButtonConfirmCard onClick={handleCalculate}>Calculate</ButtonConfirmCard>
        <ButtonConfirmCard onClick={clearInputs}>Clear</ButtonConfirmCard>
      </ButtonContainer>
    </DefaultCard>
  );
};

export default CalculatorCard;