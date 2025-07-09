tsx import "@/app/globals.css";
export const metadata = { title: "Happy Birthday Vika" };

export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
