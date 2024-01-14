import Button from "@/components/Base/Button";
import Icon from "@/components/Base/Icon";
import PageLayout from "@/components/Layout/PageLayout";
import SidebarNav from "@/components/Sidebar/SideBarNav";
import SkeletonGrid from "@/components/Skeleton/SkeletonGrid";

export default function HomePage() {
  return (
    <PageLayout
      title="Example"
      description="Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis."
      button={
        <div className="flex gap-2">
          <Button icon="upload" variant={"outline"}>
            Upload
          </Button>
          <Button icon="plus">Create</Button>
        </div>
      }
    >
      <div className="flex h-full w-full gap-2  lg:flex-row lg:space-x-8 lg:space-y-0">
        <SidebarNav
          items={[
            {
              href: "/flow-editor",
              title: "Flow Editor",
              icon: <Icon name="group" className="w-5 stroke-[1.5]" />,
            },
            {
              href: "/components",
              title: "Components",
              icon: <Icon name="group" className="w-5 stroke-[1.5]" />,
            },
          ]}
        />

        <main className="flex-1 mt-0 h-full">
          {/* Main area */}
          <SkeletonGrid />
        </main>
      </div>
    </PageLayout>
  );
}
