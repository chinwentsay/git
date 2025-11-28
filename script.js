document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.command-card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            // 點擊時切換一個 'active' class 來觸發動畫或樣式變更
            card.classList.toggle('active');
        });

        // 也可以增加滑鼠進入和離開的效果
        card.addEventListener('mouseenter', () => {
            console.log(`Mouse entered ${card.id}`);
        });

        card.addEventListener('mouseleave', () => {
            console.log(`Mouse left ${card.id}`);
        });
    });
});
