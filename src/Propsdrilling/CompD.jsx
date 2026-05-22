import React from 'react'

const CompD = (props) => {
  return (
    <>
    <pre>{JSON.stringify(props)}</pre>
    <div>CompD</div>
    <hr></hr>
    <h1>EMP NAME:{props.laxman}</h1>
    </>
  )
}

export default CompD