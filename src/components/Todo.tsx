import { type TodoId, type Todo as TodoType } from '../types'

interface Props extends TodoType {
  onToggleCompletedTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
  onRemoveTodo: ({ id }: TodoId) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo, onToggleCompletedTodo }) => {
  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onToggleCompletedTodo({
      id,
      completed: event.target.checked
    })
  }

  return (
    <div className="view">
      <input
        className="toggle"
        checked={completed}
        type="checkbox"
        onChange={handleChangeCheckbox}
      />
      <label htmlFor="">{title}</label>
      <button
        className='destroy'
        onClick={() => { onRemoveTodo({ id }) }}>
      </button>
    </div>
  )
}
