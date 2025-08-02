export default function MainPage() {
  return (
    <div className="w-screen flex pt-[30px]">
      <div className="max-w-[1280px] mx-auto flex relative">
        <div className="flex gap-5 w-[1000px] bg-blue-100 px-[30px] pt-[30px]">
          <div className="flex flex-col w-1/3 gap-3.5">
            <div className="h-[500px] bg-blue-300">Box1</div>
            <div className="h-[300px] bg-blue-400">Box4</div>
          </div>
          <div className="flex flex-col w-2/3 gap-3.5">
            <div className="h-[600px] bg-blue-500">Box2</div>
            <div className="h-[220px] bg-blue-600">Box5</div>
          </div>
        </div>
        <div className="w-[250px] h-[500px] bg-blue-200 ml-[30px] absolute right-[-300px] ">
          Box3
        </div>
      </div>
    </div>
  );
}
