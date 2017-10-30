<template>
  <div>
    <section class="todoapp" v-cloak>
      <header class="header">
        <h1>todos</h1>
        <input class="new-todo" autofocus autocomplete="off" placeholder="What needs to be done?" v-model="newTodo" @keyup.enter="addTodo">
      </header>
      <section class="main" v-show="todos.length">
        <input class="toggle-all" type="checkbox" v-model="allDone">
        <ul class="todo-list">
          <li class="todo" v-for="todo in filteredTodos" :class="{completed: todo.completed, editing: todo == editedTodo}">
            <div class="view">
              <input class="toggle" type="checkbox" v-model="todo.completed" v-on:change="changeCompleted(todo)">
              <label @dblclick="editTodo(todo)">{{todo.title}}</label>
              <button class="destroy" @click="removeTodo(todo)"></button>
            </div>
            <input class="edit" type="text" v-model="todo.title" v-todo-focus="todo == editedTodo" @blur="doneEdit(todo)" @keyup.enter="doneEdit(todo)" @keyup.esc="cancelEdit(todo)">
          </li>
        </ul>
      </section>
      <footer class="footer" v-show="todos.length">
        <span class="todo-count">
          <strong v-text="remaining"></strong> {{pluralize('item', remaining)}} left
        </span>
        <ul class="filters">
          <li><a href="javascript:void(0);" v-on:click="visibility = 'all'" :class="{selected: visibility == 'all'}">All</a></li>
          <li><a href="javascript:void(0);" v-on:click="visibility = 'active'" :class="{selected: visibility == 'active'}">Active</a></li>
          <li><a href="javascript:void(0);" v-on:click="visibility = 'completed'" :class="{selected: visibility == 'completed'}">Completed</a></li>
        </ul>
        <button class="clear-completed" @click="removeCompleted" v-show="todos.length > remaining">
          Clear completed
        </button>
      </footer>
    </section>
    <footer class="info">
      <p>Double-click to edit a todo</p>
      <p>Written by <a href="http://evanyou.me">Evan You</a></p>
      <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
    </footer>
  </div>
</template>

<script>
import todoStorage from './todoStorage';
import filters from './filters';
// import 'todomvc-common/base.js'

export default {
  name: 'Todo',
  data() {
    return {
      todos: [],
      newTodo: '',
      editedTodo: null,
      visibility: 'all',
    };
  },
  watch: {
    // todos: {
    //   deep: true,
    //   handler(newVal, oldVal) {
    //   }
    // },
  },
  created() {
    console.log('created');
    todoStorage.fetch().then((todos) => {
      this.todos = todos;
    }).catch((error) => {
      alert(error);
    });
  },
  computed: {
    filteredTodos() {
      return filters[this.visibility](this.todos);
    },
    remaining() {
      return filters.active(this.todos).length;
    },
    allDone: {
      get() {
        return this.remaining === 0;
      },
      set(value) {
        const tmpTodos = this.todos.map(todo => ({
          completed: value,
          id: todo.id,
          title: todo.title,
        }));
        todoStorage.save(tmpTodos).then((todos) => {
          this.todos = todos;
        }).catch((error) => {
          alert(error);
        });
      },
    },
  },
  components: {
    // Child
    // todoStorage
  },
  methods: {
    pluralize(word, count) {
      return word + (count === 1 ? '' : 's');
    },

    addTodo() {
      const value = this.newTodo && this.newTodo.trim();
      if (!value) {
        return;
      }

      todoStorage.add({ title: value, completed: false }).then((todo) => {
        this.todos.push(todo);
        this.newTodo = '';
      }).catch((error) => {
        alert(error);
      });
    },

    removeTodo(todo) {
      todoStorage.remove(todo).then(() => {
        const index = this.todos.indexOf(todo);
        this.todos.splice(index, 1);
      }).catch((error) => {
        alert(error);
      });
    },

    editTodo(todo) {
      this.beforeEditCache = todo.title;
      this.editedTodo = todo;
    },

    doneEdit(todo) {
      if (!this.editedTodo) {
        return;
      }

      const title = todo.title.trim();
      if (title) {
        todoStorage.modify({
          id: todo.id,
          title,
          completed: todo.completed,
        }).then(() => {
          this.editedTodo = null;
          todo.title = title;
        }).catch((error) => {
          alert(error);
          todo.title = this.beforeEditCache;
        });
      } else {
        todoStorage.remove(todo).then(() => {
          this.editedTodo = null;
          todo.title = title;
        }).catch((error) => {
          alert(error);
          todo.title = this.beforeEditCache;
        });
      }
    },

    cancelEdit(todo) {
      this.editedTodo = null;
      todo.title = this.beforeEditCache;
    },

    removeCompleted() {
      const activeTodos = filters.active(this.todos);
      todoStorage.save(activeTodos).then(() => {
        this.todos = activeTodos;
      }).catch((error) => {
        alert(error);
      });
    },

    changeCompleted(todo) {
      const { completed } = todo;
      todoStorage.modify(todo).then(() => {

      }).catch((error) => {
        alert(error);
        todo.completed = !completed;
      });
    },
  },
  directives: {
    'todo-focus': (el, binding) => {
      if (binding.value) {
        el.focus();
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css">
  @import '../../node_modules/todomvc-app-css/index.css';
</style>
