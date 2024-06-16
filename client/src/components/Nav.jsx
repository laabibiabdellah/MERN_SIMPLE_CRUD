import { useRef } from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  let menu = useRef(null);
  return (
    <>
      <header className="bg-teal-100">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <a className="block text-teal-600" href="#">
                <h2 className="text-3xl font-bold text-teal-600">LOGO</h2>
              </a>
            </div>
            <div className=" md:block">
              <nav aria-label="Global">
                <ul className="md:flex items-center gap-6 text-sm hidden">
                  <li>
                    <NavLink
                      className="text-gray-500 transition hover:text-gray-500/75"
                      to="/"
                    >
                      Home
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      className="text-gray-500 transition hover:text-gray-500/75"
                      to="add-user"
                    >
                      Add user
                    </NavLink>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="https://github.com/laabibiabdellah"
                      target="_blank"
                    >
                      My GitHub
                    </a>
                  </li>
                </ul>
                <ul ref={menu} className="menu2">
                  <button
                    onClick={() => (menu.current.style.left = "-100%")}
                    class="block rounded absolute left-10 top-10 bg-gray-200 p-2.5 text-gray-600 font-bold transition hover:text-gray-600/75 md:hidden"
                  >
                    X
                  </button>

                  <li>
                    <NavLink
                      className="text-gray-200 transition hover:text-gray-500/75"
                      to="/"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="text-gray-200 transition hover:text-gray-500/75"
                      to="add-user"
                    >
                      Add user
                    </NavLink>
                  </li>
                  <li>
                    <a
                      className="text-gray-200 transition hover:text-gray-500/75"
                      href="https://github.com/laabibiabdellah"
                      target="_blank"
                    >
                      My GitHub
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div />
            <button
              onClick={() => (menu.current.style.left = "0")}
              class="block  rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
            >
              <span class="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
