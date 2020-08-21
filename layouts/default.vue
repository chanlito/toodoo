<template>
  <div>
    <b-navbar toggleable="sm">
      <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
      <b-navbar-brand>TooDoo</b-navbar-brand>
      <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/" exact>Home</b-nav-item>
          <b-nav-item href="https://www.google.com" target="_blank">
            <div class="d-flex align-items-center">
              <span class="mr-3">Need Google?</span> <i class="gg-external"></i>
            </div>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <nuxt />
  </div>
</template>

<style scoped>
.gg-external {
  box-sizing: border-box;
  position: relative;
  display: block;
  transform: scale(var(--ggs, 1));
  width: 10px;
  height: 10px;
  box-shadow: -2px 2px 0 0, -4px -4px 0 -2px, 4px 4px 0 -2px;
  margin-left: -2px;
  margin-top: 1px;
}

.gg-external::after,
.gg-external::before {
  content: '';
  display: block;
  box-sizing: border-box;
  position: absolute;
  right: -4px;
}

.gg-external::before {
  background: currentColor;
  transform: rotate(-45deg);
  width: 12px;
  height: 2px;
  top: 1px;
}

.gg-external::after {
  width: 8px;
  height: 8px;
  border-right: 2px solid;
  border-top: 2px solid;
  top: -4px;
}
</style>
