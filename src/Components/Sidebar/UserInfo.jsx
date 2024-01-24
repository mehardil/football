// import React, { useContext, useEffect, useRef, useState } from 'react';
// import user from "../../assets/user.png"
// import { AuthContext } from '../../App';


// function UserInfo() {
//   const [isUserDropdownOpen, setUserDropdownOpen] = useState(false);
//   const { setUserLogin, userLogin } = useContext(AuthContext);
//   const [userData,setUserData]=useState(null)
// const userDropdownRef =useRef()



//   const toggleUserDropdown = () => {
//     setUserDropdownOpen(!isUserDropdownOpen);
//   };
//   const handleLogout = async() =>{
//     // try {
//     //   // setLoader(true)
//     //   const response = await TotalServices.Logout();
//     //   if (response.status === 200) {
//     // // console.log(response)
//     //   toast.success(response.data.message)
//     //   // setLoader(false)
//     // localStorage.removeItem("UserAuth")
//     // localStorage.removeItem("UserIsLogin")
  
//     // setUserLogin(!userLogin)
  
//     //   }
//     // }
    

//     //   catch(e){
//     //     console.log(e)
//     //   }

//     localStorage.removeItem("UserAuth")
//     localStorage.removeItem("UserIsLogin")
  
//     setUserLogin(!userLogin)
//   }
//   const closeUserDropdown = () => {
//     setUserDropdownOpen(false);
//   };
//   useEffect(() => {
//     // Add a click event listener to detect clicks outside the user dropdown
//     const handleClickOutside = (event) => {
//       if (userDropdownRef.current && !userDropdownRef.current.contains(event.target)) {
//         closeUserDropdown();
//       }
//     };

//     // Attach the event listener when the component mounts
//     document.addEventListener('mousedown', handleClickOutside);

//     // Clean up the event listener when the component unmounts
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

  
//   return (

   
    
//         <div className="relative group ">
//           <button onClick={toggleUserDropdown} className="focus:outline-none">
//             <div className="flex items-center">
//               <img
//                 src={user}
//                 alt="User Avatar"
//                 className="w-7 h-7 rounded-full mr-2"
//               />
           
//             </div>
//           </button>
//           {isUserDropdownOpen && (
//             <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg divide-y divide-gray-300"
//             ref={userDropdownRef}>
//               <div className="p-4">
             
              
                
//                 <button className="block w-full text-left p-2 hover:bg-gray-100"
//                 onClick={handleLogout}
//                 >Logout</button>
//               </div>
//             </div>
//           )}
//         </div>
  
//   );
// }

// export default UserInfo;
