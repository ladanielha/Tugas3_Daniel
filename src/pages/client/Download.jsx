import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CustomButton from "../../components/Button";

const Download = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const localUser = localStorage.getItem("username");
    if (localUser) {
      setUsername(localUser);
    } else {
      navigate("/");
    }
  }, []);

  const handleDownload = async () => {
    console.log("asdasd");

    try {
      const response = await fetch("http://localhost:5000/users", {
        method: "GET",
      });

      const textData = await response.text();

      const blob = new Blob([textData], { type: "text/plain" });

      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "downloaded-file.txt";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Revoke object URL
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error fetching the file:", error);
    }
  };

  return (
    <div>
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold text-body-emphasis">Hai {username} </h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">Silakan Download disini ....</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <CustomButton text={"Download"} type={"button"} onClick={handleDownload} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
