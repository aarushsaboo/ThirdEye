import React, { useState } from "react"
import axios from "axios"
import styles from "./UploadFiles.module.css"
import Navbar from "../../components/Navbar/Navbar"
import SvgContainer from "./components/SvgContainer"

const UploadFiles = () => {
  const [files, setFiles] = useState([])

  const handlePhotoUpload = async (event) => {
    const uploadedFiles = event.target.files
    const username = "example_user" // Replace with actual username

    const formData = new FormData()
    for (const file of uploadedFiles) {
      formData.append("files", file)
    }

    try {
      await axios.post(`/api/upload/${username}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      setFiles(Array.from(uploadedFiles))
    } catch (error) {
      console.error("Error uploading files:", error)
    }
  }

  return (
    <div className={styles.uploadFiles}>
      <Navbar />
      <SvgContainer />
      <div className={styles.fileContainer}>
        <div className={styles.uploadContainer}>
          <label htmlFor="photos" className={styles.uploadLabel}>
            <span className={styles.uploadText}>UPLOAD IMAGE</span>
            <input
              id="photos"
              type="file"
              multiple
              onChange={handlePhotoUpload}
              className={styles.uploadInput}
            />
          </label>
        </div>
      </div>
    </div>
  )
}

export default UploadFiles
