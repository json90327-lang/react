import React from 'react'
import CompB from './CompB'
const CompA = () => {
    const emp_name="uday";
  return (
    <>
    <div>CompA</div>
    <hr></hr>
    <CompB ename={emp_name}/>
    
      </>
  )

}

export default CompA