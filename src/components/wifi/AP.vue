<template>
  <div class="pt-4">
    <form>
      <label
        for="ap-name"
        class="block text-indigo-500 font-bold md:text-left mb-1 md:mb-0 pr-0 pt-2 pb-2"
      >
        AP Name
      </label>
      <input
        class="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        id="ap-name"
        type="text"
        v-model="apName"
        placeholder="AP Name"
      />
      <label
        for="password"
        class="block text-indigo-500 font-bold md:text-left mb-1 md:mb-0 pr-4 pt-4 pb-2"
        >Password</label
      >
      <input
        class="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        id="password"
        type="text"
        v-model="apPassword"
        placeholder="Password"
      />
      <button
        class="mr-1 w-full shadow bg-green-500 hover:bg-green-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mt-8"
        type="button"
        @click="saveAPConfig"
      >
        Save
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AP",
  data() {
    return {
      apName: "",
      apPassword: ""
    };
  },
  methods: {
    getAPConfig() {
      axios.get("/api/wifi/ap").then(res => {
        this.apName = res.data.ssid;
        this.apPassword = res.data.password;
      });
    },
    saveAPConfig() {
      console.log("saveAPConfig");

      let formData = new window.FormData();
      formData.append("ap_ssid", this.apName);
      formData.append("ap_password", this.apPassword);

      axios
        .post("/api/wifi/ap", formData)
        .then(res => {
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    console.log("AP Mounted");
    this.getAPConfig();
  }
};
</script>
