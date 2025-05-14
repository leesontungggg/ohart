import { formatMoney } from "./utils";

export default function htmlLayoutBooking(
  event_id,
  fullName,
  orderId,
  totalVND,
  email,
  phone,
  eventTitle,
  amount,
  bank,
  account_number,
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
          border-top: solid 10px red;
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
                  >Tình trạng thanh toán</span
                ><b style="color: red; font-weight: normal; margin: 0"
                  >Chưa thanh toán</b
                >
              </p>
              <p style="font-size: 14px; margin: 0 0 6px 0">
                <span
                  style="
                    font-weight: bold;
                    display: inline-block;
                    min-width: 200px;
                  "
                  >Mã đặt chỗ</span
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
                  >Tổng tiền</span
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
                  >Họ và tên</span
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
                  >Số điện thoại</span
                >
                ${phone}
              </p>
            </td>
            <td style="width: 50%; padding: 20px; vertical-align: top">
              <p style="margin: 0 0 10px 0; padding: 0; font-size: 14px">
                <span style="display: block; font-weight: bold; font-size: 13px"
                  >Tên sự kiện</span
                >
                ${eventTitle}
              </p>
              <p style="margin: 0 0 10px 0; padding: 0; font-size: 14px">
                <span style="display: block; font-weight: bold; font-size: 13px"
                  >Số vé</span
                >
                ${amount}
              </p>
            </td>
          </tr>
          <tr>
            <td colspan="2" style="padding-top: 12px; padding-bottom: 12px;">Vui lòng thanh toán theo mã QR bên dưới<td>
          </tr>
          <tr>
            <td colspan="2" style="padding: 24px">
              <img
                style="width: 100%"
                src="https://img.vietqr.io/image/${bank}-${account_number}-compact2.png?amount=${totalVND}&addInfo=${`${event_id}-${phone}-${orderId}`}&accountName=HOANG%20HUY%20THINH"
                alt="326 Concepts"
              />
            <td>
          </tr>
        </tbody>
        <tfooter>
          <tr>
            <td colspan="2" style="font-size: 14px; padding: 50px 15px 0 15px">
              Sau khi thanh toán thành công, bạn sẽ nhận được Email xác nhận kèm theo Vé điện tử của sự kiện. Vui lòng lưu giữ và bảo mật Vé điện tử này để sử dụng khi vào cổng.<br />
              <br />
              <b>Địa chỉ:</b> ${location}<br />
              <br />
              <br />
              Mọi thắc mắc xin liên hệ:<br />
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
