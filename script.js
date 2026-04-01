// ==========================================
// 故事文本與分支節點資料
// ==========================================
const storyData = {
    start: {
        title: "第一章：初次的相遇",
        text: "這是你在初光高中的第一天。你帶著忐忑不安的心情走到教室門口，卻發現裡面坐著一個很眼熟的男生。那是你國中時暗戀過、卻從來沒講過幾句話的學長。",
        choices: [
            { text: "鼓起勇氣，主動走過去打招呼。", target: "node2" },
            { text: "假裝沒看到，低著頭找個偏僻的位子坐下。", target: "node3" }
        ]
    },
    node2: {
        title: "第二章：他的微笑",
        text: "他看到你走近，驚訝地露出了溫柔的微笑：『原來你也轉來這裡了！好巧。』他拍了拍身邊乾淨的空位，似乎在期待什麼。",
        choices: [
            { text: "順勢坐到他旁邊的空位。", target: "node4" },
            { text: "簡單寒暄後，紅著臉跑到後排的空位。", target: "node5" }
        ]
    },
    node3: {
        title: "第二章：安靜的角落",
        text: "你挑了後排靠窗的位子，正準備趴下休息掩飾緊張時，他卻突然走到你桌前，輕輕敲了敲桌面，溫柔地看著你。",
        choices: [
            { text: "假裝在睡覺，不理會他。", target: "node6" },
            { text: "抬起頭，有些慌亂地問他：『怎麼了？』", target: "node5" }
        ]
    },
    node4: {
        title: "第三章：心跳的距離",
        text: "你坐下後，兩人靠得很近。他從書包裡拿出一盒你最喜歡的草莓牛奶遞給你：『好久不見，這個給你，當作重逢的禮物吧。』",
        choices: [
            { text: "開心地收下，並對著他露出燦爛的笑容。", target: "ending1" },
            { text: "覺得太快了，有些害羞地拒絕：『不用啦...』", target: "ending2" }
        ]
    },
    node5: {
        title: "第三章：放學後的邀約",
        text: "就這樣安靜地度過了一天。放學鐘聲響起，你在走廊上又遇到他，他看起來像是在特地等你。他走上前問你要不要一起走回家。",
        choices: [
            { text: "點點頭說：『好啊，剛好我們順路。』", target: "ending1" },
            { text: "搖搖頭：『抱歉，我今天有事要先走。』", target: "ending3" }
        ]
    },
    node6: {
        title: "第三章：錯過的交集",
        text: "他看你毫無反應，無奈地輕嘆了一口氣，拿出一張紙條放在你桌上就離開了。你悄悄打開紙條，上面寫著：『放學後，在天台等你。』",
        choices: [
            { text: "緊握紙條，準時赴約去天台找他。", target: "ending1" },
            { text: "把紙條夾進課本裡，假裝沒看到直接回家。", target: "ending3" }
        ]
    },
    // 以下為結局節點
    ending1: {
        title: "【結局一：青澀的戀曲】",
        text: "你們一起走在夕陽下的街道上，金黃色的陽光灑在你們身上。他輕輕牽起你的手，笑著說：『這次，我不會再讓你溜走了。』這是屬於你們，最浪漫的開局！",
        choices: [] // 沒有選項代表抵達結局
    },
    ending2: {
        title: "【結局二：友達以上】",
        text: "你們雖然保持著友好的距離，但那份在意彼此的心情卻每天都在增加。你們成了無話不談的好朋友，或許未來的某一天，這份關係會有新的突破吧！",
        choices: []
    },
    ending3: {
        title: "【結局三：遺憾的擦肩而過】",
        text: "那一天之後，你們就像兩條平行線，再也沒有太多交集。校園生活依舊繼續，但你的心裡總覺得空空落落的。有些緣分一旦錯過，就不會再重來。",
        choices: []
    }
};

// ==========================================
// 網頁互動邏輯區
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // 獲取 DOM 元素
    const homeScreen = document.getElementById('home-screen');
    const storyScreen = document.getElementById('story-screen');
    const endingScreen = document.getElementById('ending-screen');
    
    const startBtn = document.getElementById('start-btn');
    const restartBtn = document.getElementById('restart-btn');
    
    const storyTitle = document.getElementById('story-title');
    const storyText = document.getElementById('story-text');
    const choicesContainer = document.getElementById('choices-container');
    
    const endingTitle = document.getElementById('ending-title');
    const endingText = document.getElementById('ending-text');

    // 綁定按鈕事件
    startBtn.addEventListener('click', () => loadNode('start'));
    restartBtn.addEventListener('click', () => resetGame());

    // 載入特定的故事節點
    function loadNode(nodeId) {
        const nodeData = storyData[nodeId];
        
        // 判斷是否為結局節點 (沒有選項)
        if (nodeData.choices.length === 0) {
            showEnding(nodeData);
            return;
        }

        // 隱藏其他畫面，顯示故事畫面
        hideAllScreens();
        storyScreen.classList.add('active');

        // 更新故事內容
        storyTitle.textContent = nodeData.title;
        storyText.textContent = nodeData.text;

        // 清空並動態生成選項按鈕
        choicesContainer.innerHTML = '';
        nodeData.choices.forEach(choice => {
            const btn = document.createElement('button');
            btn.className = 'choice-btn';
            btn.textContent = choice.text;
            
            // 點擊選項後載入目標節點
            btn.addEventListener('click', () => {
                // 為了視覺連貫性，可以加上簡單的淡入淡出，這裡我們先直接切換
                loadNode(choice.target);
            });
            
            choicesContainer.appendChild(btn);
        });
    }

    // 顯示結局畫面
    function showEnding(endingData) {
        hideAllScreens();
        endingScreen.classList.add('active');
        
        endingTitle.textContent = endingData.title;
        endingText.textContent = endingData.text;
    }

    // 重置遊戲回到首頁
    function resetGame() {
        hideAllScreens();
        homeScreen.classList.add('active');
    }

    // 隱藏所有視圖的輔助函式
    function hideAllScreens() {
        homeScreen.classList.remove('active');
        storyScreen.classList.remove('active');
        endingScreen.classList.remove('active');
    }
});
