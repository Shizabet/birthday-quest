
 // ВОПРОСЫ КВЕСТА
        const questions = [
          /*  {
                type: "choice",
                text: "СБОР ЛОГОВ: Нужны данные места обнаружения вируса. Выбери правильный адрес возраждения вируса",
                options: ["Караваевская 28к1", "Заневский проспект 42", "пл. Стачек 5", "Парголовсккая 32"],
                correct: "пл. Стачек 5",
                errorMeme: "❌ НЕВЕРНО! Ты точно помнишь?",
                successMsg: "✅ ВЕРНО! Общага на стачек рулит!"
            },
*/

{
    type: "ai_vision",
    text: "📸 AI_SCANNER: Нужен телефон, чтобы перенести вирус",
    hint: "Наведи камеру на телефон, на который отправится вирус",
    errorMeme: "❌ ТЕЛЕФОН НЕ РАСПОЗНАН! Попробуй ещё раз!",
    successMsg: "✅ ТЕЛЕФОН РАСПОЗНАН! ДОСТУП РАЗРЕШЁН!"
}
/*
            {
                type: "qr",
                text: "🔓 QR_HACK_SCANNER: Отсканируй QR-код и введи расшифрованное сообщение",
                mediaUrl: "https://quickchart.io/qr?text=PISKA_POPKA&size=300&dark=ff3366&light=000000&margin=2",
                mediaCaption: "💀 QR-КОД СОДЕРЖИТ СЕКРЕТНЫЙ КЛЮЧ 💀",
                expectedInput: "PISKA_POPKA",
                hint: "Отсканируй QR-код и введи текст, который увидишь",
                errorMeme: "❌ QR-КОД НЕ РАСПОЗНАН! ДОСТУП ЗАПРЕЩЕН!",
                successMsg: "✅ QR-КОД УСПЕШНО РАСШИФРОВАН! ДОСТУП РАЗРЕШЕН!"
            },

            {
                type: "audio",
                text: "🎵 MUSIC_QUIZ: Прослушай трек и напиши его название",
                audioUrl: "music.mp3",
                audioCaption: "🎧 УГАДАЙ МЕЛОДИЮ 🎧\n[ПОДСКАЗКА: это песня про день рождения]",
                expectedInput: "С днем рождения",
                hint: "Эту песню поют на всех днях рождения",
                errorMeme: "❌ НЕВЕРНО! Попробуй прослушать еще раз",
                successMsg: "✅ ВЕРНО! Это песня 'С днем рождения'!"
            },
            
            {
                type: "qr",
                text: "🔍 QR_CITY: Отсканируй QR-код с координатами и напиши название города",
                mediaUrl: "https://quickchart.io/qr?text=48.480223,135.071915&size=300&dark=ff3366&light=000000&margin=2",
                mediaCaption: "🗺️ QR-КОД СОДЕРЖИТ КООРДИНАТЫ ГОРОДА",
                expectedInput: "Хабаровск",
                hint: "Удачи в поисках",
                errorMeme: "❌ НЕВЕРНО! Проверь координаты и найди город на карте",
                successMsg: "✅ ВЕРНО! Это Хабаровск!"
            }
            /*,

            {
                type: "media",
                mediaType: "image",
                mediaUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/友-order.gif/250px-友-order.gif",
                mediaCaption: "💀 ПЕРЕХВАТЧЕН ИЕРОГЛИФ 💀",
                text: "🔓 ЧТО ОЗНАЧАЕТ ЭТОТ ИЕРОГЛИФ?",
                options: ["Друг", "Любовь", "Семья", "Мир"],
                correct: "Друг",
                errorMeme: "❌ НЕВЕРНО! 朋友 — это 'ДРУГ'",
                successMsg: "✅ ВЕРНО! 朋友 = ДРУГ!"
            }
                
            */

            

            /*
            {
                type: "sql",
                text: "SQL_INJECTION: База данных заблокирована. Необходим вывод данных из базы пользователя",
                sqlTemplate: "SELECT * FROM users_telegram <br>WHERE username = 'iva6ka_who'<br>AND about = '",
                sqlSuffix: "'",
                expectedInput: "погугли",
                hint: "Нужно значение из атрибута 'о себе'",
                errorMeme: "💾 SQL ERROR! База не поддалась...",
                successMsg: "💾 SQL INJECTION УСПЕШНА! Доступ получен!"
            },
            
            {
                type: "hash",
                text: "HASH_CRACKING: Перехвачен хеш пароля. Расшифруй ключ:",
                hashValue: "7e1e9cdc9aa24344750971015a65763a",
                hint: "Это MD5, слово из 6 букв",
                expected: "volkov",
                errorMeme: "🔐 ХЕШ НЕ РАСШИФРОВАН!",
                successMsg: "🔐 ХЕШ ВЗЛОМАН!"
            },

            {
                type: "choice",
                text: "АНАЛИЗ СБОЕВ: Что стало причиной легендарного бага в продакшене?",
                options: ["Забыли WHERE", "CORS", "git push --force", "Docker"],
                correct: "git push --force",
                errorMeme: "💀 ОШИБКА! git push --force — это больно",
                successMsg: "✅ ДА! Мы это никогда не забудем"
            },

            {
                type: "binary",
                text: "BINARY_DECODER: Расшифруй бинарный код:",
                binaryValue: "01110111 01100001 01101110 01111001 01100001",
                hint: "Бинарный код в ASCII. Это имя именинника",
                expected: "wanya",
                errorMeme: "💻 НЕВЕРНО! Попробуй перевести в текст (имя именинника)",
                successMsg: "💻 ДЕКОДИРОВАНО! Это имя именинника!"
            },

            {
                type: "input",
                text: "РАСШИФРОВКА МЕМА: Наша общая фраза, когда всё падает?",
                expectedKeywords: ["локально", "работает локально", "на моей машине"],
                errorMeme: "🤡 НЕ УГАДАЛ! Это классика айтишников",
                successMsg: "✅ ПОЗОРНО, НО ВЕРНО! 'На моей машине работает'"
            },

            {
                type: "bruteforce",
                text: "BRUTEFORCE_ATTACK: Узнай PIN-код от сервера. Подсказки:",
                clues: [
                    "Первая цифра — последняя цифра в номере @Lizz_SHE",
                    "Вторая цифра — третья цифра в номере @ezidka",
                    "Третья цифра — предпоследняя цифра в номере @vadimka_O9",
                    "Последняя цифра — пятая цифра в номере @evil_symphony)"
                ],
                expected: "5851",
                errorMeme: "💢 НЕВЕРНЫЙ PIN! Доступ закрыт на 30 секунд",
                successMsg: "🔓 PIN ПРИНЯТ! ДОСТУП РАЗРЕШЁН!"
            },

            {
                type: "media",
                mediaType: "video",
                mediaUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
                mediaCaption: "Наше бессмертное видео 🎥",
                text: "ЧТО МЫ КРИЧАЛИ В ЭТОМ ВИДЕО?",
                options: ["Победа!", "Деплой!", "Баги вон!", "Пицца!"],
                correct: "Деплой!",
                errorMeme: "🎬 ПЕРЕСМОТРИ ВИДЕО!",
                successMsg: "🎬 ТОЧНО! ЭТО БЫЛ ЛЕГЕНДАРНЫЙ ДЕПЛОЙ!"
            },
            
            {
                type: "debug",
                text: "DEBUG_ALERT: Найди и исправь ошибку в коде, чтобы функция вернула сумму:",
                buggyCode: `function sum(a, b) {
    return a + b;
    console.log("Done");
}`,
                expectedPatterns: ["console.log", "return"],
                hint: "Код после return никогда не выполнится. Нужно поменять порядок строк или убрать console.log",
                errorMeme: "🐛 БАГ ОСТАЛСЯ! Код не скомпилится",
                successMsg: "🐛 БАГ ИСПРАВЛЕН! Код работает!"
            },
            {
                type: "choice",
                text: "Что мы коллективно ненавидим на работе?",
                options: ["Windows", "Jira", "Teams", "Excel"],
                correct: "Jira",
                errorMeme: "❌ ДЖИРА ПЛАЧЕТ. Это Jira!",
                successMsg: "✅ ДА, ЭТО АД. Jira — наша боль"
            },
            {
                type: "regex",
                text: "REGEX_CHALLENGE: Напиши регулярное выражение, которое найдёт секретную строку 'gift_2024':",
                sampleText: "secret_key=abc123 gift_2024 hidden_data=xyz",
                expectedKeywords: ["gift_2024", "gift", "2024"],
                hint: "Просто найди слово gift_2024",
                errorMeme: "🔍 REGEX НЕ СРАБОТАЛ! Попробуй /gift_2024/",
                successMsg: "🔍 REGEX НАШЁЛ! Секретная строка обнаружена!"
            },
            {
                type: "choice",
                text: "Мем нашей реакции, когда прод упал в пятницу?",
                options: ["This is fine", "Компьютер говорит нет", "Я в отпуске", "Перезагрузка"],
                correct: "This is fine",
                errorMeme: "🔥 НЕТ! Собака в огне — наш мем",
                successMsg: "🐶 СОБАКА В ОГНЕ! Это точно мы"
            },
            {
                type: "choice",
                text: "DNS_CONFIG: Какой тип записи нужно добавить, чтобы указать IP адрес сервера с подарком?",
                options: ["A запись", "CNAME запись", "MX запись", "TXT запись"],
                correct: "A запись",
                errorMeme: "🌐 НЕВЕРНО! A запись указывает на IP",
                successMsg: "🌐 DNS НАСТРОЕН! Домен ведёт к подарку!"
            },
            {
                type: "command",
                text: "DATA_RECOVERY: Файл с подсказкой удалён. Введи команду git для восстановления последнего удалённого файла:",
                expectedKeywords: ["checkout", "restore", "reset"],
                hint: "git команда для отмены последнего изменения (git checkout или git restore)",
                errorMeme: "❌ ФАЙЛ НЕ ВОССТАНОВЛЕН! Попробуй git checkout или git restore",
                successMsg: "📁 ФАЙЛ ВОССТАНОВЛЕН! Подсказка получена!"
            }
                */
        ];
        
        let currentIndex = 0;
        let quizContainer = document.getElementById('quizContainer');
        let appDiv = null;
        let birthdayPage = document.getElementById('birthdayPage');
        let mediaGlitchInterval = null;
        let matrixInterval = null;
        let glitchInterval = null;
        let glitchScreenInterval = null;
        let statusInterval = null;
        let timerSeconds = 300;
        
        let captchaAttempts = 0;
        const MAX_ATTEMPTS = 3;

        let globalCelebrationInterval = null;
        
        function generateCaptchaQuestion() {
            const questions = [
                { text: "Твой год рождения?", answer: "2003" }
            ];
            return questions[Math.floor(Math.random() * questions.length)];
        }
        
        let currentCaptcha = generateCaptchaQuestion();
        
        function startHackBackgroundAnimations() {
            const matrixBg = document.createElement('div');
            matrixBg.className = 'matrix-bg';
            document.body.appendChild(matrixBg);
            
            function addMatrixChar() {
                const char = document.createElement('div');
                char.className = 'matrix-char';
                const chars = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','#','$','%','&','*','+','@','█','▓','░'];
                let text = '';
                for(let i = 0; i < 15; i++) text += chars[Math.floor(Math.random() * chars.length)];
                char.textContent = text;
                char.style.left = Math.random() * 100 + '%';
                char.style.animationDuration = (Math.random() * 5 + 3) + 's';
                char.style.fontSize = (Math.random() * 12 + 8) + 'px';
                char.style.opacity = Math.random() * 0.5 + 0.3;
                matrixBg.appendChild(char);
                setTimeout(() => char.remove(), 8000);
            }
            
            matrixInterval = setInterval(() => {
                if (quizContainer.style.display !== 'none') {
                    for(let i = 0; i < 3; i++) addMatrixChar();
                }
            }, 500);
            
            const glitchOverlay = document.createElement('div');
            glitchOverlay.className = 'glitch-overlay';
            document.body.appendChild(glitchOverlay);
            
            glitchInterval = setInterval(() => {
                if (quizContainer.style.display !== 'none' && Math.random() > 0.7) {
                    glitchOverlay.style.opacity = '0.3';
                    setTimeout(() => { glitchOverlay.style.opacity = '0'; }, 100);
                }
            }, 3000);
            
            const statusBar = document.createElement('div');
            statusBar.className = 'hack-status-bar';
            statusBar.id = 'hackStatusBar';
            statusBar.innerHTML = `
                <span class="hack-status-text">[ HACK_STATUS: INITIALIZING ]</span>
                <span class="hack-progress">PROGRESS: 0%</span>
                <span class="hack-timer">⏱️ TIME: 05:00</span>
            `;
            document.body.appendChild(statusBar);
            
            const statusTexts = ['PISKA_POPKA', 'GAV_GAV_GAV', 'SOSI_BIBU', 'HACK_PORN', 'MAKARA_STYLE', 'TRASH_SEX', 'IT_GU(A)Y', 'ASS_PENIS'];
            let statusIndex = 0;
            
            statusInterval = setInterval(() => {
                if (quizContainer.style.display !== 'none') {
                    statusIndex = (statusIndex + 1) % statusTexts.length;
                    const statusSpan = document.querySelector('.hack-status-text');
                    if (statusSpan) statusSpan.innerHTML = `[ HACK_STATUS: ${statusTexts[statusIndex]} ]`;
                    
                    const progressPercent = (currentIndex / questions.length) * 50;
                    const progressSpan = document.querySelector('.hack-progress');
                    if (progressSpan) progressSpan.innerHTML = `PROGRESS: ${Math.floor(progressPercent)}%`;
                    
                    const timerSpan = document.querySelector('.hack-timer');
                    if (timerSpan) {
                        const minutes = Math.floor(timerSeconds / 60);
                        const seconds = timerSeconds % 60;
                        timerSpan.innerHTML = `⏱️ TIME: ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
                        if (timerSeconds > 0) timerSeconds--;
                    }
                }
            }, 1000);
            
            startGlitchScreenEffect();
            window.hackElements = { matrixBg, glitchOverlay, statusBar };
        }
        
        function stopHackBackgroundAnimations() {
            stopHackerBackground();
            if (matrixInterval) clearInterval(matrixInterval);
            if (glitchInterval) clearInterval(glitchInterval);
            if (statusInterval) clearInterval(statusInterval);
            stopGlitchScreenEffect();
            if (window.hackElements) {
                if (window.hackElements.matrixBg) window.hackElements.matrixBg.remove();
                if (window.hackElements.glitchOverlay) window.hackElements.glitchOverlay.remove();
                if (window.hackElements.statusBar) window.hackElements.statusBar.remove();
            }
        }
        
        function startGlitchScreenEffect() {
            const glitchScreen = document.createElement('div');
            glitchScreen.className = 'glitch-screen';
            glitchScreen.id = 'glitchScreen';
            
            const staticNoise = document.createElement('div');
            staticNoise.className = 'static-noise';
            glitchScreen.appendChild(staticNoise);
            document.body.appendChild(glitchScreen);
            
            glitchScreenInterval = setInterval(() => {
                if (quizContainer.style.display !== 'none') {
                    if (Math.random() > 0.85) {
                        staticNoise.style.opacity = (0.3 + Math.random() * 0.4).toString();
                        setTimeout(() => { staticNoise.style.opacity = '0.3'; }, 100);
                    }
                }
            }, 500);
        }

        // ХАКЕРСКИЙ ДИНАМИЧЕСКИЙ ФОН
let hackerOverlay = null;
let hackerIntervals = [];

function startHackerBackground() {
    // Создаем оверлей для хакерских элементов
    if (hackerOverlay) hackerOverlay.remove();
    
    hackerOverlay = document.createElement('div');
    hackerOverlay.className = 'hacker-overlay';
    document.body.appendChild(hackerOverlay);
    
    // 1. Сканирующие линии
    function addScanLine() {
        const line = document.createElement('div');
        line.className = 'scan-line';
        line.style.animationDuration = (Math.random() * 6 + 4) + 's';
        line.style.animationDelay = (Math.random() * 8) + 's';
        hackerOverlay.appendChild(line);
        setTimeout(() => line.remove(), 10000);
    }
    
    const scanInterval = setInterval(() => {
        if (quizContainer.style.display !== 'none') {
            addScanLine();
        }
    }, 2000);
    hackerIntervals.push(scanInterval);
    
    // 2. Текстовые строки взлома (IP, порты, пакеты)
    const hackTexts = [
        '[SYSTEM] SCANNING IP: 192.168.1.' + Math.floor(Math.random() * 255),
        '[NETWORK] PACKET LOSS: ' + Math.floor(Math.random() * 30) + '%',
        '[FIREWALL] BYPASS ATTEMPT #' + Math.floor(Math.random() * 999),
        '[PROXY] ROUTING THROUGH ' + Math.floor(Math.random() * 9999) + ' nodes',
        '[DECRYPT] AES-256 CRACKING... ' + Math.floor(Math.random() * 100) + '%',
        '[PORT] SCANNING PORT ' + (Math.floor(Math.random() * 65535)),
        '[SSL] CERTIFICATE SPOOFING...',
        '[DNS] CACHE POISONING ATTACK',
        '[SQL] INJECTION PREPARED',
        '[XSS] PAYLOAD GENERATED',
        '[ROOT] ACCESS GRANTED? ' + (Math.random() > 0.7 ? 'YES' : 'NO'),
        '[KERNEL] EXPLOIT v' + (Math.random() * 10).toFixed(1),
        '[MEMORY] DUMPING 0x' + Math.floor(Math.random() * 65535).toString(16),
        '[CRYPTO] MINING BLOCK #' + Math.floor(Math.random() * 999999),
        '[BACKDOOR] DEPLOYING...',
        '[TOR] CONNECTING TO ONION ROUTER',
        '[VPN] TUNNEL ESTABLISHED',
        '[WIFI] DEAUTH PACKETS SENT',
        '[BLUETOOTH] HID ATTACK INITIATED',
        '[USB] RUBBER DUCKY DETECTED'
    ];
    
    function addHackLine() {
        const line = document.createElement('div');
        line.className = 'hack-line';
        line.textContent = hackTexts[Math.floor(Math.random() * hackTexts.length)];
        line.style.top = (Math.random() * 90 + 5) + '%';
        line.style.fontSize = (Math.random() * 5 + 9) + 'px';
        line.style.animationDuration = (Math.random() * 8 + 5) + 's';
        line.style.animationDelay = (Math.random() * 2) + 's';
        hackerOverlay.appendChild(line);
        setTimeout(() => line.remove(), 10000);
    }
    
    const hackLineInterval = setInterval(() => {
        if (quizContainer.style.display !== 'none') {
            for(let i = 0; i < 2; i++) addHackLine();
        }
    }, 800);
    hackerIntervals.push(hackLineInterval);
    
    // 3. Статичные терминальные строки (по краям)
    const terminalCommands = [
        '> ping 8.8.8.8 -t',
        '> nmap -sS -p- target.com',
        '> hydra -l admin -P wordlist.txt ssh://192.168.1.1',
        '> sqlmap -u http://target.com?id=1 --dbs',
        '> john --format=raw-md5 hash.txt',
        '> aircrack-ng -w wordlist.cap',
        '> metasploit: use exploit/multi/handler',
        '> wireshark: capturing eth0',
        '> hashcat -m 0 -a 3 hash.txt ?a?a?a?a?a',
        '> burpsuite: intercepting requests',
        '> whois target.com',
        '> dig axfr @ns1.target.com',
        '> wget -r --level=5 http://target.com',
        '> git clone https://github.com/hacktools/exploit',
        '> chmod +x exploit.py && python3 exploit.py',
        '> nc -lvp 4444 -e /bin/bash',
        '> ssh -i key.pem root@10.0.0.1',
        '> curl -X POST http://target.com/api --data "{\\"cmd\\":\\"id\\"}"'
    ];
    
    function addTerminalLine() {
        const line = document.createElement('div');
        line.className = 'terminal-line';
        line.textContent = terminalCommands[Math.floor(Math.random() * terminalCommands.length)];
        line.style.left = (Math.random() * 70 + 5) + '%';
        line.style.bottom = (Math.random() * 80 + 10) + 'px';
        line.style.fontSize = (Math.random() * 4 + 8) + 'px';
        line.style.opacity = Math.random() * 0.5 + 0.2;
        hackerOverlay.appendChild(line);
        setTimeout(() => line.remove(), 15000);
    }
    
    const terminalInterval = setInterval(() => {
        if (quizContainer.style.display !== 'none') {
            addTerminalLine();
        }
    }, 3000);
    hackerIntervals.push(terminalInterval);
    
    // 4. Сканирование портов (летающие цифры)
    function addPortScan() {
        const port = document.createElement('div');
        port.className = 'port-scan';
        port.textContent = `PORT ${Math.floor(Math.random() * 65535)} [${Math.random() > 0.8 ? 'OPEN' : 'FILTERED'}]`;
        port.style.left = (Math.random() * 90 + 5) + '%';
        port.style.top = (Math.random() * 90 + 5) + '%';
        port.style.fontSize = (Math.random() * 4 + 9) + 'px';
        hackerOverlay.appendChild(port);
        setTimeout(() => port.remove(), 2000);
    }
    
    const portInterval = setInterval(() => {
        if (quizContainer.style.display !== 'none' && Math.random() > 0.6) {
            addPortScan();
        }
    }, 1500);
    hackerIntervals.push(portInterval);
    
    // 5. Анимированные квадраты (шифрование)
    function addEncryptBox() {
        const box = document.createElement('div');
        box.className = 'encrypt-box';
        const size = Math.random() * 50 + 20;
        box.style.width = size + 'px';
        box.style.height = size + 'px';
        box.style.left = (Math.random() * 90 + 5) + '%';
        box.style.top = (Math.random() * 90 + 5) + '%';
        box.style.animationDuration = (Math.random() * 2 + 1) + 's';
        hackerOverlay.appendChild(box);
        setTimeout(() => box.remove(), 3000);
    }
    
    const encryptInterval = setInterval(() => {
        if (quizContainer.style.display !== 'none' && Math.random() > 0.85) {
            addEncryptBox();
        }
    }, 2000);
    hackerIntervals.push(encryptInterval);
    
    // 6. ASCII арт (редко)
    const asciiArts = [
        `┌─┐┌─┐┌┬┐┌─┐┌┬┐
├─┘├┤  │ ├─┤ │ 
┴  └─┘ ┴ ┴ ┴ ┴`,
        `  _____
 / ____|
| (___   ___  ___
 \\___ \\ / _ \\/ __|
 ____) | (_) \\__ \\
_____/ \\___/|___/`,
        `┌┐ ┌─┐┬ ┬┌┐┌┌─┐
├┴┐├┤ └┬┘││││ │
└─┘└─┘ ┴ ┘└┘└─┘`
    ];
    
    function addAsciiArt() {
        const art = document.createElement('div');
        art.className = 'ascii-art';
        art.textContent = asciiArts[Math.floor(Math.random() * asciiArts.length)];
        art.style.left = (Math.random() * 80 + 10) + '%';
        art.style.top = (Math.random() * 80 + 10) + '%';
        art.style.fontSize = (Math.random() * 4 + 7) + 'px';
        hackerOverlay.appendChild(art);
        setTimeout(() => art.remove(), 5000);
    }
    
    const asciiInterval = setInterval(() => {
        if (quizContainer.style.display !== 'none' && Math.random() > 0.92) {
            addAsciiArt();
        }
    }, 4000);
    hackerIntervals.push(asciiInterval);
    
    // Сохраняем интервалы для очистки
    window.hackerIntervals = hackerIntervals;
}

function stopHackerBackground() {
    if (window.hackerIntervals) {
        window.hackerIntervals.forEach(interval => clearInterval(interval));
        window.hackerIntervals = [];
    }
    if (hackerOverlay) {
        hackerOverlay.remove();
        hackerOverlay = null;
    }
}
        
        function stopGlitchScreenEffect() {
            if (glitchScreenInterval) clearInterval(glitchScreenInterval);
            const glitchScreen = document.getElementById('glitchScreen');
            if (glitchScreen) glitchScreen.remove();
        }
        
        async function showQuestInitialization() {
            return new Promise((resolve) => {
                const initOverlay = document.createElement('div');
                initOverlay.className = 'quest-init-overlay';
                
                const matrixDiv = document.createElement('div');
                matrixDiv.className = 'init-matrix';
                
                function addInitMatrixLine() {
                    const line = document.createElement('div');
                    line.className = 'init-matrix-line';
                    const texts = ['HACK_INITIALIZED', 'SYSTEM_BREACH', 'ACCESS_GRANTED', 'BYPASS_FIREWALL', 'DECRYPT_DATA', 'EXECUTE_CODE', 'MEMORY_DUMP', 'ROOT_ACCESS'];
                    line.textContent = texts[Math.floor(Math.random() * texts.length)];
                    line.style.left = Math.random() * 100 + '%';
                    line.style.animationDuration = (Math.random() * 4 + 2) + 's';
                    line.style.fontSize = (Math.random() * 16 + 10) + 'px';
                    matrixDiv.appendChild(line);
                    setTimeout(() => line.remove(), 5000);
                }
                
                const matrixInterval_init = setInterval(() => {
                    if (initOverlay && document.body.contains(initOverlay)) {
                        for(let i = 0; i < 3; i++) addInitMatrixLine();
                    }
                }, 200);
                
                const terminal = document.createElement('div');
                terminal.className = 'init-terminal';
                terminal.innerHTML = `
                    <div class="init-title">⚠️QUEST_INITIALIZATION⚠️</div>
                    <div class="init-progress-container"><div class="init-progress-fill" id="initProgressFill"></div></div>
                    <div class="init-status" id="initStatus">[ ВЫПОЛНЯЕТСЯ ВХОД ]</div>
                    <div class="init-code" id="initCode">> ЗАГРУЗКА ДАННЫХ...<br>> ПРОВЕРКА ПОДКЛЮЧЕНИЯ...</div>
                `;
                
                initOverlay.appendChild(matrixDiv);
                initOverlay.appendChild(terminal);
                document.body.appendChild(initOverlay);
                
                const progressFill = document.getElementById('initProgressFill');
                const statusElement = document.getElementById('initStatus');
                const codeElement = document.getElementById('initCode');
                
                const statusMessages = ['[ ИНИЦИАЛИЗАЯ ДАННЫХ ]', '[ ЗАГРУЗКА МОДУЛЯ ]', '[ АВТОРИЗАЦИЯ ]', '[ БАЗА ВЗЛОМАНА ]', '[ АКТИВАЦИЯ СИСТЕМЫ ]', '[ ПОДГОТОВКА К КВЕСТУ ]', '[ ПОДКЛЮЧЕНИЕ К СЕРВЕРУ ]', '[ РАСШИФРОВКА IP-АДРЕСА ]', '[ ЗАГРУЗКА ЗАВЕРШЕНА ]'];
                const codeMessages = ['> ИНИЦИАЛИЗАЯ... [OK]', '> ЗАГРУЗКА МОДУЛЯ... [OK]', '> АВТОРИЗАЦИЯ... [OK]', '> БАЗА ВЗЛОМАНА... [OK]', '> АКТИВАЦИЯ... [OK]', '> ПОДГОТОВКА... [OK]', '> ПОДКЛЮЧЕНИЕ... [OK]', '> РАСШИФРОВКА IP-АДРЕСА... [OK]', '> ЗАГРУЗКА ЗАВЕРШЕНА'];
                
                let progress = 0;
                const progressInterval = setInterval(() => {
                    progress += Math.random() * 15 + 5;
                    if (progress >= 100) {
                        progress = 100;
                        clearInterval(progressInterval);
                        clearInterval(matrixInterval_init);
                        setTimeout(() => {
                            initOverlay.style.opacity = '0';
                            setTimeout(() => { initOverlay.remove(); resolve(); }, 150);
                        }, 800);
                    }
                    if (progressFill) progressFill.style.width = Math.min(progress, 100) + '%';
                    const messageIndex = Math.min(Math.floor(progress / 16.6), statusMessages.length - 1);
                    if (statusElement) statusElement.textContent = statusMessages[messageIndex];
                    if (codeElement) codeElement.innerHTML = codeMessages.slice(0, messageIndex + 1).join('<br>');
                }, 300);
            });
        }
        
        async function typeText(element, text, speed = 25) {
            element.innerHTML = '';
            for (let i = 0; i < text.length; i++) {
                element.innerHTML += text[i];
                await new Promise(resolve => setTimeout(resolve, speed));
            }
        }
        
        function handleSQLAnswer(inputValue, q) {
            if (inputValue === q.expectedInput) {
                showMessage(q.successMsg);
                currentIndex++;
                renderCurrent();
            } else {
                showFullscreenError(q.errorMeme);
            }
        }
        
        function handleHashAnswer(inputValue, q) {
            if (inputValue.toLowerCase() === q.expected) {
                showMessage(q.successMsg);
                currentIndex++;
                renderCurrent();
            } else {
                showFullscreenError(q.errorMeme);
            }
        }
        
        function handleBinaryAnswer(inputValue, q) {
            if (inputValue.toLowerCase() === q.expected) {
                showMessage(q.successMsg);
                currentIndex++;
                renderCurrent();
            } else {
                showFullscreenError(q.errorMeme);
            }
        }
        
        function handleRegexAnswer(inputValue, q) {
            let matched = q.expectedKeywords.some(kw => inputValue.includes(kw));
            if (matched) {
                showMessage(q.successMsg);
                currentIndex++;
                renderCurrent();
            } else {
                showFullscreenError(q.errorMeme);
            }
        }
        
        function handleDebugAnswer(inputValue, q) {
            let matched = q.expectedPatterns.some(p => inputValue.includes(p));
            if (matched) {
                showMessage(q.successMsg);
                currentIndex++;
                renderCurrent();
            } else {
                showFullscreenError(q.errorMeme);
            }
        }
        
        function handleBruteforceAnswer(inputValue, q) {
            if (inputValue === q.expected) {
                showMessage(q.successMsg);
                currentIndex++;
                renderCurrent();
            } else {
                showFullscreenError(q.errorMeme);
            }
        }
        
        function handleCommandAnswer(inputValue, q) {
            let matched = q.expectedKeywords.some(kw => inputValue.toLowerCase().includes(kw));
            if (matched) {
                showMessage(q.successMsg);
                currentIndex++;
                renderCurrent();
            } else {
                showFullscreenError(q.errorMeme);
            }
        }
        
        function handleChoiceAnswer(selected, q) {
            if (q.correct === selected) {
                showMessage(q.successMsg);
                currentIndex++;
                renderCurrent();
            } else {
                showFullscreenError(q.errorMeme);
            }
        }
        
        function handleInputAnswer(val, q) {
            let matched = q.expectedKeywords.some(kw => val.includes(kw));
            if (matched) {
                showMessage(q.successMsg);
                currentIndex++;
                renderCurrent();
            } else {
                showFullscreenError(q.errorMeme);
            }
        }
        
        function showMessage(msg) {
            const msgDiv = document.createElement('div');
            msgDiv.className = "line";
            msgDiv.style.background = "#0a221a";
            msgDiv.style.padding = "10px";
            msgDiv.style.margin = "8px 0";
            msgDiv.style.borderRadius = "4px";
            msgDiv.innerHTML = msg;
            appDiv.prepend(msgDiv);
            setTimeout(() => msgDiv.remove(), 1500);
        }
        
        function showFullscreenError(errorMsg) {
            stopHackerBackground();
            if (mediaGlitchInterval) clearInterval(mediaGlitchInterval);
            quizContainer.style.display = 'none';
            stopHackBackgroundAnimations();

              removeHackerTopPanel();
            
            const overlay = document.createElement('div');
            overlay.className = 'error-overlay';
            
            const matrix = document.createElement('div');
            matrix.className = 'matrix-rain';
            
            function addMatrixLine() {
                const line = document.createElement('div');
                line.className = 'matrix-line';
                let text = '';
                const chars = ['0','1','A','B','C','D','E','F','💀','⚠️','█','▓','░'];
                for(let j = 0; j < 25; j++) text += chars[Math.floor(Math.random() * chars.length)];
                line.textContent = text;
                line.style.left = Math.random() * 100 + '%';
                line.style.animationDuration = (Math.random() * 5 + 2) + 's';
                line.style.fontSize = (Math.random() * 16 + 10) + 'px';
                matrix.appendChild(line);
                setTimeout(() => line.remove(), 7000);
            }
            
            for(let i = 0; i < 60; i++) setTimeout(() => addMatrixLine(), i * 80);
            
            const matrixInterval_err = setInterval(() => {
                if (document.body.contains(overlay)) addMatrixLine();
                else clearInterval(matrixInterval_err);
            }, 400);
            
            const box = document.createElement('div');
            box.className = 'error-message-box';
            box.innerHTML = `<div style="color:#ff3333; font-size:26px; margin-bottom:15px;">⚠️CRITICAL ERROR⚠️</div>
                             <div style="color:#ff8888; font-size:16px;">${errorMsg}<br><small>${['ВОСПОМИНАНИЯ ПОВРЕЖДЕНЫ','СИСТЕМА ВЗЛОМАНА','ДОСТУП ЗАПРЕЩЕН'][Math.floor(Math.random()*3)]}</small></div>
                             <button class="restart-btn-error" id="restartErrorBtn">⟳ ПЕРЕЗАПУСТИТЬ КВЕСТ ⟳</button>`;
            
            overlay.appendChild(matrix);
            overlay.appendChild(box);
            document.body.appendChild(overlay);
            
            document.getElementById('restartErrorBtn').onclick = () => {
                clearInterval(matrixInterval_err);
                overlay.remove();
                currentIndex = 0;
                timerSeconds = 300;
                captchaAttempts = 0;
                currentCaptcha = generateCaptchaQuestion();
                startQuest();
            };
        }
        
        function showCaptchaFailScreen() {
            stopHackerBackground();
            const overlay = document.createElement('div');
            overlay.className = 'error-overlay';
            
            const matrix = document.createElement('div');
            matrix.className = 'matrix-rain';
            
            function addMatrixLine() {
                const line = document.createElement('div');
                line.className = 'matrix-line';
                let text = '';
                const chars = ['0','1','A','B','C','D','E','F','💀','⚠️','🔒','🚫'];
                for(let j = 0; j < 25; j++) text += chars[Math.floor(Math.random() * chars.length)];
                line.textContent = text;
                line.style.left = Math.random() * 100 + '%';
                line.style.animationDuration = (Math.random() * 5 + 2) + 's';
                line.style.fontSize = (Math.random() * 16 + 10) + 'px';
                matrix.appendChild(line);
                setTimeout(() => line.remove(), 7000);
            }
            
            const matrixInterval_fail = setInterval(() => {
                if (document.body.contains(overlay)) addMatrixLine();
                else clearInterval(matrixInterval_fail);
            }, 300);
            
            const box = document.createElement('div');
            box.className = 'error-message-box';
            box.innerHTML = `<div style="color:#ff3333; font-size:26px; margin-bottom:15px;">🔐 VERIFICATION_FAILED 🔐</div>
                             <div style="color:#ff8888; font-size:16px;">❌ НЕ УДАЛОСЬ ПОДТВЕРДИТЬ ЛИЧНОСТЬ ИМЕНИННИКА ❌<br><br>
                             <small>ДОСТУП К ПОДАРКУ ЗАБЛОКИРОВАН</small><br>
                             <small style="color:#ff6666;">ТОЛЬКО НАСТОЯЩИЙ ИМЕНИННИК МОЖЕТ ПОЛУЧИТЬ ПОДАРОК!</small></div>
                             <button class="restart-btn-error" id="restartCaptchaBtn">⟳ НАЧАТЬ ЗАНОВО ⟳</button>`;
            
            overlay.appendChild(matrix);
            overlay.appendChild(box);
            document.body.appendChild(overlay);
            
            document.getElementById('restartCaptchaBtn').onclick = () => {
                clearInterval(matrixInterval_fail);
                overlay.remove();
                currentIndex = 0;
                timerSeconds = 300;
                captchaAttempts = 0;
                currentCaptcha = generateCaptchaQuestion();
                startQuest();
            };
        }
        
// ========== ДОБАВЛЕНИЕ ВЕРХНЕЙ ХАКЕРСКОЙ ПАНЕЛИ ==========
function addHackerTopPanel() {
    // Проверяем, существует ли уже панель
    if (document.querySelector('.hacker-top-panel')) {
        return;
    }
    
    const topPanel = document.createElement('div');
    topPanel.className = 'hacker-top-panel';
    topPanel.innerHTML = `
        <div class="hacker-marquee">
            <div class="marquee-content">
                $> SYSTEM_SCAN: ACTIVE | FIREWALL: PIZDEC | ENCRYPTION: CRACKING 64% | 
                TRACKING: OOPS | ROOT_ACCESS: POPKA | DATA_STREAM: PISYA POPA | 
                [WARNING] VANYA_HACK | [SUCCESS] ZHOPA_POLNAYA | 
                >_ HACK_THE_PLANET | MEMORY_DUMP: 0x7F4A2B | 
            </div>
        </div>
        <div class="hacker-leds">
            <div class="hacker-led">
                <div class="led-dot red"></div>
                <span>SYSTEM</span>
            </div>
            <div class="hacker-led">
                <div class="led-dot yellow"></div>
                <span>HACK</span>
            </div>
            <div class="hacker-led">
                <div class="led-dot green"></div>
                <span>ACCESS</span>
            </div>
        </div>
    `;
    
    document.body.appendChild(topPanel);
    
    // Добавляем сканирующий луч
    const scanBeam = document.createElement('div');
    scanBeam.className = 'scan-beam';
    document.body.appendChild(scanBeam);
}

// Функция для удаления верхней панели (если нужно)
function removeHackerTopPanel() {
    const topPanel = document.querySelector('.hacker-top-panel');
    if (topPanel) topPanel.remove();
    
    const scanBeam = document.querySelector('.scan-beam');
    if (scanBeam) scanBeam.remove();
}

        async function showCaptcha() {
            return new Promise((resolve, reject) => {
                stopHackBackgroundAnimations();
                
                const captchaContainer = document.createElement('div');
                captchaContainer.className = 'captcha-container';
                captchaContainer.id = 'captchaContainer';
                
                const matrixBg = document.createElement('div');
                matrixBg.className = 'matrix-captcha';
                
                function addCaptchaLine() {
                    const line = document.createElement('div');
                    line.className = 'captcha-line';
                    const texts = ['⚠️ VERIFY_IDENTITY ⚠️', '🔐 CAPTCHA_REQUIRED 🔐', '🤖 HUMAN_VERIFICATION 🤖', '✅ PROVE_YOUR_IDENTITY ✅'];
                    line.textContent = texts[Math.floor(Math.random() * texts.length)];
                    line.style.left = Math.random() * 100 + '%';
                    line.style.animationDuration = (Math.random() * 5 + 3) + 's';
                    line.style.fontSize = (Math.random() * 16 + 10) + 'px';
                    matrixBg.appendChild(line);
                    setTimeout(() => line.remove(), 8000);
                }
                
                const captchaMatrixInterval = setInterval(() => {
                    if (document.body.contains(captchaContainer)) {
                        for(let i = 0; i < 3; i++) addCaptchaLine();
                    }
                }, 400);
                
                for(let i = 0; i < 30; i++) setTimeout(() => addCaptchaLine(), i * 100);
                
                const captchaBox = document.createElement('div');
                captchaBox.className = 'captcha-box';
                captchaBox.innerHTML = `
                    <div class="captcha-title">⚠️ HUMAN_VERIFICATION ⚠️</div>
                    <div class="captcha-subtitle">[ СИСТЕМА ТРЕБУЕТ ПОДТВЕРЖДЕНИЕ ЛИЧНОСТИ ]</div>
                    <div class="captcha-question">
                        <div class="captcha-question-text">🔐 ${currentCaptcha.text} 🔐</div>
                        <div class="captcha-input-group">
                            <input type="text" id="captchaInput" class="captcha-input" placeholder="ВВЕДИ ОТВЕТ..." autocomplete="off">
                            <button id="captchaSubmitBtn" class="captcha-btn">✅ ПРОВЕРИТЬ</button>
                        </div>
                        <div id="captchaError" class="captcha-error" style="display: none;"></div>
                        <div class="captcha-attempts">ОСТАЛОСЬ ПОПЫТОК: ${MAX_ATTEMPTS - captchaAttempts}</div>
                    </div>
                    <div style="color: #ff8888; font-size: 11px; margin-top: 15px;">⚠️ ТОЛЬКО ИМЕНИННИК МОЖЕТ ПРОЙТИ ПРОВЕРКУ ⚠️</div>
                `;
                
                captchaContainer.appendChild(matrixBg);
                captchaContainer.appendChild(captchaBox);
                document.body.appendChild(captchaContainer);
                
                const captchaInput = document.getElementById('captchaInput');
                const captchaSubmitBtn = document.getElementById('captchaSubmitBtn');
                const captchaError = document.getElementById('captchaError');
                const attemptsSpan = document.querySelector('.captcha-attempts');
                
                function checkCaptcha() {
                    const userAnswer = captchaInput.value.trim().toLowerCase();
                    const isCorrect = userAnswer === currentCaptcha.answer;
                    
                    if (isCorrect) {
                        captchaError.style.display = 'none';
                        captchaError.style.color = '#88ffaa';
                        captchaError.textContent = '✅ ВЕРИФИКАЦИЯ УСПЕШНА! ДОСТУП РАЗРЕШЁН...';
                        captchaError.style.display = 'block';
                        
                        setTimeout(() => {
                            clearInterval(captchaMatrixInterval);
                            captchaContainer.remove();
                            resolve();
                        }, 500);
                    } else {
                        captchaAttempts++;
                        const remaining = MAX_ATTEMPTS - captchaAttempts;
                        attemptsSpan.textContent = `ОСТАЛОСЬ ПОПЫТОК: ${remaining}`;
                        
                        if (captchaAttempts >= MAX_ATTEMPTS) {
                            captchaError.style.display = 'block';
                            captchaError.style.color = '#ff6666';
                            captchaError.textContent = '❌ ПРЕВЫШЕНО КОЛИЧЕСТВО ПОПЫТОК! ДОСТУП ЗАБЛОКИРОВАН!';
                            captchaSubmitBtn.disabled = true;
                            captchaInput.disabled = true;
                            
                            setTimeout(() => {
                                clearInterval(captchaMatrixInterval);
                                captchaContainer.remove();
                                reject(new Error('Too many attempts'));
                            }, 2000);
                        } else {
                            captchaError.style.display = 'block';
                            captchaError.style.color = '#ff6666';
                            captchaError.textContent = `❌ НЕВЕРНО! Осталось ${remaining} попыток...`;
                            captchaInput.value = '';
                            captchaInput.focus();
                            
                            captchaBox.style.transform = 'translateX(10px)';
                            setTimeout(() => { captchaBox.style.transform = 'translateX(-10px)'; }, 50);
                            setTimeout(() => { captchaBox.style.transform = 'translateX(5px)'; }, 100);
                            setTimeout(() => { captchaBox.style.transform = 'translateX(0)'; }, 150);
                            
                            if (navigator.vibrate) navigator.vibrate(100);
                        }
                    }
                }
                
                captchaSubmitBtn.onclick = checkCaptcha;
                captchaInput.onkeypress = (e) => { if(e.key === 'Enter') checkCaptcha(); };
                setTimeout(() => captchaInput.focus(), 100);
            });
        }
        
        // ОТРИСОВКА ТЕКУЩЕГО ВОПРОСА
        async function renderCurrent() {

            if (window.aiCameraCleanup) {
        window.aiCameraCleanup();
        window.aiCameraCleanup = null;
    }

            if (currentIndex >= questions.length) {
                stopHackBackgroundAnimations();
                quizContainer.style.display = 'none';
                
                try {
                    await showCaptcha();
                    showFinalCelebration();
                } catch (error) {
                    showCaptchaFailScreen();
                }
                return;
            }
            
            if (mediaGlitchInterval) {
                clearInterval(mediaGlitchInterval);
                mediaGlitchInterval = null;
            }
            
            const q = questions[currentIndex];
            const progressPercent = (currentIndex / questions.length) * 100;
            
            let html = `<div class="progress-bar-container"><div class="progress-fill" style="width: ${progressPercent}%;"></div></div>`;
            html += `<div class="question-box"><div id="questionText" class="question-text"></div>`;
            
            // Медиа контент для media типа
            if (q.type === "media") {
                html += `<div class="media-container" id="mediaContainer">`;
                if (q.mediaType === "image") {
                    html += `<img src="${q.mediaUrl}" alt="memory" id="mediaElement" style="max-width:100%; max-height:200px; border-radius:8px;">`;
                } else if (q.mediaType === "video") {
                    html += `<video controls id="mediaElement" style="max-width:100%; max-height:200px; border-radius:8px;">
                                <source src="${q.mediaUrl}" type="video/mp4">
                                Ваш браузер не поддерживает видео
                             </video>`;
                }
                if (q.mediaCaption) html += `<div class="media-caption">📸 ${q.mediaCaption}</div>`;
                html += `</div>`;
                // Добавляем блок с ответами ДЛЯ media типа
                html += `<div class="answers" id="answersContainer"></div>`;
            }
            // SQL Injection
            else if (q.type === "sql") {
                html += `<div class="sql-container">
                            <div class="sql-query">${q.sqlTemplate}<span class="sql-input-span" id="sqlPreview">________</span>${q.sqlSuffix}</div>
                            <div class="input-group">
                                <input type="text" id="sqlInput" class="terminal-input" placeholder="ВСТАВЬ СВОЙ КОД..." autocomplete="off">
                                <button id="sqlSubmitBtn" class="submit-btn">[ EXECUTE ]</button>
                            </div>
                            <div class="hint-text">💡 ${q.hint}</div>
                         </div>`;
            }

            // Аудио вопрос (с плеером)
// Аудио вопрос (с плеером)
// Аудио вопрос (с плеером)
else if (q.type === "audio") {
    html += `
        <div class="media-container hacker-audio">
            <div class="audio-player-wrapper">
                <div class="audio-visualizer">🎵 🔊 🎵</div>
                <audio controls class="audio-player">
                    <source src="${q.audioUrl}" type="audio/mpeg">
                    Ваш браузер не поддерживает аудио
                </audio>
                <div class="audio-tip">💡 Рекомендуем использовать наушники</div>
            </div>
            ${q.audioCaption ? `<div class="media-caption hacker-caption">📻 ${q.audioCaption}</div>` : ''}
        </div>
        <div class="input-group">
            <input type="text" id="audioInput" class="terminal-input" placeholder="ВВЕДИ НАЗВАНИЕ ПЕСНИ..." autocomplete="off">
            <button id="audioSubmitBtn" class="submit-btn">[ VERIFY ]</button>
        </div>
        <div class="hint-text">💡 ${q.hint}</div>
    `;
}

else if (q.type === "ai_vision") {
    html += `
        <div class="ai-camera-container">
            <div class="ai-preview">
                <div class="ai-detection-result" id="aiDetectionResult">
                    📸 Наведи камеру на телефон
                </div>
            </div>
            <video id="aiVideo" class="ai-video" autoplay playsinline muted></video>
            <canvas id="aiCanvas" class="ai-canvas"></canvas>
            <button class="ai-capture-btn" id="aiCaptureBtn">🔍 РАСПОЗНАТЬ</button>
            <div class="ai-status" id="aiStatus">⚡ Загрузка ИИ модели...</div>
        </div>
        <div class="hint-text">💡 ${q.hint}</div>
    `;
    
    setTimeout(async () => {
        const video = document.getElementById('aiVideo');
        const canvas = document.getElementById('aiCanvas');
        const captureBtn = document.getElementById('aiCaptureBtn');
        const statusDiv = document.getElementById('aiStatus');
        const resultDiv = document.getElementById('aiDetectionResult');
        
        let model = null;
        let stream = null;
        let isProcessing = false;
        
        // Список объектов, которые считаются телефонами
        const phoneClasses = ['cell phone', 'smartphone', 'mobile phone', 'phone'];
        
        // Функция инициализации камеры
        async function initCamera() {
            try {
                stream = await navigator.mediaDevices.getUserMedia({ 
                    video: { 
                        facingMode: 'environment', // Задняя камера
                        width: { ideal: 640 },
                        height: { ideal: 480 }
                    } 
                });
                video.srcObject = stream;
                await video.play();
                statusDiv.innerHTML = '✅ Камера готова! Наведи на телефон и нажми "РАСПОЗНАТЬ"';
                statusDiv.className = 'ai-status success';
                return true;
            } catch (err) {
                console.error('Camera error:', err);
                statusDiv.innerHTML = '❌ Не удалось получить доступ к камере! Проверь разрешения.';
                statusDiv.className = 'ai-status error';
                return false;
            }
        }
        
        // Функция загрузки модели
        async function loadModel() {
            try {
                statusDiv.innerHTML = '<span class="ai-loading"></span> Загрузка ИИ модели...';
                statusDiv.className = 'ai-status loading';
                model = await cocoSsd.load();
                statusDiv.innerHTML = '✅ Модель загружена! Камера готова.';
                statusDiv.className = 'ai-status success';
                return true;
            } catch (err) {
                console.error('Model load error:', err);
                statusDiv.innerHTML = '❌ Ошибка загрузки ИИ модели!';
                statusDiv.className = 'ai-status error';
                return false;
            }
        }
        
        // Функция распознавания
        async function detectPhone() {
            if (isProcessing) {
                statusDiv.innerHTML = '⏳ Обработка... Подожди секунду';
                return;
            }
            
            if (!model) {
                statusDiv.innerHTML = '❌ Модель ещё не загружена!';
                return;
            }
            
            if (!video.videoWidth || !video.videoHeight) {
                statusDiv.innerHTML = '❌ Камера не готова!';
                return;
            }
            
            isProcessing = true;
            captureBtn.disabled = true;
            statusDiv.innerHTML = '<span class="ai-loading"></span> Анализ изображения...';
            statusDiv.className = 'ai-status loading';
            
            try {
                // Рисуем текущий кадр на canvas
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                
                // Распознаём объекты
                const predictions = await model.detect(canvas);
                
                // Ищем телефон
                let foundPhone = false;
                let detectedObjects = [];
                
                for (let pred of predictions) {
                    const className = pred.class.toLowerCase();
                    detectedObjects.push(className);
                    
                    // Проверяем, является ли объект телефоном
                    for (let phoneClass of phoneClasses) {
                        if (className.includes(phoneClass) || phoneClass.includes(className)) {
                            foundPhone = true;
                            break;
                        }
                    }
                    
                    if (foundPhone) break;
                }
                
                if (foundPhone) {
                    resultDiv.innerHTML = `✅ РАСПОЗНАНО: Телефон! (${predictions.filter(p => p.class.toLowerCase().includes('phone')).map(p => p.class).join(', ') || 'смартфон'})`;
                    statusDiv.innerHTML = '✅ ТЕЛЕФОН ОБНАРУЖЕН! Доступ разрешён!';
                    statusDiv.className = 'ai-status success';
                    
                    // Эффект успеха
                    captureBtn.style.background = '#2eff7a';
                    captureBtn.style.color = '#000';
                    
                    // Звук успеха
                    try {
                        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
                        const osc = audioCtx.createOscillator();
                        const gain = audioCtx.createGain();
                        osc.connect(gain);
                        gain.connect(audioCtx.destination);
                        osc.frequency.value = 880;
                        gain.gain.value = 0.2;
                        osc.start();
                        gain.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + 0.3);
                        osc.stop(audioCtx.currentTime + 0.3);
                    } catch(e) {}
                    
                    // Вибрация (если доступна)
                    if (navigator.vibrate) navigator.vibrate(200);
                    
                    showMessage(q.successMsg);
                    setTimeout(() => {
                        currentIndex++;
                        renderCurrent();
                    }, 1500);
                    
                } else {
                    resultDiv.innerHTML = `❌ Телефон не найден. Обнаружено: ${detectedObjects.length > 0 ? detectedObjects.join(', ') : 'ничего'}. Попробуй ещё раз!`;
                    statusDiv.innerHTML = '❌ Телефон не распознан! Наведи камеру чётче.';
                    statusDiv.className = 'ai-status error';
                    captureBtn.disabled = false;
                    
                    // Эффект ошибки
                    captureBtn.style.animation = 'shake 0.3s ease';
                    setTimeout(() => captureBtn.style.animation = '', 300);
                }
                
            } catch (err) {
                console.error('Detection error:', err);
                statusDiv.innerHTML = '❌ Ошибка распознавания! Попробуй ещё раз.';
                statusDiv.className = 'ai-status error';
                captureBtn.disabled = false;
            } finally {
                isProcessing = false;
                if (!foundPhone) {
                    captureBtn.disabled = false;
                    captureBtn.style.background = '';
                }
            }
        }
        
        // Инициализация
        const cameraReady = await initCamera();
        if (cameraReady) {
            await loadModel();
        }
        
        captureBtn.onclick = detectPhone;
        
        // Очистка при выходе
        const cleanup = () => {
            if (stream) {
                stream.getTracks().forEach(track => track.stop());
            }
        };
        
        // Сохраняем cleanup для очистки
        window.aiCameraCleanup = cleanup;
        
    }, 100);
}
            // Hash cracking
            else if (q.type === "hash") {
                html += `<div class="hash-container">
                            <div class="code-display">📦 HASH: ${q.hashValue}</div>
                            <div class="input-group">
                                <input type="text" id="hashInput" class="terminal-input" placeholder="ВВЕДИ РАСШИФРОВАННЫЙ ПАРОЛЬ..." autocomplete="off">
                                <button id="hashSubmitBtn" class="submit-btn">[ CRACK ]</button>
                            </div>
                            <div class="hint-text">💡 ${q.hint}</div>
                         </div>`;
            }
            // Binary decoder
            else if (q.type === "binary") {
                html += `<div class="binary-container">
                            <div class="code-display">🔢 BINARY: ${q.binaryValue}</div>
                            <div class="input-group">
                                <input type="text" id="binaryInput" class="terminal-input" placeholder="ДЕКОДИРОВАННЫЙ ТЕКСТ..." autocomplete="off">
                                <button id="binarySubmitBtn" class="submit-btn">[ DECODE ]</button>
                            </div>
                            <div class="hint-text">💡 ${q.hint}</div>
                         </div>`;
            }
            // Regex challenge
            else if (q.type === "regex") {
                html += `<div class="regex-container">
                            <div class="code-display">📝 TEXT: "${q.sampleText}"</div>
                            <div class="input-group">
                                <input type="text" id="regexInput" class="terminal-input" placeholder="ВВЕДИ REGEX..." autocomplete="off">
                                <button id="regexSubmitBtn" class="submit-btn">[ SEARCH ]</button>
                            </div>
                            <div class="hint-text">💡 ${q.hint}</div>
                         </div>`;
            }
            // Debug code
            else if (q.type === "debug") {
                html += `<div class="code-container">
                            <div class="code-display"><pre style="margin:0; font-family:monospace;">${q.buggyCode}</pre></div>
                            <div class="input-group">
                                <input type="text" id="debugInput" class="terminal-input" placeholder="ЧТО НУЖНО ИСПРАВИТЬ?" autocomplete="off">
                                <button id="debugSubmitBtn" class="submit-btn">[ FIX ]</button>
                            </div>
                            <div class="hint-text">💡 ${q.hint}</div>
                         </div>`;
            }
            // Bruteforce PIN
            else if (q.type === "bruteforce") {
                html += `<div class="code-container">
                            <ul class="clues-list">${q.clues.map(c => `<li>🔍 ${c}</li>`).join('')}</ul>
                            <div class="input-group">
                                <input type="text" id="pinInput" class="terminal-input" placeholder="ВВЕДИ 4-ЗНАЧНЫЙ PIN..." autocomplete="off" maxlength="4">
                                <button id="pinSubmitBtn" class="submit-btn">[ UNLOCK ]</button>
                            </div>
                            <div class="hint-text">💡 Собери код из подсказок</div>
                         </div>`;
            }
            // Command recovery
            else if (q.type === "command") {
                html += `<div class="code-container">
                            <div class="input-group">
                                <input type="text" id="commandInput" class="terminal-input" placeholder="ВВЕДИ GIT КОМАНДУ..." autocomplete="off">
                                <button id="commandSubmitBtn" class="submit-btn">[ EXECUTE ]</button>
                            </div>
                            <div class="hint-text">💡 ${q.hint}</div>
                         </div>`;
            }
            // Choice type
            else if (q.type === "choice") {
                html += `<div class="answers" id="answersContainer"></div>`;
            }
            // QR вопрос (с текстовым полем)
else if (q.type === "qr") {
    html += `
        <div class="media-container hacker-qr">
            <img src="${q.mediaUrl}" alt="QR Code" class="qr-image">
            ${q.mediaCaption ? `<div class="media-caption hacker-caption">${q.mediaCaption}</div>` : ''}
        </div>
        <div class="input-group">
            <input type="text" id="qrInput" class="terminal-input" placeholder="ВВЕДИ ТЕКСТ..." autocomplete="off">
            <button id="qrSubmitBtn" class="submit-btn">ОТПРАВИТЬ</button>
        </div>
        <div class="hint-text">💡 ${q.hint}</div>
    `;
}
            // Input type
            else if (q.type === "input") {
                const inputField = document.getElementById('userInput');
                const submitBtn = document.getElementById('submitBtn');
                if (submitBtn) {
                    submitBtn.onclick = () => {
                        const userAnswer = inputField.value.trim().toLowerCase();
                        let matched = q.expectedKeywords.some(kw => userAnswer.includes(kw.toLowerCase()));
                        if (matched) {
                            showMessage(q.successMsg);
                            currentIndex++;
                            renderCurrent();
                        } else {
                            showFullscreenError(q.errorMeme);
                        }
                    };
                }
            }
            
            html += `</div>`;
            appDiv.innerHTML = html;
            
            // Анимация печатания вопроса
            const questionElement = document.getElementById('questionText');
            await typeText(questionElement, `> ${q.text}`, 25);
            
            const cursor = document.createElement('span');
            cursor.className = 'typing-cursor';
            questionElement.appendChild(cursor);
            
            // Медиа глитч
            if (q.type === "media") {
                const mediaElement = document.getElementById('mediaElement');
                if (mediaElement) {
                    mediaGlitchInterval = setInterval(() => {
                        if (mediaElement && document.body.contains(mediaElement)) {
                            mediaElement.classList.add('glitch-effect');
                            setTimeout(() => mediaElement.classList.remove('glitch-effect'), 200);
                        }
                    }, 3000);
                }
            }
            
            // Привязка обработчиков для ВСЕХ типов
            
            // SQL
            if (q.type === "sql") {
                const sqlInput = document.getElementById('sqlInput');
                const sqlSubmit = document.getElementById('sqlSubmitBtn');
                const sqlPreview = document.getElementById('sqlPreview');
                if (sqlInput && sqlPreview) sqlInput.oninput = () => { sqlPreview.textContent = sqlInput.value; };
                if (sqlSubmit) sqlSubmit.onclick = () => handleSQLAnswer(sqlInput.value, q);
                if (sqlInput) sqlInput.onkeypress = (e) => { if(e.key === 'Enter') handleSQLAnswer(sqlInput.value, q); };
            }
            // Аудио вопрос обработчик
else if (q.type === "audio") {
    const audioInput = document.getElementById('audioInput');
    const audioSubmit = document.getElementById('audioSubmitBtn');
    
    function checkAudioAnswer() {
        const userAnswer = audioInput.value.trim();
        // Сравниваем без учета регистра
        if (userAnswer.toLowerCase() === q.expectedInput.toLowerCase()) {
            showMessage(q.successMsg);
            currentIndex++;
            renderCurrent();
        } else {
            showFullscreenError(q.errorMeme);
        }
    }
    
    if (audioSubmit) {
        audioSubmit.onclick = checkAudioAnswer;
    }
    
    if (audioInput) {
        audioInput.onkeypress = (e) => {
            if (e.key === 'Enter') {
                checkAudioAnswer();
            }
        };
    }
}
            // QR вопрос обработчик (с игнорированием регистра)
            else if (q.type === "qr") {
                const qrInput = document.getElementById('qrInput');
                const qrSubmit = document.getElementById('qrSubmitBtn');
                
                if (qrSubmit) {
                    qrSubmit.onclick = () => {
                        const userAnswer = qrInput.value.trim();
                        // Сравниваем без учета регистра
                        if (userAnswer.toLowerCase() === q.expectedInput.toLowerCase()) {
                            showMessage(q.successMsg);
                            currentIndex++;
                            renderCurrent();
                        } else {
                            showFullscreenError(q.errorMeme);
                        }
                    };
                }
                
                if (qrInput) {
                    qrInput.onkeypress = (e) => {
                        if (e.key === 'Enter') {
                            const userAnswer = qrInput.value.trim();
                            // Сравниваем без учета регистра
                            if (userAnswer.toLowerCase() === q.expectedInput.toLowerCase()) {
                                showMessage(q.successMsg);
                                currentIndex++;
                                renderCurrent();
                            } else {
                                showFullscreenError(q.errorMeme);
                            }
                        }
                    };
                }
            }
            else if (q.type === "hash") {
                const hashInput = document.getElementById('hashInput');
                const hashSubmit = document.getElementById('hashSubmitBtn');
                if (hashSubmit) hashSubmit.onclick = () => handleHashAnswer(hashInput.value, q);
                if (hashInput) hashInput.onkeypress = (e) => { if(e.key === 'Enter') handleHashAnswer(hashInput.value, q); };
            }
            // Binary
            else if (q.type === "binary") {
                const binaryInput = document.getElementById('binaryInput');
                const binarySubmit = document.getElementById('binarySubmitBtn');
                if (binarySubmit) binarySubmit.onclick = () => handleBinaryAnswer(binaryInput.value, q);
                if (binaryInput) binaryInput.onkeypress = (e) => { if(e.key === 'Enter') handleBinaryAnswer(binaryInput.value, q); };
            }
            // Regex
            else if (q.type === "regex") {
                const regexInput = document.getElementById('regexInput');
                const regexSubmit = document.getElementById('regexSubmitBtn');
                if (regexSubmit) regexSubmit.onclick = () => handleRegexAnswer(regexInput.value, q);
                if (regexInput) regexInput.onkeypress = (e) => { if(e.key === 'Enter') handleRegexAnswer(regexInput.value, q); };
            }
            // Debug
            else if (q.type === "debug") {
                const debugInput = document.getElementById('debugInput');
                const debugSubmit = document.getElementById('debugSubmitBtn');
                if (debugSubmit) debugSubmit.onclick = () => handleDebugAnswer(debugInput.value, q);
                if (debugInput) debugInput.onkeypress = (e) => { if(e.key === 'Enter') handleDebugAnswer(debugInput.value, q); };
            }
            // Bruteforce
            else if (q.type === "bruteforce") {
                const pinInput = document.getElementById('pinInput');
                const pinSubmit = document.getElementById('pinSubmitBtn');
                if (pinSubmit) pinSubmit.onclick = () => handleBruteforceAnswer(pinInput.value, q);
                if (pinInput) pinInput.onkeypress = (e) => { if(e.key === 'Enter') handleBruteforceAnswer(pinInput.value, q); };
            }
            // Command
            else if (q.type === "command") {
                const commandInput = document.getElementById('commandInput');
                const commandSubmit = document.getElementById('commandSubmitBtn');
                if (commandSubmit) commandSubmit.onclick = () => handleCommandAnswer(commandInput.value, q);
                if (commandInput) commandInput.onkeypress = (e) => { if(e.key === 'Enter') handleCommandAnswer(commandInput.value, q); };
            }
            // Choice (включая media с answersContainer)
            else if (q.type === "choice" || q.type === "media") {
                const answersDiv = document.getElementById('answersContainer');
                if (answersDiv) {
                    await new Promise(resolve => setTimeout(resolve, 200));
                    for (let opt of q.options) {
                        const btn = document.createElement('button');
                        btn.className = 'answer-btn';
                        btn.textContent = `> ${opt}`;
                        btn.onclick = () => handleChoiceAnswer(opt, q);
                        answersDiv.appendChild(btn);
                        await new Promise(resolve => setTimeout(resolve, 100));
                    }
                }
            }
            // Input
            else if (q.type === "input") {
                const inputField = document.getElementById('userInput');
                const submitBtn = document.getElementById('submitBtn');
                if (submitBtn) submitBtn.onclick = () => handleInputAnswer(inputField.value.trim().toLowerCase(), q);
                if (inputField) inputField.onkeypress = (e) => { if(e.key === 'Enter') handleInputAnswer(inputField.value.trim().toLowerCase(), q); };
            }
        }
        
        async function startQuest() {
    // Сначала показываем контейнер (но он невидим)
    quizContainer.style.display = 'flex';
    quizContainer.classList.remove('visible');

      addHackerTopPanel();
    
    // Создаем структуру
    quizContainer.innerHTML = `
        <div class="terminal">
            <div class="crt-header">
                <span>⚠️ VIRUS_SHIZA_KARISHKA v09.04.03 </span>
                <span class="status">[IVAN_HACK]</span>
            </div>
            <div class="content" id="appContent"></div>
        </div>
    `;
    appDiv = document.getElementById('appContent');
    


    // Запускаем фоновые анимации
    startHackBackgroundAnimations();
    
    // Показываем анимацию инициализации
    await showQuestInitialization();
    
    // После завершения инициализации — плавно показываем квест
    requestAnimationFrame(() => {
        quizContainer.classList.add('visible');
        startHackerBackground();
        renderCurrent();
    });
}


async function showFinalCelebration() {
    stopHackerBackground();
    if (mediaGlitchInterval) clearInterval(mediaGlitchInterval);
    
    removeHackerTopPanel();

    if (balloonInterval) {
        clearInterval(balloonInterval);
        balloonInterval = null;
    }
    if (confettiInterval) {
        clearInterval(confettiInterval);
        confettiInterval = null;
    }
    if (starInterval) {
        clearInterval(starInterval);        starInterval = null;
    }
    if (cakeInterval) {
        clearInterval(cakeInterval);
        cakeInterval = null;
    }
    if (giftInterval) {
        clearInterval(giftInterval);
        giftInterval = null;
    }
    
 if (globalCelebrationInterval) {
        clearInterval(globalCelebrationInterval);
        globalCelebrationInterval = null;
    }

    // Очищаем все существующие шарики и конфетти на странице
    const existingBalloons = document.querySelectorAll('.balloon, .confetti, .cake, .gift, .star');
    existingBalloons.forEach(el => el.remove());
    

    quizContainer.style.display = 'none';
    birthdayPage.style.display = 'flex';
    birthdayPage.style.opacity = '1';
    birthdayPage.innerHTML = '';
    birthdayPage.style.background = '#000000';
    
    // ========== ВСПЛЫВАЮЩЕЕ ОКНО "КАПЧА ПРОЙДЕНА" ==========
    
    const popup = document.createElement('div');
    popup.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #0a2a1a, #051a0a);
        border: 3px solid #2eff7a;
        border-radius: 30px;
        padding: 40px 60px;
        text-align: center;
        z-index: 10000;
        box-shadow: 0 0 50px rgba(46, 255, 122, 0.5);
        animation: popupAppear 0.4s cubic-bezier(0.34, 1.2, 0.64, 1);
        font-family: monospace;
    `;
    
    popup.innerHTML = `
        <div style="font-size: 80px; animation: checkBounce 0.5s ease;">✅</div>
        <div style="font-size: 32px; color: #2eff7a; font-weight: bold; margin-top: 15px;">
            ПРОВЕРКА ПРОЙДЕНА!
        </div>
        <div style="font-size: 14px; color: #88ffaa; margin-top: 10px;">
            [ ДОСТУП РАЗРЕШЁН ]
        </div>
    `;
    
    document.body.appendChild(popup);
    
    // Анимации
    const style = document.createElement('style');
    style.textContent = `
        @keyframes popupAppear {
            0% {
                opacity: 0;
                transform: translate(-50%, -50%) scale(0.3);
            }
            100% {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1);
            }
        }
        
        @keyframes checkBounce {
            0% {
                transform: scale(0);
                opacity: 0;
            }
            50% {
                transform: scale(1.3);
            }
            100% {
                transform: scale(1);
                opacity: 1;
            }
        }
        
        @keyframes popupFadeOut {
            0% {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1);
            }
            100% {
                opacity: 0;
                transform: translate(-50%, -50%) scale(0.8);
                visibility: hidden;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Звук успеха (простой)
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        oscillator.frequency.value = 880;
        gainNode.gain.value = 0.2;
        oscillator.start();
        gainNode.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + 0.5);
        oscillator.stop(audioCtx.currentTime + 0.5);
    } catch(e) {}
    
    // Вибрация
    if (navigator.vibrate) navigator.vibrate(100);
    
    // Ждём 1.5 секунды и убираем окно
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    popup.style.animation = 'popupFadeOut 0.3s ease forwards';
    await new Promise(resolve => setTimeout(resolve, 300));
    popup.remove();
    style.remove();
    
    // ========== АНИМАЦИЯ ВОССТАНОВЛЕНИЯ ==========
    
    const recoveryContainer = document.createElement('div');
    recoveryContainer.style.cssText = `position:fixed;top:0;left:0;width:100%;height:100vh;background:#000;z-index:2000;display:flex;flex-direction:column;justify-content:center;align-items:center;font-family:monospace;`;
    document.body.appendChild(recoveryContainer);
    
    const recoveryMatrix = document.createElement('div');
    recoveryMatrix.style.cssText = `position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;`;
    recoveryContainer.appendChild(recoveryMatrix);
    
    function addRecoveryLine() {
        const line = document.createElement('div');
        line.style.cssText = `position:absolute;color:#2eff7a;font-family:monospace;font-size:${Math.random()*16+10}px;white-space:nowrap;left:${Math.random()*100}%;animation:recoveryFall ${Math.random()*3+2}s linear forwards;text-shadow:0 0 5px #2eff7a;top:-30px;`;
        const texts = ['🔄 SYSTEM_RECOVERY...', '✅ MEMORY_RESTORE...', '🔧 FIXING_FILES...', '💾 RESTORING_DATA...', '🎁 LOCATING_GIFT...', '✨ RECOVERY_COMPLETE...'];
        line.textContent = texts[Math.floor(Math.random() * texts.length)];
        recoveryMatrix.appendChild(line);
        setTimeout(() => line.remove(), 4000);
    }
    
    const fallStyle = document.createElement('style');
    fallStyle.textContent = `@keyframes recoveryFall{0%{transform:translateY(-30px);opacity:0}10%{opacity:1}90%{opacity:1}100%{transform:translateY(100vh);opacity:0}}`;
    document.head.appendChild(fallStyle);
    
    const recoveryInterval = setInterval(() => {
        if (recoveryContainer && document.body.contains(recoveryContainer)) {
            for(let i = 0; i < 5; i++) addRecoveryLine();
        }
    }, 200);
    
    const statusBox = document.createElement('div');
    statusBox.style.cssText = `position:relative;z-index:10;background:#0a0c0f;border:2px solid #2eff7a;padding:30px 50px;text-align:center;border-radius:12px;box-shadow:0 0 30px rgba(46,255,122,0.3);`;
    statusBox.innerHTML = `<div style="color:#2eff7a;font-size:24px;margin-bottom:15px;">⚠️SYSTEM_RECOVERY⚠️</div><div id="recoveryStatus" style="color:#88ffaa;font-size:18px;margin-bottom:20px;">[░░░░░░░░░░░░░░░░] 0%</div><div style="color:#66ff99;font-size:14px;">ВОССТАНОВЛЕНИЕ ВОСПОМИНАНИЙ...</div>`;
    recoveryContainer.appendChild(statusBox);
    
    const recoverySteps = [
        { progress: '[██░░░░░░░░░░░░░░] 15%', text: 'SCANNING_MEMORY_SECTORS...' },
        { progress: '[█████░░░░░░░░░░░] 32%', text: 'RESTORING_CORRUPTED_FILES...' },
        { progress: '[██████████░░░░░░] 58%', text: 'RECOVERING_FRIENDSHIP_DATA...' },
        { progress: '[█████████████░░░] 79%', text: 'DECRYPTING_GIFT_COORDINATES...' },
        { progress: '[███████████████░] 95%', text: 'DATABASE_UNLOCKED...' },
        { progress: '[████████████████] 100%', text: 'ROOT_ACCESS_GRANTED...' },
        { progress: '[████████████████] 100%', text: 'SYSTEM_RESTORED_SUCCESSFULLY!...' }
    ];
    
    for(let i = 0; i < recoverySteps.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 1200));
        const statusElement_rec = document.getElementById('recoveryStatus');
        if (statusElement_rec) {
            statusElement_rec.textContent = recoverySteps[i].progress;
            const textDiv = statusBox.querySelector('div:last-child');
            if (textDiv) textDiv.textContent = recoverySteps[i].text;
        }
    }
    
    statusBox.style.borderColor = '#ffaa33';
    statusBox.innerHTML = `<div style="color:#ffaa33;font-size:26px;margin-bottom:15px;">✅RECOVERY_COMPLETE✅</div><div style="color:#88ffaa;font-size:16px;">СИСТЕМА ВОССТАНОВЛЕНА</div><div style="color:#2eff7a;font-size:14px;margin-top:15px;">ДОСТУП К ПОДАРКУ РАЗРЕШЁН</div>`;
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    clearInterval(recoveryInterval);
    recoveryContainer.remove();
    fallStyle.remove();
    
    // ========== ФИНАЛЬНОЕ ПОЗДРАВЛЕНИЕ ==========
    
    birthdayPage.style.background = 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)';
    
    startInfiniteBalloons();
    startInfiniteConfetti();
    startInfiniteStars();
    startInfiniteCakes();
    startInfiniteGifts();

    globalCelebrationInterval = setInterval(() => {
        const birthdayPageEl = document.getElementById('birthdayPage');
        if (birthdayPageEl && birthdayPageEl.style.display !== 'none' && birthdayPageEl.style.opacity !== '0') {
            const balloonCount = Math.floor(Math.random() * 2) + 1;
            for (let i = 0; i < balloonCount; i++) {
                setTimeout(() => {
                    const balloon = document.createElement('div');
                    balloon.className = 'balloon';
                    const emojis = ['🎈', '🎈', '🎈', '🎈', '🎈', '🎉', '🎊'];
                    balloon.textContent = emojis[Math.floor(Math.random() * emojis.length)];
                    balloon.style.left = Math.random() * 100 + '%';
                    balloon.style.bottom = '-80px';
                    const size = Math.random() * 50 + 30;
                    balloon.style.fontSize = size + 'px';
                    const duration = Math.random() * 6 + 5;
                    balloon.style.animation = `floatUpFromBottom ${duration}s linear forwards`;
                    birthdayPageEl.appendChild(balloon);
                    setTimeout(() => balloon.remove(), duration * 1000);
                }, i * 200);
            }
            for (let i = 0; i < 2; i++) {
                setTimeout(() => {
                    const confetti = document.createElement('div');
                    confetti.className = 'confetti';
                    confetti.style.left = Math.random() * 100 + '%';
                    confetti.style.top = '-30px';
                    confetti.style.background = `hsl(${Math.random() * 360}, 100%, 60%)`;
                    confetti.style.width = (Math.random() * 12 + 6) + 'px';
                    confetti.style.height = (Math.random() * 12 + 6) + 'px';
                    const duration = Math.random() * 4 + 3;
                    confetti.style.animation = `confettiFallDown ${duration}s linear forwards`;
                    birthdayPageEl.appendChild(confetti);
                    setTimeout(() => confetti.remove(), duration * 1000);
                }, i * 150);
            }
        }
    }, 3000);

    for(let i = 0; i < 120; i++) {
        setTimeout(() => {
            const balloon = document.createElement('div');
            balloon.className = 'balloon';
            balloon.textContent = ['🎈','🎈','🎈','🎈','🎈','🎉','🎊','🎂','🎁','✨','🎀','💝'][Math.floor(Math.random()*12)];
            balloon.style.left = Math.random() * 100 + '%';
            balloon.style.bottom = '-50px';
            balloon.style.fontSize = (Math.random() * 50 + 30) + 'px';
            balloon.style.animationDuration = (Math.random() * 6 + 4) + 's';
            birthdayPage.appendChild(balloon);
            setTimeout(() => balloon.remove(), 10000);
        }, i * 25);
    }
    
    for(let i = 0; i < 200; i++) {
        setTimeout(() => {
            const conf = document.createElement('div');
            conf.className = 'confetti';
            conf.style.left = Math.random() * 100 + '%';
            conf.style.top = '-30px';
            conf.style.background = `hsl(${Math.random() * 360}, 100%, 65%)`;
            conf.style.width = (Math.random() * 12 + 6) + 'px';
            conf.style.height = (Math.random() * 12 + 6) + 'px';
            conf.style.animationDuration = (Math.random() * 4 + 2) + 's';
            birthdayPage.appendChild(conf);
            setTimeout(() => conf.remove(), 6000);
        }, i * 18);
    }
    
    const card = document.createElement('div');
    card.className = 'birthday-card';
    card.style.padding = '25px 35px';
    card.style.width = '450px';
    card.style.maxWidth = '85%';
    card.innerHTML = `
        <div style="font-size:50px;margin-bottom:10px;">🎉✅🎂🔧</div>
        <h1 style="font-size:28px;margin-bottom:10px;background:linear-gradient(135deg,#00aa66,#ff66cc);-webkit-background-clip:text;background-clip:text;color:transparent;">САЙТ ВОССТАНОВЛЕН!</h1>
        <p style="font-size:14px;margin-bottom:15px;color:#ff6699;"><strong>УРА!<br>🎁У ТЕБЯ БУДЕТ ПОДАРОК!</strong>🎁</p>
        <div style="background:#ffecb3;border-radius:20px;padding:12px;margin:15px 0;"><p style="font-size:13px;color:#aa66cc;margin:0;">📍 <strong>КООРДИНАТЫ ПОДАРКА:</strong><br>🔥 <em>Место .........</em> 🔥</p></div>
        <button class="ura-btn" id="restartGameBtn" style="padding:10px 30px;font-size:18px;background:linear-gradient(135deg,#00aa66,#44ffaa);">🎈 С ДНЕМ РОЖДЕНИЯ! 🎈</button>
    `;
    birthdayPage.appendChild(card);
    
    // Аудио-плеер
    const audio = document.createElement('audio');
    audio.id = 'birthdaySong';
    audio.loop = true;
    audio.volume = 0.5;
    audio.src = 'music2.mp3';
    
    const playPromise = audio.play();
    if (playPromise !== undefined) {
        playPromise.catch(error => {
            console.log('Автовоспроизведение заблокировано:', error);
            showMusicPlayButton();
        });
    }
    
    function showMusicPlayButton() {
        const playButton = document.createElement('div');
        playButton.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 3000;
            background: linear-gradient(135deg, #ff3366, #ff6699);
            border-radius: 60px;
            padding: 15px 30px;
            font-family: monospace;
            font-size: 18px;
            font-weight: bold;
            color: white;
            border: none;
            cursor: pointer;
            box-shadow: 0 0 30px rgba(255,51,102,0.8);
            animation: pulse 1s infinite;
            white-space: nowrap;
        `;
        playButton.innerHTML = '🎵 НАЖМИ, ЧТОБЫ ВКЛЮЧИТЬ МУЗЫКУ 🎵';
        playButton.onclick = () => {
            audio.play();
            playButton.remove();
        };
        birthdayPage.appendChild(playButton);
        
        setTimeout(() => {
            if (playButton.parentNode) playButton.remove();
        }, 10000);
    }
    
    birthdayPage.appendChild(audio);
}


// Периодически добавляем новые шарики и конфетти
// Периодически добавляем новые шарики и конфетти
globalCelebrationInterval = setInterval(() => {
    const birthdayPage = document.getElementById('birthdayPage');
    if (birthdayPage && birthdayPage.style.display !== 'none' && birthdayPage.style.opacity !== '0') {
        // Добавляем 1-2 новых шарика каждые 3 секунды
        const balloonCount = Math.floor(Math.random() * 2) + 1;
        for (let i = 0; i < balloonCount; i++) {
            setTimeout(() => {
                const balloon = document.createElement('div');
                balloon.className = 'balloon';
                const emojis = ['🎈', '🎈', '🎈', '🎈', '🎈', '🎉', '🎊'];
                balloon.textContent = emojis[Math.floor(Math.random() * emojis.length)];
                balloon.style.left = Math.random() * 100 + '%';
                balloon.style.bottom = '-80px';
                const size = Math.random() * 50 + 30;
                balloon.style.fontSize = size + 'px';
                const duration = Math.random() * 6 + 5;
                balloon.style.animation = `floatUpFromBottom ${duration}s linear forwards`;
                birthdayPage.appendChild(balloon);
                setTimeout(() => balloon.remove(), duration * 1000);
            }, i * 200);
        }
        // Добавляем конфетти
        for (let i = 0; i < 2; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.left = Math.random() * 100 + '%';
                confetti.style.top = '-30px';
                confetti.style.background = `hsl(${Math.random() * 360}, 100%, 60%)`;
                confetti.style.width = (Math.random() * 12 + 6) + 'px';
                confetti.style.height = (Math.random() * 12 + 6) + 'px';
                const duration = Math.random() * 4 + 3;
                confetti.style.animation = `confettiFallDown ${duration}s linear forwards`;
                birthdayPage.appendChild(confetti);
                setTimeout(() => confetti.remove(), duration * 1000);
            }, i * 150);
        }
    }
}, 3000);
        

 // ========== НОВАЯ ЛОГИКА С ВИРУСНЫМИ КАРТИНКАМИ ==========
let clickCount = 0;
let spamInterval = null;


const VIRUS_IMAGES = [
    "https://cdn.combot.online/memes_russian/webp/2xf09fa5b3.webp",
    "https://yt3.googleusercontent.com/ytc/AIdro_mZFn-oe__ILPbLRd3f5WXy9mUzsfekdG5XbfPxldsgVw=s900-c-k-c0x00ffffff-no-rj",
    "https://cdn.combot.online/pvz1474/webp/17xf09f90b5.webp",
    "https://cdn.combot.online/pvz1474/webp/2xf09fa6a0.webp",
    "https://cdn.combot.online/memesetoktowho/webp/14xf09f9883.webp",
    "https://cdn.combot.online/memesetoktowho/webp/19xf09f98a4.webp",
    "https://cdn.combot.online/supersmeshiememes/webp/18xe29da4efb88f.webp",
    "https://cdn.combot.online/memy_goda5/webp/1xf09faba5.webp",
    "https://cdn.combot.online/svojmemy/webp/3xf09f9890.webp",
    "https://cdn.combot.online/miscellaneous_memes/webp/12xf09f9180.webp",
    "https://cdn.combot.online/sillymemesbysillyme/webp/5xf09f9895.webp",
    "https://cdn.combot.online/p122_memes_by_fstikbot/webp/1xf09f8c9f.webp"
];

// Функция создания одной вирусной картинки
function createVirusImage(isSpam = false) {
    const img = document.createElement('img');
    const randomImage = VIRUS_IMAGES[Math.floor(Math.random() * VIRUS_IMAGES.length)];
    img.src = randomImage;
    img.className = 'virus-popup';
    
    // Определяем мобильное устройство
    const isMobile = isMobileDevice();
    
    // 🔥 УВЕЛИЧЕННЫЕ РАЗМЕРЫ ДЛЯ ВСЕХ УСТРОЙСТВ
    let size;
    if (isSpam) {
        // Хакерская атака (дождь) - ОГРОМНЫЕ КАРТИНКИ
        if (isMobile) {
            size = Math.random() * 100 + 80; // 150-330px для мобильных
        } else {
            size = Math.random() * 200 + 180; // 180-380px для ПК
        }
    } else {
        // Первые 5 нажатий - большие, но не огромные
        if (isMobile) {
            size = Math.random() * 100 + 80; // 80-180px для мобильных
        } else {
            size = Math.random() * 80 + 70; // 70-150px для ПК
        }
    }
    
    // Ограничиваем размер, чтобы картинка не выходила за экран
    const maxSize = Math.min(window.innerWidth, window.innerHeight) * 0.7;
    size = Math.min(size, maxSize);
    
    // 🔥 ФУНКЦИЯ ДЛЯ ПРОВЕРКИ ЗАПРЕТНЫХ ЗОН
    function isPositionBlocked(x, y, width, height) {
        const elementsToAvoid = [
            '.birthday-card',
            '.birthday-card button',
            '.birthday-card h1',
            '.birthday-card h2',
            '.birthday-card p'
        ];
        
        for (let selector of elementsToAvoid) {
            const element = document.querySelector(selector);
            if (element) {
                const rect = element.getBoundingClientRect();
                const padding = 20;
                
                if (x + width > rect.left - padding &&
                    x < rect.right + padding &&
                    y + height > rect.top - padding &&
                    y < rect.bottom + padding) {
                    return true;
                }
            }
        }
        return false;
    }
    
    let x, y;
    let attempts = 0;
    const maxAttempts = 30;
    
    // Если это НЕ спам (первые 5 нажатий) - обходим блок с поздравлением
    if (!isSpam) {
        do {
            x = Math.random() * (window.innerWidth - size);
            y = Math.random() * (window.innerHeight - size);
            attempts++;
            
            if (!isPositionBlocked(x, y, size, size)) {
                break;
            }
            
            if (attempts > maxAttempts) {
                const corners = [
                    [10, 10],
                    [window.innerWidth - size - 10, 10],
                    [10, window.innerHeight - size - 10],
                    [window.innerWidth - size - 10, window.innerHeight - size - 10]
                ];
                const randomCorner = corners[Math.floor(Math.random() * corners.length)];
                x = randomCorner[0];
                y = randomCorner[1];
                break;
            }
        } while (true);
    } else {
        // Для спама - картинки могут появляться везде
        x = Math.random() * (window.innerWidth - size);
        y = Math.random() * (window.innerHeight - size);
    }
    
    img.style.left = `${Math.max(0, Math.min(x, window.innerWidth - size))}px`;
    img.style.top = `${Math.max(0, Math.min(y, window.innerHeight - size))}px`;
    img.style.width = `${size}px`;
    img.style.height = `${size}px`;
    
    // Легкий наклон для разнообразия (без полного вращения)
    const tilt = (Math.random() - 0.5) * 15;
    img.style.transform = `rotate(${tilt}deg)`;
    
    document.body.appendChild(img);
    
    // Удаляем картинку через время
    if (!isSpam) {
        setTimeout(() => {
            if (img && img.remove) img.remove();
        }, 4000);
    }
}

// Функция спама картинками
function startImageSpam() {
    if (spamInterval) return;
    
    // Удаляем старые картинки
    const oldImages = document.querySelectorAll('.virus-popup');
    oldImages.forEach(img => img.remove());
    
  // 🔥 СОЗДАЕМ ПО ОДНОЙ КАРТИНКЕ КАЖДЫЙ ИНТЕРВАЛ
    spamInterval = setInterval(() => {
        // Создаем только ОДНУ картинку за раз
        createVirusImage(true);
        
        // Небольшая вибрация для эффекта (опционально)
        if (navigator.vibrate) navigator.vibrate(50);
    }, 80); // 👈 скорость появления (100мс = 10 картинок в секунду)
    
    //document.body.classList.add('virus-infected');
}

// Функция остановки спама
function stopImageSpam() {
    if (spamInterval) {
        clearInterval(spamInterval);
        spamInterval = null;
    }
    const allImages = document.querySelectorAll('.virus-popup');
    allImages.forEach(img => img.remove());
}

// НОВЫЙ ОБРАБОТЧИК КНОПКИ
// ========== МАССИВ ТЕКСТОВ ДЛЯ КНОПКИ ==========
const BUTTON_TEXTS = [
    "🎈 Получить подарок! 🎈",           // 0 нажатий (исходный)
    "Ой, попробуй еще раз",         // 1 нажатие
    "Не то... Ещё раз!",            // 2 нажатия
    "Ну же, нажми ещё!",              // 3 нажатия
    "Ещё раз!",                      // 4 нажатия
    "Сейчас получится"               // 5 нажатий
];

// ========== ОБРАБОТЧИК КНОПКИ ==========
document.getElementById('uraBtn').onclick = async () => {
    clickCount++;
    const btn = document.getElementById('uraBtn');
    const birthdayPage = document.getElementById('birthdayPage');
    
    // 🔥 ПЕРВЫЕ 5 НАЖАТИЙ - МЕНЯЕМ ТЕКСТ И ПОКАЗЫВАЕМ КАРТИНКИ
    if (clickCount <= 5) {
        // Меняем текст кнопки (если есть текст для этого нажатия)
        if (clickCount <= BUTTON_TEXTS.length - 1) {
            btn.textContent = BUTTON_TEXTS[clickCount];
        }
        
        // Меняем цвет кнопки при каждом нажатии
        const colors = [
            '#667eea',  // исходный
            '#ff6b6b',  // 1 нажатие
            '#ff8c42',  // 2 нажатие
            '#ffd966',  // 3 нажатие
            '#6c5ce7',  // 4 нажатие
            '#ff4444'   // 5 нажатие
        ];
        btn.style.background = `linear-gradient(135deg, ${colors[clickCount]}, #764ba2)`;
        
        // Эффект нажатия
        btn.style.transform = 'scale(0.95)';
        setTimeout(() => { btn.style.transform = 'scale(1)'; }, 150);
        
        // Создаем вирусную картинку
        createVirusImage(false);
        
        return;
    }
    
    // 🔥 6-е НАЖАТИЕ - ЗАПУСКАЕМ ДОЖДЬ
   if (clickCount === 6) {
    const btn = document.getElementById('uraBtn');
    const birthdayPage = document.getElementById('birthdayPage');
    
    // Блокируем кнопку и меняем текст на первый (о начале атаки)
    btn.disabled = true;
    btn.textContent = '⚠️ОБНАРУЖЕН ВИРУС!⚠️';
    btn.style.background = 'linear-gradient(135deg, #ff4444, #cc0000)';
    btn.style.opacity = '0.9';
    btn.style.cursor = 'wait';
    
    // Добавляем эффект пульсации на время задержки
    btn.style.animation = 'buttonWarningPulse 0.8s infinite';
    
    // 🔥 ЗАДЕРЖКА 2 СЕКУНДЫ ПЕРЕД НАЧАЛОМ ДОЖДЯ
    setTimeout(() => {
        // Меняем текст на финальный перед атакой
        btn.textContent = '💀 ВИРУСНАЯ АТАКА! 💀';
        btn.style.animation = '';
        
        // 🔥 ЗАПУСКАЕМ ДОЖДЬ ИЗ КАРТИНОК
        startImageSpam();
        
        // Через 5 секунд показываем экран взлома
        setTimeout(async () => {
            // Останавливаем дождь
            stopImageSpam();
            
            // ========== ЭКРАН ВЗЛОМА ==========
            const brokenDiv = document.createElement('div');
            brokenDiv.className = 'broken-effect';
            brokenDiv.innerHTML = `<div class="broken-text">⚠️SYSTEM CRASH⚠️<br>ERROR 0xFFFFFFFF<br><span style="font-size:24px;">ТЫ СЛОМАЛ САЙТ...</span><br><span style="font-size:18px;color:#ff6666;">УСТАНОВЛЕН ЗАПРЕТ</span></div>`;
            document.body.appendChild(brokenDiv);
            
            if('vibrate' in navigator) navigator.vibrate([300, 100, 300, 100, 500, 200, 300]);
            await new Promise(resolve => setTimeout(resolve, 2500));
            brokenDiv.remove();
            
            const hackDiv = document.createElement('div');
            hackDiv.className = 'hack-warning show';
            
            const matrixDiv = document.createElement('div');
            matrixDiv.className = 'warning-matrix';
            hackDiv.appendChild(matrixDiv);
            
            let matrixInterval_warn = setInterval(() => {
                if (document.body.contains(hackDiv)) {
                    const line = document.createElement('div');
                    line.className = 'warning-line';
                    const texts = ['⚠️ HACKED ⚠️', '💀 ACCESS DENIED 💀', '🔴 VIRUS DETECTED 🔴'];
                    line.textContent = texts[Math.floor(Math.random() * texts.length)];
                    line.style.left = Math.random() * 100 + '%';
                    line.style.animationDuration = (Math.random() * 6 + 3) + 's';
                    line.style.fontSize = (Math.random() * 20 + 12) + 'px';
                    matrixDiv.appendChild(line);
                    setTimeout(() => line.remove(), 8000);
                } else {
                    clearInterval(matrixInterval_warn);
                }
            }, 200);
            
            for(let i = 0; i < 50; i++) {
                setTimeout(() => {
                    const line = document.createElement('div');
                    line.className = 'warning-line';
                    line.textContent = ['⚠️ HACKED ⚠️', '💀 ACCESS DENIED 💀', '🔴 VIRUS DETECTED 🔴'][Math.floor(Math.random() * 3)];
                    line.style.left = Math.random() * 100 + '%';
                    line.style.animationDuration = (Math.random() * 6 + 3) + 's';
                    line.style.fontSize = (Math.random() * 20 + 12) + 'px';
                    matrixDiv.appendChild(line);
                    setTimeout(() => line.remove(), 8000);
                }, i * 80);
            }
            
            const warningBox = document.createElement('div');
            warningBox.className = 'warning-box';
            warningBox.innerHTML = `
                <div class="warning-title">⚠️SYSTEM HACKED⚠️</div>
                <div class="warning-text">
                    🔴 <strong>ВСЕ ДАННЫЕ ЗАШИФРОВАНЫ</strong> 🔴<br><br>
                    <strong style="color:#ff8888;">НЕОБХОДИМ ДОСТУП</strong><br><br>
                    <small>🔐 Вирус "SHIZA_KARISHKA" заблокировал доступ к информации о подарке</small><br><br>
                    <small>🛡️ Единственный способ восстановить доступ — пройти КВЕСТ<br><br><br></small>
                    <small style="color:#ff0000; font-weight: bold;">⚠️ НЕВЕРНЫЕ ОТВЕТЫ ПРИВЕДУТ К КРИТИЧЕСКОМУ СБОЮ ⚠️</small>
                </div>
                <button class="proceed-btn" id="proceedBtn">ПРОЙТИ КВЕСТ</button>
            `;
            hackDiv.appendChild(warningBox);
            document.body.appendChild(hackDiv);
            
            document.getElementById('proceedBtn').onclick = () => {
                clearInterval(matrixInterval_warn);
                hackDiv.remove();
                birthdayPage.classList.add('fade-out');
                setTimeout(() => {
                    birthdayPage.style.display = 'none';
                    startQuest();
                }, 500);
            };
            
        }, 8000); 
        
    }, 2000); 
    
    return;
}
};

// Определение мобильного устройства
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Улучшаем обработку касаний для мобильных
document.addEventListener('touchstart', function(e) {
    // Убираем задержку при клике на мобильных
    if (e.target.classList && e.target.classList.contains('answer-btn')) {
        e.preventDefault();
        e.target.click();
    }
}, { passive: false });

// Оптимизация для скролла на мобильных
document.addEventListener('touchmove', function(e) {
    // Разрешаем скролл только в контенте
    if (e.target.closest('.content')) {
        return true;
    }
}, { passive: true });

// Добавьте в консоль для отладки
console.log('Мобильное устройство:', isMobileDevice());
console.log('Ширина экрана:', window.innerWidth);
console.log('Высота экрана:', window.innerHeight);

// ========== ФУНКЦИИ ДЛЯ НАЧАЛЬНОЙ СТРАНИЦЫ (БЕСКОНЕЧНЫЙ ЦИКЛ) ==========

// Переменные для интервалов
let balloonInterval = null;
let confettiInterval = null;
let starInterval = null;
let cakeInterval = null;
let giftInterval = null;

const CAKES = ['🎂', '🎂', '🧁', '🍰', '🎂', '🍰', '🧁'];
const GIFTS = ['🎁', '🎁', '🎀', '💝', '🎁', '🎁', '🎀'];

// Создание одного шарика
function createOneBalloon() {
    const birthdayPage = document.getElementById('birthdayPage');
    if (!birthdayPage || birthdayPage.style.display === 'none' || birthdayPage.style.opacity === '0') {
        return;
    }
    
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    const emojis = ['🎈', '🎈', '🎈', '🎈', '🎈', '🎉', '🎊', '🎈', '🎈'];
    balloon.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    balloon.style.left = Math.random() * 100 + '%';
    balloon.style.bottom = '-80px';
    const size = Math.random() * 35 + 25;
    balloon.style.fontSize = size + 'px';
    const duration = Math.random() * 8 + 6;
    balloon.style.animation = `floatUpFromBottom ${duration}s linear forwards`;
    birthdayPage.appendChild(balloon);
    setTimeout(() => balloon.remove(), duration * 1000);
}

// Создание одного конфетти
function createOneConfetti() {
    const birthdayPage = document.getElementById('birthdayPage');
    if (!birthdayPage || birthdayPage.style.display === 'none' || birthdayPage.style.opacity === '0') {
        return;
    }
    
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.top = '-30px';
    confetti.style.background = `hsl(${Math.random() * 360}, 100%, 65%)`;
    confetti.style.width = (Math.random() * 12 + 8) + 'px';
    confetti.style.height = (Math.random() * 12 + 8) + 'px';
    const duration = Math.random() * 5 + 4;
    confetti.style.animation = `confettiFallDown ${duration}s linear forwards`;
    birthdayPage.appendChild(confetti);
    setTimeout(() => confetti.remove(), duration * 1000);
}

function createOneCake() {
    const birthdayPage = document.getElementById('birthdayPage');
    if (!birthdayPage || birthdayPage.style.display === 'none' || birthdayPage.style.opacity === '0') {
        return;
    }
    
    const cake = document.createElement('div');
    cake.className = 'cake';
    cake.textContent = CAKES[Math.floor(Math.random() * CAKES.length)];
    cake.style.left = Math.random() * 100 + '%';
    cake.style.bottom = '-70px';
    const size = Math.random() * 55 + 40;
    cake.style.fontSize = size + 'px';
    const duration = Math.random() * 7 + 5;
    cake.style.animation = `floatUpCake ${duration}s linear forwards`;
    birthdayPage.appendChild(cake);
    setTimeout(() => cake.remove(), duration * 1000);
}

// Создание одного подарка
function createOneGift() {
    const birthdayPage = document.getElementById('birthdayPage');
    if (!birthdayPage || birthdayPage.style.display === 'none' || birthdayPage.style.opacity === '0') {
        return;
    }
    
    const gift = document.createElement('div');
    gift.className = 'gift';
    gift.textContent = GIFTS[Math.floor(Math.random() * GIFTS.length)];
    gift.style.left = Math.random() * 100 + '%';
    gift.style.bottom = '-75px';
    const size = Math.random() * 55 + 40;
    gift.style.fontSize = size + 'px';
    const duration = Math.random() * 7 + 5;
    gift.style.animation = `floatUpGift ${duration}s linear forwards`;
    birthdayPage.appendChild(gift);
    setTimeout(() => gift.remove(), duration * 1000);
}

// Запуск бесконечного потока тортиков
function startInfiniteCakes() {
    if (cakeInterval) clearInterval(cakeInterval);
    cakeInterval = setInterval(() => {
        createOneCake();
        // Иногда создаем 2 тортика сразу
        if (Math.random() > 0.7) {
            setTimeout(() => createOneCake(), 100);
        }
    }, 700); // каждые 0.7 секунды
}

// Запуск бесконечного потока подарков
function startInfiniteGifts() {
    if (giftInterval) clearInterval(giftInterval);
    giftInterval = setInterval(() => {
        createOneGift();
        // Иногда создаем 2 подарка сразу
        if (Math.random() > 0.7) {
            setTimeout(() => createOneGift(), 100);
        }
    }, 800); // каждые 0.8 секунды
}

// Создание одной звездочки
function createOneStar() {
    const birthdayPage = document.getElementById('birthdayPage');
    if (!birthdayPage || birthdayPage.style.display === 'none' || birthdayPage.style.opacity === '0') {
        return;
    }
    
    const star = document.createElement('div');
    star.className = 'star';
    const stars = ['⭐', '🌟', '✨', '💫', '⭐', '🌟'];
    star.textContent = stars[Math.floor(Math.random() * stars.length)];
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.fontSize = (Math.random() * 25 + 20) + 'px';
    star.style.animation = `starTwinkleFixed ${Math.random() * 1.5 + 0.8}s ease-in-out infinite`;
    birthdayPage.appendChild(star);
    // Звездочки не удаляем, они постоянно мерцают
}

// Запуск бесконечного потока шариков
function startInfiniteBalloons() {
    if (balloonInterval) clearInterval(balloonInterval);
    // Создаем шарики каждые 0.5 секунды
    balloonInterval = setInterval(() => {
        createOneBalloon();
        // Иногда создаем 2 шарика сразу
        if (Math.random() > 0.7) {
            setTimeout(() => createOneBalloon(), 100);
        }
    }, 500);
}

// Запуск бесконечного потока конфетти
function startInfiniteConfetti() {
    if (confettiInterval) clearInterval(confettiInterval);
    // Создаем конфетти каждые 0.4 секунды
    confettiInterval = setInterval(() => {
        createOneConfetti();
        // Иногда создаем 2-3 конфетти сразу
        const extra = Math.floor(Math.random() * 3);
        for (let i = 0; i < extra; i++) {
            setTimeout(() => createOneConfetti(), i * 80);
        }
    }, 400);
}

// Запуск бесконечного создания звездочек
function startInfiniteStars() {
    if (starInterval) clearInterval(starInterval);
    // Создаем новые звездочки каждые 3 секунды (но старые остаются)
    starInterval = setInterval(() => {
        createOneStar();
        // Иногда создаем две звезды
        if (Math.random() > 0.8) {
            setTimeout(() => createOneStar(), 200);
        }
    }, 3000);
}

// Остановка всех анимаций (для перехода к квесту)
function stopInfiniteAnimations() {
    if (balloonInterval) {
        clearInterval(balloonInterval);
        balloonInterval = null;
    }
    if (confettiInterval) {
        clearInterval(confettiInterval);
        confettiInterval = null;
    }
    if (starInterval) {
        clearInterval(starInterval);
        starInterval = null;
    }
        if (cakeInterval) {          // 👈 ДОБАВЛЯЕМ
        clearInterval(cakeInterval);
        cakeInterval = null;
    }
    if (giftInterval) {          // 👈 ДОБАВЛЯЕМ
        clearInterval(giftInterval);
        giftInterval = null;
    }
}

// Запускаем бесконечные анимации при загрузке
startInfiniteBalloons();
startInfiniteConfetti();
startInfiniteStars();
startInfiniteCakes();    // 👈 ДОБАВЛЯЕМ
startInfiniteGifts(); 

// Останавливаем анимации когда страница поздравления исчезает (для перехода к квесту)
const originalFadeOut = birthdayPage.classList.add;
birthdayPage.classList.add = function(className) {
    if (className === 'fade-out') {
        stopInfiniteAnimations();
    }
    return originalFadeOut.call(birthdayPage.classList, className);
};
