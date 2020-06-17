/*
 * @Descripttion: 
 * @version: 
 * @Author: big bug
 * @Date: 2020-06-01 09:41:13
 * @LastEditTime: 2020-06-11 15:02:51
 */ 
import styles from './index.css';
import ScalePage from '@components/ScalePage/index.js'

function BasicLayout(props) {
  // 登录页面
  if(props.location.pathname === '/login'){
    return <div>{props.children}</div>
  }

  const ScaleProps = {
    // width: 1920,
    // height: 1080,
  }

  return (
    <ScalePage {...ScaleProps}>
      <div className={styles.normal}>
        <h1 className={styles.title}>Yay! Welcome to umi!</h1>
        {props.children}
      </div>
    </ScalePage>
    
  );
}

export default BasicLayout;
