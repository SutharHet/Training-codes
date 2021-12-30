import React from 'react';
import Display from './Display';
import Buttons from './Buttons';
const Calculator: React.FC = (): React.ReactElement => {
  const [displayText, setDisplayText] = React.useState<string>('0');
  const [value, setValue] = React.useState<string>('')
  const [prevValue, setPrevValue] = React.useState<string>('');
  const [decimalAdded, setDecimalAdded] = React.useState<boolean>(false);
  const startsWithZero: RegExp = /^0/;
  const isLastOperator: RegExp = /[/*+-]$/;
  const isOperator : RegExp = /[/*+-]/;
  const clear = () => {
    setDisplayText('0');
    setPrevValue('');
    setValue('');
  }
  const appendVal = (str: string): void =>{
    let lastVal: string = value;
    let newVal: string;
    if(!startsWithZero.test(str) || decimalAdded){
      newVal = lastVal + str
      setPrevValue(lastVal);
      setValue(newVal);
      setDisplayText(newVal);
    }
  }
  const appendOp = (str: string): void =>{
    let lastVal: string = value;
    let newVal: string;
      if(str !== '-'){
        if(lastVal.length === 1 && isOperator.test(lastVal)){
          console.log(lastVal)
          newVal = lastVal + str
          setPrevValue(lastVal);
          setValue(newVal);
          setDisplayText(newVal);
        }else if(lastVal.length > 1){
          if(isLastOperator.test(lastVal) && isOperator.test(lastVal.charAt(lastVal.length-2))){
            newVal = lastVal.slice(0, lastVal.length - 2);
            setPrevValue(newVal);
            newVal += str; 
            setValue(newVal);
            setDisplayText(newVal);
          }
        }else if(isLastOperator.test(lastVal)){
          newVal = lastVal.slice(0, lastVal.length - 1);
          setPrevValue(newVal);
          newVal += str; 
          setValue(newVal);
          setDisplayText(newVal);
        }else{
          newVal = lastVal + str
          setPrevValue(lastVal);
          setValue(newVal);
          setDisplayText(newVal);
        }
      }else{
        console.log(lastVal)
        if(lastVal.charAt(lastVal.length-1) !== '-'){
          newVal = lastVal + str
          setPrevValue(lastVal);
          setValue(newVal);
          setDisplayText(newVal);
        }
      }
      setDecimalAdded(false);
  }
  const solve = ():void => {
    let val = value;
    for(let i=0; i<val.length; i++){
      if(val[i] === '-' && isOperator.test(val[i-1])){
        val = val.slice(0, i-1) + val.slice(i);
      }
    }  
    let ans = eval(val).toString();
    setDisplayText(value+'='+ans)
    setValue(ans)
    setPrevValue('')
  }
  const addDecimal = () => {
    if(!decimalAdded){
      if(isLastOperator.test(value) || value === ''){
        let lastVal = value
        let newVal = lastVal + '0.'
        setPrevValue(lastVal);
        setValue(newVal);
        setDisplayText(newVal);
      }else{
        let lastVal = value
        let newVal = lastVal + '.'
        setPrevValue(lastVal);
        setValue(newVal);
        setDisplayText(newVal);
      }
      setDecimalAdded(true);
    }
  } 

  return(    
    <div className="container">   
      <Display text={displayText}/>
      <div className="btns">
        <Buttons 
          btnId={'clear'}
          text={'clear'}
          onClick={() => clear()}
        />
        <Buttons 
          btnId={'divide'}
          text={'/'}
          onClick={() => appendOp('/')}
        />
        <Buttons 
          btnId={'one'}
          text={'1'}
          onClick={() => appendVal('1')}
        />
        <Buttons 
          btnId={'two'}
          text={'2'}
          onClick={() => appendVal('2')}
        />
        <Buttons 
          btnId={'three'}
          text={'3'}
          onClick={() => appendVal('3')}
        />
        <Buttons 
          btnId={'add'}
          text={'+'}
          onClick={() => appendOp('+')}
        />
        <Buttons 
          btnId={'four'}
          text={'4'}
          onClick={() => appendVal('4')}
        />
        <Buttons 
          btnId={'five'}
          text={'5'}
          onClick={() => appendVal('5')}
        />
        <Buttons 
          btnId={'six'}
          text={'6'}
          onClick={() => appendVal('6')}
        />
        <Buttons 
          btnId={'subtract'}
          text={'-'}
          onClick={() => appendOp('-')}
        />
        <Buttons 
          btnId={'seven'}
          text={'7'}
          onClick={() => appendVal('7')}
        />
        <Buttons 
          btnId={'eight'}
          text={'8'}
          onClick={() => appendVal('8')}
        />
        <Buttons 
          btnId={'nine'}
          text={'9'}
          onClick={() => appendVal('9')}
        />
        <Buttons 
          btnId={'multiply'}
          text={'x'}
          onClick={() => appendOp('*')}
        />
        <Buttons 
          btnId={'zero'}
          text={'0'}
          onClick={() => appendVal('0')}
        />
        <Buttons 
          btnId={'decimal'}
          text={'.'}
          onClick={() => addDecimal()}
        />
        <Buttons 
          btnId={'equals'}
          text={'='}
          onClick={() => solve()}
        />
      </div>
    </div>
  );
}

export default Calculator;