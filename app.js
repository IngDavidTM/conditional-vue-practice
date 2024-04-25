const app = Vue.createApp({
  data() {
    return {
      inputTask: '',
      tasks: [],
      isListShown: true
    };
  },
  computed: {
    buttonCaption() {
      return this.isListShown ? 'Hide' : 'Show';
    }
  },
  methods: {
    addTask() {
      this.tasks.push(this.inputTask);
      this.inputTask = '';
    },
    toggleList() {
      this.isListShown = !this.isListShown;
    }
  }
});

app.mount('#assignment')
