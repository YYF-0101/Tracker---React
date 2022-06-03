import PropTypes from 'prop-types'
import Button from './Button'

const header = ({ title, onClick, showAdd }) => {
  return (
    <header style={{ display: "flex", justifyContent: "space-between" }}>
      <h1>{title}</h1>
      <Button
        text={showAdd ? "Add" : "Close"}
        color={showAdd ? "red" : "green"}
        onClick={onClick} />
    </header >
  )
}

header.defaultProps = {
  title: 'Task Tracker',
}

header.propTypes = {
  title: PropTypes.string,
}

export default header