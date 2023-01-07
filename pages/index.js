import Head from "next/head";
import SLogo from "./components/SLogo";
import SLink from "./components/SLink";
import SText from "./components/SText";
import Link from "next/link";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>sebasmorant.</title>
        <meta charset="utf-8" />
        <meta name="theme-color" content="#4D76FF" />
        <meta
          name="description"
          content="Desarrollador web, MERN stack y backend."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nzkdevsaider.github.io" />
        <meta property="og:title" content="sebasmorant." />
        <meta
          property="og:description"
          content="Desarrollador web, MERN stack y backend."
        />
        <meta
          property="og:image"
          content="https://nzkdevsaider.github.io/iconm.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://nzkdevsaider.github.io" />
        <meta property="twitter:title" content="sebasmorant." />
        <meta
          property="twitter:description"
          content="Desarrollador web, MERN stack y backend."
        />
        <meta
          property="twitter:image"
          content="https://nzkdevsaider.github.io/iconm.png"
        />
      </Head>
      <header
        className={`${inter.className} mx-5 mt-8 mb-20 md:my-20 md:mx-auto md:max-w-[900px] md:w-full`}
      >
        <div className="flex md:justify-between flex-wrap">
          <div className="flex text-center mb-7">
            <Link href="/">
              <SLogo />
            </Link>
          </div>
          <div className="flex text-center">
            <ul className="flex text-3xl font-bold gap-x-[1.5rem]">
              <li>
                <SLink href="#perfil">perfil</SLink>
              </li>
              <li>
                <SLink href="#blog">blog</SLink>
              </li>
              <li>
                <SLink href="mailto:sebasmoraresu@gmail.com">contacto</SLink>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <main className={`${inter.className}`}>
        <section className="mx-auto mb-40 md:max-w-[900px] md:w-full md:mb-72">
          <div className="md:grid flex flex-wrap flex-col-reverse md:grid-cols-section-me gap-1">
            <h1 className="font-bold text-6xl md:text-9xl text-center md:text-left">
              Sebastián Morales
            </h1>

            <img
              className="m-auto w-300 h-300 rounded-full"
              src="/avatar/me.png"
            />
          </div>
        </section>
        <section className="mx-5 md:mx-auto md:max-w-[900px] md:w-full">
          <div id="perfil" className="mb-24">
            <SText>Perfil</SText>
          </div>
          <div className="md:grid md:grid-cols-section-me flex flex-wrap gap-1 mb-24">
            <div>
              <p className="text-lg font-black">SOBRE MÍ</p>
              <h1 className="my-8 font-black text-3xl">
                Desarrollador web, MERN stack y backend.
              </h1>
              <div className="space-x-5">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://docs.google.com/document/d/1X9FD9BWGLYNG9hZSI5zOdHoux_NhMUWfCYyNxB1qhRw/edit?usp=sharing"
                >
                  <button className="bg-sblue p-3 font-bold hover:shadow-xl text-swhite rounded shadow-lg">
                    <div className="justify-between flex items-center space-x-2">
                      <svg
                        className="fill-swhite"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 20h3v-5h2v5h3l-4 4-4-4zm11.479-12.908c-.212-3.951-3.473-7.092-7.479-7.092s-7.267 3.141-7.479 7.092c-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h3.5v-2h-3.5c-1.93 0-3.5-1.57-3.5-3.5 0-2.797 2.479-3.833 4.433-3.72-.167-4.218 2.208-6.78 5.567-6.78 3.453 0 5.891 2.797 5.567 6.78 1.745-.046 4.433.751 4.433 3.72 0 1.93-1.57 3.5-3.5 3.5h-3.5v2h3.5c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408z" />
                      </svg>
                      <span>Descargar CV</span>
                    </div>
                  </button>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/sebasmorant"
                >
                  <button className="bg-sblue p-3 font-bold hover:shadow-xl text-swhite rounded-full shadow-lg">
                    <svg
                      className="fill-swhite"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  </button>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/nzkdevsaider"
                >
                  <button className="bg-sblue p-3 font-bold hover:shadow-xl text-swhite rounded-full shadow-lg">
                    <svg
                      className="fill-swhite"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </button>
                </a>
              </div>
            </div>
            <div>
              <p className="text-1xl my-5 text-justify">
                Soy un desarrollador web altamente capacitado en metodologías
                ágiles, con experiencia en el desarrollo de aplicaciones web,
                frontend y backend, la gestión de sistemas ERP y el desarrollo
                de aplicaciones móviles. Soy entusiasta de la tecnología
                moderna, la ciencia de datos, la ciberseguridad y la
                inteligencia artificial. Además, soy un profesional asertivo,
                apasionado, analítico y de pensamiento crítico, dispuesto a dar
                mi mejor esfuerzo para alcanzar objetivos medibles y
                satisfactorios.
              </p>
            </div>
          </div>
        </section>
        <section className="mx-5 md:mx-auto md:max-w-[900px] md:w-full">
          <div id="blog" className="mb-16">
            <SText>Blog</SText>
          </div>
          <div class="flex flex-wrap md:flex-row gap-8 place-content-center mb-28">
            <div>
              <div className="bg-[#a3a2a2] rounded-lg p-8 w-[297px] h-[172px]">
                <SLogo light />
              </div>
            </div>
            <div>
              <div className="bg-[#b6b5b5] rounded-lg p-8 w-[297px] h-[172px]">
                <SLogo light />
              </div>
            </div>
            <div>
              <div className="bg-[#c5c4c4] rounded-lg p-8 w-[297px] h-[172px]">
                <SLogo light />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className={`${inter.className} bg-sblack text-swhite p-4`}>
        <div className="flex justify-between my-4 mx-5">
          <div>
            <SLogo light={true} />
            <button className="bg-sblue p-3 font-bold hover:shadow-xl rounded shadow-lg my-5">
              <Link href="mailto:sebasmoraresu@gmail.com">Contacto</Link>
            </button>
          </div>
          <div class="px-4 py-6 md:flex md:items-center md:justify-between">
            <span class="text-sm sm:text-center">
              © {new Date().getFullYear()} sebasmorant.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
