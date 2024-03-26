import Link from "next/link";
import clsx from "clsx";
interface SideIconsProps {
  icon: React.ReactNode;
  text: string;
  status: string;
  alert: boolean;
  expanded: boolean;
}


function Sideicons({ icon, text, status, alert, expanded }: SideIconsProps) {
  return (
    <main>
      <ul>
        <Link href={`/${text}`} className={clsx(`relative flex items-center 
        py-2 px-3 my-1 rounded-md cursor-pointer transition-colors font-medium group`, { "bg-purple-500 text-white": status === "active" })}>
          {icon}
          <span className={clsx("overflow-hidden transition-all pl-2", { "w-32": expanded === true, "w-0": expanded === false })}>{text}</span>
          {alert && <div className={clsx('absolute right-2 w-2 h-2 rounded-full bg-violet-600', { "": expanded === true, "top-1": expanded === false })}></div>}
          {!expanded && <div className={`absolute left-full rounded-md px-1 py-1 ml-6 text-white bg-violet-500 text-sm
          invisible opacity-0 -translate-x-10 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>{text}</div>}
          </Link>
      </ul>
    </main>
  )
}

export default Sideicons