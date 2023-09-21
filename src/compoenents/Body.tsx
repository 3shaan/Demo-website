import Content from "./Content";
import Sidebar from "./Sidebar";


export default function Body() {
  return <section className="grid grid-cols-4">

    <Sidebar/>
    <Content/>
  </section>;
}
