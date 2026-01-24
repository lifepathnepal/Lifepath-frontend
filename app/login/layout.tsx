import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login - LifePath",
  description: "Sign in to your LifePath account",
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
