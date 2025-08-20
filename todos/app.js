const { createApp } = Vue;
createApp({
  data(){
    return{
        todos: [
          // "Go Home",
          // "Go Shopping",
          // "Go to Gym",
          // "Go to School",
          // "Go to Work",
          // "Go to Park",
          // "Go to Beach",
          // "Go to Mall",
          // "Go to Cinema",
          // "Go to Library",
          // "Go to Restaurant",
          // "Go to Supermarket",
          // "Go to Hospital"
        ],
        task : "",
        completed: []
    }
    
  },
  // Life CycleHook
  mounted() {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key === "todos") {
        this.todos = JSON.parse(localStorage.getItem(key));
      }
      if (key === "completed") {
        this.completed = JSON.parse(localStorage.getItem(key));
      }
    }
  },
  methods: {
    updateTodosStorage() {
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
    updateCompletedStorage() {
      localStorage.setItem("completed", JSON.stringify(this.completed));
    },
    addTask(){
      this.todos.push(this.task)
      this.task = ""
      this.updateTodosStorage()
      
    },
    DeleteItem(index){
      this.todos.splice(index, 1)
      this.updateTodosStorage()
    },
    completedItem(index){
     this.completed.push(this.todos[index]),
     this.DeleteItem(index)
      this.updateCompletedStorage()
    },
    DeleteCompleted(index){
      this.completed.splice(index, 1)
      this.updateCompletedStorage()
    }
  }
}).mount('#app')