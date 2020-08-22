<template>
  <span class="brand d-flex align-center text-h6 rounded"
    ><span class="text--primary">Too</span><span class="doo white--text">Doo</span></span
  >
</template>

<style lang="scss" scoped>
$primary-color: map-get($green, 'darken-4');

.brand {
  border: 2px solid $primary-color;
  padding: 4px;
}
.doo {
  padding: 0 4px;
  border-radius: 6px;
  margin-left: 4px;
  background-color: $primary-color;
}
</style>
