/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Clock, Ticket } from "lucide-react";
import { toast } from "sonner";
import TicketPurchaseModal from "@/components/purchase-ticket-modal";
import HeaderSkeleton from "@/components/header-skeleton";
import ToolCardSkeleton from "@/components/card-skeleton";
import { formatMoney } from "@/lib/utils";

export default function EventDetail() {
  const params = useParams();
  const { slug } = params;
  const [ticketsLeft, setEventTicketsLeft] = useState(50);
  const [openPurchaseModal, setOpenPurchaseModal] = useState(false);
  const [event, setEvent] = useState<any>(null);
  // const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // setIsLoading(true);
    fetch(`/api/get-event-detail/${slug}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        // setIsLoading(false);
        if (data.message === "ok") {
          setEvent(data.data);
          setEventTicketsLeft(data.data.amount_ticket_lefts);
        }
      });
  }, []);

  if (!event) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <HeaderSkeleton />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <ToolCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen h-auto flex justify-center items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="relative">
          <img
            src={event.thumbnail_url}
            alt="326 Concepts"
            className="w-full h-auto md:h-96 object-cover rounded-lg"
          />
        </div>

        <Card className="p-6 space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2 flex gap-2">{event.name}</h1>
            <div className="flex gap-2">
              {event.tags.split(", ").map((item: any, id) => (
                <Badge key={id} variant="secondary" className="md:mb-4">
                  {item}
                </Badge>
              ))}
            </div>
          </div>

          <div className="text-2xl font-bold mb-2 flex gap-2">
            <h2>{formatMoney(event.price)}</h2>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <MapPin className="!h-5 !w-5 text-muted-foreground" />
              <span className="w-11/12 md:w-auto">{event.location}</span>
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-muted-foreground" />
              <span className="w-11/12 md:w-auto">{event.date}</span>
            </div>

            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-muted-foreground" />
              <span className="w-11/12 md:w-auto">{event.time}</span>
            </div>

            <div className="flex items-center gap-2">
              <Ticket className="h-5 w-5 text-muted-foreground" />
              <span className="w-11/12 md:w-auto">
                {ticketsLeft > 0
                  ? `${ticketsLeft} tickets remaining`
                  : "Sold out"}
              </span>
            </div>
          </div>

          <div className="border-t pt-6">
            <h2 className="text-xl font-semibold mb-4">Mô tả sự kiện</h2>
            <div
              className="text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: event.long_desc }}
            ></div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button
              size="lg"
              className="w-full sm:w-auto"
              onClick={() => setOpenPurchaseModal(true)}
              disabled={ticketsLeft <= 0}
            >
              {ticketsLeft > 0 ? `Mua vé` : `Sold Out`}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
              onClick={() => toast.info(`Added to calendar!`)}
            >
              Thêm vào lịch
            </Button>
          </div>
        </Card>
      </div>
      <TicketPurchaseModal
        open={openPurchaseModal}
        setOpen={setOpenPurchaseModal}
        event={event}
      />
    </div>
  );
}
