const  Input = ({placeholder,name,handleChange,value,type,disabled,handleFocus,handleBlur,classes,label,icon}) => {
   
    return ( 
   <div className="my-1">

 {label && <label className="font-semibold text-sm text-white" >{label}</label>}
<div className={`flex bg-white justify-between items-center mt-2 shadow-lg px-5 py-3` } >


        <input
     className="border-0 outline-none w-full"
        placeholder={placeholder} 
        type={type}
        name={name}
       
        value={value}
        disabled={disabled}
        onChange={handleChange}
        />
          {icon &&<span>
    {icon}
   </span>}
        </div>
 
           </div>
  
     );
}
 
export default  Input;