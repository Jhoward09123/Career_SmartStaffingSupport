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
        <div class="col_hold_3 d-flex p-4">
          <div class="column_3 px-2">
            <div class="">
              <div class="Label_title">Job Title</div>
              <div class="Label_title">
                <input type="text" class="input_one px-2" />
              </div>
            </div>
            <div class="item_hold d-flex gap-3">
              <div class="left_cate w-50">
                <div class="Label_title">Job Category</div>
                <div class="Label_title">
                  <select
                    class="form-select two_input"
                    aria-label="Default select example"
                  >
                    <option selected>Hybrid</option>

                    <option value="2">On site</option>
                    <option value="3">Remote</option>
                  </select>
                </div>
              </div>
              <div class="right_con w-50">
                <div class="Label_title">Contract Type</div>
                <div class="Label_title">
                  <select
                    class="form-select two_input"
                    aria-label="Default select example"
                  >
                    <option selected>Full-time</option>
                    <option value="2">Part-Time</option>
                    <option value="3">Remote</option>
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
                  >
                    <option value="AF">USA</option>
                    <option value="AX">KENYA</option>
                    <option value="AL">PHILIPPINES</option>
                    <option value="DZ">LEBANON</option>
                  </select>
                </div>
              </div>
              <div class="right_con w-50">
                <div class="Label_title">City</div>
                <div class="Label_title">
                  <input type="text" class="two_input" />
                </div>
              </div>
            </div>
            <div class="item_hold gap-3">
              <div class="Label_title">Salary Range Min-Max</div>
              <div class="d-flex gap-3">
                <div class="left_cate w-50">
                  <div class="Label_title">
                    <input type="number" class="two_input" />
                  </div>
                </div>
                <div class="right_con w-50">
                  <div class="Label_title"></div>
                  <div class="Label_title">
                    <input type="number" class="two_input" />
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
                  >
                    <option selected>Full-time</option>
                    <option value="2">Part-Time</option>
                    <option value="3">Remote</option>
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
                        type="submit"
                      >
                        <img :src="add_btn_des" alt="add_btn_des" />
                      </button>
                    </div>
                  </div>
                  <div class="border_add_descrip">
                    <div class="overflow-auto m-2">
                      <ul class="list_job_descript">
                        <li class="border_item_list">
                          <div v-if="descriptions.length > 0">
                            <div
                              v-for="(description, index) in descriptions"
                              :key="index"
                              class="d-flex w-100 border_per_item"
                            >
                              <div class="item_text_hold">
                                {{ description }}
                              </div>
                              <div class="button_remove_hold">
                                <button
                                  class="remove_btn"
                                  @click="removeDescription"
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
                        v-model="newqualifications"
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
                        type="submit"
                      >
                        <img :src="add_btn_des" alt="add_btn_des" />
                      </button>
                    </div>
                  </div>
                  <div class="border_add_descrip">
                    <div class="overflow-auto m-2">
                      <ul class="list_job_descript">
                        <li class="border_item_list">
                          <div v-if="qualifications.length > 0">
                            <div
                              v-for="(qualification, index) in qualifications"
                              :key="index"
                              class="d-flex w-100 border_per_item"
                            >
                              <div class="item_text_hold">
                                {{ qualification }}
                              </div>
                              <div class="button_remove_hold">
                                <button
                                  class="remove_btn"
                                  @click="removeQualifications"
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
              <button class="btn-primary Submit_btn_add">Sumbit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import remove_list_icon from "@/assets/Images/action_icon/remove_list_icon.svg";
import add_btn_des from "@/assets/Images/Btn_icons/add_btn_descr.svg";
import Side_panel from "@/components/Side_panel.vue";

import { ref } from "vue";

const descriptions = ref([]);
const newDescription = ref("");
const currencyValue = ref("");

const addDescription = () => {
  if (newDescription.value) {
    descriptions.value.push(newDescription.value);
    newDescription.value = ""; // Clear the input field
  }
};

//new qualifications

const qualifications = ref([]);
const newqualifications = ref("");

const addqualifications = () => {
  if (newqualifications.value) {
    qualifications.value.push(newqualifications.value);
    newqualifications.value = ""; // Clear the input field
  }
};

const removeDescription = (index) => {
  descriptions.value.splice(index, 1);
};

const removeQualifications = (index) => {
  qualifications.value.splice(index, 1);
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
/* WebKit (Chrome, Safari) */
.overflow-auto::-webkit-scrollbar {
  width: 8px;
}

.overflow-auto::-webkit-scrollbar-thumb {
  background-color: #aaa; /* thumb color */
  border-radius: 4px; /* rounded corners */
}

.overflow-auto::-webkit-scrollbar-thumb:hover {
  background-color: #888; /* thumb color on hover */
}

/* Firefox */
.overflow-auto::-webkit-scrollbar-track {
  background: #eee; /* track color */
}

.overflow-auto {
  height: 150px;
  overflow: auto;
  scrollbar-width: thin; /* For Firefox */
  scrollbar-color: #aaa #eee; /* thumb and track color */
}
.overflow-auto {
  margin-top: 10px;
  border-radius: 15px;
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
