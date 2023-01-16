console.log("te");

const fileInput = document.getElementById("ImgUpload");
// 또는 const fileInput = $("#fileUpload").get(0);

const handleFiles = () => {
  const selectedFile = [...fileInput.files];
  console.log(selectedFile);
};
fileInput.addEventListener("change",handleFiles)
