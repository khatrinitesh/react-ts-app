import React, { FC } from "react";
import { socialLinks } from "../constants/Constants";

interface SocialLink {
  url: string;
  icon: string;
}

interface SocialIconProps {
  link: SocialLink[];
}

const SocialIcon: FC<SocialIconProps> = ({ link }) => (
  <a href={link.url} target="_blank">
    <i
      className={`text-4xl text-primary dark:text-white pl-5 hover:text-secondary dark:hover:text-secondary transition-colors ${link.icon}`}
    />
  </a>
);

const SocialMediaIcon: FC = () => {
  return (
    <>
      <div className="mr-auto flex items-center pt-5 sm:mr-0 sm:pt-0">
        {socialLinks.map((link: SocialLink, index: number) => (
          <SocialIcon key={index} link={link} />
        ))}
      </div>
    </>
  );
};

export default SocialMediaIcon;