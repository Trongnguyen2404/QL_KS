// js/data.js (Phiên bản Hoàn chỉnh)

// --- DUMMY DATA ---
// Dữ liệu này mô phỏng thông tin lấy từ Database để sử dụng trong Frontend.

/**
 * Dữ liệu Tiện nghi (Amenities)
 * Tương ứng bảng: TienNghi
 */
const amenitiesData = [
    { ID: 1, TenTienNghi: "Wifi miễn phí", Icon: "fas fa-wifi" },
    { ID: 2, TenTienNghi: "Điều hòa", Icon: "fas fa-snowflake" },
    { ID: 3, TenTienNghi: "Tivi LCD", Icon: "fas fa-tv" },
    { ID: 4, TenTienNghi: "Tủ lạnh nhỏ", Icon: "fas fa-door-closed" }, // Giả định icon
    { ID: 5, TenTienNghi: "Bàn làm việc", Icon: "fas fa-briefcase" },
    { ID: 6, TenTienNghi: "Phòng tắm riêng", Icon: "fas fa-shower" },
    { ID: 7, TenTienNghi: "Bồn tắm", Icon: "fas fa-bath" },
    { ID: 8, TenTienNghi: "View biển", Icon: "fas fa-water" },
    { ID: 9, TenTienNghi: "Ban công", Icon: "fas fa-person-booth" }, // Giả định icon
    { ID: 10, TenTienNghi: "Ấm đun nước", Icon: "fas fa-mug-hot" },
    { ID: 11, TenTienNghi: "Máy sấy tóc", Icon: "fas fa-wind" }, // Giả định icon
    { ID: 12, TenTienNghi: "Két an toàn", Icon: "fas fa-shield-alt"}
    // Thêm các tiện nghi khác nếu cần
];

/**
 * Dữ liệu Loại phòng (Room Types)
 * Tương ứng bảng: LoaiPhong
 * Chú ý: TienNghiIDs là mảng các ID từ amenitiesData, mô phỏng bảng nối LoaiPhong_TienNghi
 */
const roomTypesData = [
    {
        ID: 1,
        TenLoaiPhong: "Standard",
        MoTa: "Thiết kế trang nhã, tiện nghi cơ bản đầy đủ, phù hợp cho cặp đôi hoặc khách đi công tác ngắn ngày. Không gian ấm cúng và thoải mái, mang đến sự tiện lợi cho kỳ nghỉ của bạn.",
        MaxNguoiLon: 2,
        MaxTreEm: 1,
        GiaCoBan: 800000,
        AnhDaiDienURL: "./images/standard-1.jpg",
        AnhKhac: [
            "./images/standard-2.jpg",
            "./images/standard-3.jpg",
            
        ],
        TienNghiIDs: [1, 2, 3, 5, 6, 10, 11] // Wifi, AC, TV, Bàn LV, PT riêng, Ấm đun, Máy sấy
    },
    {
        ID: 2,
        TenLoaiPhong: "Superior",
        MoTa: "Rộng rãi hơn phòng Standard với tầm nhìn đẹp ra thành phố hoặc khu vườn. Trang bị đầy đủ tiện nghi hiện đại, mang lại trải nghiệm nghỉ dưỡng nâng cao và thoải mái hơn.",
        MaxNguoiLon: 2,
        MaxTreEm: 2,
        GiaCoBan: 1200000,
        AnhDaiDienURL: "./images/superior-1.jpg",
        AnhKhac: [
            "./images/superior-2.jpg",
            "./images/superior-3.jpg",
            "./images/superior-4.jpg"
        ],
        TienNghiIDs: [1, 2, 3, 4, 5, 6, 10, 11, 12] // Thêm Tủ lạnh, Két an toàn
    },
    {
        ID: 3,
        TenLoaiPhong: "Deluxe",
        MoTa: "Không gian sang trọng, nội thất cao cấp được lựa chọn kỹ lưỡng. Có ban công riêng với tầm nhìn thoáng đãng, lý tưởng để thư giãn. Bao gồm các dịch vụ ưu tiên và tiện nghi vượt trội.",
        MaxNguoiLon: 3,
        MaxTreEm: 2,
        GiaCoBan: 1800000,
        AnhDaiDienURL: "./images/deluxe-1.jpg",
         AnhKhac: [
            "./images/deluxe-2.jpg",
            "./images/deluxe-3.jpg",
            "./images/deluxe-4.jpg"
        ],
        TienNghiIDs: [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12] // Thêm Bồn tắm, Ban công
    },
    {
        ID: 4,
        TenLoaiPhong: "Suite",
        MoTa: "Diện tích lớn nhất với phòng khách và phòng ngủ riêng biệt, mang đến sự riêng tư tuyệt đối. Tiện nghi đẳng cấp, dịch vụ cá nhân hóa, trải nghiệm xa hoa bậc nhất cho kỳ nghỉ hoàn hảo.",
        MaxNguoiLon: 4,
        MaxTreEm: 2,
        GiaCoBan: 3500000,
        AnhDaiDienURL: "./images/suite-1.jpg",
         AnhKhac: [
            "./images/suite-2.jpg",
            "./images/suite-3.jpg",
            "./images/suite-4.jpg"
        ],
        TienNghiIDs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] // Thêm View biển (nếu có), full tiện nghi
    },
];

/**
 * Hằng số định nghĩa ID cho các Trạng thái phòng
 * Tương ứng bảng: TrangThaiPhong
 */
const ROOM_STATUS = Object.freeze({
    TRONG_SACH: 1,      // Trống sạch
    TRONG_BAN: 2,       // Trống bẩn
    CO_KHACH: 3,        // Có khách
    DANG_SUA_CHUA: 4,   // Đang sửa chữa
    KHONG_HOAT_DONG: 5  // Không hoạt động (Out of Service / Inactive)
});

/**
 * Hằng số định nghĩa ID cho các Trạng thái đặt phòng
 * Tương ứng bảng: TrangThaiDatPhong
 */
const BOOKING_STATUS = Object.freeze({
    MOI: 1,             // Mới (Chưa xác nhận)
    DA_XAC_NHAN: 2,     // Đã xác nhận (Confirmed)
    DA_CHECK_IN: 3,     // Đã check-in (Occupied)
    DA_CHECK_OUT: 4,    // Đã check-out (Checked out)
    DA_HUY: 5,          // Đã hủy (Cancelled)
    NO_SHOW: 6          // Khách không đến (No Show)
});

/**
 * Dữ liệu Phòng cụ thể (Rooms)
 * Tương ứng bảng: Phong
 * Chứa thông tin về từng phòng vật lý.
 */
const roomsData = [
    // Loại Standard (LoaiPhongID: 1)
    { ID: 101, SoPhong: "101", LoaiPhongID: 1, Tang: 1, TrangThaiPhongID: ROOM_STATUS.TRONG_SACH },
    { ID: 102, SoPhong: "102", LoaiPhongID: 1, Tang: 1, TrangThaiPhongID: ROOM_STATUS.TRONG_SACH },
    { ID: 103, SoPhong: "103", LoaiPhongID: 1, Tang: 1, TrangThaiPhongID: ROOM_STATUS.CO_KHACH }, // Đang có khách ở (do booking ID 1)
    { ID: 104, SoPhong: "104", LoaiPhongID: 1, Tang: 1, TrangThaiPhongID: ROOM_STATUS.DANG_SUA_CHUA }, // Đang sửa, không thể đặt
    { ID: 105, SoPhong: "105", LoaiPhongID: 1, Tang: 1, TrangThaiPhongID: ROOM_STATUS.TRONG_SACH },

    // Loại Superior (LoaiPhongID: 2)
    { ID: 201, SoPhong: "201", LoaiPhongID: 2, Tang: 2, TrangThaiPhongID: ROOM_STATUS.TRONG_SACH },
    { ID: 202, SoPhong: "202", LoaiPhongID: 2, Tang: 2, TrangThaiPhongID: ROOM_STATUS.TRONG_SACH },
    { ID: 203, SoPhong: "203", LoaiPhongID: 2, Tang: 2, TrangThaiPhongID: ROOM_STATUS.TRONG_BAN }, // Cần dọn, không thể đặt ngay
    { ID: 204, SoPhong: "204", LoaiPhongID: 2, Tang: 2, TrangThaiPhongID: ROOM_STATUS.TRONG_SACH },

    // Loại Deluxe (LoaiPhongID: 3)
    { ID: 301, SoPhong: "301", LoaiPhongID: 3, Tang: 3, TrangThaiPhongID: ROOM_STATUS.CO_KHACH }, // Đang có khách ở (do booking ID 4)
    { ID: 302, SoPhong: "302", LoaiPhongID: 3, Tang: 3, TrangThaiPhongID: ROOM_STATUS.TRONG_SACH },
    { ID: 303, SoPhong: "303", LoaiPhongID: 3, Tang: 3, TrangThaiPhongID: ROOM_STATUS.KHONG_HOAT_DONG }, // Không hoạt động

    // Loại Suite (LoaiPhongID: 4)
    { ID: 401, SoPhong: "401", LoaiPhongID: 4, Tang: 4, TrangThaiPhongID: ROOM_STATUS.TRONG_SACH },
];

/**
 * Dữ liệu Đặt phòng (Bookings) - Giả lập
 * Tương ứng bảng: DatPhong
 * Chỉ chứa các trường cần thiết cho logic kiểm tra tình trạng phòng trong mô phỏng.
 * PhongID chỉ có khi booking đã check-in.
 */
const bookingsData = [
     { ID: 1, LoaiPhongID: 1, PhongID: 103, NgayNhanPhong: '2024-08-20', NgayTraPhong: '2024-08-22', TrangThaiDatPhongID: BOOKING_STATUS.DA_CHECK_IN }, // Phòng 103 đang ở đến 22/08
     { ID: 2, LoaiPhongID: 2, PhongID: null, NgayNhanPhong: '2024-08-21', NgayTraPhong: '2024-08-23', TrangThaiDatPhongID: BOOKING_STATUS.DA_XAC_NHAN }, // Xác nhận Superior 21-23/08 (chiếm 1 suất)
     { ID: 3, LoaiPhongID: 1, PhongID: null, NgayNhanPhong: '2024-08-25', NgayTraPhong: '2024-08-27', TrangThaiDatPhongID: BOOKING_STATUS.DA_XAC_NHAN }, // Xác nhận Standard 25-27/08 (chiếm 1 suất)
     { ID: 4, LoaiPhongID: 3, PhongID: 301, NgayNhanPhong: '2024-08-20', NgayTraPhong: '2024-08-24', TrangThaiDatPhongID: BOOKING_STATUS.DA_CHECK_IN }, // Phòng 301 đang ở đến 24/08
     { ID: 5, LoaiPhongID: 1, PhongID: null, NgayNhanPhong: '2024-08-22', NgayTraPhong: '2024-08-24', TrangThaiDatPhongID: BOOKING_STATUS.DA_XAC_NHAN }, // Xác nhận Standard 22-24/08 (chiếm suất thứ 2)
     { ID: 6, LoaiPhongID: 1, PhongID: 101, NgayNhanPhong: '2024-09-01', NgayTraPhong: '2024-09-03', TrangThaiDatPhongID: BOOKING_STATUS.DA_HUY }, // Đã hủy, không tính
     { ID: 7, LoaiPhongID: 2, PhongID: 201, NgayNhanPhong: '2024-09-05', NgayTraPhong: '2024-09-07', TrangThaiDatPhongID: BOOKING_STATUS.DA_CHECK_OUT }, // Đã checkout, không tính
     { ID: 8, LoaiPhongID: 1, PhongID: 101, NgayNhanPhong: '2024-08-26', NgayTraPhong: '2024-08-28', TrangThaiDatPhongID: BOOKING_STATUS.DA_CHECK_IN }, // Phòng 101 bị chiếm 26-28/08
     { ID: 9, LoaiPhongID: 2, PhongID: null, NgayNhanPhong: '2024-08-24', NgayTraPhong: '2024-08-26', TrangThaiDatPhongID: BOOKING_STATUS.DA_XAC_NHAN }, // Thêm booking Superior
     // Lưu ý: Ngày trả phòng được tính là ngày khách rời đi, phòng sẽ trống *từ* ngày đó.
];

// --- Helper Functions ---
// Các hàm tiện ích dùng chung

/**
 * Tìm đối tượng LoaiPhong dựa vào ID.
 * @param {number|string} id ID của loại phòng.
 * @returns {object|null} Đối tượng LoaiPhong hoặc null nếu không tìm thấy.
 */
function findRoomTypeById(id) {
    const numericId = parseInt(id);
    return roomTypesData.find(rt => rt.ID === numericId) || null;
}

/**
 * Tìm đối tượng TienNghi dựa vào ID.
 * @param {number|string} id ID của tiện nghi.
 * @returns {object|null} Đối tượng TienNghi hoặc null nếu không tìm thấy.
 */
function findAmenityById(id) {
    const numericId = parseInt(id);
    return amenitiesData.find(am => am.ID === numericId) || null;
}

/**
 * Định dạng số thành tiền tệ Việt Nam (VNĐ).
 * @param {number} amount Số tiền cần định dạng.
 * @returns {string} Chuỗi tiền tệ đã định dạng (ví dụ: "1.200.000 ₫").
 */
function formatCurrency(amount) {
    if (typeof amount !== 'number' || isNaN(amount)) {
        amount = 0;
    }
    return amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}

/**
 * Định dạng chuỗi ngày YYYY-MM-DD thành DD/MM/YYYY.
 * @param {string} dateString Chuỗi ngày đầu vào (YYYY-MM-DD).
 * @returns {string} Chuỗi ngày đã định dạng (DD/MM/YYYY) hoặc chuỗi rỗng nếu không hợp lệ.
 */
function formatDate(dateString) {
    if (!dateString || !/^\d{4}-\d{2}-\d{2}$/.test(dateString)) return '';
    try {
        const [year, month, day] = dateString.split('-');
        const d = parseInt(day), m = parseInt(month), y = parseInt(year);
        if (m < 1 || m > 12 || d < 1 || d > 31 || y < 1900 || y > 2100) return '';
        const dateObj = new Date(Date.UTC(y, m - 1, d)); // Sử dụng UTC để tránh lỗi timezone
         if (dateObj.getUTCFullYear() === y && dateObj.getUTCMonth() === m - 1 && dateObj.getUTCDate() === d) {
             return `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
         }
         console.warn("formatDate: Invalid date created from string:", dateString);
         return '';
    } catch (error) {
        console.error("Error formatting date:", dateString, error);
        return '';
    }
}

/**
 * Tính số đêm giữa ngày nhận và ngày trả phòng.
 * @param {string} checkin Chuỗi ngày nhận phòng (YYYY-MM-DD).
 * @param {string} checkout Chuỗi ngày trả phòng (YYYY-MM-DD).
 * @returns {number} Số đêm, hoặc 0 nếu ngày không hợp lệ hoặc checkout không sau checkin.
 */
function calculateNights(checkin, checkout) {
    try {
        const date1 = new Date(checkin + 'T00:00:00Z'); // Thêm giờ UTC để tính toán chính xác
        const date2 = new Date(checkout + 'T00:00:00Z');
        if (isNaN(date1.getTime()) || isNaN(date2.getTime()) || date2 <= date1) return 0;
        const timeDiff = date2.getTime() - date1.getTime();
        const diffDays = Math.round(timeDiff / (1000 * 60 * 60 * 24)); // Chia cho số ms trong 1 ngày
        return diffDays;
    } catch (error) {
        console.error("Error calculating nights:", checkin, checkout, error);
        return 0;
    }
}

/**
 * Tìm danh sách các phòng cụ thể còn trống cho một loại phòng trong khoảng thời gian nhất định.
 * Hàm này mô phỏng logic kiểm tra phức tạp hơn, xem xét trạng thái vật lý và các booking đã chiếm chỗ.
 *
 * @param {number} roomTypeId ID của loại phòng cần kiểm tra.
 * @param {string} checkin Ngày nhận phòng yêu cầu (YYYY-MM-DD).
 * @param {string} checkout Ngày trả phòng yêu cầu (YYYY-MM-DD).
 * @returns {Array<object>} Mảng các đối tượng phòng (từ roomsData) còn trống. Trả về mảng rỗng nếu không có phòng nào trống hoặc ngày không hợp lệ.
 */
function findAvailableRooms(roomTypeId, checkin, checkout) {
    const numericRoomTypeId = parseInt(roomTypeId);
    if (isNaN(numericRoomTypeId)) {
        console.error("findAvailableRooms: Invalid roomTypeId", roomTypeId);
        return [];
    }

    let requestedCheckin, requestedCheckout;
    try {
        requestedCheckin = new Date(checkin + 'T00:00:00Z');
        requestedCheckout = new Date(checkout + 'T00:00:00Z');
         if (isNaN(requestedCheckin.getTime()) || isNaN(requestedCheckout.getTime()) || requestedCheckout <= requestedCheckin) {
            throw new Error("Invalid date range");
         }
    } catch (e) {
        console.error("findAvailableRooms: Invalid date range provided.", checkin, checkout, e);
        return [];
    }

    // 1. Lọc các phòng vật lý thuộc loại yêu cầu và đang hoạt động/sẵn sàng
    const potentialPhysicalRooms = roomsData.filter(room =>
        room.LoaiPhongID === numericRoomTypeId &&
        (room.TrangThaiPhongID === ROOM_STATUS.TRONG_SACH || room.TrangThaiPhongID === ROOM_STATUS.TRONG_BAN) // Chấp nhận cả phòng trống bẩn vì có thể dọn
        // && room.TrangThaiPhongID !== ROOM_STATUS.DANG_SUA_CHUA // Bỏ qua phòng đang sửa
        // && room.TrangThaiPhongID !== ROOM_STATUS.KHONG_HOAT_DONG // Bỏ qua phòng không hoạt động
         // --> Logic trên đã được đơn giản hóa bằng cách chỉ lấy TRONG_SACH ở bước tiếp theo
    );

     // Lấy ra những phòng đang thực sự ở trạng thái có thể check-in (Trống sạch)
     const vacantCleanRooms = potentialPhysicalRooms.filter(
        room => room.TrangThaiPhongID === ROOM_STATUS.TRONG_SACH
    );


    if (vacantCleanRooms.length === 0) {
        console.log(`findAvailableRooms: No physical rooms of type ${numericRoomTypeId} are currently vacant clean.`);
        return [];
    }

    // 2. Xác định các ID phòng cụ thể đã bị chiếm bởi booking đã check-in trong khoảng thời gian này
    const directlyOccupiedRoomIds = new Set();
    const relevantCheckedInStatus = [BOOKING_STATUS.DA_CHECK_IN];

    for (const booking of bookingsData) {
        if (relevantCheckedInStatus.includes(booking.TrangThaiDatPhongID) && booking.PhongID !== null) {
             try {
                const bookingCheckin = new Date(booking.NgayNhanPhong + 'T00:00:00Z');
                const bookingCheckout = new Date(booking.NgayTraPhong + 'T00:00:00Z');
                 if (isNaN(bookingCheckin.getTime()) || isNaN(bookingCheckout.getTime())) continue;

                // Kiểm tra overlap thời gian
                if (requestedCheckin < bookingCheckout && requestedCheckout > bookingCheckin) {
                    directlyOccupiedRoomIds.add(booking.PhongID);
                }
             } catch(e) { continue; } // Bỏ qua nếu ngày booking lỗi
        }
    }

    // 3. Đếm số lượng "suất" phòng đã bị giữ chỗ bởi các booking "Đã xác nhận" (chưa check-in) trùng loại phòng và trùng ngày
    let confirmedHolds = 0;
    const relevantConfirmedStatus = [BOOKING_STATUS.DA_XAC_NHAN];

    for (const booking of bookingsData) {
        if (booking.LoaiPhongID === numericRoomTypeId && relevantConfirmedStatus.includes(booking.TrangThaiDatPhongID)) {
            try {
                const bookingCheckin = new Date(booking.NgayNhanPhong + 'T00:00:00Z');
                const bookingCheckout = new Date(booking.NgayTraPhong + 'T00:00:00Z');
                 if (isNaN(bookingCheckin.getTime()) || isNaN(bookingCheckout.getTime())) continue;

                // Kiểm tra overlap thời gian
                if (requestedCheckin < bookingCheckout && requestedCheckout > bookingCheckin) {
                    confirmedHolds++;
                }
            } catch(e) { continue; } // Bỏ qua nếu ngày booking lỗi
        }
    }

    console.log(`findAvailableRooms: Check TypeID=${numericRoomTypeId}, Dates=${checkin} to ${checkout}`);
    console.log(` - Physically Vacant Clean Rooms: [${vacantCleanRooms.map(r => r.ID).join(', ')}] (Count: ${vacantCleanRooms.length})`);
    console.log(` - Directly Occupied (Checked-in) Room IDs: [${Array.from(directlyOccupiedRoomIds).join(', ')}]`);
    console.log(` - Confirmed Holds (Not Checked-in): ${confirmedHolds}`);

    // 4. Lọc ra danh sách phòng cuối cùng:
    // Là những phòng Trống Sạch VÀ không nằm trong danh sách phòng bị chiếm trực tiếp (đã check-in).
    const potentiallyAvailableRooms = vacantCleanRooms.filter(room => !directlyOccupiedRoomIds.has(room.ID));

    console.log(` - Potentially Available (Clean & Not Checked-in): [${potentiallyAvailableRooms.map(r => r.ID).join(', ')}] (Count: ${potentiallyAvailableRooms.length})`);

    // 5. Kiểm tra xem số lượng phòng có khả năng trống có đủ để đáp ứng số lượng booking đã xác nhận (giữ chỗ) không.
    const finalAvailableCount = potentiallyAvailableRooms.length - confirmedHolds;

    if (finalAvailableCount <= 0) {
        console.log(` - Result: Unavailable (Confirmed holds exceed potentially available rooms)`);
        return []; // Hết phòng do các suất đã được giữ chỗ
    }

    // Trả về danh sách các phòng có khả năng trống (chưa trừ confirmed holds, vì chưa biết gán phòng nào)
    // Backend sẽ quyết định gán phòng cụ thể nào khi check-in hoặc trước đó.
    // Frontend chỉ cần biết là *có* phòng trống hay không.
    console.log(` - Result: Available (Available count after holds: ${finalAvailableCount})`);
    // Trả về mảng các phòng có thể trống để hiển thị số lượng
    return potentiallyAvailableRooms.slice(0, finalAvailableCount);

}


// --- Các hàm hoặc dữ liệu khác có thể thêm vào đây nếu cần ---