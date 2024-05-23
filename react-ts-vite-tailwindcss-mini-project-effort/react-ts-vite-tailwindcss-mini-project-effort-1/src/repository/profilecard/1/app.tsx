import React, { useState, useEffect } from "react";
import "./style.css";

const CustomApp = () => {
  const procardlist = [
    {
      name: "Basic 1",
      email: "xyz@gmail.com",
      avatarUrl:
        "https://w0.peakpx.com/wallpaper/390/568/HD-wallpaper-artificial-intelligence-background-vectors-stock-psd-vision.jpg",
    },
    {
      name: "wwf 2",
      email: "xyz@gmail.com",
      avatarUrl:
        "https://wallpapers.com/images/featured/wrestling-uxstyzkvrajyuemx.jpg",
    },
    {
      name: "wwf 3",
      email: "xyz@gmail.com",
      avatarUrl: "https://wallpapercave.com/wp/wp1977220.jpg",
    },
  ];
  return (
    <div>
      <ProfileCard profile={procardlist} />
    </div>
  );
};

export default CustomApp;

interface Profile {
  name: string;
  email: string;
  avatarUrl: string;
}

interface ProfileCardProps {
  profile: Profile;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profile }) => {
  return (
    <>
    <div className="flex w-full">
      {profile.map((profile, index) => (
        <div
          className="grow bg-white shadow-md rounded-lg overflow-hiddgiten m-4"
          key={index}
        >
          <div className="px-6 py-4">
            <div className="flex justify-center">
              <img
                className="w-32 h-32 rounded-full object-cover"
                src={profile.avatarUrl}
                alt={profile.name}
              />
            </div>
            <div className="text-center mt-4">
              <p className="text-xl text-gray-800 font-medium">
                {profile.name}
              </p>
              <p className="text-gray-600 mt-2">{profile.email}</p>
            </div>
          </div>
        </div>
      ))}
      </div>
    </>
  );
};
