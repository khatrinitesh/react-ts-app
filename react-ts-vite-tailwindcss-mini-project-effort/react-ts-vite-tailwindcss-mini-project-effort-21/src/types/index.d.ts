export type BannerType = {
    title:string;
    desc:string;
    className:React.CSSProperties
}

export type HeaderType = {
    url:string;
    label:string;
}

export type BtnPrimaryTypes = {
    title:string;
    onClick:string;
}

export type MobileDeviceTypes = {
    id: string; // Note: your IDs are strings in the sample data
    name: string;
    detail: {
      color?: string;
      capacity?: string;
      price?: number | string;
      ["Capacity"]?: string;
      ["Case Size"]?: string;
      ["Strap Colour"]?: string;
      ["Color"]?: string;
      ["Description"]?: string;
      year?:number;
      ["CPU model"]:string;
      ["Hard disk size"]:string;
      generation:string;
      ["Screen size"]:string;
    } | null;
  }