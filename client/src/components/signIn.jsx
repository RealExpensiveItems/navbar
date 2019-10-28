import React from 'react'


class SignIn extends React.Component{
  constructor(props){
    super(props)
    this.state={
      show:false,
      hide: 'Hide'
    }
    this.showHandler = this.showHandler.bind(this)
    this.hideHandler = this.hideHandler.bind(this)
  }
  showHandler(){
    this.setState({show:!this.state.show});
  }
  hideHandler(){
    if(this.state.hide==='Hide'){
      this.setState({hide:'Show'})
    }else if(this.state.hide==='Show'){
      this.setState({hide:'Hide'})
    }
  }

  render(){
    const {show, hide} = this.state
    let dropdown;
    if(show===true){
      dropdown = (
        <div className="d-dropdown">
          <div class="mtns"> <svg aria-hidden="true" version="1.0" xmlns="http://www.w3.org/2000/svg" width="80" height="19" class="twin-peaks-svg-container__twin-peaks-svg"> <g fill="#000"><path d="M0 0 V25 H5 L30 0 L45 15 L54 7 L75 25 H80 V0 Z"></path></g> </svg> </div>
        <div className="d-dropdown-content">
          <div class='leavedrop' onClick={this.showHandler}>x</div>
        <a href="#" className="user">Email</a>
        <input className="signin"></input>
         <a href="#" className="user"> Password</a>
          <span className="passbox">
           <input className="password"></input>
        <button className="hide-button" onClick={this.hideHandler} value={hide}>{hide}</button>
        </span>
        <a href="#" className="forgot-password">Forgot Password?</a>
      <div className="policy">By signing into your account, you agree to REI's <a className="terms" href="#">Terms of Use</a> and acknowledge you have read its <a className="terms" href="#">Privacy Policy.</a></div>
      <button className="signin-button">Sign in</button>
      <a href="#"></a>
      <button className="create-account">Create an account</button>
      </div>
      </div>
      )
    }else{
      dropdown =(
        <div className='empty'></div>
      )
    }

  return(

  <li className="action" ><span onClick={this.showHandler}>SIGN IN
    <span className="actionGraphics">
                    <svg className='sideGraphics' version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 6c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3m0-2c-2.764 0-5 2.238-5 5s2.236 5 5 5 5-2.238 5-5-2.236-5-5-5zM12 17c2.021 0 3.301.771 3.783 1.445-.683.26-1.969.555-3.783.555-1.984 0-3.206-.305-3.818-.542.459-.715 1.777-1.458 3.818-1.458m0-2c-3.75 0-6 2-6 4 0 1 2.25 2 6 2 3.518 0 6-1 6-2 0-2-2.354-4-6-4z"/></svg>
                    </span></span>
                    {dropdown}
  </li>
  )}
}
export default SignIn