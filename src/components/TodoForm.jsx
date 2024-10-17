import { addTask } from "@/actions/actions";

function TodoForm() {
  return (
    <div>
      <form action={addTask}>
        <input type="text" name="title" placeholder="e.g. Do math" />
        <input
          type="text"
          name="description"
          placeholder="e.g. do math at 6 pm"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default TodoForm;
