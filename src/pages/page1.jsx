import styles from './page1.module.css';

import { Link } from 'react-router-dom';



function Co_Page1() {
    
    return (
      <div className={styles.main}>
        <p>This is page 1</p>

        <Link to="/">
          <button>go to App</button>
        </Link>

        <br></br>

        <Link to="/pages/page2">
          <button>go to page 2</button>
        </Link>
      </div>
    );
}



export default Co_Page1