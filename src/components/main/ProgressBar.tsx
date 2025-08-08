import MarkerIcon from '../../assets/star-marker.svg'; // svg 파일 import

interface ProgressBarProps {
  progress: number; // 0~100%
  label: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  label,
}) => {
  return (
    <div className="flex items-center gap-[8px]">
      <label className="block text-sm font-medium px-[12px] py-[4px] bg-[#919191] text-white">
        {label}
      </label>

      <div className="relative w-[178px] h-[12px] bg-[#919191] border border-[#919191]">
        {/* 진행 바 */}
        <div
          className="h-full bg-white transition-all duration-200"
          style={{ width: `${progress}%` }}
        ></div>

        {/* 게이지 끝 마커 (SVG 파일) */}
        <img
          src={MarkerIcon}
          alt="Progress Marker"
          className="absolute top-1/2 -translate-y-1/2 w-[22px] h-[22px]"
          style={{
            left: `${progress}%`,
            transform: 'translate(-50%, 0%)',
          }}
        />
      </div>
    </div>
  );
};
