<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li>
        <input type="text" v-model="first" />
      </li>
      <li>
        <input type="text" v-model="second" />
      </li>
      <li>= {{ total }}</li>
    </ul>
    <ul>
      <li>
        <button @click="plus(first, second)">PLUS</button>
      </li>
      <li>
        <button @click="minus(first, second)">MINUS</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Unit Test",
      first: 7,
      second: 2,
      total: 0
    };
  },
  methods: {
    plus(first, second) {
      this.total = parseInt(first) + parseInt(second);
      return this.total;
    },
    minus(first, second) {
      this.total = parseInt(first) - parseInt(second);
      return this.total;
    }
  }
};
</script>
