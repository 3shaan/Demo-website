type Props = {
  label: string;
};

export default function Button({ label }: Props) {
  return <button className="w-full bg-[#B8B6B6] p-1 rounded-sm">{label}</button>;
}
