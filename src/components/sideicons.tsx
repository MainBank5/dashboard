import clsx from "clsx";
interface SideIconsProps {
    icon: React.ReactNode;
    text:string;
    status:string;
    alert:boolean;
}


function Sideicons({icon, text, status, alert}:SideIconsProps) {
  return (
   <main>
      <ul>
        <li className={clsx("relative flex items-center py-2 px-3 my-1 rounded-md cursor-pointer transition-colors font-medium", {"bg-purple-500 text-white": status==="active"})}>{icon} <span className="w-full ml-3">{text}</span>{alert && <div className={`absolute right-2 w-2 h-2 rounded-full bg-violet-600`}></div>}</li>
      </ul>
   </main>
  )
}

export default Sideicons