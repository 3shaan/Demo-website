type Props = {
  label: string;
};

export default function Button({ label }: Props) {
  return <button className="w-full bg-gray-400 p-1 rounded-sm">{label}</button>;
}
