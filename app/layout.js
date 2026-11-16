import "./globals.css";

export const metadata = {
  title: "AI Resume Analyzer",
  description:
    "Analyze your resume, check ATS compatibility, and improve your chances of getting hired with AI.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
