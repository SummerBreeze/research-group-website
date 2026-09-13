import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";

export const metadata: Metadata = {
  title: "赖俊祚教授课题组 - 暨南大学网络空间安全学院",
  description: "暨南大学网络空间安全学院赖俊祚教授课题组，研究方向包括大模型与智能体安全、认知安全、后量子密码等。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="zh-CN"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col bg-white text-[#171717]">
        <LanguageProvider>
          <Header />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
