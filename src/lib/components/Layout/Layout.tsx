import type { ReactElement } from "react"
import Navbar from "../../../sections/Navbar"
import Footer from "../../../sections/Footer"


const Layout = ({children} : {children: ReactElement}) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout

