export const Error = () => {
  return (
    <div className="relative min-h-screen bg-[#8B1E3F] text-white p-6 overflow-hidden">
      <div className="absolute inset-0 bg-[url('./broken_house.png')] bg-cover bg-center opacity-50"></div>
      <div className="relative z-10 pt-5">
        <div className="flex items-center mb-10">
          <img src="../images/logo_shape.png" alt="Logo" className="h-[58px] w-[112px]" />
          <img src="../images/logo_text.png" alt="Logo Text" className="h-[42px] w-[147px]" />
        </div>

        <div className="text-center flex flex-col items-center justify-center space-y-6 font-['Poppins'] pt-10">
          <div className="text-6xl md:text-7xl font-semibold m-4">
            <div className="pb-5">
                Oops!
            </div>
            <div>
                Something Went Wrong
            </div>
          </div>
          <p className="text-xl md:text-2xl mb-6 pt-10 pb-10">
            We couldn't log you in. Please check your email or password and try again.
          </p>
          <button className="bg-yellow-500 text-rose-900 text-2xl font-semibold py-4 px-8 rounded-full mb-4 hover:bg-yellow-600 transition">
            Return to Home
          </button>
          <p className="text-2xl mb-6 pt-6">
            Forgot your password?{' '}
            <a href="#" className="underline hover:text-yellow-300">
              Reset here
            </a>
          </p>
          <div className="flex justify-center gap-[250px] pt-[200px]">
            <button className="bg-yellow-500 text-rose-900 text-2xl font-semibold py-4 px-8 rounded-full mb-4 hover:bg-yellow-600 transition">
              Try Again
            </button>
            <button className="bg-yellow-500 text-rose-900 text-2xl font-semibold py-4 px-8 rounded-full mb-4 hover:bg-yellow-600 transition">
              Back to Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
