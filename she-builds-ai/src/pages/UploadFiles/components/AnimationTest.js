import { useRef, useEffect, useState } from "react"
import styles from "./AnimationTest.module.css"

const AnimationTest = () => {
  const textRef = useRef(null)
  const [startAnimation, setStartAnimation] = useState(false)

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setStartAnimation(true)
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
    <div className={styles.container}>
      <div className={styles.textBox} ref={textRef}>
        {/* Base layer - original color text */}
        <div className={styles.textLayer}>
          Watch this text change color as the white rectangle moves up!
        </div>

        {/* Moving rectangle */}
        <div
          className={`${styles.rectangleWrapper} ${
            startAnimation ? styles.animate : ""
          }`}
        >
          <div className={styles.rectangle}></div>
        </div>

        {/* Colored layer that will show through */}
        <div className={styles.textLayerColored}>
          Watch this text change color as the white rectangle moves up!
        </div>
      </div>
    </div>
  )
}

export default AnimationTest
