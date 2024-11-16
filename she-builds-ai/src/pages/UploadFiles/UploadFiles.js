import React, { useState, useRef, useEffect } from "react"
import axios from "axios"
import styles from "./UploadFiles.module.css"
import Navbar from "../../components/Navbar/Navbar"
import SvgContainer from "./components/SvgContainer"

const UploadFiles = () => {
  const [files, setFiles] = useState([])
  const [step, setStep] = useState(1)
  const [startAnimation, setStartAnimation] = useState(false)

  const textRef = useRef(null)

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
      setStep(2) // Move to step 2 after upload
    } catch (error) {
      console.error("Error uploading files:", error)
    }
  }

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setStartAnimation(true)
          setTimeout(() => {
            setStep(3) // Move to step 3 after animation
          }, 5000) // Wait for 5 seconds before transitioning
        } else {
          setStartAnimation(false)
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0.5,
    })

    if (textRef.current) {
      observer.observe(textRef.current)
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current)
      }
    }
  }, [])

  return (
    <div className={styles.uploadSteps}>
      {step === 1 && (
        <div className={styles.uploadStepOne}>
          <Navbar />
          <SvgContainer />
          <div className={styles.fileContainer}>
            <div className={styles.uploadContainer} ref={textRef}>
              <label htmlFor="photos" className={styles.uploadLabel}>
                <span className={styles.textLayerColored}>UPLOAD IMAGE</span>
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
      )}
      {step === 2 && (
        <div className={styles.uploadStepTwo}>
          <div className={styles.fileContainer}>
            <div className={styles.uploadContainer} ref={textRef}>
              <label htmlFor="photos" className={styles.uploadLabel}>
                <span className={styles.textLayerColored}>UPLOADING</span>
                <input
                  id="photos"
                  type="file"
                  multiple
                  onChange={handlePhotoUpload}
                  className={styles.uploadInput}
                />
              </label>

              <div className={styles.rectangleWrapper}>
                <img
                  src="/images/uploadfiles/waves-mask-uploadfiles.svg"
                  className={`${styles.waveImage} ${
                    startAnimation ? styles.waveImageAnimated : ""
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
      )}
      {step === 3 && (
        <div className={styles.uploadStepThree}>
          <div className={styles.finishedContainer}>
            <div className={styles.finishedContainerSvg}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M61.3137 15.6569L23.6569 53.3137L2 31.6568L7.65685 26L23.6569 42L55.6569 10L61.3137 15.6569Z"
                  fill="#1D1534"
                />
              </svg>
            </div>
            <p>UPLOADED</p>
          </div>
        </div>
      )}
      {step === 4 && (
        <div className={styles.uploadStepFour}>
          <div className={styles.noThreatDetected}>
            <p>NO THREAT DETECTED</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default UploadFiles
