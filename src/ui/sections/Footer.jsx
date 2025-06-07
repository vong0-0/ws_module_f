export default function Footer() {
  return (
    <footer className="bg-slate-200 pt-12 pb-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 max-w-[600px] w-11/12 mx-auto gap-8">
        <ul className="flex flex-col gap-4">
          <li>
            <a
              href="/"
              className="text-slate-900 pb-1 font-medium border-b-2 border-transparent hover:text-cyan-800 hover:border-slate-900 transition-colors duration-300"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-slate-900 pb-1 font-medium border-b-2 border-transparent hover:text-cyan-800 hover:border-slate-900 transition-colors duration-300"
            >
              Getting here
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-slate-900 pb-1 font-medium border-b-2 border-transparent hover:text-cyan-800 hover:border-slate-900 transition-colors duration-300"
            >
              FAQs
            </a>
          </li>
        </ul>
        <ul className="flex flex-col gap-4">
          <li>
            <a
              href="/"
              className="text-slate-900 pb-1 font-medium border-b-2 border-transparent hover:text-cyan-800 hover:border-slate-900 transition-colors duration-300"
            >
              Places to Stay
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-slate-900 pb-1 font-medium border-b-2 border-transparent hover:text-cyan-800 hover:border-slate-900 transition-colors duration-300"
            >
              Things to Do
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-slate-900 pb-1 font-medium border-b-2 border-transparent hover:text-cyan-800 hover:border-slate-900 transition-colors duration-300"
            >
              Events Calendar
            </a>
          </li>
        </ul>
        <ul className="flex flex-col gap-4">
          <li>
            <a
              href="/"
              className="text-slate-900 pb-1 font-medium border-b-2 border-transparent hover:text-cyan-800 hover:border-slate-900 transition-colors duration-300"
            >
              Restaruants
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-slate-900 pb-1 font-medium border-b-2 border-transparent hover:text-cyan-800 hover:border-slate-900 transition-colors duration-300"
            >
              Nighlife
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-slate-900 pb-1 font-medium border-b-2 border-transparent hover:text-cyan-800 hover:border-slate-900 transition-colors duration-300"
            >
              Shopping
            </a>
          </li>
        </ul>
        <ul className="flex flex-col gap-4">
          <li>
            <a
              href="/"
              className="text-slate-900 pb-1 font-medium border-b-2 border-transparent hover:text-cyan-800 hover:border-slate-900 transition-colors duration-300"
            >
              Plan Your Trip
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-slate-900 pb-1 font-medium border-b-2 border-transparent hover:text-cyan-800 hover:border-slate-900 transition-colors duration-300"
            >
              Contact Us
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-slate-900 pb-1 font-medium border-b-2 border-transparent hover:text-cyan-800 hover:border-slate-900 transition-colors duration-300"
            >
              Newsletter Signup
            </a>
          </li>
        </ul>
      </div>
      <p className="mt-8 text-center font-bold text-blue-950 underline">
        @2024. All Rights Reserved.
      </p>
    </footer>
  );
}
