import React from 'react'

const CustomApp = () => {
  return (
    <>
        <SocialLoginForm/>
    </>
  )
}

export default CustomApp  

const SocialLoginForm: React.FC = () => {
    const handleGoogleLogin = () => {
      // Implement Google Sign-In logic here
      console.log('googleplus');
    };
  
    const handleFacebookLogin = () => {
      // Implement Facebook Sign-In logic here
      console.log('facebook');
    };
  
    const handleTwitterLogin = () => {
      // Implement Twitter Sign-In logic here
      console.log('twitter');
    };
  
    return (
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4">Social Login</h2>
        <button
          className="bg-red-500 text-white py-2 px-4 rounded-md mb-4 hover:bg-red-600"
          onClick={handleGoogleLogin}
        >
          Sign in with Google
        </button>
        <button
          className="bg-blue-600 text-white py-2 px-4 rounded-md mb-4 hover:bg-blue-700"
          onClick={handleFacebookLogin}
        >
          Sign in with Facebook
        </button>
        <button
          className="bg-blue-400 text-white py-2 px-4 rounded-md hover:bg-blue-500"
          onClick={handleTwitterLogin}
        >
          Sign in with Twitter
        </button>
      </div>
    );
  };