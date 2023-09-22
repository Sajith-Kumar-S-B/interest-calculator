import './App.css';
import TextField from "@mui/material/TextField";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';
function App() {
  const [interest,setInterest] = useState(0)
  const [principle,setPrinciple] = useState(0)
  const [rate,setRate] = useState(0)
  const [year,setYear] = useState(0)
  const [isPrincipleValid,setisPrincipleValid] = useState(true)
  const [isRateValid,setisRateValid] = useState(true)
  const [isYearValid,setisYearValid] = useState(true)


 const handleCalculate = (e)=>{
  e.preventDefault()
  if(!principle || !rate || !year){
    alert("Please fill the Data")
  }else{
    setInterest(principle*rate*year/100)
  }
 }

 const resetData = (e) =>{
    setInterest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
   setisPrincipleValid(true)
   setisRateValid(true)
   setisYearValid(true)
 }

 const validateInput = (e)=>{
  const {value,name} = e.target
  if(!!value.match(/^[0-9]+$/)){
    if(name==="principle"){
      setPrinciple(value)
  setisPrincipleValid(true)
    }else if(name==="rate"){
      setRate(value)
      setisRateValid(true)
    }else{
      setYear(value)
      setisYearValid(true)
    }
  
 }else{
  // invalid expression
  if(name==="principle"){
    setPrinciple(value)
setisPrincipleValid(false)
  }else if(name==="rate"){
    setRate(value)
    setisRateValid(false)
  }else{
    setYear(value)
    setisYearValid(false)
  }
 }
}
  return (
    <div style={{height:'100vh'}} className='d-flex w-100 bg-dark justify-content-center align-items-center'>
      <div style={{width:'500px'}} className=' bg-light rounded p-5'>
       <div className='heading'>
          <h3>S.I Calculator</h3>
          <p>Calculate your Simple Interest Easily</p>
       </div>
       <div style={{height:'150px'}} className='Interest-card w-100 d-flex flex-column shadow rounded bg-info  justify-content-center align-items-center text-light'>
        <h1>₹<span> {interest}</span></h1>
        <p className='fw-bold'>Total Simple Interest</p>
       </div>
       <form className='mt-5'>
        <div className='mb-3'>
        <TextField className='w-100' id="outlined-basic" label="₹ Principle Amount" variant="outlined"
        value={principle || ""} name='principle' onChange={(e)=> validateInput(e)} />
        
        </div>
       { 
       !isPrincipleValid &&
       <div className='mb-3 text-danger'>
          *Invalid Principle Amount
        </div>}
        <div className='mb-3'>
        <TextField className='w-100' id="outlined-basic" label="Rate of interest (p.a) %" variant="outlined" value={rate || ""} name='rate' onChange={(e)=> validateInput(e)}/>
        
        </div>
        { 
       !isRateValid &&
       <div className='mb-3 text-danger'>
          *Invalid Rate Value
        </div>}
        <div className='mb-3'>
        <TextField className='w-100' id="outlined-basic" label="Time Period" variant="outlined"
        value={year || ""} name='year' onChange={(e)=> validateInput(e)} />
        
        </div>
        { 
       !isYearValid &&
       <div className='mb-3 text-danger'>
          *Invalid Year Input
        </div>}
        <Stack direction="row" spacing={2}>
        <Button onClick={handleCalculate} style={{width:'200px',height:'60px'}} type='submit'  disabled={isPrincipleValid && isRateValid && isYearValid?false:true} variant="contained">Calculate</Button>
<Button onClick={resetData} style={{width:'200px',height:'60px'}} variant="outlined">Reset</Button>
</Stack>
       </form>
        </div>
    </div>
  );
}

export default App;
