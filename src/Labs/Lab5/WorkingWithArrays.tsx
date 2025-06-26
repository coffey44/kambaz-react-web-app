import { useState } from "react";
import FormControl from "react-bootstrap/FormControl";
import FormCheck from "react-bootstrap/FormCheck";
import { TiDelete } from "react-icons/ti";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;

export default function WorkingWithArrays() {
  const API = `${REMOTE_SERVER}/lab5/todos`;

  const [todo, setTodo] = useState({
    id: "1",
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-09-09",
    completed: false,
  });

  const deleteTodo = async () => {
    const response = await fetch(`${API}/${todo.id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      alert(`Todo with ID ${todo.id} was deleted via DELETE request.`);
    } else {
      alert("Failed to delete todo.");
    }
  };

  const updateTodo = async () => {
    const response = await fetch(`${API}/${todo.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo),
    });
    if (response.ok) {
      alert(`Todo with ID ${todo.id} was updated via PUT request.`);
    } else {
      alert("Failed to update todo.");
    }
  };

  return (
    <div id="wd-working-with-arrays">
      <h2>Working with Arrays</h2>

      <h4>Retrieving Arrays</h4>
      <a className="btn btn-primary" href={API}>
        Get Todos
      </a>
      <hr />

      <h4>Retrieving an Item from an Array by ID</h4>
      <FormControl
        className="w-50 mb-2"
        type="number"
        defaultValue={todo.id}
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <a className="btn btn-primary float-end" href={`${API}/${todo.id}`}>
        Get Todo by ID
      </a>
      <hr />

      <h4>Filtering Array Items</h4>
      <a className="btn btn-primary" href={`${API}?completed=true`}>
        Get Completed Todos
      </a>
      <hr />

      <h4>Creating new Items in an Array</h4>
      <a className="btn btn-success" href={`${API}/create`}>
        Create Todo
      </a>
      <hr />

      <h4>Deleting from an Array</h4>
      <FormControl
        type="number"
        className="w-50 mb-2"
        defaultValue={todo.id}
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <a
        className="btn btn-danger float-end me-2"
        href={`${API}/${todo.id}/delete`}
      >
        Delete (GET) Todo with ID = {todo.id}
      </a>
      <button
        className="btn btn-outline-danger float-end me-2"
        onClick={deleteTodo}
        id="wd-delete-todo"
      >
        <TiDelete className="fs-4" /> Delete (DELETE)
      </button>
      <hr />

      <h4>Updating an Item in an Array</h4>
      <button className="btn btn-primary float-end" onClick={updateTodo}>
        Update Todo (PUT)
      </button>
      <FormControl
        className="w-25 float-start me-2"
        defaultValue={todo.id}
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <FormControl
        className="w-50 float-start"
        defaultValue={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
      />
      <br />
      <br />
      <hr />

      <h4>Updating Description</h4>
      <FormControl
        className="w-75"
        defaultValue={todo.description}
        onChange={(e) => setTodo({ ...todo, description: e.target.value })}
      />
      <br />
      <br />
      <hr />

      <h4>Updating Completed Status</h4>
      <FormCheck
        type="checkbox"
        className="mt-2"
        label="Completed"
        checked={todo.completed}
        onChange={(e) =>
          setTodo({ ...todo, completed: e.target.checked })
        }
      />
      <hr />
    </div>
  );
}
