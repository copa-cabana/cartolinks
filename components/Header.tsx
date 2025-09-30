// components/Header.tsx
import {
  Home,
  Image,
  Video,
  Wand2,
  Zap,
  Compass,
  Pen,
  Folder,
  GalleryVertical,
  Headphones,
  Bell,
  ChevronDown,
  DraftingCompass,
  Circle,
  Sun,
} from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="header_style flex items-center justify-between px-6 py-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm dark:border-gray-800">
      {/* Left: Logo + dropdown */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-black dark:bg-white rounded-md" />
         <Logo />
        

        {/* Light mode logo */}
         <Circle className="w-4 h-4 text-blue-500" fill="currentColor" />
        {/* <div className="w-4"></div> Gap spacer */}
        <button
          className="flex items-center gap-1 font-medium text-gray-300 dark:text-gray-100 hover:opacity-80 bg-transparent border-none focus:outline-none"
        >
          benevolenttrimblebat
          <ChevronDown className="w-4 h-4" />
        </button>

      </div>

         <div className="center-nav flex justify-between items-center px-2 bg-white dark:bg-black">

                <button className=" nav-button rounded-xl hover:bg-white dark:hover:bg-gray-900 border-none transition-all duration-150">
                <Home className="  dark:text-gray-200 nav-icon nav-icon-home" />
                </button>
              

                <Image className="  dark:text-gray-200 nav-icon" />
              
              

                <Video className="  dark:text-gray-200 nav-icon" />
              
              

                <Wand2 className="  dark:text-gray-200 nav-icon" />

              
              

                <Pen className="  dark:text-gray-200 nav-icon" />

              
              

                <DraftingCompass className="  dark:text-gray-200 nav-icon" />


              
                
                <Folder className="  dark:text-gray-200 nav-icon" />

             </div>

      <div className="center-nav-two flex justify-between items-center px-2">
            <button className=" nav-button-three rounded-xl hover:bg-white dark:hover:bg-gray-900 border-none transition-all duration-150">
            
             
              <div className="flex items-center gap-1 text-sm text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white">
              
              <Image className=" text-gray-800 dark:text-gray-200 nav-icon-two" />  Gallery
              </div>
            </button>

            <button className=" nav-button-three rounded-xl hover:bg-white dark:hover:bg-gray-900 border-none transition-all duration-150">
            
             
            <div className="flex items-center gap-1 text-sm text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white">
              
              <Headphones className=" text-gray-800 dark:text-gray-200 nav-icon-two" />  Support
              </div>
            </button>

            <button className=" nav-button-two rounded-xl hover:bg-white dark:hover:bg-gray-900 border-none transition-all duration-150">
            
             
            <div className="flex items-center gap-1 text-sm text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white">
              
              <Bell className=" text-gray-800 dark:text-gray-200 nav-icon-two" />
              </div>
            </button>

            {/* <button className=" nav-button-two rounded-xl hover:bg-white dark:hover:bg-gray-900 border-none transition-all duration-150"> */}
            
             
            <div className="flex items-center gap-1 text-sm text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white">
              
              <ThemeToggle /> 
              </div>
            {/* </button> */}

            {/* <button className=" nav-button-two rounded-xl hover:bg-white dark:hover:bg-gray-900 border-none transition-all duration-150"> */}
            
             
            <div className="flex items-center gap-1 text-sm text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white">
              
              <Circle className=" text-gray-800 dark:text-gray-200 nav-icon-two" /> 
              </div>
            {/* </button> */}
            
           
        </div>
    </header>
  );
}