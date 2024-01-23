const app = Vue.createApp({
  data() {
    return {
      email: "",
      password: "",
        isShow: false,
      
        inputBorder:''
    };
  },

  methods: {
    handleLogin() {
      console.log(this.email.length);

      if (this.email.length != 0 && this.password.length != 0) {
        return (this.isShow = true);
      } else {
        return alert("please fill all the field");
      }
    },

      handleClear() {
          this.email = '';
          this.password = '';
          this.isShow = !this.isShow;
    },
  },
});

app.mount(".container");
