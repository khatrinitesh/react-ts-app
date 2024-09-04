export type BannerType = {
  title: string;
  desc: string;
};

export type HeaderType = {
  label: string;
  url: string;
};
export type SocialMediaLink = {
  label: string;
  url: string;
  icon: IconType; 
};

export type  Slide = {
  id: number;
  image: string;
  title: string;
  schedule: string;
  dummyText: string;
  buttonText: string;
  link: string;
}

export type  CascadeSliderProps ={
  slides: Slide[];
}