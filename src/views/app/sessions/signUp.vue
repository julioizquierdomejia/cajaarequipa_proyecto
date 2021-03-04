<template>
  <div class="auth-layout-wrap">
    <div class="auth-images-wrap" :style="{ backgroundImage: `url(${bgImageLeft}), url(${bgImageRight})` }">
      <div class="auth-content">
        <div class="card o-hidden">
          <div class="row">
            <b-col cols="12">
              <div class="p-4">
                <div class="auth-logo text-center my-3">
                  <img :src="logo" />
                </div>
                <h1 class="mb-3 text-18">Crear Cuenta</h1>
                <b-form @submit.prevent="onSubmit">
                  <b-form-group label="Nombre Completo">
                    <b-form-input class="form-control form-control-rounded" v-model.trim="$v.fName.$model" />

                    <b-alert show variant="danger" class="error col mt-1" v-if="!$v.fName.minLength">
                      El nombre debe tener al menos {{ $v.fName.$params.minLength.min }} letras.
                    </b-alert>
                  </b-form-group>

                  <b-form-group label="Correo Electronico">
                    <b-form-input class="form-control form-control-rounded" type="email" v-model="email" />
                  </b-form-group>

                  <b-form-group label="Contraseña">
                    <b-form-input class="form-control form-control-rounded" type="password" v-model.trim="$v.password.$model" />

                    <b-alert show variant="danger" class="error col mt-1" v-if="!$v.password.minLength">
                      Mínimo {{ $v.password.$params.minLength.min }} caracteres.
                    </b-alert>
                  </b-form-group>

                  <b-form-group label="Confirmar Contraseña">
                    <b-form-input class="form-control form-control-rounded" type="password" v-model.trim="$v.repeatPassword.$model" />

                    <b-alert show variant="danger" class="error col mt-1" v-if="!$v.repeatPassword.sameAsPassword">
                      Las contraseñas deben ser idénticas.
                    </b-alert>
                  </b-form-group>

                  <b-button type="submit" block variant="primary" :disabled="loading || $v.$invalid" class="btn-rounded mt-3"> Crear </b-button>

                  <div v-once class="typo__p" v-if="loading">
                    <div class="spinner sm spinner-primary mt-3"></div>
                  </div>
                </b-form>
                <div class="mt-3 text-center">
                  <router-link to="signIn" tag="a" class="text-muted">
                    <u>Ya tengo cuenta</u>
                  </router-link>
                </div>
              </div>
            </b-col>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { required, sameAs, minLength } from 'vuelidate/lib/validators';
import { mapGetters, mapActions } from 'vuex';
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'SignUp'
  },

  data() {
    return {
      fName: '',
      email: '',
      bgImageLeft: require('@/assets/images/people_chart.png'),
      bgImageRight: require('@/assets/images/family.png'),
      logo: require('@/assets/images/caja_arequipa_logo.svg'),
      password: '',
      repeatPassword: ''
    };
  },

  validations: {
    fName: {
      required,
      minLength: minLength(4)
    },
    password: {
      required,
      minLength: minLength(5)
    },
    repeatPassword: {
      sameAsPassword: sameAs('password')
    }
  },

  computed: {
    ...mapGetters(['loading'])
  },

  methods: {
    ...mapActions(['signUserUp']),
    onSubmit() {
      this.$v.$touch();

      if (this.$v.$invalid) {
        this.makeToast('danger');
      } else {
        this.signUserUp({ name: this.fName, email: this.email, password: this.password })
          .then((res) => {
            this.makeToast('success', '¡Exito!', 'Cuenta Creada');

            setTimeout(() => {
              this.$router.push('/');
            }, 1000);
          })
          .catch((error) => {
            console.log(error.data);
            this.makeToast('warning', '¡Error!', 'Ha ocurrido un error');
          });
      }
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


