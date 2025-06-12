import "bootstrap/dist/css/bootstrap.min.css"
import Container from "react-bootstrap/Container";

export const metadata = {
  title: "🏕️ Big Little Shelter",
  description: "Nomadic life & boring stories",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-bs-theme="light">
    <body>
    <Container>
      {children}
    </Container>
    </body>
    </html>
  );
}
