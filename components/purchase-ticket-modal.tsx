/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { Mail, Phone, User, Ticket } from "lucide-react";
import { makeid } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { Checkbox } from "./ui/checkbox";
import Link from "next/link";

export default function TicketPurchaseModal({ open = false, setOpen, event }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    tickets: "",
  });

  const [acceptPDPA, setAcceptPDPA] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.tickets
    ) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsLoading(true);

    try {
      const orderData = {
        eventIndex: event.eventIndex,
        event_id: event.id,
        fullName: formData.name,
        orderId: makeid(10),
        totalVND: Number(formData.tickets) * event.price,
        email: formData.email,
        phone: formData.phone,
        eventTitle: event.name,
        amount: formData.tickets,
        bank: event.bank,
        account_number: event.account_number,
        location: event.location,
        phoneSupport: event.phone_support,
        emailSupport: event.email_support,
      };

      fetch("/api/confirm-booking", {
        method: "POST",
        body: JSON.stringify(orderData),
      }).then(() => {
        setIsLoading(false);
        toast.success("Ticket purchase successful!");
        setOpen(false);
        setFormData({
          name: "",
          phone: "",
          email: "",
          tickets: "",
        });
        router.push("/thank-you");
      });
    } catch (e: any) {
      setIsLoading(false);
      console.log(e);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Mua vé</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Họ Tên</Label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="pl-10"
                placeholder="Ô Văn Tèo"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Số điện thoại</Label>
            <div className="relative">
              <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="pl-10"
                placeholder="+84 000000000"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="pl-10"
                placeholder="ovanteo@example.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="tickets">Số lượng vé</Label>
            <div className="relative">
              <Ticket className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="tickets"
                name="tickets"
                type="number"
                min="1"
                value={formData.tickets}
                onChange={handleChange}
                className="pl-10"
                placeholder="1"
              />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="terms"
              onCheckedChange={(value: any) => {
                console.log(value);
                setAcceptPDPA(value);
              }}
            />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Tôi đã đọc và đồng ý với{" "}
              <Link className="underline" target="_blank" href="/policy">
                điều khoản
              </Link>{" "}
              của chương trình
            </label>
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              className="mr-2"
            >
              Hủy
            </Button>
            <Button disabled={!acceptPDPA || isLoading} type="submit">
              Xác nhận đặt chỗ
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
