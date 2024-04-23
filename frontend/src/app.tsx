import React, { useEffect } from 'react';
import axios from "axios";
import styles from "./styles/app.module.css";
import Book from "./component/book";


const App = () => {

  useEffect(()=>{
  

  },[]);

  return (
    <div className={styles.heading}>
      <Book/>
    </div>
  )
}

export default App
