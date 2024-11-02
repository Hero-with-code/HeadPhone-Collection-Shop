// import React, { useEffect, useState } from 'react'
// import light from "../../Assets/light.png";
// import dark from "../../Assets/dark.png";

// function DarkMode() {
//     const [theme,settheme] = useState(
//         localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
//     );

//     const element = document.documentElement;

//     useEffect(()=>{
//         if(theme==="dark"){
//             element.classList.add("dark");
//             localStorage.setItem("theme", "dark");
//         }
//         else{
//             element.classList.remove("dark");
//             localStorage.setItem("theme", "light"); 
//         }
//     }, [theme]);

//     const changetheme = () =>{
//         if(theme==="light"){
//             settheme("dark");
//         }
//         else{
//             settheme("light");
//         }
//     };

//   return (
//     <>
//         <div className="relative">
//             <img src={dark} alt="" onClick={changetheme} className={`"w-12 absolute right-0 z-10 cursor-pointer drop-shadow-[1px_1px_1px_rbga(0,0,0,0.1)] transition-all duration-300" ${theme==="light" ? "opacity-0" : "opacity-100"}`} />

//             <img src={light} alt="" onClick={changetheme} className="w-12 drop-shadow-[1px_1px_1px_rbga(0,0,0,0.1)] transition-all duration-300" />
//         </div>
//     </>
//   )
// }

// export default DarkMode