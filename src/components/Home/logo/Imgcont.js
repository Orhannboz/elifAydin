import react from 'react'

const Imgcont = (props) => {
  return (
    <div className={'logo-container track' + props.track}>
      <img className="solid-logo" src={props.imgArray[props.track]} alt="S" />
    </div>
  )
}

export default Imgcont
