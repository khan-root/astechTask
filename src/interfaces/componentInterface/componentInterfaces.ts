import { IconType } from "react-icons";

export interface ButtonProps {
    title: string;
    bgColor?: string;
    color?: string;    
    borderColor?: string; 
}


export interface CardProps {
    title?:string;
    description?:string;
    bgImage?:string
}



export interface SocialMeida {
    id:number,
    icon:IconType
}


export interface FooterLink{
    id:number,
    title:string
}


export interface NavabrProps{
  isOpen: boolean;
  toggleMenu?: () => void;

}