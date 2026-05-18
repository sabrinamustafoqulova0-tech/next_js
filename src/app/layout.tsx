import Navbar from "@/components/Navbar";
import Providers from "@/components/Provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}