type ButtonSize = 's' | 'm' | 'l';

interface ButtonProps {
  size?: ButtonSize;
  onClick: () => void;
  children: React.ReactNode;
}

const sizeClasses: Record<ButtonSize, string> = {
  s: 'px-3 py-1 text-sm',
  m: 'px-4 py-2 text-base',
  l: 'px-6 py-3 text-lg',
};

export const Button: React.FC<ButtonProps> = ({
  size = 'm',
  onClick,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      className={`rounded bg-gray-400 hover:bg-gray-500 text-white font-medium ${sizeClasses[size]}`}
    >
      {children}
    </button>
  );
};
