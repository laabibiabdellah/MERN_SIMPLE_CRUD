import { NavLink } from "react-router-dom";

export default function Nav() {
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

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <NavLink
                      className="text-white-500 transition hover:text-gray-500/75"
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
              </nav>
            </div>
            <div />
          </div>
        </div>
      </header>
    </>
  );
}
