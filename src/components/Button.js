
const Button = ({color, text, onClick, backgroundColor}) => {
  
return <button style={{color:color, backgroundColor:backgroundColor}} className='btn' onClick={onClick} >{text}</button>

}
export default Button


Button.defaultProps = {
    color:'green',
    text: 'Add form',
}