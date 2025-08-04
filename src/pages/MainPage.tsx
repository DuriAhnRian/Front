import Sidebar from '../components/main/Sidebar';

export default function MainPage() {
  return (
    <main className="w-screen flex pt-[30px]">
      <div className="max-w-[1280px] mx-auto flex relative">
        <section className="flex gap-5 w-[1000px] bg-blue-100 px-[30px] pt-[30px]">
          <aside className="flex flex-col w-1/3 gap-3.5">
            <article className="h-[500px] bg-blue-300">Box1</article>
            <article className="h-[300px] bg-blue-400">Box4</article>
          </aside>

          <section className="flex flex-col w-2/3 gap-3.5">
            <article className="h-[600px] bg-blue-500">Box2</article>
            <article className="h-[220px] bg-blue-600">Box5</article>
          </section>
        </section>

        <aside className="w-[300px] ml-[30px]">
          <Sidebar />
        </aside>
      </div>
    </main>
  );
}
