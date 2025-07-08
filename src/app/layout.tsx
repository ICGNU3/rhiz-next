import '../styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-mont bg-rhiz-gray-50 text-rhiz-dark">
        {children}
      </body>
    </html>
  );
} 