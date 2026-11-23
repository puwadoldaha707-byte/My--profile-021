
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
    const welcomeMessage = document.createElement('p');

    welcomeMessage.textContent =
        'ยินดีต้อนรับคุณ ' + visitorName.trim() +
        ' เข้าสู่เว็บไซต์ Portfolio ของฉัน';

    welcomeMessage.id = 'visitorWelcome';
    document.body.prepend(welcomeMessage);
}


// ==============================
// 3. ระบบคำนวณราคาพัฒนาเว็บไซต์
// ==============================
const calculateBtn = document.getElementById('calculateBtn');
const costResult = document.getElementById('costResult');

const pricePerPage = 500;

if (calculateBtn && costResult) {
    calculateBtn.addEventListener('click', function () {

        // รับจำนวนหน้าจากผู้ใช้
        let pageInput = prompt('กรุณากรอกจำนวนหน้าเว็บไซต์');

        // ตรวจสอบว่าผู้ใช้กดยกเลิกหรือไม่
        if (pageInput === null) {
            costResult.textContent = 'คุณยกเลิกการคำนวณราคา';
            return;
        }

        // แปลงข้อความเป็นตัวเลข
        let pageCount = Number(pageInput);

        // ตรวจสอบข้อมูล
        if (
            pageInput.trim() === '' ||
            !Number.isInteger(pageCount) ||
            pageCount <= 0
        ) {
            costResult.textContent =
                'กรุณากรอกจำนวนหน้าเป็นตัวเลขเต็มที่มากกว่า 0';
            return;
        }

        // คำนวณราคา
        let totalCost = pageCount * pricePerPage;

        // แสดงผลลัพธ์
        costResult.textContent =
            'จำนวนหน้าเว็บไซต์: ' + pageCount + ' หน้า | ' +
            'ราคาต่อหน้า: ' + pricePerPage + ' บาท | ' +
            'ราคารวมทั้งหมด: ' +
            totalCost.toLocaleString('th-TH') + ' บาท';
    });
}


// ==============================
// 4. ระบบสลับ Light Mode / Dark Mode
// ==============================
const themeToggle = document.getElementById('themeToggle');

if (themeToggle) {

    // อ่านธีมที่บันทึกไว้
    let savedTheme = 'light';

    try {
        savedTheme = localStorage.getItem('portfolio-theme') || 'light';
    } catch (error) {
        console.warn('ไม่สามารถอ่านค่าธีมได้');
    }

    // ฟังก์ชันเปลี่ยนธีม
    function applyTheme(theme) {

        document.documentElement.dataset.theme = theme;

        const isDark = theme === 'dark';

        themeToggle.textContent = isDark
            ? '☀️ Light Mode'
            : '🌙 Dark Mode';

        themeToggle.setAttribute(
            'aria-pressed',
            String(isDark)
        );
    }

    // ตั้งค่าธีมเริ่มต้น
    applyTheme(savedTheme);

    // เมื่อกดปุ่มเปลี่ยนธีม
    themeToggle.addEventListener('click', function () {

        const currentTheme =
            document.documentElement.dataset.theme || 'light';

        const newTheme =
            currentTheme === 'dark' ? 'light' : 'dark';

        applyTheme(newTheme);

        // บันทึกธีม
        try {
            localStorage.setItem('portfolio-theme', newTheme);
        } catch (error) {
            console.warn('ไม่สามารถบันทึกค่าธีมได้');
        }
    });
}


// ==============================
// 5. ระบบกรองผลงานตามหมวดหมู่
// ==============================
const filterButtons = document.querySelectorAll('.filter-btn');

const projectCards = document.querySelectorAll(
    '#projects .projects-grid .project-card'
);

if (filterButtons.length > 0 && projectCards.length > 0) {

    filterButtons.forEach(function (button) {

        button.addEventListener('click', function () {

            // อ่านหมวดหมู่ที่เลือก
            const selectedCategory = button.dataset.filter;

            // เปลี่ยนสถานะปุ่มที่เลือก
            filterButtons.forEach(function (btn) {
                btn.classList.remove('is-active');
            });

            button.classList.add('is-active');

            // กรองรายการผลงาน
            projectCards.forEach(function (card) {

                const cardCategory = card.dataset.category;

                const shouldShow =
                    selectedCategory === 'all' ||
                    cardCategory === selectedCategory;

                card.hidden = !shouldShow;
            });
        });
    });
}
