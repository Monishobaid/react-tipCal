import { useState } from "react"

export default function App(){
  return(
    <div>
      <p>hello world</p>
      <TipCalculator/>
    </div>
  )
}

function TipCalculator(){
  const [bill,setBill] = useState("");
  const [percentage1,setPercentage1] = useState(0);
  const [percentage2,setPercentage2] = useState(0);

  const tip = bill*((percentage1+percentage2)/2/100);

  function handleReset(){
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div>
      <BillInput bill = {bill} onsetBill = {setBill} />
      <SelectPercentage percentage={percentage1} onSelect={setPercentage1}>How did you Like the service?</SelectPercentage>
      <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>How did your friend like the service?</SelectPercentage>
      
      {bill>0 && (<><Output bill={bill} tip={tip} /><Reset onReset={handleReset} /></>)}
    </div>
  )

}

function BillInput({bill, onsetBill}){
return(
  <div>
    <div>
      <label> How much wad the bill?
      </label>
      <input type="text" placeholder="Bill Value" value={bill} onChange={(e)=>onsetBill(Number(e.target.value))}/>
    </div>
  </div>
)
}

function SelectPercentage({children,percentage,onSelect}){
return(
  <div>
    <label>{children}</label>
    <select value={percentage} onChange={(e)=>onSelect(Number(e.target.value))}>
      <option value="0">Maza nahi aaya (0%)</option>
      <option value="5">Theak theak tha (5%)</option>
      <option value="10">maza aagya  (10%)</option>
      <option value="15">dubara ayenge (20%)</option>
    </select>
  </div>
)
}

function Output({bill, tip}){

  return(
    <div>
      <h3>
        you pay the ${bill+tip} (${bill} + ${tip})
      </h3>
    </div>
  )

}

function Reset({onReset}){

  return(
    <div>
      <button onClick={onReset}>
        Reset
      </button>
    </div>
  )

}