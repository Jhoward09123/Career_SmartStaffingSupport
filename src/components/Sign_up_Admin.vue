<template>
  <div class="body_signup flex d-flex justify-content-center">
    <div class="twocard flex d-flex gap-4">
      <div class="left_border">
        <div class="inside">
          <input type="file" class="form-control" id="customFile" />
          <div class="uploadPHOTO text-center">Upload your Photo</div>

          <label class="label_signup"> User </label>
          <div class="input_user">
            <input class="input_type_signup" type="text" />
          </div>
          <label class="label_signup"> Password </label>
          <div class="input_user">
            <input class="input_type_signup" type="text" />
          </div>
          <label class="label_signup"> Re-Type Password </label>
          <div class="input_user">
            <input class="input_type_signup" type="text" />
          </div>
        </div>
      </div>
      <div class="right_border">
        <select class="form-select_signup" aria-label="Default select example">
          <option selected>ACCOUNT TYPE</option>
          <option value="1">HR ADMIN</option>
          <option value="2">MANAGING DIRECTOR</option>
          <option value="3">VICE PRESIDENT</option>
          <option value="3">PRESIDENT</option>
        </select>

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

<script setup></script>

<style>
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
