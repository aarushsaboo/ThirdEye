import styles from './UploadFiles.module.css';
import Navbar from '../../components/Navbar/Navbar';
import SvgContainer from './components/SvgContainer';

const UploadFiles = () => {
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
              //   onChange={handlePhotoUpload}
              className={styles.uploadInput}
            />
          </label>
        </div>

        <img
          src="/images/uploadfiles/waves-mask-uploadfiles.svg"
          className={styles.waveImage}
        ></img>
      </div>
    </div>
  )
};

export default UploadFiles;