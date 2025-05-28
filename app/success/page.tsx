import React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Clock, Calendar, MapPin, FileText } from "lucide-react";

export default function RegistrationSuccess() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-white dark:bg-gray-950">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left side - Event details */}
        <div>
          <h1 className="text-4xl font-bold text-pink-500 mb-1 font-xanh">
            Ký ức của chúng ta
          </h1>
          <h2 className="text-3xl font-bold text-pink-500 mb-6 font-xanh">
            Collective Memories
          </h2>

          <div className="space-y-4 mb-8">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <p className="text-sm text-gray-700 dark:text-gray-300">
                10 am - 5pm
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <p className="text-sm text-gray-700 dark:text-gray-300">
                25/07/2025
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <FileText className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <p className="text-sm text-gray-700 dark:text-gray-300">
                200.000đ
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Level 2, Amanaki Thao Dien, Thu Duc, HCMC
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-800 my-6"></div>
        </div>

        {/* Right side - Event image */}
        <div className="flex justify-center items-start">
          <img
            src="/event-sample.png"
            alt="Collective Memories Event"
            className="w-full max-w-md h-auto object-cover rounded"
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center px-4 py-12 bg-white dark:bg-gray-950">
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
