<template>
  <div>
    <div class="pt-4">
      <form>
        <!-- <ul class="pt-4 pb-4">
          <li v-for="(ssid, index) in ssidFounds" :key="index">
            <input
              type="radio"
              name="ssid_selected"
              :value="ssid.name"
              @change="wifiSelectChange"
            />
            {{ ssid.name }}
          </li>
        </ul> -->

        <div style="display: flex; align-items: center">
          <img
            src="../../assets/wifi.png"
            style="height: 24px; margin-right: 8px"
          />
          <label
            for="ap-name"
            class="block text-indigo-500 font-bold md:text-left mb-1 md:mb-0 pr-0 pt-2 pb-2"
            >SSID SCAN</label
          >
        </div>

        <select
          class="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 bg-white mb-4"
          @change="wifiSelectChange"
          style="cursor: pointer"
        >
          <option v-for="(ssid, index) in ssidFounds" :key="index">
            {{ ssid.name }}
          </option>
        </select>

        <div style="display: flex; align-items: center">
          <img
            src="../../assets/edit.png"
            style="height: 24px; margin-right: 8px"
          />
          <label
            for="ap-name"
            class="block text-indigo-500 font-bold md:text-left mb-1 md:mb-0 pr-0 pt-2 pb-2"
            >Manual SSID</label
          >
        </div>
        <input
          class="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          id="ap-name"
          type="text"
          v-model="wifiSelected"
          placeholder="AP Name"
        />

        <div style="display: flex; align-items: center">
          <img
            src="../../assets/key.png"
            style="height: 24px; margin-right: 8px"
          />
          <label
            for="password"
            class="block text-indigo-500 font-bold md:text-left mb-1 md:mb-0 pr-4 pt-4 pb-2"
            >Password</label
          >
        </div>
        <input
          class="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          id="password"
          type="text"
          v-model="wifiPassword"
          placeholder="Password"
        />
        <button
          class="mr-1 w-full shadow bg-green-500 hover:bg-green-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mt-8"
          type="button"
          @click="staSave"
        >
          Save
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "STA",
  data() {
    return {
      ssidFounds: [],
      wifiSelected: "",
      wifiPassword: ""
    };
  },
  methods: {
    wifiScan() {
      axios
        .get("/api/wifi/scan")
        .then(response => {
          this.ssidFounds = response.data;
          console.log(this.ssidFounds);
        })
        .catch(error => {
          console.log("eroro", error.status, error);
          reject(error);
        });
    },
    wifiSelectChange(e) {
      console.log("wifiSelectChange");
      this.wifiSelected = e.target.value;
    },
    staSave() {
      console.log("staSave");

      let formData = new window.FormData();
      formData.append("sta_ssid", this.wifiSelected);
      formData.append("sta_password", this.wifiPassword);

      axios
        .post("/api/wifi/sta", formData)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
    console.log("STA Mounted");
    this.wifiScan();
  }
};
</script>
