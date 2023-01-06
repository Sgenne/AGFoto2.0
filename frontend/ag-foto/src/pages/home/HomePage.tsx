import styles from "./HomePage.module.css";
import Image from "../../domain/Image.interface";
import { useEffect, useState } from "react";
import axios from "axios";

const HomePage = () => {
  const [homeBackgroundImage, sethomeBackgroundImage] = useState<Image>()

  useEffect(() => {
    const fetchHomeBackgroundImage = async () => {
      const result = axios.get("")
    } 
  }, []);

  return (
    <div className={styles["homepage"]}>
        
    </div>
  )
}

export default HomePage