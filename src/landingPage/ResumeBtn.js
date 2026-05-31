import Button from "@mui/material/Button";

function ResumeBtn() {
  const handleDownload = () => {
    const link = document.createElement("a");
    // public/ files are served from the app root at runtime
    link.href = "/resume.pdf";
    link.download = "Rohit_Kumar_Yadav_CV.pdf";
    link.click();
  };

  return (
   <Button style={{color:"black",fontWeight: "600"}} startIcon={<i className="fa-solid fa-download" />} onClick={handleDownload}>
      Download CV
    </Button>
  );
}

export default ResumeBtn;