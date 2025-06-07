export default function ContactUs() {
  return (
    <section className="mb-8">
      <div className="max-w-[700px] w-11/12 mx-auto border border-solid border-black px-6 py-4 rounded-xl">
        <header className="mb-8">
          <h2 className="text-5xl font-bold text-center">Contact Us</h2>
        </header>

        {/* Contact form */}
        <form action="" className="flex flex-col items-end gap-4">
          {/* User name */}
          <div className="w-full flex flex-col sm:flex-row gap-4">
            {/* First name */}
            <div className="flex-1 flex flex-col gap-2">
              <label
                htmlFor="fname"
                className="text-sm font-bold text-blue-600"
              >
                First Name
              </label>
              <input
                id="fname"
                type="text"
                name="fname"
                className="px-3 py-3 rounded-lg border border-solid border-zinc-600"
                placeholder="First name"
              />
            </div>

            {/* Last name */}
            <div className="flex-1 flex flex-col gap-2">
              <label
                htmlFor="lname"
                className="text-sm font-bold text-blue-600"
              >
                Last name
              </label>
              <input
                id="lname"
                type="text"
                name="lname"
                className="px-3 py-3 rounded-lg border border-solid border-zinc-600"
                placeholder="Last name"
              />
            </div>
          </div>

          {/* User email */}
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-bold text-blue-600">
              Email
            </label>
            <input
              id="email"
              type="text"
              name="email"
              className="px-3 py-3 rounded-lg border border-solid border-zinc-600"
              placeholder="Email"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="phone" className="text-sm font-bold text-blue-600">
              Phone
            </label>
            <input
              id="phone"
              type="text"
              name="phone"
              className="px-3 py-3 rounded-lg border border-solid border-zinc-600"
              placeholder="Phone"
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="px-8 py-4 text-black font-bold bg-green-400 border border-solid-2 border-green-400 mt-8 rounded-lg hover:bg-transparent hover:text-black transition-colors duration-300"
          >
            Contact us
          </button>
        </form>
      </div>
    </section>
  );
}
