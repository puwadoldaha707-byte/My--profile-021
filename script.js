
// ==============================
// 1. ระบบทักทายเดิม
// ==============================
const greetingBtn = document.getElementById('greetingBtn');
const message = document.getElementById('greetingMessage');

if (greetingBtn && message) {
    greetingBtn.addEventListener('click', function () {
        message.textContent = 'สวัสดีครับ ยินดีที่ได้รู้จักครับ';
    });
}


// ==============================
// 2. ระบบต้อนรับผู้เข้าชมเว็บไซต์
// ==============================
let visitorName = prompt('กรุณากรอกชื่อของคุณ');

if (visitorName && visitorName.trim() !== '') {
    document.getElementById('fullname')?.textContent;
    const welcomeMessage = document.createElement('p');
    welcomeMessage.textContent =
        'ยินดีต้อนรับคุณ ' + visitorName.trim() +
        ' เข้าสู่เว็บไซต์ Portfolio ของฉัน';

    document.body.prepend(welcomeMessage);
}


// ==============================
// 3. ระบบคำนวณราคาพัฒนาเว็บไซต์
// ==============================
const calculateBtn = document.getElementById('calculateBtn');
const costResult = document.getElementById('costResult');

const pricePerPage = 500; // ราคาหน้าละ 500 บาท

if (calculateBtn && costResult) {
    calculateBtn.addEventListener('click', function () {

        // รับจำนวนหน้าจากผู้ใช้
        let pageInput = prompt('กรุณากรอกจำนวนหน้าเว็บไซต์');

        // แปลงข้อความเป็นตัวเลข
        let pageCount = Number(pageInput);

        // ตรวจสอบข้อมูล
        if (
            pageInput === null ||
            pageInput.trim() === '' ||
            !Number.isInteger(pageCount) ||
            pageCount <= 0
        ) {
            costResult.textContent = 'กรุณากรอกจำนวนหน้าเป็นตัวเลขเต็มที่มากกว่า 0';
            return;
        }

        // คำนวณราคา
        let totalCost = pageCount * pricePerPage;

        // แสดงผลลัพธ์
        costResult.textContent =
            'จำนวนหน้าเว็บไซต์: ' + pageCount + ' หน้า | ' +
            'ราคาต่อหน้า: ' + pricePerPage + ' บาท | ' +
            'ราคารวมทั้งหมด: ' + totalCost.toLocaleString('th-TH') + ' บาท';
    });
}
