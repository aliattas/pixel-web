// اقراص ضوئيه
import "./styles/box.css"
const Box = ({ box, title, text, src, button = false , color  , textColor = "black"}) => {
  return (
    <div className="big-box " style={{backgroundColor :color}}>
          <h2 className="box">{box}</h2>
      <h3 style={{color : textColor}}>{title}</h3>
          <p style={{color : textColor}}>{text}</p>
          { src && <img src={src} alt="" width={240}/>}
          {button && <div className="button">{button} </div> }
      
    </div>
  )
}

export default Box
