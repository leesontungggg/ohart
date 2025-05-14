import { formatMoney } from "./utils";

export default function htmlLayoutPayment(
  fullName,
  orderId,
  totalVND,
  email,
  phone,
  eventTitle,
  amount,
  location,
  phoneSupport,
  emailSupport
) {
  return `
    <html>
    <body
      style="
        background-color: #e2e1e0;
        font-family: Open Sans, sans-serif;
        font-size: 100%;
        font-weight: 400;
        line-height: 1.4;
        color: #000;
      "
    >
      <table
        style="
          max-width: 670px;
          margin: 50px auto 10px;
          background-color: #fff;
          padding: 50px;
          -webkit-border-radius: 3px;
          -moz-border-radius: 3px;
          border-radius: 3px;
          -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
            0 1px 2px rgba(0, 0, 0, 0.24);
          -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
            0 1px 2px rgba(0, 0, 0, 0.24);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
          border-top: solid 10px green;
        "
      >
        <thead>
          <tr>
            <th style="text-align: left">
              <img
                style="max-width: 150px"
                src="https://hiden-live-space.s3.ap-southeast-1.amazonaws.com/logo-326.png"
                alt="326 Concepts"
              />
            </th>
            <th style="text-align: right; font-weight: 400">
              ${new Date().toDateString()}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="height: 35px"></td>
          </tr>
          <tr>
            <td colspan="2" style="border: solid 1px #ddd; padding: 10px 20px">
              <p style="font-size: 14px; margin: 0 0 6px 0">
                <span
                  style="
                    font-weight: bold;
                    display: inline-block;
                    min-width: 204px;
                  "
                  >Tình trạng thanh toán/Payment Status</span
                ><b style="color: green; font-weight: normal; margin: 0"
                  >Đã thanh toán</b
                >
              </p>
              <p style="font-size: 14px; margin: 0 0 6px 0">
                <span
                  style="
                    font-weight: bold;
                    display: inline-block;
                    min-width: 200px;
                  "
                  >Mã đặt chỗ/Booking code</span
                >
                ${orderId}
              </p>
              <p style="font-size: 14px; margin: 0 0 0 0">
                <span
                  style="
                    font-weight: bold;
                    display: inline-block;
                    min-width: 200px;
                  "
                  >Tổng tiền/Total</span
                >
                ${formatMoney(totalVND)} VNĐ
              </p>
            </td>
          </tr>
          <tr>
            <td style="height: 35px"></td>
          </tr>
          <tr>
            <td style="width: 50%; padding: 20px; vertical-align: top">
              <p style="margin: 0 0 10px 0; padding: 0; font-size: 14px">
                <span style="display: block; font-weight: bold; font-size: 13px"
                  >Họ và tên/Name</span
                >
                ${fullName}
              </p>
              <p style="margin: 0 0 10px 0; padding: 0; font-size: 14px">
                <span style="display: block; font-weight: bold; font-size: 13px"
                  >Email</span
                >
                ${email}
              </p>
              <p style="margin: 0 0 10px 0; padding: 0; font-size: 14px">
                <span style="display: block; font-weight: bold; font-size: 13px"
                  >Số điện thoại/Phone Number</span
                >
                ${phone}
              </p>
            </td>
            <td style="width: 50%; padding: 20px; vertical-align: top">
              <p style="margin: 0 0 10px 0; padding: 0; font-size: 14px">
                <span style="display: block; font-weight: bold; font-size: 13px"
                  >Tên sự kiện/Event</span
                >
                ${eventTitle}
              </p>
              <p style="margin: 0 0 10px 0; padding: 0; font-size: 14px">
                <span style="display: block; font-weight: bold; font-size: 13px"
                  >Số vé/ Number of tickets</span
                >
                ${amount}
              </p>
            </td>
          </tr>
          <tr>
            <td colspan="2" style="font-size: 14px; padding: 30px 15px 0 15px">
              Bạn vui lòng kiểm tra mục đính kèm để lấy mã check-in nhé!
            </td>
          </tr>
        </tbody>
        <tfooter>
          <tr>
            <td colspan="2" style="font-size: 14px; padding: 50px 15px 0 15px">
              Mọi thắc mắc xin liên hệ:
              <br />
              <br />
              <b>Địa chỉ:</b> ${location}<br />
              <b>Phone:</b> ${phoneSupport}<br />
              <b>Email:</b> ${emailSupport}
            </td>
          </tr>
        </tfooter>
      </table>
    </body>
  </html>
  `;
}
