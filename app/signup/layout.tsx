import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up - LifePath",
  description: "Create your LifePath account and start your career journey",
};

export default function SignupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
