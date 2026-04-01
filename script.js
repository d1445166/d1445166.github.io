// ==========================================
// 占卜資料區 (集中管理，方便修改主題與內容)
// ==========================================
const fortunesData = [
    {
        name: "大吉 🌟",
        desc: "運勢如虹，勢不可擋！今天做什麼都超級順利！",
        work: "即將迎來突破，主管或客戶非常賞識你的才華。",
        study: "思緒清晰，過目不忘，考試能發揮超常實力。",
        love: "桃花盛開，有機會遇到令人心動的對象或感情升溫。",
        money: "偏財運極佳，或許會有一筆意外之財入帳。",
        closing: "好好把握今天的好運，大膽去挑戰自己的目標吧！✨"
    },
    {
        name: "中吉 ☀️",
        desc: "陽光明媚的一天，穩定的節奏為你帶來好心情。",
        work: "工作進展順利，與同事合作無間，效率極高。",
        study: "學習狀態良好，遇到不懂的難題也能迅速開竅。",
        love: "感情穩定溫馨，適合安排一場簡單浪漫的約會。",
        money: "收支平衡，有機會發現不錯的理財小道消息。",
        closing: "保持微笑，好運自然會一直跟著你哦！😊"
    },
    {
        name: "小吉 🌤️",
        desc: "微風輕拂的好日子，雖然沒有驚喜，卻有滿滿的小確幸。",
        work: "按部就班完成任務，下班後可以好好放鬆。",
        study: "適合溫故知新，把之前的筆記拿出來複習會有收穫。",
        love: "平淡見真情，一個溫暖的問候就能讓對方開心很久。",
        money: "花點小錢犒賞自己是可以的，記得要節制。",
        closing: "平凡也是一種幸福，享受當下的每一刻吧！☕"
    },
    {
        name: "平平 ☁️",
        desc: "平靜如水的一天，正是沉澱心靈的好時機。",
        work: "沒有大起大落，建議處理一些日常瑣碎的事務。",
        study: "需要一點專注力，別被外界的事物過度干擾。",
        love: "順其自然最好，不用刻意強求進展。",
        money: "守財為主，不宜進行高風險的投資行為。",
        closing: "沒有消息就是好消息，給自己的心放個假吧。🧘"
    },
    {
        name: "蓄力中 🌧️",
        desc: "遇到一點小雨沒關係，這是為了綻放更美的彩虹！",
        work: "可能會遇到一些小挑戰，但這正是展現能力的機會。",
        study: "遇到瓶頸千萬別氣餒，換個環境或方法會有奇效。",
        love: "容易有小摩擦，多站在對方立場想一想就能化解。",
        money: "可能會有一筆預期外的支出，請做好財務規劃。",
        closing: "雨後總會天晴，你要相信自己有克服困難的力量！💪"
    },
    {
        name: "貴人相助 🤝",
        desc: "出門遇貴人！今天無論遇到什麼問題都會有人伸出援手。",
        work: "遇到難題大方提問，前輩或同事會給你極大幫助。",
        study: "和同學組隊學習、討論，能讓你進步神速。",
        love: "可能透過朋友介紹認識不錯的新對象。",
        money: "聽取專業人士的建議，能幫你省下/賺到不少錢。",
        closing: "心存感恩，你身邊的人都是你最棒的支持者！🙏"
    },
    {
        name: "靈感爆發 💡",
        desc: "腦洞大開的一天！你的點子將會驚豔所有人。",
        work: "提出你的創意企劃吧，今天特別容易被採納。",
        study: "寫作或創作靈感源源不絕，適合進行藝術類活動。",
        love: "給伴侶一點意想不到的小驚喜，感情會迅速升溫。",
        money: "你的某個點子或許能轉化為很棒的被動收入。",
        closing: "相信你的直覺，盡情發揮你的創造力！🎨"
    },
    {
        name: "戀愛達人 💖",
        desc: "全宇宙都在為你的浪漫應援，今天是愛情的主場！",
        work: "人見人愛的氣場讓你洽談業務無往不利。",
        study: "在學習場合可能會遇到讓你非常在意的「那個人」。",
        love: "單身者告白成功率高；有伴者甜蜜指數破表！",
        money: "可能會為了心愛的人花錢，但你會覺得非常值得。",
        closing: "散發你的魅力，大膽去愛吧！😍"
    },
    {
        name: "財神爺眷顧 💰",
        desc: "金光閃閃的一天！財運好到讓人嫉妒。",
        work: "有機會談成大案子或是獲得實質的獎勵與加薪。",
        study: "可能會意外獲得獎學金或是長輩給的零用錢。",
        love: "適合送一份有質感的小禮物給對方，物超所值。",
        money: "正財偏財都很旺，說不定對一下發票會有驚喜！",
        closing: "財運來了擋不住，好好規劃你的財富哦！🤑"
    },
    {
        name: "潛能覺醒 🔥",
        desc: "戰鬥力滿點！你今天擁有突破極限的能量。",
        work: "效率驚人，原本拖延的事情今天都能一口氣解決。",
        study: "專注度達到最高境界，超難的題目也難不倒你。",
        love: "充滿自信的你特別有吸引力，讓人挪不開視線。",
        money: "果斷的決策力能幫你抓住稍縱即逝的賺錢良機。",
        closing: "別限制自己的可能性，你是最棒的！🚀"
    }
];

// ==========================================
// 網頁互動邏輯區
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const homeSection = document.getElementById('home-section');
    const loadingSection = document.getElementById('loading-section');
    const resultSection = document.getElementById('result-section');

    const drawBtn = document.getElementById('draw-btn');
    const retryBtn = document.getElementById('retry-btn');

    // 結果欄位元素
    const fortuneName = document.getElementById('fortune-name');
    const fortuneDesc = document.getElementById('fortune-desc');
    const fortuneWork = document.getElementById('fortune-work');
    const fortuneStudy = document.getElementById('fortune-study');
    const fortuneLove = document.getElementById('fortune-love');
    const fortuneMoney = document.getElementById('fortune-money');
    const fortuneClosing = document.getElementById('fortune-closing');

    // 綁定按鈕事件
    drawBtn.addEventListener('click', drawFortune);
    retryBtn.addEventListener('click', resetFortune);

    function drawFortune() {
        // 隱藏首頁，顯示載入中
        homeSection.classList.remove('active');
        loadingSection.classList.add('active');

        // 隨機抽取結果
        const randomIndex = Math.floor(Math.random() * fortunesData.length);
        const result = fortunesData[randomIndex];

        // 模擬載入時間 (1.5秒)，增加神祕感
        setTimeout(() => {
            // 隱藏載入中，顯示結果
            loadingSection.classList.remove('active');
            showResult(result);
        }, 1500);
    }

    function showResult(result) {
        // 填入資料
        fortuneName.textContent = result.name;
        fortuneDesc.textContent = result.desc;
        fortuneWork.textContent = result.work;
        fortuneStudy.textContent = result.study;
        fortuneLove.textContent = result.love;
        fortuneMoney.textContent = result.money;
        fortuneClosing.textContent = result.closing;

        // 顯示結果區塊
        resultSection.classList.add('active');
    }

    function resetFortune() {
        // 隱藏結果區塊，顯示首頁
        resultSection.classList.remove('active');
        homeSection.classList.add('active');
    }
});
