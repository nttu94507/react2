import React from 'react'
import styles from '../Header/Header.scss'
import { Switch, Route ,Link} from 'react-router-dom'
import { right } from '../../index.scss'


const Header = () =>{
    return(
        <div className={`${styles.header}`}>
            <div className={`${styles.headerLeft}`}>
                
            </div>
        <div className={`${styles.headerRight}`}>        
            <div className={`${styles.headerContainer}`}>
                <ul className={`${styles.headerContainer} ${styles.ul}`}>    
                <Link to="/" data-testid="homeLink" >
                    {/* <img src="https://i.imgur.com/y1Wr1af.png" alt="designpoppop"/> */}
                    <li className={styles.flex1}>首頁</li></Link>

                <Link to="/todolist" data-testid="todolistLink"><li className={styles.flex1}>產品</li></Link>
                <Link to="/about" data-testid="aboutLink" ><li className={styles.flex1}>關於</li></Link>
                <Link to="/content" data-testid="contentLink"><li className={styles.flex1}>內容</li></Link>
                </ul>
            </div>
        </div>
        </div>
       
    )
}
export default Header