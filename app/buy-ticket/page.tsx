"use client";

import React, { useState } from "react";
import { Clock, Calendar, DollarSign, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";

export default function BuyTicket() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [quantity, setQuantity] = useState("10");
  const [agreeTerms, setAgreeTerms] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950">
      {/* Header */}
      <div className="w-full bg-[#D1C0F1] py-16 flex items-center justify-start">
        <div className="container mx-auto">
          <h1 className="text-4xl text-white font-xanh">BUY TICKET</h1>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Event Info */}
          <div className="flex-1">
            <div className="flex flex-col md:flex-row gap-6 mb-8">
              <div className="flex-1">
                <h2 className="text-3xl text-[#FF00A8] font-xanh leading-tight">
                  Ký ức của chúng ta
                  <br />
                  Collective Memories
                </h2>

                <div className="mt-4 space-y-2 font-manrope">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-black" />
                    <span className="text-sm">10 am - 5pm</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-black" />
                    <span className="text-sm">25/07/2025</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-black" />
                    <span className="text-sm">200.000đ</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-black" />
                    <span className="text-sm">
                      Level 2, Amanaki Thao Dien, Thu Duc, HCMC
                    </span>
                  </div>
                </div>
              </div>

              <div className="md:w-1/3">
                <Image
                  src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=300&h=200&auto=format&fit=crop"
                  alt="Event poster"
                  width={300}
                  height={200}
                  className="w-full h-auto rounded-md"
                />
              </div>
            </div>

            <div className="border-t border-gray-200 my-6"></div>

            <div className="flex flex-col md:flex-row gap-6 mb-8">
              <div className="flex-1">
                {/* Form */}
                <div>
                  <h3 className="text-lg font-medium mb-4 font-oswald">
                    Thông tin đặt vé
                  </h3>

                  <div className="space-y-4 font-manrope">
                    <div>
                      <label htmlFor="fullName" className="block text-sm mb-1">
                        Họ và tên *
                      </label>
                      <Input
                        id="fullName"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Họ và tên"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm mb-1">
                        Số điện thoại *
                      </label>
                      <Input
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Số điện thoại"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm mb-1">
                        Email *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="email@example.com"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="quantity" className="block text-sm mb-1">
                        Số lượng vé *
                      </label>
                      <div className="flex">
                        <Input
                          id="quantity"
                          type="number"
                          value={quantity}
                          onChange={(e) => setQuantity(e.target.value)}
                          className="w-24"
                          min="1"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="md:w-1/3 bg-white dark:bg-gray-900 p-6 border border-gray-200 dark:border-gray-800 rounded-md h-fit">
                <h3 className="text-lg mb-4 mx-auto text-center font-oswald font-medium">
                  Thông tin vé
                </h3>

                <div className="text-center mb-6">
                  <h4 className="text-xl text-pink-500 uppercase font-xanh">
                    KÝ ỨC CỦA CHÚNG TA
                    <br />
                    COLLECTIVE MEMORIES
                  </h4>
                </div>

                <div className="flex justify-between mb-2 font-manrope">
                  <span>Số lượng</span>
                  <span>10</span>
                </div>

                <div className="border-t border-black my-6 border-dashed"></div>

                <div className="flex justify-between mb-6 font-manrope">
                  <span className="font-medium">Thành tiền:</span>
                  <span className="font-medium">2.000.000 đ</span>
                </div>

                <div className="flex items-start gap-2 mb-6 font-manrope">
                  <Checkbox
                    id="terms"
                    checked={agreeTerms}
                    onCheckedChange={(checked) =>
                      setAgreeTerms(checked as boolean)
                    }
                  />
                  <label htmlFor="terms" className="text-xs">
                    Tôi đã đọc và đồng ý với{" "}
                    <span className="text-pink-500">
                      điều khoản của chương trình
                    </span>
                  </label>
                </div>

                <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white">
                  THANH TOÁN
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
