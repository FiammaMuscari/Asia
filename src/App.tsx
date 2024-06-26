import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [showCopiedMessage, setShowCopiedMessage] = useState(false);
  const [bgIndex, setBgIndex] = useState(1); // Estado para almacenar el índice de la imagen de fondo

  useEffect(() => {
    const interval = setInterval(() => {
      // Cambiar al siguiente índice de imagen de fondo
      setBgIndex((prevIndex) => (prevIndex % 4) + 1);
    }, 5000); // Cambiar cada 5 segundos

    return () => clearInterval(interval);
  }, []);
  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Texto copiado al portapapeles:", text);
        setShowCopiedMessage(true);

        setTimeout(() => {
          setShowCopiedMessage(false);
        }, 2000);
      })
      .catch((error) => {
        console.error("Error al copiar texto al portapapeles:", error);
      });
  };
  return (
    <>
      <section className="min-h-screen relative background flex flex-col gap-[5em] justify-center items-center">
        <div className="flex animate-fade-up flex-col pt-10 gap-2 justify-center m-auto items-center">
          <h1>Discover the beauty of Asia, the continental giant.</h1>
          <h1>Now live on Solana Blockchain</h1>
        </div>
        <div
          className={`bg-image-${bgIndex} md:h-[645px] rounded-lg  md:rounded-sm  h-[20em]  md:p-12 lg:p-24  `}
        >
          <div className="absolute  animate-fade-right hidden xl:block  h-[50em] w-[12em] top-[50vh] left-2">
            {" "}
            <img src="/dragon.jpg" alt="" />
          </div>
          <div className="text-5xl md:h-[6.3em] pt-[0.5em] rounded-lg max-w-[10em] md:max-w-[15em] mb-[1.5em] bg-cover   text-black bg-[url('/bg.jpg')] border-[.07em] px-8   lg:px-16   border-solid border-black">
            <div className="flex  justify-center items-center gap-2">
              <a
                className="py-6 bg-transparent hover:border-none active:border-none"
                onClick={() =>
                  copyToClipboard(
                    "4kafiuxSVuh4ggGPMgDgEWjYudjS68GJ9FngKAbB9LDK"
                  )
                }
              >
                <h1 className="text-5xl text-black "> $ASIA</h1>
              </a>
              <a
                className="py-6 bg-transparent hover:border-none active:border-none "
                onClick={() =>
                  copyToClipboard(
                    "4kafiuxSVuh4ggGPMgDgEWjYudjS68GJ9FngKAbB9LDK"
                  )
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="black"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                  />
                </svg>
              </a>
            </div>
            <section className="flex flex-wrap justify-center items-center">
              <div className="w-full md:w-auto md:flex-grow-0 md:flex-shrink-0 flex justify-center">
                <a
                  href="https://dexscreener.com/solana/cukxjebbfdzb3jwj36a6y9dqtn33hurgwxveqxaizy2r"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-20  h-auto mx-auto md:mx-0 max-w-full bigger-image"
                    src="/dexscreener.webp"
                    alt=""
                  />
                </a>
              </div>
              <div className="w-full md:w-auto md:flex-grow-0 md:flex-shrink-0 flex justify-center">
                <a
                  href="https://t.me/asiacto"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-20  h-auto mx-auto md:mx-0 max-w-full circle-image"
                    src="/teg.webp"
                    alt=""
                  />
                </a>
              </div>
              <div className="w-full md:w-auto md:flex-grow-0 md:flex-shrink-0 flex justify-center">
                <a
                  href="https://twitter.com/ASIAONSOL"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-20  h-auto mx-auto md:mx-0 max-w-full circle-image"
                    src="/X_icon.svg"
                    alt=""
                  />
                </a>
              </div>
            </section>
            <div>
              {" "}
              <a
                className="py-6 bg-transparent hover:border-none active:border-none"
                onClick={() =>
                  copyToClipboard(
                    "4kafiuxSVuh4ggGPMgDgEWjYudjS68GJ9FngKAbB9LDK"
                  )
                }
              >
                <h1 className="text-[21px] hidden md:block py-4 pt-10  text-black overflow-hidden overflow-ellipsis whitespace-nowrap">
                  ca:4kafiuxSVuh4ggGPMgDgEWjYudjS68GJ9FngKAbB9LDK
                </h1>
              </a>
            </div>
          </div>
        </div>
        <div className=" xl:hidden block animate-rotate-y animate-thrice animate-duration-[4000ms] w-[12em]  ">
          {" "}
          <img src="/dragon.jpg" alt="" />
        </div>
        <div className="iframe-container">
          {" "}
          <iframe
            id="dextools-widget"
            title="DEXTools Trading Chart"
            width="500"
            height="400"
            src="https://www.dextools.io/widget-chart/en/solana/pe-light/CukxjEbbfDZB3JWJ36A6Y9Dqtn33hurgwXVeqxAiZY2R?theme=light&chartType=2&chartResolution=30&drawingToolbars=false"
          ></iframe>
        </div>

        <img className="w-[20em] xl:mt-[-4em]" src="/sea.webp" alt="" />
        <div className="absolute animate-fade-left hidden xl:block  h-[50em] w-[12em] top-[50vh] right-2">
          {" "}
          <img src="/dragon.jpg" alt="" style={{ transform: "scaleX(-1)" }} />
        </div>
      </section>

      {showCopiedMessage && (
        <div className="fixed z-10 bottom-4 right-4 bg-red-700 text-white p-2 rounded font-serif font-bold">
          Copied to clipboard
        </div>
      )}
    </>
  );
}

export default App;
