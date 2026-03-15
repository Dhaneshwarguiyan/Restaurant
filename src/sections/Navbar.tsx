import { useEffect, useState } from "react"
import logo from "../assets/logosatvik.png"
import MenuIcon from "../lib/components/icons/MenuIcon"
import SearchIcon from "../lib/components/icons/SearchIcon"
import Button from "../lib/components/ui/Button/Button"
import useScrollPosition from "../lib/hooks/useScrollPosition"

const items:string[] = ["Home","About","Menu","Gallery",]


const Navbar = () => {
  const scrollposition = useScrollPosition();
  const [isScrolled,setIsScrolled] = useState(scrollposition == 0 ? false : true);
  useEffect(() => {
    setIsScrolled(scrollposition !== 0);
  }, [scrollposition]);


  return (
    <nav className={`w-full ${isScrolled ? "bg-white fixed text-black" : "bg-transparent absolute text-white"}   flex justify-between px-4 md:px-[10vw] lg:px-[20vw] py-3 z-20 border-b-2 border-b-white/30`}>
      <img src={logo} alt="logo" className="w-15.5 md:w-22"/>
      <span className="flex justify-between gap-6 md:hidden">
        <SearchIcon />
        <MenuIcon />
      </span>
      <ul className="hidden md:flex justify-around items-center gap-[2vw] text-sm">
        {
          items.map((item,key) => {
            return <li key={key} className="inset-0 font-medium cursor-pointer hover:text-green-300">{item}</li>
          })
        }
        <Button content="Book Your Table" size={"small"}/>
      </ul>
    </nav>
  )
}

export default Navbar
