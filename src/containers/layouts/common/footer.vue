 <template>
  <div class="footer_wrap">
    <!-- Footer Start -->
    <div class="flex-grow-1"></div>
    <div class="app-footer">
      <div class="row">
        <div class="col-md-9">
          <p><strong>Caja Arequipa</strong></p>
        </div>
      </div>
      <div
        class="footer-bottom border-top pt-3 d-flex flex-column flex-sm-row align-items-center"
      >
        <div class="d-flex align-items-center">
          <img class="logo" src="@/assets/images/logo.png" alt="" />
          <div>
            <div>
              <p class="m-0">&copy; {{year}}</p>
              <p class="m-0">All rights reserved</p>
            </div>
          </div>
          <span class="flex-grow-1"></span>
        </div>
      </div>
      <!-- fotter end -->
    </div>
  </div>
</template> 
<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    };
  },
  methods: {}
};
</script>


<style lang="scss" scoped>
</style> 