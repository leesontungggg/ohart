import React from "react";

export default function Introduction() {
  return (
    <section className="container mx-auto px-4 py-16 font-manrope">
      <div className="mb-12 grid grid-cols-1 md:grid-cols-3">
        <h2 className="text-5xl font-normal text-pink-500 leading-tight font-xanh text-[100px]">
          About
          <br />
          Us
        </h2>
        <div className="mt-6 space-y-6 text-[24px] md:col-span-2">
          <p>
            Ô Art là dự án nghệ thuật độc lập, hướng đến tác tạo những liên kết
            mới giữa nghệ sĩ với nghệ sĩ, nghệ sĩ với khán giả, và nghệ sĩ với
            không gian và các nhà tổ chức.
          </p>
          <p>
            Ô Art 2024 được thực hiện theo hình thức &quot;pop-up,&quot; với
            chuỗi những sự kiện, triển lãm, trình diễn, trình chiếu phim, lưu
            trữ sáng tác, mở xưởng, thăm không gian, nói đốc thoại, trò chuyện
            và hội thảo, liên tục từ ngày 31 tháng 5 đến ngày 09 tháng 6 tại Sài
            Gòn.
          </p>
        </div>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-700 my-8"></div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-[64px] font-medium mb-4 font-xanh">Idea</h3>
          <p className="text-[24px]">
            Trong tiếng Việt, &quot;Ô Át&quot; mang lại một cảm giác trần dần,
            khi mọi thứ diễn ra cùng một lúc. Đó giống như một buổi tiệc lớn,
            nơi chúng ta sẽ trải nghiệm tất cả mọi thứ - tác phẩm, trình diễn,
            trưng bày, triển lãm, sắp đặt, âm nhạc, âm thanh, chuyển động, thảo
            luận, tương tác và phản hồi.
          </p>
        </div>

        <div>
          <h3 className="text-[64px] font-medium mb-4 font-xanh">
            Why &quot;Oh Art&quot;
          </h3>
          <p className="text-[24px]">
            Bởi vì với những nghệ sĩ độc lập, chúng tôi luôn mê đắm việc thực
            hành nghệ thuật với đa dạng phương tiện, luôn khát khao tạo ra tác
            phẩm, và cũng luôn mong mỏi có thể sống (và sống được) với nghệ
            thuật trong một thế giới ít rạng buộc và nhiều không gian cho sáng
            tạo tự do. Chỉ khi ý muốn của chúng tôi được thể hiện đồng loạt, lý
            tưởng của chúng tôi mới trở nên khả dĩ.
          </p>
        </div>

        <div>
          <h3 className="text-[64px] font-medium mb-4 font-xanh">
            Oh Art 2024
          </h3>
          <p className="text-[24px]">
            Chủ đề &quot;Những Kẻ Ngoài Cuộc&quot; của Ô Át 2024 hướng đến việc
            giới thiệu các nghệ sĩ thực hành đa phương tiện, có kinh nghiệm, tìm
            kiếm và phát triển những nghệ sĩ mới, cũng như hỗ trợ những nghệ sĩ
            tự học.
          </p>
        </div>
      </div>
    </section>
  );
}
