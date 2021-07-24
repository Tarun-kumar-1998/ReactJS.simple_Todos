import './index.css'

const TodoItem = props => {
  const {todoItem, deletetodo} = props
  const {title, id} = todoItem
  const onDelete = () => {
    deletetodo(id)
    console.log(id)
  }

  return (
    <li className="li">
      <p className="para">{title}</p>
      <button className="btn" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
