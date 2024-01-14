import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string;
    title: string;
    icon: React.ReactNode;
  }[];
}

export default function SidebarNav({
  items,
  className,
  ...props
}: SidebarNavProps) {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <nav
      className={cn(
        "flex flex-col w-60 sm:w-46 md:w-46 items-start",
        className,
      )}
      {...props}
    >
      <ul role="list" className="flex flex-col flex-1 gap-y-7 w-full">
        <li>
          <ul role="list" className=" space-y-1">
            {items.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  pathname === item.href
                    ? "bg-muted "
                    : "text-gray-700 hover:bg-transparent hover:border-border hover:text-accent-foreground ",
                  "border border-transparent inline-flex gap-2 items-center justify-start px-4 rounded-md w-full",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring",
                  "",
                )}
              >
                {item.icon}
                {item.title}
              </Link>
            ))}
          </ul>
        </li>
      </ul>
    </nav>
  );
}
