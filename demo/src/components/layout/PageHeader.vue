<template lang="pug">
  header(role="banner")
    b-navbar.header-navbar.navbar-expand-xs.px-0.mb-gutter(
      toggleable="xs"
      variant="light"
      role="navigation"
    )
      b-container(fluid).container-xl.navbar-container
        b-navbar-brand.mr-sm-3.mr-2(
          :href="homeUrl"
        ) #[span.rounded.py-1.text-white.fw-700.bg-success.mr-sm-2.logo VSD] #[span.d-none.d-sm-inline Vue string directives]
        .collapse.navbar-collapse
          b-navbar-nav.mr-auto
            b-nav-item-dropdown(text="Version")
              b-dropdown-item(:href="homeUrl") v0
          b-navbar-nav.navbar-nav-x-lg-4
            li.nav-item
              a.nav-link(
                :href="repoUrl"
                target="_blank"
                rel="nofollow"
              )
                icon-github
                span.d-none.d-lg-inline.ml-2 GitHub
          a.btn.btn-primary.btn-sm.ml-2(
            :href="downloadUrl"
            rel="nofollow"
          ) Download
</template>

<script>
import {
  BContainer,
  BNavbar,
  BNavbarBrand,
  BNavbarNav,
  BNavItemDropdown,
  BDropdownItem
} from 'bootstrap-vue'
import { name, version } from './../../../../package.json'
import IconGithub from './icons/Github.vue'

export default {
  components: {
    BContainer,
    BNavbar,
    BNavbarBrand,
    BNavbarNav,
    BNavItemDropdown,
    BDropdownItem,
    IconGithub
  },
  data () {
    return {
      name,
      version,
      homeUrl: process.env.NODE_ENV === 'production' ? `/${name}/` : '/',
      username: 'tarkhov',
      githubUrl: 'https://github.com'
    }
  },
  computed: {
    repoUrl () {
      return `${this.githubUrl}/${this.username}/${this.name}`
    },
    downloadUrl () {
      return `${this.githubUrl}/${this.username}/${this.name}/releases/download/v${this.version}/${this.name}.zip`
    }
  }
}
</script>

<style lang="scss" scoped>
.header-navbar {
  background-color: #f4f5f9 !important;
}
.logo {
  padding-left: .5rem;
  padding-right: .5rem;
}
</style>
