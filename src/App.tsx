import "./App.css";

function App() {
  return (
    <>
      <section className="min-h-screen flex justify-center items-center">
        <div className="bg-slate-800 p-6 md:p-12 lg:p-24">
          <div className="text-5xl text-black bg-white border-[.07em] p-8 md:p-12 lg:p-16 rounded-sm border-solid border-black">
            $Asia
            <section className="flex flex-wrap justify-center items-center">
              <div className="w-full md:w-auto md:flex-grow-0 md:flex-shrink-0">
                <a href="#">
                  <img
                    className="w-20  h-auto mx-auto md:mx-0 bigger-image"
                    src="/public/dexscreener.webp"
                    alt=""
                  />
                </a>
              </div>
              <div className="w-full md:w-auto md:flex-grow-0 md:flex-shrink-0">
                <a href="#">
                  <img
                    className="w-20  h-auto mx-auto md:mx-0 circle-image"
                    src="/public/teg.webp"
                    alt=""
                  />
                </a>
              </div>
              <div className="w-full md:w-auto md:flex-grow-0 md:flex-shrink-0">
                <a href="#">
                  <img
                    className="w-20  h-auto mx-auto md:mx-0 circle-image"
                    src="/public/X_icon.svg"
                    alt=""
                  />
                </a>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
