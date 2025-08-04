import QuestList from './QuestList';

export default function Sidebar() {
  return (
    <section className="bg-[#d9d9d9] p-[30px] w-[300px]">
      <section className="mb-[20px] flex flex-col gap-[8px]">
        <div className="flex gap-[8px] items-center">
          <span className="text-[20px] font-bold">MONEY</span>
          <span className="text-[15px] font-bold">1200</span>
        </div>
        <p className="text-[15px]">퀘스트를 완료하고 money를 획득하세요.</p>
      </section>

      {/* 체크박스 리스트 */}
      <section className="p-[15px] bg-[#919191] mb-[20px] rounded">
        <h1 className="pb-[5px] text-[20px] font-bold text-white">TODO</h1>
        <QuestList />
      </section>

      {/* 버튼 컴포넌트 추후 추가 예정 */}
      <nav className="flex flex-col gap-[10px]">
        <button className="w-full h-[50px] bg-[#919191] text-white rounded text-[20px] font-bold">
          방 꾸미러 가기
        </button>
        <button className="w-full h-[50px] bg-[#919191] text-white rounded text-[20px] font-bold">
          내 일기 보러가기
        </button>
        <button className="w-full h-[50px] bg-[#919191] text-white rounded text-[20px] font-bold">
          상점 가기
        </button>
      </nav>
    </section>
  );
}
