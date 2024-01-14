import { LucideProps } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import { Suspense, forwardRef, lazy } from "react";

const fallback = <div style={{ background: "#ddd", width: 24, height: 24 }} />;

interface IconProps extends Omit<LucideProps, "ref"> {
  name: keyof typeof dynamicIconImports;
}

const Icon = forwardRef(function(
  { name, ...props }: IconProps,
  ref: React.Ref<SVGSVGElement>,
) {
  const LucideIcon = lazy(dynamicIconImports[name]);

  return (
    <Suspense fallback={fallback}>
      <LucideIcon ref={ref} {...props} />
    </Suspense>
  );
});

export default Icon;
