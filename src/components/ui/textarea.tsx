export const Textarea = (p: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => (
  <textarea
    {...p}
    className="h-28 w-full resize-none rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-pink-400"
  />
);
