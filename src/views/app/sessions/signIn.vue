<template>
  <div class="auth-layout-wrap">
    <div class="auth-images-wrap" :style="{ backgroundImage: `url(${bgImageLeft}), url(${bgImageRight})` }">
      <div class="auth-content">
        <div class="card o-hidden">
          <div class="row">
            <div class="col-12">
              <div class="p-4">
                <div class="auth-logo text-center my-3">
                  <img :src="logo" />
                </div>
                <h1 class="mb-3 text-18">Iniciar Sesión</h1>
                <b-form @submit.prevent="formSubmit">
                  <b-form-group label="Correo Electronico" class="text-12">
                    <b-form-input class="form-control-rounded" type="text" v-model="email" email required></b-form-input>
                  </b-form-group>

                  <b-form-group label="Contraseña" class="text-12">
                    <b-form-input class="form-control-rounded" type="password" v-model="password"></b-form-input>
                  </b-form-group>

                  <b-button type="submit" tag="button" class="btn-rounded btn-block mt-2" variant="primary mt-2" :disabled="loading">
                    Iniciar Sesión
                  </b-button>
                  <div v-once class="typo__p" v-if="loading">
                    <div class="spinner sm spinner-primary mt-3"></div>
                  </div>
                  <b-button to="signUp" block variant="primary mt-2" class="btn-rounded"> Crear una cuenta </b-button>
                </b-form>

                <div class="mt-3 text-center">
                  <router-link to="forgot" tag="a" class="text-muted">
                    <u>¿Olvidó su contraseña?</u>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'SignIn'
  },
  data() {
    return {
      email: 'cln.mauricio@gmail.com',
      password: 'password$1',
      bgImageLeft: require('@/assets/images/people_chart.png'),
      bgImageRight: require('@/assets/images/family.png'),
      logo: require('@/assets/images/caja_arequipa_logo.svg'),
      signInImage: require('@/assets/images/photo-long-3.jpg')
    };
  },
  computed: {
    validation() {
      return this.userId.length > 4 && this.userId.length < 13;
    },
    ...mapGetters(['loading'])
  },
  methods: {
    ...mapActions(['login']),
    formSubmit() {
      this.login({ email: this.email, password: this.password })
        .then(() => {
          this.makeToast('success', '¡Exito!', 'Acceso Exitoso');

          setTimeout(() => {
            this.$router.push('/');
          }, 500);
        })
        .catch((error) => {
          console.log(error.data);

          if (error.status === 400) {
            this.makeToast('warning', '¡Advertencia!', 'Credenciales no Validas');
          } else {
            this.makeToast('warning', '¡Error!', 'Ha ocurrido un error');
          }
        });
    },
    makeToast(variant = null, title, msg) {
      this.$bvToast.toast(msg, {
        title: `${title || 'default'}`,
        variant: variant,
        solid: true
      });
    }
  }
};
</script>

<style>
.spinner.sm {
  height: 2em;
  width: 2em;
}
</style>
