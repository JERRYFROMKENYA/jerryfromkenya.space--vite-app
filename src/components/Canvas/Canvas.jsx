import "./canvas.css"


export default function Canvas(props) {
  return (
    <div className='canvas-container'>
        <video src={`${props.video}`} autoPlay loop muted />
        {props.children}
        
    </div>
  )
}
