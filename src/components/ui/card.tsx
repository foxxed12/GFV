import clsx from "clsx";
export const Card = ({ className, ...p }: React.HTMLAttributes<HTMLDivElement>) => (
  <div {...p} className={clsx("rounded-xl bg-white", className)} />
);
export const CardContent = ({
  className,
  ...p
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div {...p} className={clsx("p-4", className)} />
);
