<template>
  <div class="container fixed-top" style="margin-top: 10vh">
    <div class="row justify-content-center">
      <div id="formContent">
        <!-- Tabs Titles -->

        <!-- Icon -->
        <h5>[درخواست کد ورود]</h5>
        <br />
        <!-- Login Form -->
        <form>
          <div class="container">
            <div class="row align-items-center">
              <div class="container">
                <div class="col">
                  <div
                    v-if="showSuccess"
                    class="alert alert-success"
                    role="alert"
                  >
                    کد ورود برای شما ارسال شد
                  </div>
                </div>
              </div>
            </div>
            <div class="row align-items-center" v-if="!showSuccess">
              <div class="col"></div>
              <div class="col-12">
                <div class="input-group mb-3">
                  <input
                    dir="ltr"
                    type="text"
                    @keypress="isNumber($event)"
                    v-model="txtPhone"
                    maxlength="9"
                    class="form-control shadow-none"
                    style="
                      padding: 0px;
                      margin: 0px;
                      text-align: left;
                      letter-spacing: 0.7em;
                      font-size: large;
                    "
                    placeholder="شماره خود را وارد کنید"
                  />
                  <div class="input-group-append">
                    <span class="input-group-text">09</span>
                  </div>
                </div>
              </div>
              <div class="col"></div>
            </div>
            <div class="row align-items-center" v-if="showSuccess">
              <div class="col"></div>
              <div class="col-12">
                <div class="input-group" dir="ltr">
                  <div class="input-group-append">
                    <span
                      class="input-group-text"
                      style="border-radius: 0.25rem 0 0 0.25rem !important"
                      >کد ورود</span
                    >
                  </div>
                  <input
                    @keypress="isNumber($event)"
                    type="text"
                    placeholder="-"
                    class="form-control"
                    style="text-align: center"
                    maxlength="1"
                  />
                  <input
                    @keypress="isNumber($event)"
                    type="text"
                    placeholder="-"
                    class="form-control"
                    style="text-align: center"
                    maxlength="1"
                  />
                  <input
                    @keypress="isNumber($event)"
                    type="text"
                    placeholder="-"
                    class="form-control"
                    style="text-align: center"
                    maxlength="1"
                  />
                  <input
                    @keypress="isNumber($event)"
                    type="text"
                    placeholder="-"
                    class="form-control"
                    style="text-align: center"
                    maxlength="1"
                  />
                  <input
                    @keypress="isNumber($event)"
                    type="text"
                    placeholder="-"
                    class="form-control"
                    style="text-align: center"
                    maxlength="1"
                  />
                </div>
              </div>
              <div class="col"></div>
            </div>

            <div class="row" style="margin-top: 10px">
              <div class="container">
                <div class="col">
                  <div v-if="showError" class="alert alert-danger" role="alert">
                    شماره وارد شده نامعتبر است.
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-8">
                <button
                  name="btnRequestCode"
                  type="button"
                  class="btn --digiGreen btn-block"
                  @click="requestCode"
                >
                  {{ btnMessage }}
                  <div
                    v-if="showError"
                    class="spinner-border spinner-border-sm"
                    role="status"
                    style="margin-bottom: 5px"
                  ></div>
                </button>
              </div>

              <div class="col-4">
                <button type="button" class="btn --digiOrange" @click="close">
                  انصراف
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Modal",
  data() {
    return {
      showError: false,
      showSuccess: false,
      txtPhone: "",
      btnMessage: "تایید شماره",
      timerCount: 90,
      timerEnabled: false,
      apiResponse: null,
    };
  },
  watch: {
    timerEnabled(value) {
      if (value > 0 && this.timerEnabled) {
        setTimeout(() => {
          this.timerCount--;
          this.btnMessage = "(ارسال مجدد کد.. " + this.timerCount + ")";
        }, 1000);
      } else {
        this.timerCount = 90;
        this.timerEnabled = false;
        this.btnMessage = "تایید شماره";
      }
    },

    timerCount: {
      handler(value) {
        if (value > 0 && this.timerEnabled) {
          setTimeout(() => {
            this.timerCount--;
            this.btnMessage = "(ارسال مجدد کد.. " + this.timerCount + ")";
          }, 1000);
        } else {
          this.timerCount = 90;
          this.timerEnabled = false;
          this.btnMessage = "تایید شماره";
        }
      },
      immediate: true, // This ensures the watcher is triggered upon creation
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },

    isNumber: function (evt) {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (
        charCode > 31 &&
        (charCode < 48 || (charCode > 57 && charCode != 127)) &&
        charCode !== 46
      ) {
        evt.preventDefault();
      } else {
        return true;
      }
    },
    handleActivationInput(e) {
      // Grab input's value
      let value = e.target.value;
      // Grab data-index value
      let index = parseInt(e.target.dataset.index);
      // Grab data-length value
      let maxlength = 1;

      if (this.activationKeyFields[index].value.length > maxlength) {
        e.preventDefault();
        this.activationKeyFields[index].value = value.slice(0, 6);
        try {
          this.$refs[`input-${parseInt(index + 1)}`][0].focus();
        } catch (e) {}
        return;
      }

      // Shift focus to next input field if max length reached
      if (value.length >= maxlength) {
        if (typeof this.activationKeyFields[index + 1] == "undefined") {
          e.preventDefault();
          return;
        }
        this.$refs[`input-${parseInt(index + 1)}`][0].focus();
        e.preventDefault();
      }
    },

    requestCode: async function () {
      if (this.timerEnabled == false) {
        this.showError = false;
        this.showSuccess = false;
        const regex = /09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/;
        const matches = regex.test("09" + this.txtPhone);
        if (matches == "false") {
          this.showError = true;
          return;
        }

        const callResult = await this.callApi();
        this.timerEnabled = true;

        if (callResult["status"] == true) this.showSuccess = true;
        else {
          this.timerCount =
            90 - parseInt(callResult["reason"].replace("Time :", ""));
        }
      }
    },
    callApi: async function () {
      try {
        let res = await axios({
          url:
            "https://api.digi-hamy.ir/user/requestcode/" + "09" + this.txtPhone,
          method: "get",
          timeout: 8000,
          headers: {
            ApiKey: "ouur12%^074$!^0QWYE#!WU78rt12bU!gg&",
          },
        });
        if (res.status == 200) {
          // test for status you want, etc
          console.log(res.status);
          console.log(res.data);
          console.log("####");
        }
        // Don't forget to return something
        return res.data;
      } catch (err) {
        console.error(err);
      }
    },
  },
};
</script>

<style scoped>
::placeholder {
  text-align: center;
  letter-spacing: 0 !important;
}

#formContent {
  -webkit-border-radius: 10px 10px 10px 10px;
  border-radius: 10px 10px 10px 10px;
  background: #fff;
  max-width: 550px;

  padding: 20px;
  -webkit-box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  text-align: center;
}
</style>
