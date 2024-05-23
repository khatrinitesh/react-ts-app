import React from "react";

const CustomApp = () => {
    const handleGoogleLogin = () => {
        // Implement Google Sign-In logic here
      };
    
      const handleFacebookLogin = () => {
        // Implement Facebook Sign-In logic here
      };
    
      const handleTwitterLogin = () => {
        // Implement Twitter Sign-In logic here
      };
  return (
    <>
    <div className="flex flex-col items-center space-y-4">
      <SocialMediaButton icon="G" label="Sign in with Google" onClick={handleGoogleLogin} />
      <SocialMediaButton icon="F" label="Sign in with Facebook" onClick={handleFacebookLogin} />
      <SocialMediaButton icon="T" label="Sign in with Twitter" onClick={handleTwitterLogin} />
    </div>
    </>
  )
};

export default CustomApp;

// Define interfaces for social media platforms
interface SocialMediaButtonProps {
  icon: string;
  label: string;
  onClick: () => void;
}

const SocialMediaButton: React.FC<SocialMediaButtonProps> = ({ icon, label, onClick }) => {
    return (
      <button
        className="flex items-center justify-center bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={onClick}
      >
        <span className="mr-2">{icon}</span>
        <span>{label}</span>
      </button>
    );
  };
  
