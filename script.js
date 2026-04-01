/**
 * 占卜結果資料庫
 * 集中管理所有占卜結果，方便後續修改主題
 * 包含：類型、短評、事業與學業、感情、財富、結語
 */
const fortunesData = [
    {
        type: "大吉",
        desc: "星辰為你指路，好運的能量正圍繞著你，今天無論做什麼都會異常順利。",
        work: "靈感湧現，提案容易獲得肯定。",
        study: "記憶力驚人，學習效率事半功倍。",
        love: "魅力四射，可能會有意想不到的浪漫邂逅。",
        money: "財星高照，有機會獲得小額偏財。",
        closing: "「大膽向前走吧，整個宇宙都在幫你！ ✨」"
    },
    {
        type: "中吉",
        desc: "運勢平穩向上，只要按部就班，就能收穫不錯的成果。",
        work: "與同事合作愉快，進度順利推進。",
        study: "溫故知新，扎實的基礎會帶來好成績。",
        love: "平淡是真，與伴侶或心儀對象有溫馨的互動。",
        money: "收支平衡，適合進行中長期的理財規劃。",
        closing: "「保持微笑，好運自然水到渠成。 🌟」"
    },
    {
        type: "小吉",
        desc: "生活中充滿微小但確切的幸福，細心體會就能發現美好。",
        work: "雖然有些忙碌，但在努力後都能順利解決。",
        study: "遇到難題能得到他人的幫助，豁然開朗。",
        love: "一個溫暖的眼神或訊息，就能讓你心情愉悅。",
        money: "可能會撿到零錢或獲得小小的折扣優惠。",
        closing: "「用心感受今天的每一個小確幸。 🍀」"
    },
    {
        type: "平吉",
        desc: "順風順水的一天，沒有大風大浪，正是積累能量的好時機。",
        work: "一步一腳印，常規任務能順利如期完成。",
        study: "思路清晰，按既定計畫學習效果極佳。",
        love: "關係穩定，適合安排輕鬆無壓力的約會。",
        money: "財務平穩，無額外不必要支出就是一種賺。",
        closing: "「平靜的心靈也是一種難得的幸福。 🕊️」"
    },
    {
        type: "半吉",
        desc: "運勢漸漸撥雲見日，現在的努力會在未來開花結果。",
        work: "遇到小挫折不要氣餒，轉機就在眼前。",
        study: "感覺遇到瓶頸，換個方式思考就會有突破。",
        love: "需要多點耐心，靜下心來傾聽對方的想法。",
        money: "暫時宜守不宜攻，謹慎消費避免衝動。",
        closing: "「堅持下去，黎明的曙光就在不遠處。 🌅」"
    },
    {
        type: "平",
        desc: "一切如常，不好也不壞。今天是調整步伐的好日子。",
        work: "以例行公事為主，適合整理桌面與思緒。",
        study: "進度不快，但踏出的每一步都很扎實。",
        love: "給彼此一點個人空間，也是一種溫柔的體貼。",
        money: "沒有特別的進帳，也沒有預期外的開銷。",
        closing: "「平靜的水面，才能倒映出未來的路。 ⚖️」"
    },
    {
        type: "隱吉",
        desc: "表面看來平淡，但其實有未知的驚喜正在醞釀中。",
        work: "看似吃力不討好的任務，其實是表現的好機會。",
        study: "無意間讀到的課外知識，日後會派上大用場。",
        love: "默默的關心與付出，對方其實都深刻看在眼裡。",
        money: "適合尋找新的開源機會，會有意外的小發現。",
        closing: "「相信直覺，驚奇的禮物就在轉角處。 🎁」"
    },
    {
        type: "轉機",
        desc: "迎來改變的時刻！嘗試打破舊有常規，好運就會降臨。",
        work: "大膽嘗試新的方法，會得到意想不到的好效果。",
        study: "換個環境學習或改變工具，能大幅提升專注力。",
        love: "主動出擊或是表達心意，打破目前的僵局。",
        money: "重新檢視財務狀況，找出忽視的漏財盲點。",
        closing: "「擁抱變化吧，你是自己命運的掌舵手。 🎡」"
    },
    {
        type: "星光",
        desc: "在黑暗中總有星光指引，就算遇到困難也會有貴人相助。",
        work: "遇到難題時，向資深前輩請教能獲得巨大啟發。",
        study: "參加讀書會或與同學共同討論，能迅速釐清盲點。",
        love: "朋友的助攻或介紹，能讓你們的關係更進一步。",
        money: "聽取專業人士的建議，避免進入投資盲區。",
        closing: "「你從不孤單，只要你願意開口求助。 🌌」"
    },
    {
        type: "靈感",
        desc: "今天是靈感爆發的一天，你的創意將帶來無限可能。",
        work: "大膽在會議中提出你的想法，會讓人眼睛一亮。",
        study: "能夠將不同領域的知識融會貫通，產生新見解。",
        love: "安排一場與眾不同的小旅行或約會，創造難忘回憶。",
        money: "你的某個獨特點子，或許能成為未來賺錢的契機。",
        closing: "「恣意展現你的獨特，世界都需要你的光芒。 💡」"
    }
];

// DOM 元素選取
const sections = {
    intro: document.getElementById('intro-section'),
    loading: document.getElementById('loading-section'),
    result: document.getElementById('result-section')
};

const btns = {
    draw: document.getElementById('draw-btn'),
    retry: document.getElementById('retry-btn')
};

const resultEls = {
    type: document.getElementById('fortune-type'),
    desc: document.getElementById('fortune-desc'),
    work: document.getElementById('aspect-work'),
    study: document.getElementById('aspect-study'),
    love: document.getElementById('aspect-love'),
    money: document.getElementById('aspect-money'),
    closing: document.getElementById('fortune-closing')
};

// 狀態切換函數
function switchSection(showSectionId) {
    // 隱藏所有板塊
    Object.values(sections).forEach(section => {
        section.classList.remove('active');
        section.classList.add('hidden');
    });

    // 顯示指定板塊
    setTimeout(() => {
        const target = sections[showSectionId.replace('-section', '')];
        if (target) {
            target.classList.remove('hidden');
            target.classList.add('active');
        }
    }, 400); // 等待淡出動畫完成
}

// 抽取運勢邏輯
function drawFortune() {
    // 切換到載入畫面
    switchSection('loading-section');

    // 模擬占卜等待時間 (2.5秒)
    setTimeout(() => {
        // 隨機選擇結果
        const randomIndex = Math.floor(Math.random() * fortunesData.length);
        const result = fortunesData[randomIndex];

        // 填入結果資料
        resultEls.type.textContent = result.type;
        resultEls.desc.textContent = result.desc;
        resultEls.work.innerHTML = `<strong>💼 事業：</strong>${result.work}`;
        resultEls.study.innerHTML = `<strong>📚 學業：</strong>${result.study}`;
        resultEls.love.innerHTML = `<strong>❤️ 感情：</strong>${result.love}`;
        resultEls.money.innerHTML = `<strong>💰 財富：</strong>${result.money}`;
        resultEls.closing.textContent = result.closing;

        // 特殊處理大吉的顏色特效
        if(result.type === "大吉") {
            resultEls.type.style.textShadow = "0 0 20px rgba(255, 215, 0, 0.8)";
        } else {
            resultEls.type.style.textShadow = "0 2px 10px rgba(255, 215, 0, 0.2)";
        }

        // 顯示結果畫面
        switchSection('result-section');
    }, 2500);
}

// 再次占卜邏輯
function resetFortune() {
    // 直接回到首頁
    switchSection('intro-section');
}

// 綁定事件監聽器
btns.draw.addEventListener('click', drawFortune);
btns.retry.addEventListener('click', resetFortune);

// 初始化，確保只有首頁顯示
document.addEventListener('DOMContentLoaded', () => {
    switchSection('intro-section');
});
