import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const CustomApp = () => {
  return (
    <div>
        <FrostedGlassEffect/>
    </div>
  )
}

export default CustomApp

const FrostedGlassEffect: React.FC = () => {
    return (
      <>
      <div id="container">
        <form>
          <img src="https://bit.ly/2tlJLoz"/><br/>
          <input type="text" value="AmJustSam"/><br/>
          <input type="password"/><br/>
          <input type="submit" value="SIGN IN"/><br/>
          <span><Link href="javascript:void(0)">Forgot Password?</Link></span>
        </form>
      </div>
      </>
    );
  }
