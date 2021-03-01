import BootstrapVue from 'bootstrap-vue';
// import vuePerfectScrollbar from "vue-perfect-scrollbar";
import VueTour from 'vue-tour';
// import SmartTable from "vuejs-smart-table";
import VueTagsInput from '@johmun/vue-tags-input';
import VueTheMask from 'vue-the-mask';
import Vuelidate from 'vuelidate';
import VueFormWizard from 'vue-form-wizard';
import VueLazyload from 'vue-lazyload';
// import VCalendar from "v-calendar";
// import VueSlider from "vue-slider-component";
import Meta from 'vue-meta';
import FlagIcon from 'vue-flag-icon';

import '@/assets/styles/sass/themes/lite-purple.scss';
import '@/plugins/apexChart.js';
import DateRangePicker from 'vue2-daterange-picker';
import 'vue2-daterange-picker/dist/vue2-daterange-picker.css';
// v2 need to improt css
// import "v2-datepicker/lib/index.css";
// javascript import for when you're importing the css directly in your javascript
import 'vue-navigation-bar/dist/vue-navigation-bar.css';

// import the library
import VueNavigationBar from 'vue-navigation-bar';

// locale.use(lang);

export default {
  install(Vue) {
    Vue.use(BootstrapVue);
    Vue.component('vue-navigation-bar', VueNavigationBar);
    Vue.component(
      'large-sidebar',
      // The `import` function returns a Promise.
      () => import('../containers/layouts/largeSidebar')
    );
    Vue.component(
      'horizontal-bar',
      // The `import` function returns a Promise.
      () => import('../containers/layouts/horizontalBar')
    );

    Vue.component(
      'compact-sidebar',
      // The `import` function returns a Promise.
      () => import('../containers/layouts/compactSidebar')
    );
    Vue.component(
      'vertical-sidebar',
      // The `import` function returns a Promise.
      () => import('../containers/layouts/verticalSidebar')
    );
    Vue.component(
      'vertical-sidebar-two',
      // The `import` function returns a Promise.
      () => import('../containers/layouts/verticalSidebarTwo')
    );
    Vue.component(
      'customizer',
      // The `import` function returns a Promise.
      () => import('../components/common/customizer.vue')
    );
    Vue.component('vue-perfect-scrollbar', () => import('vue-perfect-scrollbar'));
    // Vue.component(VueCropper);
    Vue.use(Meta, {
      keyName: 'metaInfo',
      attribute: 'data-vue-meta',
      ssrAttribute: 'data-vue-meta-server-rendered',
      tagIDKeyName: 'vmid',
      refreshOnceOnNavigation: true
    });
    Vue.use(FlagIcon);
    // vueslider
    // Vue.component("VueSlider", () => import("vue-slider-component"));
    //vuelidate
    Vue.use(Vuelidate);
    // maskForm
    Vue.use(VueTheMask);
    //form wizard globally

    Vue.use(VueFormWizard);

    // tags input plugin
    Vue.use(VueTagsInput);

    // smart table plugin
    // Vue.use(SmartTable);

    // vue-good-table

    // import the styles

    // import VueCropper from "./plugins/imageCropper";

    // Use v-calendar & v-date-picker components
    // Vue.use(VCalendar, {
    //   componentPrefix: "v" // Use <vc-calendar /> instead of <v-calendar />
    //   // ...other defaults
    // });

    Vue.use(VueTour);
    Vue.use(VueLazyload, {
      observer: true,
      // optional
      observerOptions: {
        rootMargin: '0px',
        threshold: 0.1
      }
    });
  }
};
