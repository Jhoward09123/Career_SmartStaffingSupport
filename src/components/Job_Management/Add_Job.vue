<template>
  <main class="d-flex">
    <!-- Sidebar -->
    <div class="shadow border">
      <Side_panel />
    </div>

    <!-- Main Content -->
    <div class="main_content height-100 bg-white">
      <div class="Main_title_Dash">Job Management Dashboard</div>
      <div class="mt-4">Create Job Form</div>

      <div class="border_add_box border border-secondary">
        <form @submit.prevent="store.createJob(form_data)">
          <div class="col_hold_3 d-flex p-4">
            <div class="column_3 px-2">
              <div class="">
                <div class="Label_title">Job Title</div>
                <div class="Label_title">
                  <input type="text" class="input_one px-2" v-model="form_data.name" name="name"/>
                </div>
              </div>
              <div class="item_hold d-flex gap-3">
                <div class="left_cate w-50">
                  <div class="Label_title">Job Category</div>
                  <div class="Label_title">
                    <select class="form-select two_input" aria-label="job_category_id" v-model="form_data.job_category_id" name="job_category_id">
                      <option v-for="job_category in state.job_categories" :value="job_category.id">{{ job_category.name }}</option>

                    </select>
                  </div>
                </div>
                <div class="right_con w-50">
                  <div class="Label_title">Contract Type</div>
                  <div class="Label_title">
                    <select
                      class="form-select two_input"
                      aria-label="Default select example"
                      v-model="form_data.contract_type_id" name="contract_type_id"
                    >
                      <option v-for="contract_type in state.contract_types" :value="contract_type.id">{{ contract_type.name }}</option>

                    </select>
                  </div>
                </div>
              </div>
              <div class="item_hold d-flex gap-3">
                <div class="left_cate w-50">
                  <div class="Label_title">Country</div>
                  <div class="Label_title">
                    <select
                      class="form-select two_input"
                      aria-label="Default select example"
                      v-model="form_data.country_id" name="country_id"
                    >
                      <option v-for="country in state.countries" :value="country.id">{{ country.name }}</option>

                    </select>
                  </div>
                </div>
                <div class="right_con w-50">
                  <div class="Label_title">City</div>
                  <div class="Label_title">
                    <input type="text" class="two_input" v-model="form_data.city" name="city"/>
                  </div>
                </div>
              </div>
              <div class="item_hold gap-3">
                <div class="Label_title">Salary Range Min-Max</div>
                <div class="d-flex gap-3">
                  <div class="left_cate w-50">
                    <div class="Label_title">
                      <input type="number" class="two_input" v-model="form_data.min_salary" name="min_salary"/>
                    </div>
                  </div>
                  <div class="right_con w-50">
                    <div class="Label_title"></div>
                    <div class="Label_title">
                      <input type="number" class="two_input" v-model="form_data.max_salary" name="max_salary"/>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item_hold d-flex gap-3">
                <div class="left_cate w-50">
                  <div class="Label_title">Company</div>
                  <div class="Label_title">
                    <select
                      class="form-select two_input"
                      aria-label="Default select example"
                      v-model="form_data.company_id" name="company_id"
                    >
                      <option v-for="company in state.companies" :value="company.id">{{ company.name }}</option>
                    </select>
                  </div>
                </div>
                <div class="right_con w-50">
                  <div class="Label_title">Upload Flyer</div>
                  <div class="Label_title">
                    <input
                      class="form-control form-control-lg"
                      id="formFileLg"
                      type="file"
                      name="flyer_url"
                      v-bind="form_data.flyer_url"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="column_3 px-2">
              <div class="">
                <div class="Label_title">
                  About Job <span class="char_200">(200 Character Max)</span>
                </div>
                <div class="Label_title">
                  <div class="form-floating">
                    <textarea
                      class="form-control border_textarea"
                      placeholder="Leave a comment here"
                      id="floatingTextarea2"
                      style="height: 100px"
                      v-model="form_data.about_job" name="about_job"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div class="item_hold">
                <div class="Label_title">Job Description</div>
                <div class="Label_title">
                  <div class="form-floating">
                    <div class="d-flex gap-2">
                      <div class="">
                        <!-- here -->
                        <textarea
                          v-model="newDescription"
                          class="form-control border_textarea"
                          placeholder=""
                          id="floatingTextarea2"
                          style="height: 100px; width: 298px"
                        ></textarea>
                      </div>
                      <div class="">
                        <button
                          @click="addDescription"
                          class="btn-light add_btn_description"
                          type="button"
                        >
                          <img :src="add_btn_des" alt="add_btn_des" />
                        </button>
                      </div>
                    </div>
                    <div class="border_add_descrip">
                      <div class="overflow-auto m-2">
                        <ul class="list_job_descript">
                          <li class="border_item_list">
                            <div v-if="form_data.job_description.length > 0">
                              <div
                                v-for="(description, index) in form_data.job_description"
                                :key="index"
                                class="d-flex w-100 border_per_item"
                              >
                                <div class="item_text_hold">
                                  {{ description }}
                                </div>
                                <div class="button_remove_hold">
                                  <button
                                    class="remove_btn"
                                    @click="removeDescription(index)"
                                    type="button"
                                  >
                                    <img
                                      :src="remove_list_icon"
                                      alt="remove_list_icon"
                                    />
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div v-else>
                              <div class="item_text_hold">
                                Empty Add Job Description
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="column_3 px-2">
              <div class="">
                <div class="Label_title">Qualifications</div>
                <div class="Label_title">
                  <div class="form-floating">
                    <div class="d-flex gap-2">
                      <div class="">
                        <textarea
                          v-model="newqualification"
                          class="form-control border_textarea"
                          placeholder=""
                          id="floatingTextarea2"
                          style="height: 100px; width: 298px"
                        ></textarea>
                      </div>
                      <div class="">
                        <button
                          @click="addqualifications"
                          class="btn-light add_btn_description"
                          type="button"
                        >
                          <img :src="add_btn_des" alt="add_btn_des" />
                        </button>
                      </div>
                    </div>
                    <div class="border_add_descrip">
                      <div class="overflow-auto m-2">
                        <ul class="list_job_descript">
                          <li class="border_item_list">
                            <div v-if="form_data.qualifications.length > 0">
                              <div
                                v-for="(qualification, index) in form_data.qualifications"
                                :key="index"
                                class="d-flex w-100 border_per_item"
                              >
                                <div class="item_text_hold">
                                  {{ qualification }}
                                </div>
                                <div class="button_remove_hold">
                                  <button
                                    class="remove_btn"
                                    @click="removeQualification(index)"
                                    type="button"
                                  >
                                    <img
                                      :src="remove_list_icon"
                                      alt="remove_list_icon"
                                    />
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div v-else>
                              <div class="item_text_hold">
                                Empty Add Qualifications
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div class="flex d-flex justify-content-center btn_submit_hold">
                <button class="btn-primary Submit_btn_add" type="submit">Submit</button>
              </div>
            </div>
          </div>
        </form>

      </div>
    </div>
  </main>
</template>

<script setup>
import remove_list_icon from "@/assets/Images/action_icon/remove_list_icon.svg";
import add_btn_des from "@/assets/Images/Btn_icons/add_btn_descr.svg";
import Side_panel from "@/components/Side_panel.vue";
import { useGlobalStore } from "@/stores/globalStore";
import { ref,onMounted } from "vue";

const store = useGlobalStore();

const state = ref({
  "companies" : [],
  "states" : [],
  "job_categories" : [],
  "countries" : [],
  "contract_types" : []
})

onMounted( async () => {
  await store.fetchCompanies()
  await store.fetchStates()
  await store.fetchJobCategories()
  await store.fetchCountries()
  await store.fetchContractTypes()
  state.value.companies = store.companies
  state.value.states = store.states
  state.value.job_categories = store.job_categories
  state.value.countries = store.countries
  state.value.contract_types = store.contract_types
  
})

const form_data = ref({
  "job_category_id": "",
  "profession_id": "",
  "contract_type_id": "",
  "company_id": "",
  "country_id": "",
  "city": "",
  "name": "",
  "min_salary": "",
  "max_salary": "",
  "about_job": "",
  "responsibilities": "",
  "job_description": [],
  "qualifications": [],
  "tags": "",
  "application_deadline": "",
  "flyer_url": ""
})


// const descriptions = ref([]);
// const qualifications = ref([]);
const newqualification = ref("");
const newDescription = ref("");
const currencyValue = ref("");

const addDescription = () => {
  if (newDescription.value) {
    form_data.value.job_description.push(newDescription.value);
    newDescription.value = ""; // Clear the input field
  }
}; 

//new qualifications
const addqualifications = () => {
  if (newqualification.value) {
    form_data.value.qualifications.push(newqualification.value);
    newqualification.value = ""; // Clear the input field
  }
};

const removeDescription = (index) => {
  form_data.value.job_description.splice(index, 1);
};

const removeQualification = (index) => {
  form_data.value.qualifications.splice(index, 1); 
};

//currency
</script>

<style>
/* boder_per_item */

.border_per_item {
  border: 1px solid black;
  margin-bottom: 5px;
  padding-left: 10px;
  border-radius: 15px;
}

/* Space_description */
.item_text_hold {
  width: 90%;
  word-break: break-all;
}
.button_remove_hold {
  width: 10%;
}

/* Remove_btn_list */

.remove_btn {
  background: none;
  border-style: none;
}

/* Border_list */
.border_item_list {
  margin-right: 10px;
  border-radius: 15px;
  margin-top: 5px;
  margin-bottom: 5px;
}

/* Text Area */

.border_textarea {
  border: solid black 1px;
}

.border_add_box {
  margin-top: 20px;
  border-radius: 15px;
}
.Submit_btn_add {
  padding: 15px 25px;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  border-style: none;
  color: white;
  border-radius: 15px;
  background: var(--violet, #050d56);
}

.border_add_descrip {
  border-radius: 15px;
  margin-top: 20px;
  border: 1px solid black;
}


.list_job_descript {
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  list-style-type: none;
  padding-left: 5px;
}
.add_btn_description {
  border-radius: 15px;
  background: none;
  border: 1px solid black;
  background-color: none;
  padding: 10px 15px;
}
.char_200 {
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
}
.two_input {
  width: 100%;
  border-radius: 10px;
  border: 1px solid #000;
  height: 55px;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  color: black;
  padding-left: 10px;
  padding-right: 10px;
}

.item_hold {
  margin-top: 20px;
}

.Label_title {
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  color: #000;
}

.input_one {
  width: 100%;
  border-radius: 10px;
  border: 1px solid #000;
  height: 55px;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
}

.column_3 {
  width: 33.33%;
}
</style>
