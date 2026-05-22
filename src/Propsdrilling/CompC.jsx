import React from 'react'
import CompD from './CompD'

const CompC = (props) => {
  return (
    <>
    <pre>{JSON.stringify(props)}</pre>
    <div>CompC</div>
    <hr></hr>
    <CompD laxman={props.prasad}/>
    </>
  )
}

export default CompC