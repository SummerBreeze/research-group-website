export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white mt-auto">
      <div className="mx-auto max-w-5xl px-8 py-4">
        <div className="flex flex-col gap-1 text-[#888888]">
          <div>
            <p className="text-[9px]">暨南大学 · 网络空间安全学院</p>
          </div>
          <div className="flex gap-3 text-[9px]">
            <p>地址: 广州市天河区黄埔大道西601号</p>
            <p>邮箱: laijunzuo@jnu.edu.cn</p>
          </div>
          <div className="text-[8px]">
            © {new Date().getFullYear()} Lai Research Group. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
