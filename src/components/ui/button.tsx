import clsx from "clsx";
export const Button = ({
  className,
  ...p
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    {...p}
    className={clsx(
      "rounded-md bg-pink-600 px-4 py-2 text-white shadow hover:bg-pink-700 transition",
      className,
    )}
  />
);
