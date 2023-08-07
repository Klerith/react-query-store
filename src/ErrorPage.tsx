import { Link } from "react-router-dom";

export const ErrorPage = () => {


  return (
    <main className="h-screen w-full flex flex-col justify-center items-center">
      <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
      <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      <button className="mt-5">
        <a
          className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring"
        >
          <span
            className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"
          ></span>

          <span className="relative block px-8 py-3 bg-black border border-current">
            <Link to="/">Go Home</Link>
          </span>
        </a>
      </button>
    </main>
  );
}