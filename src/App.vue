<template>
  <div>
    <header>
      <div class="logo">GRIPTAPE.JS</div>
      <wallet-info></wallet-info>
    </header>
    <main>
      <div>Count is: {{ count }}</div>
      <button @click="increment"><i class="fa fa-heart" style="font-size:26px">like</i></button>
    </main>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'pinia'
  import { useCounterStore } from '@/contracts'

  export default {
    created() {
      this.getCount()
    },
    computed: {
      ...mapState(useCounterStore, ['count']),
    },
    methods: {
      ...mapActions(useCounterStore, ['getCount','increment']),
    }
  }
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;

  display: grid;
  grid-auto-flow: row;
  justify-content: center;
  grid-row-gap: var(--g-gutter);
  grid-auto-rows: max-content;

  margin-top: calc(var(--g-gutter) * 10);
}
</style>
