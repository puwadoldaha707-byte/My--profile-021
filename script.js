
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


// ==============================
// 4. ระบบกรองผลงานตามหมวดหมู่
// ==============================
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card[data-category]');
const projectsEmpty = document.getElementById('projectsEmpty');

if (filterButtons.length && projectCards.length) {
    filterButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const selectedCategory = button.dataset.filter;
            let visibleCount = 0;

            filterButtons.forEach(function (filterButton) {
                const isActive = filterButton === button;
                filterButton.classList.toggle('is-active', isActive);
                filterButton.setAttribute('aria-pressed', String(isActive));
            });

            projectCards.forEach(function (card) {
                const shouldShow =
                    selectedCategory === 'all' ||
                    card.dataset.category === selectedCategory;

                card.hidden = !shouldShow;

                if (shouldShow) {
                    visibleCount += 1;
                }
            });

            if (projectsEmpty) {
                projectsEmpty.hidden = visibleCount !== 0;
            }
        });
    });
}


// ==============================
// 5. ระบบสลับ Light / Dark Mode
// ==============================
const themeToggle = document.getElementById('themeToggle');
const savedThemeKey = 'portfolio-theme';

function applyTheme(theme) {
    const isDark = theme === 'dark';

    document.documentElement.dataset.theme = isDark ? 'dark' : 'light';

    if (themeToggle) {
        themeToggle.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
        themeToggle.setAttribute(
            'aria-label',
            isDark ? 'เปลี่ยนเป็นโหมดสว่าง' : 'เปลี่ยนเป็นโหมดมืด'
        );
        themeToggle.setAttribute('aria-pressed', String(isDark));
    }
}

let initialTheme = 'light';

try {
    const savedTheme = localStorage.getItem(savedThemeKey);
    if (savedTheme === 'dark' || savedTheme === 'light') {
        initialTheme = savedTheme;
    }
} catch (error) {
    // หากเบราว์เซอร์ไม่อนุญาต localStorage ให้ใช้ Light Mode ตามปกติ
}

applyTheme(initialTheme);

if (themeToggle) {
    themeToggle.addEventListener('click', function () {
        const nextTheme =
            document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';

        applyTheme(nextTheme);

        try {
            localStorage.setItem(savedThemeKey, nextTheme);
        } catch (error) {
            // ยังสลับธีมได้ แม้จะบันทึกค่าลง localStorage ไม่ได้
        }
    });
}
