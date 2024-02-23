
import Button from "./Button"

const Header = ({title, onAdd, showAdd}) => {
  
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color='white' backgroundColor={showAdd? 'green' : 'black'} showAdd={showAdd} text={showAdd ? 'Add' : 'Close'} onClick={onAdd}/>
    </header>
  )
}

Header.defaultProps = {
    title: 'Madrid',
}




export default Header
