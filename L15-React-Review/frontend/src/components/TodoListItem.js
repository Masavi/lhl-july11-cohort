function TodoListItem(props) {
  return (
    <div style={{
        width: '500px',
        display: 'flex',
        justifyContent: 'cen'
    }}>
      <input type="checkbox" checked={props.done} />
      <span>{ `${props.task}` }</span>
      <button
        onClick={() => props.handleDelete(props.id)} 
        style={{ marginLeft: '1.5rem' }}>delete</button>
    </div>
  );
}

export default TodoListItem;