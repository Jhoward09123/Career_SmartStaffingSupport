<template>
  <div class="body_signup flex d-flex justify-content-center">
    <div class="twocard flex d-flex gap-4">
      <div class="left_border">
        <div class="inside">
          <input type="file" class="form-control" id="customFile" />
          <div class="uploadPHOTO text-center">Upload your Photo</div>

          <label class="label_signup"> Email </label>
          <div class="input_user">
            <input class="input_type_signup" type="email" />
          </div>
          <label class="label_signup"> Password </label>
          <div class="input_user">
            <input class="input_type_signup" type="password" />
          </div>
          <label class="label_signup"> Re-Type Password </label>
          <div class="input_user">
            <input class="input_type_signup" type="password" />
          </div>
        </div>
      </div>
      <div class="right_border">
        <div class="d-flex flex gap-4">
          <div class="input_user">
            <input class="first_name" type="text" placeholder="First Name" />
          </div>
          <div class="input_user">
            <input class="last_name" type="text" placeholder=" Last name" />
          </div>
        </div>
        <input class="Middle" type="text" placeholder=" Middle Name" />

        <div class="form-group">
          <label> Mobile number</label> <br />
          <input type="tel" class="form-control" id="telephone" />
        </div>

        <div class="button_signup pt-5">
          <button class="btn btn-primary sign_up_btn" type="submit">
            Sign up
          </button>
        </div>

        <div class="flex d-flex justify-content-center alreadyaccount pt-5">
          <button class="ihavealready_btn">I have already an Account</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "intl-tel-input/build/css/intlTelInput.css";
import "intl-tel-input/build/js/intlTelInput.js";
import intlTelInput from "intl-tel-input";
export default {
  mounted() {
    const input = document.querySelector("#telephone");
    intlTelInput(input, {
      // any initialisation options go here
      preferredCountries: ["in", "us", "ca"],
    });
  },
};
</script>

<style>
.Middle {
  margin-top: 20px;
  border-radius: 10px;
  border: 1px solid #000;
  width: 100%;
  height: 55px;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  padding-left: 10px;
  padding-right: 10px;
}

.first_name,
.last_name {
  border-radius: 10px;
  border: 1px solid #000;
  width: 316px;
  height: 55px;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  padding-left: 10px;
  padding-right: 10px;
}

.ihavealready_btn {
  background-color: transparent;
  border-style: none;
  text-decoration: underline;
  display: flex;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  color: #000;
}

.button_signup {
  text-align: center;
}
.sign_up_btn {
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  border-radius: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  background: #040c53;
  border-style: none;
  color: white;
}
.form-select_signup {
  border-radius: 10px;
  width: 562px;
  height: 55px;
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
}

.input_type_signup {
  border-radius: 10px;
  border: 1px solid #000;
  width: 316px;
  height: 55px;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
}

.label_signup {
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: black;
  padding-top: 20px;
}

.body_signup {
  padding-top: 100px;
}

.left_border,
.right_border {
  padding: 50px;
  border: solid black 1px;
  border-radius: 30px;
}
.uploadPHOTO {
  padding-top: 10px;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: black;
}
</style>
