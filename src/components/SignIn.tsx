export const SignIn = () => {
  return (
    <div>
      <button
        type="button"
        className="py-2.5 px-5 me-2 mb-2 text-sm font-medium 
          text-gray-900 focus:outline-none bg-white rounded-full border
           border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 
           focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 
           dark:text-gray-400 dark:border-gray-600 dark:hover:text-white 
           dark:hover:bg-gray-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
        Signin
      </button>
    </div>
  );
};
