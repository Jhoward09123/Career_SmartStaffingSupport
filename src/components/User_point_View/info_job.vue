<template>
  <main class="">
    <div class="hold">
      <div
        class="two_cards_holder d-flex flex d-flex justify-content-center gap-4"
      >
        <div class="left_card">
          <div class="item_card">
            <div class="available">Available Jobs</div>
            <div class="Results">54 Results</div>
            <div
              class="border mt-3 p-4 border_all_items overflow-available-job"
            >
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
                    <button type="button" class="btn btn-primary btn_apply">
                      Apply
                    </button>
                  </div>
                </div>
              </div>
              <div class="border_job mt-4">
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
                    <button type="button" class="btn btn-primary btn_apply">
                      Apply
                    </button>
                  </div>
                </div>
              </div>
              <div class="border_job mt-4">
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
                    <button type="button" class="btn btn-primary btn_apply">
                      Apply
                    </button>
                  </div>
                </div>
              </div>
              <div class="border_job mt-4">
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
                    <button type="button" class="btn btn-primary btn_apply">
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="right_card">
          <div class="item_card">
            <div class="name_job">
              Customer Service Representative - Chat and Call Support
            </div>
            <div class="location_job">Usa, California</div>
            <div class="contract_job">Part Time</div>

            <div class="apply_hold d-flex mt-3 gap-3">
              <button type="button" class="btn btn-primary apply_btn_apply">
                Apply
              </button>
              <div class="offer_hold">
                <div class="salary_hold">Salary offer:</div>
                <span class="salary_offer">1000$ - </span>
                <span class="salary_offer">1500$ </span>
              </div>
            </div>
            <hr />

            <div class="mt-4">
              <div class="about_job">About the Job</div>
              <div class="about_description">
                Will be Full-time, but need to be within an hour drive of
                Portland, OR! A large HomeGym Equipment company is hiring
                multiple Full time Customer Support Specialists to join the
                team!
              </div>
            </div>
            <div class="mt-4">
              <div class="job_description">Job Description</div>
              <ul>
                <li class="list_description">
                  Answering a high volume of inbound calls (30-50 daily)
                </li>
                <li class="list_description">
                  Answer incoming calls from customers regarding the tracking
                  and order status of their workout equipment
                </li>
                <li class="list_description">
                  Update customers on whether or not equipment has shipped, when
                  it should arrive, and if anything is on back order
                </li>
              </ul>
            </div>
            <div class="mt-4">
              <div class="job_description">Qualifications</div>
              <ul>
                <li>1-2+ years of call center experience</li>
                <li>Experience with troubleshooting is a big plus</li>
                <li>
                  Ability to manage multiple computer programs and screens at
                  once (between 4-5)
                </li>
              </ul>
            </div>
            <div class="about_company mt-4">About the Company</div>
            <div class="mt-4 d-flex w-100 gap-4 w-100">
              <div class="about_company_hold d-flex gap-3 w-50">
                <div class="logo_company_hold">
                  <img :src="smart_staffing_logo" alt="smart_staffing_logo" />
                </div>
                <div class="title_number_employee">
                  <div class="name_company">Smart Staffing Support</div>
                  <div class="number_employyes">170,000+ Employees</div>
                </div>
              </div>
              <div class="flex d-flex justify-content-center gap-3 w-50">
                <div class="lindkle_hold">
                  <img :src="facebook" alt="facebook" />
                </div>
                <div class="facebook_hold">
                  <img :src="linkedin_icon" alt="linkedin_icon" />
                </div>
                <div class="youtube_hold">
                  <img :src="youtube" alt="youtube" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import smart_staffing_logo from "@/assets/Images/company_logo/smart_staffing_logo.png";

import ulg_icon from "@/assets/Images/company_logo/ulg_logo.png";

import facebook from "@/assets/Images/social_icon/info_job_icon/facebook.svg";
import linkedin_icon from "@/assets/Images/social_icon/info_job_icon/linkedin_icon.svg";
import youtube from "@/assets/Images/social_icon/info_job_icon/youtube.svg";
</script>

<style>
.about_company {
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
}

.job_description {
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
}

.about_job {
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
}

.number_employyes {
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
}

.name_company {
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
}

.apply_btn_apply {
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  background-color: #040c53;
  border-radius: 10px;
}
.salary_offer {
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
}
.salary_hold {
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
}
.name_job {
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
}
/* WebKit (Chrome, Safari) */
.overflow-available-job::-webkit-scrollbar {
  width: 8px;
}

.overflow-available-job::-webkit-scrollbar-thumb {
  background-color: #aaa; /* thumb color */
  border-radius: 4px; /* rounded corners */
}

.overflow-available-job::-webkit-scrollbar-thumb:hover {
  background-color: #888; /* thumb color on hover */
}

/* Firefox */
.overflow-available-job::-webkit-scrollbar-track {
  background: #eee; /* track color */
}

.overflow-available-job {
  height: 740px;
  overflow: auto;
  scrollbar-width: thin; /* For Firefox */
  scrollbar-color: #aaa #eee; /* thumb and track color */
}
.overflow-available-job {
  margin-top: 10px;
  border-radius: 15px;
}

.btn_apply {
  background: #040c53;
  color: white;
  padding: 10px 20px;
  border-radius: 10px;
}

.border_all_items {
  border-radius: 10px;
}

.button_apply_hold {
  display: flex;
  flex-direction: column;
  justify-content: end;
}

.title_job {
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  word-break: normal;
  max-width: 270px; /* Adjust the maximum width as needed */
}
.location_job {
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
}
.contract_job {
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
}

.border_job {
  border: 1px black solid;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.item_card {
  padding: 25px;
}
.available {
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
}
.hold {
  padding: 100px;
  color: black;
  background-color: #f4f4f4;
}

.left_card {
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
.right_card {
  width: 650px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
</style>
