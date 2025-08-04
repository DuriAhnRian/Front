interface CheckboxProps {
  label: string;
  checked: boolean;
}

export default function Checkbox({ label, checked }: CheckboxProps) {
  return (
    <div className="flex items-center space-x-2 p-[5px] w-[200px] h-[30px] bg-gray-200">
      <input type="checkbox" checked={checked} className="w-5 h-5 rounded" />
      <span className="select-none">{label}</span>
    </div>
  );
}
