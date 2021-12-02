import axios from "axios";

const convertTypeToMIME = (type) => {
  console.log(type);
  switch (type) {
    case "xlsx":
      return "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
    case "png":
      return "image/png";
    default:
      return "text/plain";
  }
};

const downloadFile = (url, file_name) => {
  axios({
    url: url,
    method: "GET",
    responseType: "blob",
  }).then((response) => {
    console.log(response);
    const blob = new Blob([response.data], {
      type: convertTypeToMIME(file_name.split(".")[1]),
    });
    const path = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = path;
    link.download = file_name.split(".")[0];
    link.click();
    link.remove();
  });
};

export default downloadFile;
