// js/script.js

document.addEventListener('DOMContentLoaded', function() {

    // --- Elements ---
    const bookingForm = document.getElementById('quick-search-form');
    const checkinDateInput = document.getElementById('checkin-date');
    const checkoutDateInput = document.getElementById('checkout-date');
    const guestsInput = document.getElementById('guests');
    const formMessage = document.getElementById('form-message');
    const featuredRoomsContainer = document.querySelector('#featured-rooms .room-container');
    const featuredLoadingMessage = document.getElementById('featured-loading-message');

    // --- Basic Date Validation ---
    const today = new Date();
    today.setHours(0,0,0,0); // Đặt giờ về 0 để so sánh ngày chính xác
    const todayString = today.toISOString().split('T')[0];
    checkinDateInput.setAttribute('min', todayString);

    checkinDateInput.addEventListener('change', function() {
        if (checkinDateInput.value) {
            const checkinVal = new Date(checkinDateInput.value);
             // Kiểm tra nếu ngày chọn là quá khứ (do browser có thể không enforce min chặt chẽ)
            if (checkinVal < today) {
                showFormMessage('Ngày nhận phòng không được là ngày quá khứ.', 'error');
                checkinDateInput.value = '';
                checkoutDateInput.value = '';
                checkoutDateInput.removeAttribute('min');
                return;
            }

            let nextDay = new Date(checkinVal);
            nextDay.setDate(nextDay.getDate() + 1);
            const nextDayString = nextDay.toISOString().split('T')[0];
            checkoutDateInput.setAttribute('min', nextDayString);

            if (checkoutDateInput.value && new Date(checkoutDateInput.value) < nextDay) {
                checkoutDateInput.value = ''; // Reset nếu ngày trả phòng không hợp lệ
            }
            hideFormMessage(); // Xóa thông báo lỗi cũ nếu có
        } else {
            checkoutDateInput.removeAttribute('min');
            checkoutDateInput.value = '';
        }
    });

     checkoutDateInput.addEventListener('change', function() {
        if (checkinDateInput.value && checkoutDateInput.value) {
             const checkinVal = new Date(checkinDateInput.value);
             const checkoutVal = new Date(checkoutDateInput.value);
            if (checkoutVal <= checkinVal) {
                showFormMessage('Ngày trả phòng phải sau ngày nhận phòng.', 'error');
                checkoutDateInput.value = '';
            } else {
                 hideFormMessage();
            }
        }
     });

    // --- Handle Form Submission ---
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const checkin = checkinDateInput.value;
            const checkout = checkoutDateInput.value;
            const guests = guestsInput.value;

            // Validate dates again before proceeding
            if (!checkin || !checkout) {
                 showFormMessage('Vui lòng chọn ngày nhận và trả phòng.', 'error');
                return;
            }
             const checkinVal = new Date(checkin);
             const checkoutVal = new Date(checkout);
             if (checkoutVal <= checkinVal) {
                 showFormMessage('Ngày trả phòng phải sau ngày nhận phòng.', 'error');
                 return;
             }
             if (parseInt(guests) < 1) {
                  showFormMessage('Số lượng khách phải ít nhất là 1.', 'error');
                  return;
             }

            // Dữ liệu hợp lệ, ẩn thông báo lỗi cũ (nếu có)
            hideFormMessage();

            // Chuyển hướng đến trang kết quả tìm kiếm với parameters
            const searchUrl = `search-results.html?checkin=${checkin}&checkout=${checkout}&guests=${guests}`;
            console.log("Redirecting to:", searchUrl); // Log để kiểm tra
            window.location.href = searchUrl;
        });
    }

    // --- Load Featured Rooms ---
    if (featuredRoomsContainer && typeof roomTypesData !== 'undefined') {
        // Xóa thông báo loading
        if (featuredLoadingMessage) {
            featuredLoadingMessage.style.display = 'none';
        }
        featuredRoomsContainer.innerHTML = ''; // Xóa các thẻ cứng nếu có

        // Lấy 4 phòng đầu tiên từ data.js để làm nổi bật
        const featuredRooms = roomTypesData.slice(0, 4);

        if (featuredRooms.length > 0) {
            featuredRooms.forEach(roomType => {
                const roomCard = document.createElement('div');
                roomCard.classList.add('room-card');
                roomCard.dataset.roomTypeId = roomType.ID; // Thêm data attribute

                // Giới hạn mô tả khoảng 100 ký tự
                const shortDescription = roomType.MoTa.length > 100
                    ? roomType.MoTa.substring(0, 100) + '...'
                    : roomType.MoTa;

                roomCard.innerHTML = `
                    <img src="${roomType.AnhDaiDienURL}" alt="${roomType.TenLoaiPhong}">
                    <div class="room-info">
                        <h3>${roomType.TenLoaiPhong}</h3>
                        <p>${shortDescription}</p>
                        <p class="room-price">Giá từ: <strong>${formatCurrency(roomType.GiaCoBan)}/đêm</strong></p>
                        <a href="room-details.html?typeId=${roomType.ID}" class="btn btn-secondary room-detail-link">Xem Chi Tiết</a>
                    </div>
                `;
                featuredRoomsContainer.appendChild(roomCard);
            });
        } else {
             featuredRoomsContainer.innerHTML = '<p>Không có phòng nổi bật nào để hiển thị.</p>';
        }

    } else if (featuredLoadingMessage) {
         featuredLoadingMessage.textContent = 'Lỗi: Không thể tải dữ liệu phòng.';
         console.error("Error: roomTypesData is not defined or featuredRoomsContainer not found.");
    }


    // --- Helper Functions (Keep these at the end or in a separate utils file) ---
    function showFormMessage(message, type = 'info') {
        if (formMessage) {
            formMessage.textContent = message;
            formMessage.className = `form-message ${type}`;
            formMessage.style.display = 'block';
            formMessage.style.color = type === 'error' ? '#721c24' : '#0c5460';
            formMessage.style.backgroundColor = type === 'error' ? '#f8d7da' : '#d1ecf1';
            formMessage.style.border = `1px solid ${type === 'error' ? '#f5c6cb' : '#bee5eb'}`;
            formMessage.style.padding = '10px';
            formMessage.style.marginTop = '15px';
            formMessage.style.borderRadius = '4px';
            formMessage.style.textAlign = 'center';
            formMessage.style.fontWeight = '500';
        }
    }

    function hideFormMessage() {
         if (formMessage) {
             formMessage.style.display = 'none';
             formMessage.textContent = '';
             formMessage.className = 'form-message';
         }
    }

    // Hàm formatDate và formatCurrency đã có trong data.js nên không cần định nghĩa lại ở đây
    // Chỉ cần đảm bảo data.js được tải trước script.js trong HTML

    // --- Smooth scrolling cho các link nội bộ (Giữ nguyên) ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const hrefAttr = this.getAttribute('href');
            if (hrefAttr === '#') {
                 e.preventDefault();
                 window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                 try {
                     const targetElement = document.querySelector(hrefAttr);
                     if (targetElement) {
                        e.preventDefault();
                         targetElement.scrollIntoView({
                            behavior: 'smooth'
                        });
                     }
                 } catch (error) {
                     console.warn("Smooth scroll target not found or invalid selector:", hrefAttr);
                 }
            }
        });
    });

});