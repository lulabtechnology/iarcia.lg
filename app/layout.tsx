import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Arcia Legal Group – Licda. Idalia Arcia, Abogada en Panamá",
  description:
    "Arcia Legal Group brinda acompañamiento legal cercano en temas de familia, violencia doméstica, derecho penal y migración en Panamá. Agenda tu consulta con la Licda. Idalia Arcia."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="bg-brand-beige text-brand-dark antialiased">
        <Navbar />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
