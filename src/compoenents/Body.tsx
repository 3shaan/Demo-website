import Content from "./Content";
import Sidebar from "./Sidebar";


export default function Body() {
  return <section className="md:grid grid-cols-4">

    <div className="hidden md:block col-span-1 h-full">
    <Sidebar/>
    </div>
    <Content/>
  </section>;
}   
