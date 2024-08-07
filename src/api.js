const fetch = require("node-fetch");

const BaseUrl = "http://api.kcisa.kr/openapi/API_CCA_145/request?";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    serviceKey: "dc3f4754-7de7-4dc7-91f3-e5e5387824b7",
  },
};

export const listData = fetch(BaseUrl, options).then((res) => res.json());
