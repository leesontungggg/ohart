/* eslint-disable @typescript-eslint/no-explicit-any */
import { formatMoney } from "./utils";
import { textToQRCode } from "./qrcode";

export default async function htmlLayoutPaymentPdf(
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
  const qr: any = await textToQRCode(orderId);

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
            <th style="text-align: right; font-weight: 400">${new Date().toDateString()}</th>
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
            <td colspan="2" style="font-size: 14px; padding: 30px 15px 0 15px">
              Bạn thân mến,
              <br />
              <br />
              Đây là đặt chỗ điện tử của bạn. Vé đặt chỗ này được sử dụng để check-in tại sự kiện và bắt buộc phải xuất trình khi vào cửa.
              <br />
              <br />
              Bạn vui lòng lưu lại vé đặt chỗ này trên điện thoại, hoặc in ra giấy trong trường hợp bất khả kháng.<br />
              <br />
              <strong>Điều khoản & Quy định của Sinh Nhật Cổ Động 8:</strong><br />
              - Vé chỉ dành cho 01 (một) người, BTC không hoàn tiền cho vé đã thanh toán.<br />
              - Xuất trình vé tại cổng để được vào sự kiện, người mua chịu trách nhiệm tự bảo mật thông tin vé.<br />
              - Không mang vũ khí, các vật sắc nhọn như dao, kéo, dù…<br />
              - Không mang pháo hoa, pháo sáng, các vật dễ gây cháy nổ...<br />
              - Không mang chất kích thích bị cấm theo quy định nhà nước như ma tuý, cần sa và các chất kích thích khác.<br />
              - Không mang theo động vật và thú nuôi.<br />
              - Không mang theo đồ ăn & nước uống từ bên ngoài vào sự kiện (trừ nước suối).<br />
              - Không mang đèn pin, đèn laser.<br />
              - Không mang băng rôn, áp phích có nội dung chính trị, tôn giáo hoặc từ ngữ phản cảm.<br />
              - Không chen lấn, xô đẩy khi tham gia sự kiện.<br />
              - Người tham gia sử dụng rượu bia cần đảm bảo trên 18 tuổi.<br />

            </td>
          </tr>
          <tr>
            <td colspan="2" style="width: 100%">
              <img
                style="width: 100%"
                src="${qr}"
                alt="homeland-artists"
              />
            </td>
          </tr>
        </tbody>
        <tfooter>
          <tr>
            <td colspan="2" style="font-size: 14px; padding: 50px 15px 0 15px">
              <b>Địa chỉ:</b> ${location}<br />
              <br />
              Mọi thắc mắc xin liên hệ:
              <br />
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
