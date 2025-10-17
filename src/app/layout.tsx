import "./globals.css";

export const metadata = {
  title: "🎂 Birthday Surprise",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 relative">
        {children}
      </body>
    </html>
  );
}
