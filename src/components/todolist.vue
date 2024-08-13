<script setup lang="ts">
  import { ref, computed } from 'vue';
  import {useToDoList} from '../store'
interface TodoItem {
  title: string;
  completed: boolean;
}

const newTodoText = ref<string>('');
const todos = ref<TodoItem[]>([]);
let nextOrder = ref<number>(1);
  fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {
        todos.value = json
      })
const addTodo = () => {
  if (newTodoText.value.trim() !== '') {
    const newTodo: TodoItem = {
      title: newTodoText.value,
      completed: false,
    };
    todos.value.push(newTodo);
    newTodoText.value = '';
    nextOrder.value++;
  }
};

const deleteTodo = () => {
  
};
const  status = ref()

const updateToDo = () => {
  
}
const changeOrder = () => {

}
const count = computed(() => {
  store.count = todos.value.length
  return todos.value.length
})
const store = useToDoList()


</script>
<template>
   <h1>My To-Do List</h1>
   All {{ count }}
  <div class="todo-container">
    <input type="text" v-model="newTodoText" placeholder="Add a new task" />
    <button @click="addTodo">Add</button>

    <ul class="todo-list">
      <li v-for="(todo, i) in todos" :key="i">
        <div>
          <span><strong>{{ i+ 1 }}.</strong> {{ todo.title }}</span>
        </div>
        <div>
          <span :class="{'completed': todo.completed}">
            {{ status }}
          </span>
          <button class="delete-btn" @click="deleteTodo">Delete</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<style>
.todo-container {
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

input[type="text"] {
  width: 70%;
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

button {
  padding: 10px;
  border: none;
  border-radius: 3px;
  background-color: #5cb85c;
  color: #fff;
  cursor: pointer;
}

button:hover {
  background-color: #4cae4c;
}

.todo-list {
  list-style-type: none;
  padding: 0;
  margin-top: 20px;
}

.todo-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f9f9f9;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.todo-list li div {
  display: flex;
  flex-direction: column;
}

.todo-list li span {
  flex: 1;
}

.completed {
  color: #5cb85c;
  font-weight: bold;
}

.delete-btn {
  background-color: #d9534f;
}

.delete-btn:hover {
  background-color: #c9302c;
}
</style>