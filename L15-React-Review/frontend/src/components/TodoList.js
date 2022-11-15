import { useState, useEffect } from 'react';
import axios from 'axios';
import TodoListItem from "./TodoListItem";

function TodoList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/todos')
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [])

  const handleItemDelete = (id) => {
    // DO NOTT do this, as this is a copy of the reference
    //const newArray = data;

    // axios.delete(`http://localhost:8080/todos/${id}`)
    //   .then((res) => {
    //   })
    //   .catch((err) => console.log(err));

    // Create a copy of the state instead
    const newState = data.filter(item => {
      return item.id !== id
    });

    setData(newState);
  }
  
  return (
    <>
      <h2>This is the TodoList component!</h2>
      {
        data.map((item) => <TodoListItem
          key={item.id}
          id={item.id}
          done={item.done} 
          task={item.task}
          handleDelete={handleItemDelete} />)
      }
      <button style={{ marginTop: '2rem' }} onClick={() => {
        const newItem = {id: 4, task: 'take the dog out', done: false };
        setData([...data, newItem]);
        console.log('This is data:', data);
      }}>
        Add new todo item!
      </button>
    </>
   );
}

export default TodoList;
