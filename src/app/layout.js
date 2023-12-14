import { Header } from "@/components/header/component";
import { ThemeProvider } from "@/contexts/theme/provider";
import { StoreProvider } from "@/redux/provider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <ThemeProvider>
            <Header />
            {children}
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
