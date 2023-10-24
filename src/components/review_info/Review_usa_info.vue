<script setup>
import info from "@/assets/Images/info.png";
import uncheck_Status from "@/assets/Images/review_status/uncheck_Status.svg";
import check_status from "@/assets/Images/review_status/check_status.svg";
import profile_pic from "@/assets/Images/profile/profile_pic.png";

import facebook_icon from "@/assets/Images/social_icon/facebook.svg";
import instagram_icon from "@/assets/Images/social_icon/instagram.svg";
import twitter_icon from "@/assets/Images/social_icon/twitter.svg";

import download_icon from "@/assets/Images/review_status/download_icon.svg";
</script>

<template>
  <main class="d-flex">
    <!-- Sidebar -->
    <div class="shadow border">
      <div class="l-navbar" id="nav-bar">
        <nav class="nav">
          <div>
            <div class="nav_list">
              <RouterLink class="nav_link py-2" to="/Dashboard">
                <i class="bx bx-grid-alt nav_icon"></i>
                <span class="nav_name">Dashboard</span></RouterLink
              >
              <RouterLink class="nav_link py-2" to="/Review">
                <i class="bx bx-grid-alt nav_icon"></i
                ><span class="nav_name">Review</span>
              </RouterLink>
              <RouterLink class="nav_link py-2" to="/Applicants">
                <i class="bx bx-grid-alt nav_icon"></i>
                <span class="nav_name">Applicants</span></RouterLink
              >
              <RouterLink class="nav_link py-2" to="/Schedule">
                <i class="bx bx-grid-alt nav_icon"></i>
                <span class="nav_name">Schedule</span></RouterLink
              >
              <RouterLink class="nav_link py-2" to="/Interview">
                <i class="bx bx-grid-alt nav_icon"></i>
                <span class="nav_name">Interview</span></RouterLink
              >

              <RouterLink class="nav_link py-2" to="/SkillAssesment">
                <i class="bx bx-grid-alt nav_icon"></i>
                <span class="nav_name">Skill Assestment</span></RouterLink
              >
            </div>
          </div>
        </nav>
      </div>
    </div>

    <!-- Main Content -->
    <div class="main_content height-100 bg-white">
      <div class="d-flex w-100">
        <div class="Application_info w-50">APPLICANTS INFO</div>
        <div class="backBtn_hold w-50">
          <button class="back_btn">Back</button>
        </div>
      </div>

      <div class="progress-bar gap-4 mt-5 w-100">
        <div
          v-for="(step, index) in steps"
          :key="index"
          class="step flex d-flex gap-2"
        >
          <div class="">
            <div class="step-circle w-100">
              <img
                :src="step.completed ? check_status : uncheck_Status"
                alt="Step Circle"
              />
            </div>
            <div class="step-label">{{ step.label }}</div>
          </div>
          <div v-if="index < 3" class="line-top"></div>
        </div>
      </div>
      <div class="progress-bar gap-4 mt-5 w-100">
        <div class="holder flex d-flex gap-4">
          <div class="user_profile">
            <div class="border_profile">
              <div class="profile_hold">
                <img :src="profile_pic" alt="profile_pic" />
              </div>
              <div class="Email_hold mt-5">john@email.com</div>
              <div class="Name_hold mt-4">
                <label class="name_label"> Name: </label>
                <div class="first_name">john</div>
                <div class="foursocial_hold gap-4">
                  <div class="social1">
                    <img :src="facebook_icon" alt="facebook_icon" />
                  </div>
                  <div class="social1">
                    <img :src="instagram_icon" alt="instagram_icon" />
                  </div>
                  <div class="social1">
                    <img :src="twitter_icon" alt="twitter_icon" />
                  </div>
                </div>
                <div class="decline_hold">
                  <button class="decline_btn">Decline</button>
                </div>
              </div>
            </div>
          </div>
          <div class="more_info">
            <div class="border_info">
              <div class="d-flex">
                <div class="left_info w-50">
                  <label class="label_info Full_label">Full name:</label>
                  <div class="Full_name value_info">John</div>
                </div>
                <div class="right_info w-50">
                  <label class="label_info Full_label">Last:</label>
                  <div class="Full_name value_info">Doe</div>
                </div>
              </div>
              <hr />
              <div class="email_hold">
                <label class="label_info Email_label">Email Address:</label>
                <div class="Full_name value_info">john@email.com</div>
                <hr />
              </div>
              <div class="email_hold">
                <label class="label_info Email_label">Phone Number:</label>
                <div class="Full_name value_info">987654321</div>
                <hr />
              </div>
              <div class="d-flex">
                <div class="left_info w-50">
                  <label class="label_info Full_label">City:</label>
                  <div class="Full_name value_info">NAIROBI</div>
                </div>
                <div class="right_info w-50">
                  <label class="label_info Full_label">Country:</label>
                  <div class="Full_name value_info">KENYA</div>
                </div>
              </div>
              <hr />

              <div class="three_btn flex d-flex justify-content-center gap-3">
                <div class="download_resume_hold">
                  <button class="Download_Resume d-flex gap-2">
                    <div>Download Resume</div>
                    <div class="">
                      <img :src="download_icon" width="20" height="20" />
                    </div>
                  </button>
                </div>
                <div class="view_resume_hold">
                  <button class="View_Resume">View Resume</button>
                </div>
                <div class="proceed_hold">
                  <button class="Proceed_btn">Proceed</button>
                </div>
              </div>
            </div>
          </div>
          <div class="Status_review">
            <div class="status_review">
              <div class="status_label">Status:</div>
              <div class="status">FOR REVIEW</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      check_status,
      uncheck_Status,
      steps: [
        { label: "HR ADMIN", completed: true },
        { label: "Managing Director", completed: true },
        { label: "Vice President", completed: false },
        { label: "PRESIDENT", completed: false },
      ],
    };
  },
};
</script>

<style>
.decline_hold {
  margin-top: 20px;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
}
.decline_btn {
  background-color: red;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 10px;
}

.backBtn_hold {
  padding-right: 30px;
  display: flex;
  justify-content: flex-end;
}

.back_btn {
  background: none;
  border: 1px solid black;
  padding: 10px 15px;
  border-radius: 10px;
  font-weight: bold;
  background: #040c53;
  color: white;
}

.View_Resume {
  color: #000;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  padding: 10px 15px;
  border-radius: 10px;
  border: 1px solid #000;
  background: #fff;
}

.Download_Resume {
  color: white;
  padding: 10px 15px;
  border-style: none;
  border-radius: 10px;
  background: #040c53;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
}

.Proceed_btn {
  color: white;
  padding: 10px 20px;
  border-style: none;
  border-radius: 10px;
  background: var(--Green, #092);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
}

.status_label {
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  color: #767676;
}
.status {
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  color: #000;
}

.three_btn {
  margin-top: 30px;
}

.email_hold {
  text-align: left;
}

.label_info {
  color: #767676;
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
}

.value_info {
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  color: #000;
}

hr.solid {
  border-top: 3px solid #bbb;
}

.left_info,
.right_info {
  text-align: left;
}
.first_name {
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  color: black;
}

.name_label,
.Email_hold {
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  color: black;
}

.social1 {
  display: flex;
  justify-content: center;
  align-items: center;
}

.foursocial_hold {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

.status_review {
  padding: 25px;
  width: 240px;
  height: auto;
  border-radius: 30px;
  border: 1px solid #000;
}

.border_info {
  padding: 50px;
  width: 600px;
  height: auto;
  border-radius: 50px;
  border: 1px solid #000;
}

.border_profile {
  padding: 50px;
  width: 363px;
  height: auto;
  border-radius: 50px;
  border: 1px solid #000;
}
.app_info_hold {
  margin-top: 20px;
}

.Application_info {
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  color: black;
}

.line-top {
  margin-top: 20px;
  border-top: 1px solid black;
  width: 230px;
}

.progress-bar {
  flex-direction: row;
  float: left;
}

.step-circle {
  width: 40px;
  height: 40px;
}

.step-circle img {
  width: 100%;
  height: 100%;
}

.step-label {
  color: black;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  margin-top: 10px;
  font-size: 14px;
}
</style>
