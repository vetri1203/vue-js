const app = Vue.createApp({
  data() {
    return {
      name: "vetrivel",
      role: "Intern",
      count: 0,
        state: true,
      color : 'red'
    };
  },

  methods: {
    increase() {
      this.count++;
    },
      changeState() {
    
          this.state = !this.state;
          this.color = this.color === 'red' ? 'green' : 'red';
    },
    decrease() {
      if (this.count == 0) {
        console.log("already count is zero..");

        this.count = 0;
      } else {
        this.count--;
      }
    },
    },
  
  
});

app.mount(".container");
