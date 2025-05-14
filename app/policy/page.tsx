import { ScrollArea } from "@/components/ui/scroll-area";
import { Shield } from "lucide-react";

export default function PolicyPage() {
  return (
    <div className="min-h-screen p-4 md:p-8 lg:p-12 bg-background">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex items-center space-x-3 text-primary">
          <Shield className="h-8 w-8" />
          <h1 className="text-3xl font-bold">Điều khoản và quy định</h1>
        </div>

        <div className="bg-card rounded-lg p-6 shadow-lg">
          <ScrollArea className="h-fit rounded-md border p-4">
            <div className="space-y-4 text-muted-foreground">
              <p>Lần cập nhật gần nhất: 10/03/2025</p>

              <section className="space-y-2">
                <h3 className="font-semibold text-primary">
                  1. Vé chỉ dành cho 01 (một) người, BTC không hoàn tiền cho vé
                  đã thanh toán.
                </h3>
              </section>

              <section className="space-y-2">
                <h3 className="font-semibold text-primary">
                  2. Xuất trình vé tại cổng để được vào sự kiện, người mua chịu
                  trách nhiệm tự bảo mật thông tin vé.
                </h3>
              </section>

              <section className="space-y-2">
                <h3 className="font-semibold text-primary">
                  3. Không mang vũ khí, các vật sắc nhọn như dao, kéo, dù…
                </h3>
              </section>

              <section className="space-y-2">
                <h3 className="font-semibold text-primary">
                  4. Không mang pháo hoa, pháo sáng, các vật dễ gây cháy nổ...
                </h3>
              </section>

              <section className="space-y-2">
                <h3 className="font-semibold text-primary">
                  5. Không mang chất kích thích bị cấm theo quy định nhà nước
                  như ma tuý, cần sa và các chất kích thích khác.
                </h3>
              </section>

              <section className="space-y-2">
                <h3 className="font-semibold text-primary">
                  6. Không mang theo động vật và thú nuôi.
                </h3>
              </section>

              <section className="space-y-2">
                <h3 className="font-semibold text-primary">
                  7. Không mang theo đồ ăn & nước uống từ bên ngoài vào sự kiện
                  (trừ nước suối).
                </h3>
              </section>

              <section className="space-y-2">
                <h3 className="font-semibold text-primary">
                  8. Không mang đèn pin, đèn laser.
                </h3>
              </section>

              <section className="space-y-2">
                <h3 className="font-semibold text-primary">
                  9. Không mang băng rôn, áp phích có nội dung chính trị, tôn
                  giáo hoặc từ ngữ phản cảm.
                </h3>
              </section>

              <section className="space-y-2">
                <h3 className="font-semibold text-primary">
                  10. Không chen lấn, xô đẩy khi tham gia sự kiện.
                </h3>
              </section>

              <section className="space-y-2">
                <h3 className="font-semibold text-primary">
                  11. Người tham gia sử dụng rượu bia cần đảm bảo trên 18 tuổi.
                </h3>
              </section>

              {/* <ChevronDown className="w-6 h-6 mx-auto mt-4 animate-bounce text-muted-foreground" /> */}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}
