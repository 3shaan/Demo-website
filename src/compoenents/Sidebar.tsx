import { SelectData } from "../types/types";
import Button from "./Button";
import Select from "./Select";

export default function Sidebar() {
  const selectData: SelectData[] = [
    {
      id: 1,
      label: "Item1",
    },
    {
      id: 2,
      label: "Item2",
    },
    {
      id: 3,
      label: "Item3",
    },
  ];
  return (
    <section className="w-full bg-[#9398BF] h-screen">
      <div className="w-11/12 mx-auto pt-6 space-y-3">
        <p>Sidebar</p>
        <Select selectData={selectData} selected={1} />
        <div className="space-y-2 pl-12">
          <Button label="Item A" />
          <Button label="Item B" />
        </div>
        <Select selectData={selectData} selected={2} />
        <Select selectData={selectData} selected={3} />
      </div>
    </section>
  );
}
