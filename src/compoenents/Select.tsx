import { SelectData } from "../types/types";

type Props = {
  selectData: SelectData[];
  selected: number;
};

export default function Select({ selectData, selected }: Props) {
  return (
    <select className="w-full py-1 rounded-sm overflow-hidden">
      {selectData.map((data) => (
        <option 
        className="overflow-hidden"
          key={data.id}
          value={data.label}
          selected={true && data.id === selected}
        >
          {data.label}
        </option>
      ))}
    </select>
  );
}
