import React from 'react'
import CompC from './CompC'

const CompB = (props) => {
  return (
    <>
    <pre>{JSON.stringify(props)}</pre>
    <div>CompB</div>
     <hr></hr>
    <CompC prasad={props.ename}/>
    
    </>
   
  )
}

export default CompB