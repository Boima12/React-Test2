import styles from './page2.module.css';

import { Link } from 'react-router-dom';



function Co_Page2() {
    
    return (
      <div className={styles.main}>
        <p>This is page 2</p>

        <Link to="/">
          <button>go to App</button>
        </Link>

        <br></br>

        <Link to="/pages/page1">
          <button>go to page 1</button>
        </Link>
      </div>
    );
}



export default Co_Page2