"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Calendar, ArrowLeft, CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ThankYouPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="max-w-lg w-full p-6 space-y-6">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>

          <h1 className="text-3xl font-bold tracking-tight">
            Cám ơn bạn đã đặt chỗ
          </h1>

          <p className="text-muted-foreground">
            Chúng tôi đã gửi hướng dẫn thanh toán đến email của bạn. Vui lòng
            thanh toán trong vòng 24 tiếng để hoàn thành đặt chỗ của bạn.
          </p>
        </div>

        <div className="bg-secondary/50 rounded-lg p-4 space-y-3">
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-primary" />
            <p className="text-sm">Kiểm tra email có hướng dẫn thanh toán</p>
          </div>
          <div className="flex items-center gap-3">
            <Calendar className="h-5 w-5 text-primary" />
            <p className="text-sm">Thực hiện thanh toán trong 24h</p>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-sm text-center text-muted-foreground">
            Nếu bạn không nhận được email, vui lòng kiểm tra mục spam hoặc liên
            hệ hỗ trợ
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            {/* <Button variant="outline" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Gửi lại email
            </Button> */}
            <Button variant="default" className="flex items-center gap-2">
              Liên hệ hỗ trợ
            </Button>
          </div>
        </div>

        <div className="pt-6 border-t">
          <Button
            variant="ghost"
            className="flex items-center gap-2 mx-auto"
            onClick={() => {
              router.push("/");
            }}
          >
            <ArrowLeft className="h-4 w-4" />
            Trở về trang chủ
          </Button>
        </div>
      </Card>
    </div>
  );
}
