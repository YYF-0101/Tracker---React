
const Button = ({ text, color, onClick }) => {
  return (
    <button style={{ backgroundColor: color }} onClick={onClick}>{text}</button>
  )
}

Button.defaultProps = {
  text: 'Add',
  color: 'red',
}

export default Button