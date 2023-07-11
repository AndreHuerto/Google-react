import "./App.css";

export default function App() {
  return (
    <>
      <div className="h-100 flex flex-col bg-gray-800 min-h-screen ">
        <div className="flex flex-row-reverse mr-4 pt-4">
          <div className="space-x-4 flex text-white">
            <div className="flex space-x-4 pt-1">
              <a href="">
                <div>Gmail</div>
              </a>
              <a href="">
                <div>Imágenes</div>
              </a>
            </div>
            <div>
              <a className="object-contain h-48 w-96 rounded-lg" href="#">
                <svg
                  className="object-scale-down h-9 w-9 hover:bg-gray-200 fill-white"
                  focusable="false"
                  viewBox="0 0 24 24"
                >
                  <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
                </svg>
              </a>
            </div>
            <div>
              <img
                className="object-scale-down h-9 w-9 rounded-full"
                src="src\imgs\xD.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center w-auto   bg-transparent ">
          <div className="  bg-transparent  mt-52">
            <img src="src/imgs/googlelogo_light_color_272x92dp.png" alt="" />
          </div>
        </div>
        <div className=" flex-grow">
          <div className="p-10 flex justify-center">
            <div className=" bg-transparent flex  border border-neutral-500 w-19 rounded-full p-2 hover:bg-gray-600 drop-shadow-md hover:drop-shadow-xl focus:bg-gray-600">
              <svg
                className="object-scale-down h-7 w-7 pt-2 fill-gray-400"
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
              </svg>
              <div className="">
                <textarea
                  className=" w-96 h-9 flex outline-none  resize-none bg-transparent text-white pt-1"
                  name=""
                  id=""
                  rows="1"
                ></textarea>
              </div>

              <a className="object-scale-down h-8 w-8" href="#">
                <svg
                  class="Gdd5U"
                  focusable="false"
                  viewBox="0 0 192 192"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect fill="none" height="192" width="192"></rect>
                  <g>
                    <circle fill="#34a853" cx="144.07" cy="144" r="16"></circle>
                    <circle fill="#4285f4" cx="96.07" cy="104" r="24"></circle>
                    <path
                      fill="#ea4335"
                      d="M24,135.2c0,18.11,14.69,32.8,32.8,32.8H96v-16l-40.1-0.1c-8.8,0-15.9-8.19-15.9-17.9v-18H24V135.2z"
                    ></path>
                    <path
                      fill="#fbbc04"
                      d="M168,72.8c0-18.11-14.69-32.8-32.8-32.8H116l20,16c8.8,0,16,8.29,16,18v30h16V72.8z"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="M112,24l-32,0L68,40H56.8C38.69,40,24,54.69,24,72.8V92h16V74c0-9.71,7.2-18,16-18h80L112,24z"
                    ></path>
                  </g>
                </svg>
              </a>
            </div>
          </div>
          <div className="space-x-7 flex justify-center">
            <button className="bg-gray-600 text-white py-1 px-3 rounded-sm">
              Buscar en Google
            </button>
            <button className="bg-gray-600 text-white py-1 px-3 rounded-sm">
              Voy a tener suerte
            </button>
          </div>
          <div className="text-white flex justify-center pt-6 ">
            Ofrecido por Google en:
            <a className="text-blue-400 hover:underline ml-2" href="">
              Quechua
            </a>
          </div>
        </div>
        <div className="">
          <div className="bg-black border-b border-gray-500 pl-3">
            <p className="text-gray-500 p-4">Perú</p>
          </div>
          <div className="flex justify-between bg-black">
            <div className="">
              <div className="flex">
                <a href="">
                  <p className="text-gray-500 p-4 hover:underline">Sobre google</p>
                </a>
                <a href="">
                  <p className="text-gray-500 p-4 hover:underline">Publicidad</p>
                </a>
                <a href="">
                  <p className="text-gray-500 p-4 hover:underline">Negocios</p>
                </a>
                <a href="">
                  <p className="text-gray-500 p-4 hover:underline">Cómo funciona la Búsqueda</p>
                </a>
              </div>
            </div>
            <div className="flex">
              <a href="">
                <p className="text-gray-500 p-4 hover:underline">Privacidad</p>
              </a>
              <a href="">
                <p className="text-gray-500 p-4 hover:underline">Condiciones</p>
              </a>
              <a href="">
                <p className="text-gray-500 p-4 hover:underline">Preferencias</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
