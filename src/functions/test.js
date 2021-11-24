const axios = require("axios");
const fs = require("fs");

console.log("start");

const getUrl = async (url) => {
  const result = await axios.get(url);
  console.log(result.data.map((e) => e.SALESTR_NM).filter((e2) => e2 != null));
};

const data = JSON.parse(
  fs.readFileSync(
    "/home/server/workspace/python/background_algorithms/data/hangjeongdong.json"
  )
);

const seoul_features = data.features.filter(
  (e) => e.properties.adm_nm.split(" ")[0] == "서울특별시"
);

console.log(seoul_features);

// console.log(
//   getUrl("https://member.ssg.com/m/addr/getShppRegnInfo.ssg?zipcd=06784")
// );
