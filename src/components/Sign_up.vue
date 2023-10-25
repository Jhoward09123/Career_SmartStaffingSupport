<script setup>
import { ref } from "vue";
import { RouterView, useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();
const router = useRouter();

const form_data = ref({
  first_name: "",
  fname: "",
  mname: "",
  lname: "",
  phone: "",
  alt_phone: "",
  email: "",
  alt_email: "",
  address: "",
  city: "",
  state_id: "",
  zip_code: "",
  country_id: "",
  photo_url: "",
  job_category_id: "",
  profession_id: "",
  contract_type_id: "",
  dob: "",
  password: "",
  password_confirmation: "",
});
</script>
<template>
  <div class="head_register d-flex flex justify-content-center">
    REGISTER JOB PORTAL
  </div>
  <div class="body_signup flex d-flex justify-content-center">
    <form @submit.prevent="authStore.handleSignup(form_data)">
      <div class="twocard flex d-flex gap-4">
        <div class="left_border">
          <div class="inside">
            <input
              type="file"
              class="form-control file_input"
              id="customFile"
            />
            <div class="uploadPHOTO text-center">Upload your Photo</div>
            <label class="label_signup mt-4"> Email </label>
            <div class="input_user">
              <input
                class="input_type_signup"
                type="email"
                v-model="form_data.email"
                required
              />
            </div>
            <label class="label_signup"> Password </label>
            <div class="input_user">
              <input
                class="input_type_signup"
                type="password"
                v-model="form_data.password"
                required
              />
            </div>
            <label class="label_signup"> Re-Type Password </label>
            <div class="input_user">
              <input
                class="input_type_signup"
                type="password"
                v-model="form_data.password_confirmation"
                required
              />
            </div>
          </div>
        </div>
        <div class="right_border">
          <div class="d-flex flex gap-4 w-100">
            <div class="input_user w-50">
              <label class="info_label">First Name</label>
              <input
                class="first_name w-100"
                type="text"
                v-model="form_data.fname"
                required
              />
            </div>
            <div class="input_user w-50">
              <label class="info_label">Last name </label>
              <input
                class="last_name w-100"
                type="text"
                v-model="form_data.lname"
                required
              />
            </div>
          </div>
          <label class="info_label space_20px_top">Middle Name </label>
          <input class="Middle" type="text" v-model="form_data.mname" />

          <div class="mobile_flex d-flex flex gap-4 space_20px_top w-100">
            <div class="mobile_left w-50">
              <div class="form-group ">
                <label class="info_label">Mobile Number </label> <br />
                <input type="tel" class="form-control w-100" id="telephone" />
              </div>
            </div>
            <div class="mobile_right w-50">
              <div class="form-group w-100">
                <label class="info_label">2nd Number (Optional) </label> <br />
                <input
                  type="tel"
                  class="form-control w-100 telephone"
                  id="alt_phone"
                />
              </div>
            </div>
          </div>

          <div class="address_hold space_20px_top">
            <label class="info_label">Address</label> <br />
            <input
              class="address_input"
              type="text"
              v-model="form_data.address"
              required
            />
          </div>

          <div class="date_birth_hold mt-3">
            <label class="info_label">Birth Date</label> <br />
            <div class="date_input">
              <input
                class="calender_birth_Date w-100"
                type="date"
                id="birthday"
                placeholder=""
                v-model="form_data.dob"
                required
              />
            </div>
            <!-- <VueDatePicker v-model="date" class="calender_birth_Date border border-dark"></VueDatePicker> -->
          </div>

          <div class="count_city_hold flex d-flex gap-4 mt-4 w-100">
            <div class="left_count w-50">
              <label class="info_label">Country</label> <br />
              <select class="country_select">
                <option value="AF">Afghanistan</option>
                <option value="AX">Åland Islands</option>
                <option value="AL">Albania</option>
                <option value="DZ">Algeria</option>
                <option value="AS">American Samoa</option>
                <option value="AD">Andorra</option>
                <option value="AO">Angola</option>
                <option value="AI">Anguilla</option>
                <option value="AQ">Antarctica</option>
                <option value="AG">Antigua and Barbuda</option>
                <option value="AR">Argentina</option>
                <option value="AM">Armenia</option>
                <option value="AW">Aruba</option>
                <option value="AU">Australia</option>
                <option value="AT">Austria</option>
                <option value="AZ">Azerbaijan</option>
                <option value="BS">Bahamas</option>
                <option value="BH">Bahrain</option>
                <option value="BD">Bangladesh</option>
                <option value="BB">Barbados</option>
                <option value="BY">Belarus</option>
                <option value="BE">Belgium</option>
                <option value="BZ">Belize</option>
                <option value="BJ">Benin</option>
                <option value="BM">Bermuda</option>
                <option value="BT">Bhutan</option>
                <option value="BO">Bolivia, Plurinational State of</option>
                <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                <option value="BA">Bosnia and Herzegovina</option>
                <option value="BW">Botswana</option>
                <option value="BV">Bouvet Island</option>
                <option value="BR">Brazil</option>
                <option value="IO">British Indian Ocean Territory</option>
                <option value="BN">Brunei Darussalam</option>
                <option value="BG">Bulgaria</option>
                <option value="BF">Burkina Faso</option>
                <option value="BI">Burundi</option>
                <option value="KH">Cambodia</option>
                <option value="CM">Cameroon</option>
                <option value="CA">Canada</option>
                <option value="CV">Cape Verde</option>
                <option value="KY">Cayman Islands</option>
                <option value="CF">Central African Republic</option>
                <option value="TD">Chad</option>
                <option value="CL">Chile</option>
                <option value="CN">China</option>
                <option value="CX">Christmas Island</option>
                <option value="CC">Cocos (Keeling) Islands</option>
                <option value="CO">Colombia</option>
                <option value="KM">Comoros</option>
                <option value="CG">Congo</option>
                <option value="CD">
                  Congo, the Democratic Republic of the
                </option>
                <option value="CK">Cook Islands</option>
                <option value="CR">Costa Rica</option>
                <option value="CI">Côte d'Ivoire</option>
                <option value="HR">Croatia</option>
                <option value="CU">Cuba</option>
                <option value="CW">Curaçao</option>
                <option value="CY">Cyprus</option>
                <option value="CZ">Czech Republic</option>
                <option value="DK">Denmark</option>
                <option value="DJ">Djibouti</option>
                <option value="DM">Dominica</option>
                <option value="DO">Dominican Republic</option>
                <option value="EC">Ecuador</option>
                <option value="EG">Egypt</option>
                <option value="SV">El Salvador</option>
                <option value="GQ">Equatorial Guinea</option>
                <option value="ER">Eritrea</option>
                <option value="EE">Estonia</option>
                <option value="ET">Ethiopia</option>
                <option value="FK">Falkland Islands (Malvinas)</option>
                <option value="FO">Faroe Islands</option>
                <option value="FJ">Fiji</option>
                <option value="FI">Finland</option>
                <option value="FR">France</option>
                <option value="GF">French Guiana</option>
                <option value="PF">French Polynesia</option>
                <option value="TF">French Southern Territories</option>
                <option value="GA">Gabon</option>
                <option value="GM">Gambia</option>
                <option value="GE">Georgia</option>
                <option value="DE">Germany</option>
                <option value="GH">Ghana</option>
                <option value="GI">Gibraltar</option>
                <option value="GR">Greece</option>
                <option value="GL">Greenland</option>
                <option value="GD">Grenada</option>
                <option value="GP">Guadeloupe</option>
                <option value="GU">Guam</option>
                <option value="GT">Guatemala</option>
                <option value="GG">Guernsey</option>
                <option value="GN">Guinea</option>
                <option value="GW">Guinea-Bissau</option>
                <option value="GY">Guyana</option>
                <option value="HT">Haiti</option>
                <option value="HM">Heard Island and McDonald Islands</option>
                <option value="VA">Holy See (Vatican City State)</option>
                <option value="HN">Honduras</option>
                <option value="HK">Hong Kong</option>
                <option value="HU">Hungary</option>
                <option value="IS">Iceland</option>
                <option value="IN">India</option>
                <option value="ID">Indonesia</option>
                <option value="IR">Iran, Islamic Republic of</option>
                <option value="IQ">Iraq</option>
                <option value="IE">Ireland</option>
                <option value="IM">Isle of Man</option>
                <option value="IL">Israel</option>
                <option value="IT">Italy</option>
                <option value="JM">Jamaica</option>
                <option value="JP">Japan</option>
                <option value="JE">Jersey</option>
                <option value="JO">Jordan</option>
                <option value="KZ">Kazakhstan</option>
                <option value="KE">Kenya</option>
                <option value="KI">Kiribati</option>
                <option value="KP">
                  Korea, Democratic People's Republic of
                </option>
                <option value="KR">Korea, Republic of</option>
                <option value="KW">Kuwait</option>
                <option value="KG">Kyrgyzstan</option>
                <option value="LA">Lao People's Democratic Republic</option>
                <option value="LV">Latvia</option>
                <option value="LB">Lebanon</option>
                <option value="LS">Lesotho</option>
                <option value="LR">Liberia</option>
                <option value="LY">Libya</option>
                <option value="LI">Liechtenstein</option>
                <option value="LT">Lithuania</option>
                <option value="LU">Luxembourg</option>
                <option value="MO">Macao</option>
                <option value="MK">
                  Macedonia, the former Yugoslav Republic of
                </option>
                <option value="MG">Madagascar</option>
                <option value="MW">Malawi</option>
                <option value="MY">Malaysia</option>
                <option value="MV">Maldives</option>
                <option value="ML">Mali</option>
                <option value="MT">Malta</option>
                <option value="MH">Marshall Islands</option>
                <option value="MQ">Martinique</option>
                <option value="MR">Mauritania</option>
                <option value="MU">Mauritius</option>
                <option value="YT">Mayotte</option>
                <option value="MX">Mexico</option>
                <option value="FM">Micronesia, Federated States of</option>
                <option value="MD">Moldova, Republic of</option>
                <option value="MC">Monaco</option>
                <option value="MN">Mongolia</option>
                <option value="ME">Montenegro</option>
                <option value="MS">Montserrat</option>
                <option value="MA">Morocco</option>
                <option value="MZ">Mozambique</option>
                <option value="MM">Myanmar</option>
                <option value="NA">Namibia</option>
                <option value="NR">Nauru</option>
                <option value="NP">Nepal</option>
                <option value="NL">Netherlands</option>
                <option value="NC">New Caledonia</option>
                <option value="NZ">New Zealand</option>
                <option value="NI">Nicaragua</option>
                <option value="NE">Niger</option>
                <option value="NG">Nigeria</option>
                <option value="NU">Niue</option>
                <option value="NF">Norfolk Island</option>
                <option value="MP">Northern Mariana Islands</option>
                <option value="NO">Norway</option>
                <option value="OM">Oman</option>
                <option value="PK">Pakistan</option>
                <option value="PW">Palau</option>
                <option value="PS">Palestinian Territory, Occupied</option>
                <option value="PA">Panama</option>
                <option value="PG">Papua New Guinea</option>
                <option value="PY">Paraguay</option>
                <option value="PE">Peru</option>
                <option value="PH">Philippines</option>
                <option value="PN">Pitcairn</option>
                <option value="PL">Poland</option>
                <option value="PT">Portugal</option>
                <option value="PR">Puerto Rico</option>
                <option value="QA">Qatar</option>
                <option value="RE">Réunion</option>
                <option value="RO">Romania</option>
                <option value="RU">Russian Federation</option>
                <option value="RW">Rwanda</option>
                <option value="BL">Saint Barthélemy</option>
                <option value="SH">
                  Saint Helena, Ascension and Tristan da Cunha
                </option>
                <option value="KN">Saint Kitts and Nevis</option>
                <option value="LC">Saint Lucia</option>
                <option value="MF">Saint Martin (French part)</option>
                <option value="PM">Saint Pierre and Miquelon</option>
                <option value="VC">Saint Vincent and the Grenadines</option>
                <option value="WS">Samoa</option>
                <option value="SM">San Marino</option>
                <option value="ST">Sao Tome and Principe</option>
                <option value="SA">Saudi Arabia</option>
                <option value="SN">Senegal</option>
                <option value="RS">Serbia</option>
                <option value="SC">Seychelles</option>
                <option value="SL">Sierra Leone</option>
                <option value="SG">Singapore</option>
                <option value="SX">Sint Maarten (Dutch part)</option>
                <option value="SK">Slovakia</option>
                <option value="SI">Slovenia</option>
                <option value="SB">Solomon Islands</option>
                <option value="SO">Somalia</option>
                <option value="ZA">South Africa</option>
                <option value="GS">
                  South Georgia and the South Sandwich Islands
                </option>
                <option value="SS">South Sudan</option>
                <option value="ES">Spain</option>
                <option value="LK">Sri Lanka</option>
                <option value="SD">Sudan</option>
                <option value="SR">Suriname</option>
                <option value="SJ">Svalbard and Jan Mayen</option>
                <option value="SZ">Swaziland</option>
                <option value="SE">Sweden</option>
                <option value="CH">Switzerland</option>
                <option value="SY">Syrian Arab Republic</option>
                <option value="TW">Taiwan, Province of China</option>
                <option value="TJ">Tajikistan</option>
                <option value="TZ">Tanzania, United Republic of</option>
                <option value="TH">Thailand</option>
                <option value="TL">Timor-Leste</option>
                <option value="TG">Togo</option>
                <option value="TK">Tokelau</option>
                <option value="TO">Tonga</option>
                <option value="TT">Trinidad and Tobago</option>
                <option value="TN">Tunisia</option>
                <option value="TR">Turkey</option>
                <option value="TM">Turkmenistan</option>
                <option value="TC">Turks and Caicos Islands</option>
                <option value="TV">Tuvalu</option>
                <option value="UG">Uganda</option>
                <option value="UA">Ukraine</option>
                <option value="AE">United Arab Emirates</option>
                <option value="GB">United Kingdom</option>
                <option value="US">United States</option>
                <option value="UM">United States Minor Outlying Islands</option>
                <option value="UY">Uruguay</option>
                <option value="UZ">Uzbekistan</option>
                <option value="VU">Vanuatu</option>
                <option value="VE">Venezuela, Bolivarian Republic of</option>
                <option value="VN">Viet Nam</option>
                <option value="VG">Virgin Islands, British</option>
                <option value="VI">Virgin Islands, U.S.</option>
                <option value="WF">Wallis and Futuna</option>
                <option value="EH">Western Sahara</option>
                <option value="YE">Yemen</option>
                <option value="ZM">Zambia</option>
                <option value="ZW">Zimbabwe</option>
              </select>
            </div>
            <div class="right_count w-50">
              <label class="info_label">City</label> <br />
              <input
                class="city_type"
                type="text"
                v-model="form_data.city"
                required
              />
            </div>
          </div>

          <div class="count_city_hold flex d-flex gap-4 mt-4 w-100">
            <div class="left_count w-50">
              <label class="info_label">Contract Types:</label> <br />
              <select class="select_job_preference">
                <option>Full-Time</option>
                <option>Part-time</option>
              </select>
            </div>
            <div class="right_count w-50">
              <label class="info_label">Job category:</label> <br />
              <select class="select_job_preference">
                <option>Hybrid</option>
                <option>On site</option>
                <option>Remote</option>
              </select>
            </div>
          </div>

          <!-- Make use of select -->
          <div class="job_preference mt-4">
            <label class="info_label">Profession:</label> <br />
            <select class="select_job_preference">
              <option>Accountant</option>
              <option>IT</option>
              <option>Sales Representative</option>
            </select>
          </div>

          <br />
          <hr />

          <div class="button_signup pt-4">
            <button class="btn btn-primary sign_up_btn" type="submit">
              Sign up
            </button>
          </div>

          <div class="flex d-flex justify-content-center alreadyaccount pt-5">
            <button class="ihavealready_btn">I have already an Account</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
//intlTelInput
import "intl-tel-input/build/css/intlTelInput.css";
import "intl-tel-input/build/js/intlTelInput.js";
import intlTelInput from "intl-tel-input";

export default {
  mounted() {
    const input = document.querySelector("#telephone");
    intlTelInput(input, {
      // any initialisation options go here
      preferredCountries: ["us"],
    });
  },
};
</script>

<style>
.space_20px_top {
  margin-top: 20px;
}
.info_label {
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: black;
}

.file_input {
  height: 46px !important;
}

.select_job_preference {
  width: 100%;
  border: 1px solid #000;
  height: 55px;
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
}

.head_register {
  margin-top: 50px;
  font-size: 34px;
  font-style: normal;
  font-weight: 500;
  color: black;
}

.city_type {
  width: 100%;
  border: 1px solid #000;
  height: 55px;
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
  /* font-size: 24px;
  font-style: normal;
  font-weight: 500; */
}

.country_select {
  width: 100%;
  border: 1px solid #000;
  height: 55px;
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
}

.calender_birth_Date {
  border-radius: 10px;
  border: 1px solid #000;
  height: 55px;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  padding-left: 10px;
  padding-right: 10px;
  color: #000000;
}

/* mobile_input */
.form-control {
  border-radius: 10px;
  border: 1px solid #000;
  width: 316px;
  height: 55px;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  padding-left: 10px;
  padding-right: 10px;
}

.Middle,
.address_input {
  border-radius: 10px;
  border: 1px solid #000;
  width: 100%;
  height: 55px;
  font-size: 20px;
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
  font-size: 20px;
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
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  color: #000;
}

.button_signup {
  text-align: center;
}
.sign_up_btn {
  font-size: 20px;
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
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
}

.input_type_signup {
  border-radius: 10px;
  border: 1px solid #000;
  width: 316px;
  height: 55px;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  padding-left: 10px;
  padding-right: 10px;
}

.label_signup {
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: black;
  padding-top: 20px;
}

.body_signup {
  padding-top: 50px;
}

.left_border {
  height: 60%;
}

.left_border,
.right_border {
  padding: 50px;
  border: solid black 1px;
  border-radius: 30px;
}
.uploadPHOTO {
  padding-top: 10px;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: black;
}
</style>
