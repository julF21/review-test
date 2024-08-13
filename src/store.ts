import { defineStore } from 'pinia'
import {ref} from 'vue'

export const useToDoList = defineStore('todo-list', () => {
  const count = ref(0)
  return { count }
})