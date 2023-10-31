<template>
  <main class="">
    <div class="hold">
      <div
        class="search_item_hold flex d-flex justify-content-center gap-4 mb-4"
      >
        <div class="jobtitle_hold">
          <input
            placeholder="Job Title"
            type="text"
            class="form-select-lg input_job_title"
          />
        </div>
        <div class="office_location">
          <select
            class="form-select form-select-lg select_country office_location_Select"
            aria-label="Default select example"
          >
            <option selected disabled>Location</option>
            <option>PHILIPPINES</option>
            <option value="2">CALIFORNIA</option>
            <option value="3">KENYA</option>
            <option value="3">LEBANON</option>
          </select>
        </div>
        <div class="">
          <button class="btn btn-primary find_btn_hold">Find Jobs</button>
        </div>
      </div>
      <hr />
      <div class="Recommended_hold text-center mt-5">
        <u> Recommended For you</u>
      </div>

      <div class="row_card_holder d-flex gap-4 mt-5">
        <div class="left_row">
          <div class="border_job">
            <div class="d-flex gap-4">
              <div class="logo">
                <img :src="ulg_icon" alt="ulg_icon" />
              </div>
              <div class="title_job_hold">
                <div class="title_job">
                  Business Support Inbound Call Center Agent
                </div>
                <div class="location_job">Usa, California</div>
                <div class="contract_job">Part Time</div>
              </div>
              <div class="button_apply_hold">
                <button type="button " class="btn btn-primary button_apply">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="middle_row">
          <div class="border_job">
            <div class="d-flex gap-4">
              <div class="logo">
                <img :src="ulg_icon" alt="ulg_icon" />
              </div>
              <div class="title_job_hold">
                <div class="title_job">
                  Business Support Inbound Call Center Agent
                </div>
                <div class="location_job">Usa, California</div>
                <div class="contract_job">Part Time</div>
              </div>
              <div class="button_apply_hold">
                <button type="button " class="btn btn-primary button_apply">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="right_row">
          <div class="border_job">
            <div class="d-flex gap-4">
              <div class="logo">
                <img :src="ulg_icon" alt="ulg_icon" />
              </div>
              <div class="title_job_hold">
                <div class="title_job">
                  Business Support Inbound Call Center Agent
                </div>
                <div class="location_job">Usa, California</div>
                <div class="contract_job">Part Time</div>
              </div>
              <div class="button_apply_hold">
                <button type="button " class="btn btn-primary button_apply">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row_card_holder d-flex gap-4 mt-5">
        <div class="left_row">
          <div class="border_job">
            <div class="d-flex gap-4">
              <div class="logo">
                <img :src="ulg_icon" alt="ulg_icon" />
              </div>
              <div class="title_job_hold">
                <div class="title_job">
                  Business Support Inbound Call Center Agent
                </div>
                <div class="location_job">Usa, California</div>
                <div class="contract_job">Part Time</div>
              </div>
              <div class="button_apply_hold">
                <button type="button " class="btn btn-primary button_apply">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="middle_row">
          <div class="border_job">
            <div class="d-flex gap-4">
              <div class="logo">
                <img :src="ulg_icon" alt="ulg_icon" />
              </div>
              <div class="title_job_hold">
                <div class="title_job">
                  Business Support Inbound Call Center Agent
                </div>
                <div class="location_job">Usa, California</div>
                <div class="contract_job">Part Time</div>
              </div>
              <div class="button_apply_hold">
                <button type="button " class="btn btn-primary button_apply">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="right_row">
          <div class="border_job">
            <div class="d-flex gap-4">
              <div class="logo">
                <img :src="ulg_icon" alt="ulg_icon" />
              </div>
              <div class="title_job_hold">
                <div class="title_job">
                  Business Support Inbound Call Center Agent
                </div>
                <div class="location_job">Usa, California</div>
                <div class="contract_job">Part Time</div>
              </div>
              <div class="button_apply_hold">
                <button type="button " class="btn btn-primary button_apply">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row_card_holder d-flex gap-4 mt-5">
        <div class="left_row">
          <div class="border_job">
            <div class="d-flex gap-4">
              <div class="logo">
                <img :src="ulg_icon" alt="ulg_icon" />
              </div>
              <div class="title_job_hold">
                <div class="title_job">
                  Business Support Inbound Call Center Agent
                </div>
                <div class="location_job">Usa, California</div>
                <div class="contract_job">Part Time</div>
              </div>
              <div class="button_apply_hold">
                <button type="button " class="btn btn-primary button_apply">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="middle_row">
          <div class="border_job">
            <div class="d-flex gap-4">
              <div class="logo">
                <img :src="ulg_icon" alt="ulg_icon" />
              </div>
              <div class="title_job_hold">
                <div class="title_job">
                  Business Support Inbound Call Center Agent
                </div>
                <div class="location_job">Usa, California</div>
                <div class="contract_job">Part Time</div>
              </div>
              <div class="button_apply_hold">
                <button type="button " class="btn btn-primary button_apply">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="right_row">
          <div class="border_job">
            <div class="d-flex gap-4">
              <div class="logo">
                <img :src="ulg_icon" alt="ulg_icon" />
              </div>
              <div class="title_job_hold">
                <div class="title_job">
                  Business Support Inbound Call Center Agent
                </div>
                <div class="location_job">Usa, California</div>
                <div class="contract_job">Part Time</div>
              </div>
              <div class="button_apply_hold">
                <button type="button " class="btn btn-primary button_apply">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import ulg_icon from "@/assets/Images/company_logo/ulg_logo.png";
</script>

<style>
.button_apply {
  background-color: #040c53;
}
.button_apply_hold {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
}

.location_job,
.contract_job {
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
}

.title_job {
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
}
.border_job {
  border: solid black 1px;
  padding: 20px;
  border-radius: 30px;
  word-break: normal;
}

.office_location_Select,
.input_job_title {
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  color: black;
}

.hold {
  color: black;
}

.Recommended_hold {
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
}
.recomend {
  justify-content: center;
  align-items: center;
}

.select_country {
  height: 60px;
}

.office_location {
  border-radius: 30px;
  width: 400px;
  height: 71px;
}

.input_job_title {
  border-radius: 30px;
  width: 400px;
  height: 60px;
}

.find_btn_hold {
  border-radius: 10px;
  background: #040c53;
  padding: 20px;
}

.hold {
  padding: 100px;
}
</style>
