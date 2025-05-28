import React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function RegistrationSuccess() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="pt-20 bg-[#D1C0F1] w-full">
        <div className="relative h-[70vh]">
          <div className="container mx-auto flex flex-col text-white font-xanh md:text-[40px]">
            PROGRAMMES
            <br />
            / FINE ART
            <br />
            <span className="text-[#FF00A8] md:text-[80px]">
              Ký ức của chúng ta
            </span>
          </div>
        </div>
      </section>
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-white dark:bg-gray-950">
        <div className="w-full max-w-md text-center space-y-6">
          {/* Success icon */}
          <div className="flex justify-center">
            <div className="rounded-full bg-pink-500 p-2">
              <Check className="h-6 w-6 text-white" />
            </div>
          </div>

          {/* Success message */}
          <h1 className="text-2xl font-medium text-pink-500">
            Đăng ký thành công
          </h1>

          {/* Description */}
          <div className="text-sm text-gray-700 dark:text-gray-300 space-y-4">
            <p>Vé và QR code xác nhận đã được gửi đến email của bạn.</p>

            <p>
              Vui lòng kiểm tra email, nếu bạn không nhận được email, vui lòng
              kiểm tra mục spam trong email hoặc liên hệ với chúng tôi để được
              hỗ trợ.
            </p>
          </div>

          {/* Support button */}
          <div className="pt-4">
            <Button className="bg-black hover:bg-gray-800 text-white px-6 py-2 uppercase text-sm font-medium">
              LIÊN HỆ HỖ TRỢ
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
