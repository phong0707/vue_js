const { createApp } = Vue;
createApp({
  data(){
    return{
        todos: [
          { text: 'Go Home', },
          { text: 'Go Shopping', },
          { text: 'Go to Gym', },
          { text: 'Go to School', },
          { text: 'Go to Work', },
          { text: 'Go to Park', },
          { text: 'Go to Beach', },
          { text: 'Go to Mall', },
          { text: 'Go to Cinema', },
          { text: 'Go to Library', },
          { text: 'Go to Restaurant', },
          { text: 'Go to Supermarket', },
          { text: 'Go to Hospital', }
        ],
    }
  },
  methods: {
    
  }
}).mount('#app')