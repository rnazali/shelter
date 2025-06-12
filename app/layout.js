import "./globals.css";

export const metadata = {
  title: "🏕️ Big Little Shelter",
  description: "Nomadic life & boring stories",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
