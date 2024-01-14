import SkeletonCard from "./SkeletonCard";

export default function SkeletonGrid() {
  return (
    <div className="grid grid-cols-3 gap-8">
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
  );
}
