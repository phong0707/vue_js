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
        this.todos = JSON.parse(localStorage.getItem("todos"));
      }
    }
  },
  methods: {
    addTask(){
      this.todos.push(this.task)
      this.task = ""
      localStorage.setItem('todos', JSON.stringify(this.todos));
    },
    DeleteItem(index){
      this.todos.splice(index, 1)
    },
    completedItem(index){
     this.completed.push(this.todos[index]),
     this.DeleteItem(index)
    },
    DeleteCompleted(index){
      this.completed.splice(index, 1)
    }
  }
}).mount('#app')