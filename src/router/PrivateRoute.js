/*
 * @Descripttion: 
 * @version: 
 * @Author: big bug
 * @Date: 2020-06-09 10:44:16
 * @LastEditTime: 2020-06-09 14:14:46
 */ 
const { Route, Redirect } = require('dva').router;

const AuthRouter = (props) => {
  const { route } = props;
  const { component:Component } = route;
  return (
    <Route render={ props => {
      console.log('private',props);
      return true ? <Component { ...props } /> : <Redirect to="/login" />
    }} />
  )
}

export default AuthRouter;