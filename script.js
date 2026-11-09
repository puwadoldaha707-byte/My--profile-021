const greetingBtn = document.getElementById('greetingBtn');
const message = document.getElementById('greetingMessage');
greetingBtn.addEventListener('click', function () {
    message.textContent = 'สวัสดีครับ ยินดีที่ได้รู้จักครับ';
});
