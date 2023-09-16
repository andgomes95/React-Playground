type TimeToCalculate = {
  signalPlus: string;
  hour: number;
  minutes: number;
}

export const simpleSum = (value1: string,value2: string): string => {
  try{
    if(value1.includes(':') && value2.includes(':')){
      let valAux1 = stringToTimeToCalculate(value1);
      let valAux2 = stringToTimeToCalculate(value2);
      if(valAux1.signalPlus === valAux2.signalPlus){
        let valAux3: TimeToCalculate = {
          signalPlus: valAux1.signalPlus,
          hour: valAux1.hour + valAux2.hour,
          minutes: valAux1.minutes + valAux2.minutes
        }
        if(valAux3.minutes >= 60){
          valAux3.hour = valAux3.hour + Math.round(valAux3.minutes/60);
          valAux3.minutes = valAux3.minutes % 60;
        }
        return timeToCalculateToString(valAux3);
      }else if(valAux1.signalPlus === "minus"){
        return subTimeToCalculate(valAux1,valAux2)
      }else{
        return subTimeToCalculate(valAux2,valAux1)
      }
    }else{
      return handleError();
    }
  } catch(erro: any){
    return erro.message;
  }
} 

export const multTimeToInteger = (value1: string, value2: string): string =>{
  try{
    if(value1.includes(':')){
      let valAux1 = stringToTimeToCalculate(value1);
      let valAux2 = parseInt(value2);
      return multTimeToCalculateToInteger(valAux1,valAux2);
    }
    return handleError();
  }catch(erro: any){
    return erro.message;
  }
}

export const divTimeToInteger = (value1: string, value2: string): string =>{
  try{
    if(value1.includes(':')){
      let valAux1 = stringToTimeToCalculate(value1);
      let valAux2 = parseInt(value2);
      return divTimeToCalculateToInteger(valAux1,valAux2);
    }
    return handleError();
  }catch(erro: any){
    return erro.message;
  }
}

const handleError = (): string =>{
  return 'Format Error' 
}

const stringToTimeToCalculate = (value: string):TimeToCalculate => {
  let aux = value.split(':');
  let signal = (aux[0][0] === '-')  ? "minus" : "plus";
  aux[0] = (aux[0][0] === '-') ? aux[0].replace('-','') : aux[0];
  const result: TimeToCalculate = {signalPlus: signal, hour: parseInt(aux[0]), minutes: parseInt(aux[1])}
  return result;
}

const timeToCalculateToString = (value: TimeToCalculate): string => {
  let minutes = value.minutes.toString();
  minutes = minutes.length === 1 ? "0" + minutes : minutes;
  const result = (value.signalPlus === "minus") 
    ? "-"+value.hour.toString()+":"+minutes
    : value.hour.toString()+":"+minutes
  return result;
}

const subTimeToCalculate = (value1: TimeToCalculate, value2: TimeToCalculate): string => {
  debugger
  let signal = value1.hour+value1.minutes/60 > value2.hour+value2.minutes/60;
    let valAux3: TimeToCalculate = {
      signalPlus: signal ? "minus" : "plus" ,
      hour: signal ? value1.hour - value2.hour : value2.hour - value1.hour,
      minutes: signal ? value1.minutes - value2.minutes : value2.minutes - value1.minutes
    }
    if(valAux3.minutes < 0){
      valAux3.minutes = valAux3.minutes + 60;
      valAux3.hour = valAux3.hour - 1;
    }
    return timeToCalculateToString(valAux3);
}

const multTimeToCalculateToInteger = (value1: TimeToCalculate, value2: number): string => {
  value1.hour = value1.hour * value2;
  value1.minutes = value1.minutes * value2;
  if(value1.minutes >= 60){
    value1.hour = value1.hour + Math.round(value1.minutes/60);
    value1.minutes = value1.minutes % 60;
  }
  return timeToCalculateToString(value1);
}
const divTimeToCalculateToInteger = (value1: TimeToCalculate, value2: number): string => {
  let minutesToAdd = value1.hour%value2 * 60;
  value1.hour = Math.round(value1.hour / value2);
  value1.minutes = (minutesToAdd + value1.minutes) / value2;
  if(value1.minutes >= 60){
    value1.hour = value1.hour + Math.round(value1.minutes/60);
    value1.minutes = value1.minutes % 60;
  }
  return timeToCalculateToString(value1);
}