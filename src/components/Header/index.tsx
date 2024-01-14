export default function Header() {
  return (
    <header className="shrink-0 border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-14  items-center justify-between px-4 sm:px-6 lg:px-8">
        <img
          className="h-8 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <div className="flex items-center gap-x-8">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your profile</span>
            <img
              className="h-8 w-8 rounded-full bg-gray-800"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </a>
        </div>
      </div>
    </header>
  );
}
