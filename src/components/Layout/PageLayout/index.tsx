import Header from "@/components/Header";
import { Separator } from "@/components/ui/separator";
import { PropsWithChildren } from "react";

type PageLayoutProps = {
  title: string;
  description?: string;
  button?: React.ReactNode;
};
export default function PageLayout({
  title,
  description,
  button,
  children,
}: PropsWithChildren<PageLayoutProps>) {
  return (
    <div className="flex h-screen w-full flex-col no-scrollbar">
      <Header />
      <div className="flex h-full w-full flex-col justify-between overflow-auto bg-background no-scrollbar">
        <div className="flex w-full  justify-between gap-20 space-y-0.5 py-8 pb-2">
          <div className="flex w-full flex-col items-start flex-2">
            <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
            <p className="text-muted-foreground break-words text-justify">
              {description}
            </p>
          </div>
          <div className="flex-shrink-0 flex-1">{button && button}</div>
        </div>
        <Separator className="my-6 flex" />
        {children}
      </div>
    </div>
  );
}
