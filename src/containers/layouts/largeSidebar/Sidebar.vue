<template>
  <div class="side-content-wrap" @mouseenter="isMenuOver = true" @mouseleave="isMenuOver = false" @touchstart="isMenuOver = true">
    <vue-perfect-scrollbar
      :settings="{ suppressScrollX: true, wheelPropagation: false }"
      :class="{ open: getSideBarToggleProperties.isSideNavOpen }"
      ref="myData"
      class="sidebar-left rtl-ps-none ps scroll"
    >
      <div>
        <ul class="navigation-left">
          <li
            @mouseenter="toggleSubMenu"
            class="nav-item"
            :class="{ active: selectedParentMenu == 'filters' }"
            data-item="filters"
            :data-submenu="true"
          >
            <a class="nav-item-hold filters" href="#">
              <i class="fal fa-filter fa-2x"></i>
              <span class="nav-text">Filtros</span>
            </a>
            <div class="triangle"></div>
          </li>
          <li
            @mouseenter="toggleSubMenu"
            class="nav-item"
            :class="{ active: selectedParentMenu == 'modules' || $route.name == 'dashboard' }"
            data-item="modules"
            :data-submenu="true"
          >
            <b-link class="nav-item-hold" :to="{ name: 'dashboard' }">
              <i class="nav-icon i-Library"></i>
              <span class="nav-text">Modulos</span>
            </b-link>
            <div class="triangle"></div>
          </li>
        </ul>
      </div>
    </vue-perfect-scrollbar>

    <vue-perfect-scrollbar
      :class="{ open: getSideBarToggleProperties.isSecondarySideNavOpen }"
      :settings="{ suppressScrollX: true, wheelPropagation: false }"
      class="sidebar-left-secondary ps rtl-ps-none"
    >
      <div ref="sidebarChild">
        <!-- Submenu Dashboards -->
        <div class="childNav d-none" data-parent="filters" :class="{ 'd-block': selectedParentMenu == 'filters' }">
          <div class="p-3">
            <b-dropdown variant="primary" id="dropdown-1" text="Grupo" class="mb-3" block>
              <b-dropdown-item>First Action</b-dropdown-item>
              <b-dropdown-item>Second Action</b-dropdown-item>
              <b-dropdown-item>Third Action</b-dropdown-item>
            </b-dropdown>
            <b-dropdown variant="primary" id="dropdown-1" text="Interacción" class="mb-3" block>
              <b-dropdown-item>First Action</b-dropdown-item>
              <b-dropdown-item>Second Action</b-dropdown-item>
              <b-dropdown-item>Third Action</b-dropdown-item>
            </b-dropdown>
            <b-dropdown variant="primary" id="dropdown-1" text="Mes" class="mb-3" block>
              <b-dropdown-item>First Action</b-dropdown-item>
              <b-dropdown-item>Second Action</b-dropdown-item>
              <b-dropdown-item>Third Action</b-dropdown-item>
            </b-dropdown>
            <b-dropdown variant="primary" id="dropdown-1" text="Periodo" class="mb-3" block>
              <b-dropdown-item>First Action</b-dropdown-item>
              <b-dropdown-item>Second Action</b-dropdown-item>
              <b-dropdown-item>Third Action</b-dropdown-item>
            </b-dropdown>
            <b-button variant="warning" block>Actualizar</b-button>

            <hr class="my-3" />

            <b-button variant="warning" block>Refrescar Reporte</b-button>
            <b-button variant="success" block>Exportar Datos</b-button>
          </div>
        </div>
        <ul class="childNav d-none" data-parent="modules" :class="{ 'd-block': selectedParentMenu == 'modules' }">
          <li class="nav-item">
            <router-link tag="a" class="nav-item-hold" :to="{ name: 'nps' }">
              <i class="fal fa-chart-pie fa-lg mr-3"></i>
              <span class="nav-text">Resultados NPS</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link tag="a" class="nav-item-hold" :to="{ name: 'satisfaction' }">
              <i class="fal fa-chart-line fa-lg mr-3"></i>
              <span class="nav-text">Resultados Satisfacción</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link tag="a" class="nav-item-hold" :to="{ name: 'region' }">
              <i class="fal fa-chart-network fa-lg mr-3"></i>
              <span class="nav-text">Resultados por Región</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link tag="a" class="nav-item-hold" :to="{ name: 'zones' }">
              <i class="fal fa-map-marked-alt fa-lg mr-3"></i>
              <span class="nav-text">Resultados por Zonas</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link tag="a" class="nav-item-hold" :to="{ name: 'agency' }">
              <i class="fal fa-folder-tree fa-lg mr-3"></i>
              <span class="nav-text">Resultados por Agencia</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link tag="a" class="nav-item-hold" :to="{ name: 'gender' }">
              <i class="fal fa-user-friends fa-lg mr-3"></i>
              <span class="nav-text">Resultados por Género</span>
            </router-link>
          </li>
        </ul>
      </div>
    </vue-perfect-scrollbar>
    <div @click="removeOverlay()" class="sidebar-overlay" :class="{ open: getSideBarToggleProperties.isSecondarySideNavOpen }"></div>
  </div>
  <!--=============== Left side End ================-->
</template>

<script>
import Topnav from './TopNav'
import { isMobile } from 'mobile-device-detect'

import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    Topnav
  },

  data() {
    return {
      isDisplay: true,
      isMenuOver: false,
      isStyle: true,
      selectedParentMenu: '',
      isMobile
    }
  },
  mounted() {
    this.toggleSelectedParentMenu()
    window.addEventListener('resize', this.handleWindowResize)
    document.addEventListener('click', this.returnSelectedParentMenu)
    this.handleWindowResize()
  },

  beforeDestroy() {
    document.removeEventListener('click', this.returnSelectedParentMenu)
    window.removeEventListener('resize', this.handleWindowResize)
  },
  computed: {
    ...mapGetters(['getSideBarToggleProperties'])
  },

  methods: {
    ...mapActions([
      'changeSecondarySidebarProperties',
      'changeSecondarySidebarPropertiesViaMenuItem',
      'changeSecondarySidebarPropertiesViaOverlay',
      'changeSidebarProperties'
    ]),

    handleWindowResize() {
      //  console.log('not working is Mobile');
      if (window.innerWidth <= 1200) {
        if (this.getSideBarToggleProperties.isSideNavOpen) {
          this.changeSidebarProperties()
        }
        if (this.getSideBarToggleProperties.isSecondarySideNavOpen) {
          this.changeSecondarySidebarProperties()
        }
      } else {
        if (!this.getSideBarToggleProperties.isSideNavOpen) {
          this.changeSidebarProperties()
        }
      }
    },
    toggleSelectedParentMenu() {
      const currentParentUrl = this.$route.path.split('/').filter(x => x !== '')[1]

      if (currentParentUrl !== undefined || currentParentUrl !== null) {
        this.selectedParentMenu = currentParentUrl.toLowerCase()
      } else {
        this.selectedParentMenu = 'dashboards'
      }
    },
    toggleSubMenu(e) {
      let hasSubmenu = e.target.dataset.submenu
      let parent = e.target.dataset.item
      if (hasSubmenu) {
        this.selectedParentMenu = parent

        this.changeSecondarySidebarPropertiesViaMenuItem(true)
      } else {
        this.selectedParentMenu = parent
        this.changeSecondarySidebarPropertiesViaMenuItem(false)
      }
    },

    removeOverlay() {
      this.changeSecondarySidebarPropertiesViaOverlay()
      if (window.innerWidth <= 1200) {
        this.changeSidebarProperties()
      }
      this.toggleSelectedParentMenu()
    },
    returnSelectedParentMenu() {
      if (!this.isMenuOver) {
        this.toggleSelectedParentMenu()
      }
    },

    toggleSidebarDropdwon(event) {
      let dropdownMenus = this.$el.querySelectorAll('.dropdown-sidemenu.open')

      event.currentTarget.classList.toggle('open')

      dropdownMenus.forEach(dropdown => {
        dropdown.classList.remove('open')
      })
    }
  }
}
</script>

<style lang="" scoped>
</style>
