import "bootstrap/dist/css/bootstrap.min.css"
import Container from "react-bootstrap/Container";
import NavigationBar from "@/components/navigation-bar";

export const metadata = {
  title: "🏕️ Big Little Shelter",
  description: "Nomadic life & boring stories",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-bs-theme="light">
    <body>
    <NavigationBar/>
    <Container>
      {children}
    </Container>
    </body>
    </html>
  );
}
