// TOP NAVIGATION
export interface NavItem {
    id: number;
    text: string;
    link: string;
  }

// BANNER
export interface BannerProps{
    bannerStyle:string;
    title:string;
    desc:string;
}

// POST
export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// COMMENT
export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
// ALBUMS
export interface Albums {
  userId: number;
  id: number;
  title: string;
}

// BET 365
export interface ApiDataBet365 {
  soccer: string[];
  tennis: string[];
  basketball: string[];
  cricket: string[];
  esports: string[];
}

// FREE TO GAME
export interface ApiFreeToGame{
  id:number;
  title:string;
  thumbnail:string;
  short_description:string;
  game_url:string;
  genre:string;
  platform:string;
  publisher:string;
  developer:string;
  release_date:string;
  freetogame_profile_url:string;
}