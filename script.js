<script>
/* 🚀 IHCC 2077 - FUTURE AI WEBSITE */
class FutureSite {
    constructor() {
        this.matrixRain();
        this.hologramText();
        this.floatingParticles();
        this.aiCounter();
        this.neonScanner();
        this.voiceActivation();
        this.hudElements();
    }

    // 🌧️ MATRIX RAIN EFFECT
    matrixRain() {
        const canvas = document.createElement('canvas');
        canvas.id = 'matrix';
        canvas.style.cssText = 'position:fixed;top:0;left:0;z-index:-1;pointer-events:none;';
        document.body.appendChild(canvas);
        
        const ctx = canvas.getContext('2d');
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
        
        const chars = '01アイユーイロハニホントチリヌルウヲアカサタナマガヤラワ。';
        const fontSize = 14;
        const columns = canvas.width / fontSize;
        const drops = Array(Math.floor(columns)).fill(1);
        
        function draw() {
            ctx.fillStyle = 'rgba(0,0,0,0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#00ff41';
            ctx.font = `${fontSize}px monospace`;
            
            drops.forEach((y, i) => {
                const text = chars[Math.floor(Math.random() * chars.length)];
                ctx.fillText(text, i * fontSize, y * fontSize);
                if (y * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
                else drops[i]++;
            });
        }
        setInterval(draw, 50);
    }

    // ✨ HOLOGRAM TEXT ANIMATION
    hologramText() {
        const h1 = document.querySelector('.hero h1');
        if (h1) {
            let hue = 0;
            setInterval(() => {
                hue = (hue + 2) % 360;
                h1.style.filter = `hue-rotate(${hue}deg) drop-shadow(0 0 30px #00ffff)`;
            }, 100);
        }
    }

    // ⭐ FLOATING PARTICLES SYSTEM
    floatingParticles() {
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position:fixed;
                width:4px;height:4px;
                background:linear-gradient(45deg,#00ffff,#ff00ff);
                border-radius:50%;
                left:${Math.random()*100}vw;
                top:${Math.random()*100}vh;
                animation: float ${5+Math.random()*5}s linear infinite;
                z-index:-1;
                pointer-events:none;
            `;
            particle.style.animationDelay = `${Math.random()*5}s`;
            document.body.appendChild(particle);
        }
    }

    // 🤖 AI TICKET COUNTER
    aiCounter() {
        let sold = 0;
        const counter = document.getElementById('tickets-sold');
        setInterval(() => {
            if (sold < 5000) {
                sold += Math.floor(Math.random() * 5) + 2;
                if (counter) {
                    counter.textContent = sold.toLocaleString();
                    counter.style.color = sold > 4000 ? '#ff4444' : '#00ff88';
                }
            }
        }, 1500);
    }

    // 📡 NEON SCANNER LINE
    neonScanner() {
        const scanner = document.createElement('div');
        scanner.id = 'scanner';
        scanner.style.cssText = `
            position:fixed;top:0;left:0;width:2px;height:100vh;
            background:linear-gradient(to bottom,#00ffff,#ff00ff);
            box-shadow:0 0 20px #00ffff;
            z-index:999;
            animation:scan 3s linear infinite;
        `;
        document.body.appendChild(scanner);
    }

    // 🎤 VOICE ACTIVATION
    voiceActivation() {
        if ('webkitSpeechRecognition' in window) {
            const recognition = new webkitSpeechRecognition();
            recognition.continuous = false;
            recognition.lang = 'en-IN';
            
            document.addEventListener('click', () => {
                recognition.start();
            }, { once: true });
            
            recognition.onresult = (e) => {
                const command = e.results[0][0].transcript.toLowerCase();
                if (command.includes('ticket') || command.includes('book')) {
                    window.open('https://wa.me/9XXXXXXXXX?text=IHCC+Ticket+Booking+%F0%9F%8E%89', '_blank');
                }
            };
        }
    }

    // 🖥️ HUD ELEMENTS
    hudElements() {
        // Date/Time HUD
        const hud = document.createElement('div');
        hud.id = 'hud';
        hud.style.cssText = `
            position:fixed;top:20px;right:20px;
            background:rgba(0,0,0,0.8);backdrop-filter:blur(10px);
            color:#00ffff;font-family:'Orbitron',monospace;
            padding:15px;border-radius:10px;border:1px solid #00ffff;
            font-size:14px;z-index:1000;
        `;
        document.body.appendChild(hud);
        
        setInterval(() => {
            const now = new Date();
            hud.innerHTML = `
                ${now.toLocaleDateString('en-IN')} | ${now.toLocaleTimeString('en-IN')}<br>
                Tickets: <span id="hud-tickets">0</span>/5000<br>
                Visitors: ${Math.floor(Math.random()*1000)}+
            `;
        }, 1000);
    }
}

// 🚀 INIT ON LOAD
window.addEventListener('load', () => {
    new FutureSite();
    
    // Terminal effect
    const terminal = document.createElement('div');
    terminal.innerHTML = '<div style="position:fixed;bottom:20px;left:20px;color:#00ff41;font-family:monospace;font-size:12px;z-index:1000;">$ ihcc2077 --live --tickets=5000 --status=ONLINE</div>';
    document.body.appendChild(terminal);
});

// 🔄 SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href')).scrollIntoView({behavior: 'smooth'});
    });
    // 🔐 LOGIN + DASHBOARD FUNCTIONS
let members = ['ORG001', 'ORG002', 'ADMIN']; // Member IDs
let pins = { 'ORG001': '1234', 'ORG002': '5678', 'ADMIN': '0000' };
let participants = [
    { id: 'P001', name: 'Rahul Kumar', events: ['Cricket', 'Chess'], status: 'Verified' },
    { id: 'P002', name: 'Priya Singh', events: ['Dance', 'Painting'], status: 'Verified' }
];

// 👑 MEMBER LOGIN
function memberLogin() {
    const id = document.getElementById('member-id').value;
    const pin = document.getElementById('member-pin').value;
    const status = document.getElementById('member-status');
    
    if (pins[id] && pins[id] === pin) {
        status.innerHTML = '✅ <strong>Welcome ' + id + '!</strong>';
        status.style.color = '#00ff88';
        document.getElementById('member-dashboard').style.display = 'block';
        updateAdminStats();
    } else {
        status.innerHTML = '❌ Invalid ID/PIN';
        status.style.color = '#ff4444';
    }
}

// 📊 ADMIN STATS
function updateAdminStats() {
    const revenue = Math.floor(Math.random() * 500000);
    document.getElementById('total-revenue').textContent = '₹' + revenue.toLocaleString();
    document.getElementById('admin-tickets').textContent = ticketsSold;
}

function resetCounter() {
    ticketsSold = 0;
    document.getElementById('tickets-sold').textContent = '0';
    alert('✅ Counter Reset!');
}

// ✅ ENTRY CARD CHECK
function checkEntryCard() {
    const pid = document.getElementById('participant-id').value;
    const name = document.getElementById('participant-name').value;
    const card = document.getElementById('entry-card');
    
    const participant = participants.find(p => p.id === pid && p.name === name);
    
    if (participant) {
        card.innerHTML = `
            <div class="entry-card">
                <h3>✅ ENTRY APPROVED</h3>
                <p><strong>ID:</strong> ${participant.id}</p>
                <p><strong>Name:</strong> ${participant.name}</p>
                <p><strong>Events:</strong> ${participant.events.join(', ')}</p>
                <p><strong>Status:</strong> <span style="color:#00ff88">${participant.status}</span></p>
                <div class="qr-code">QR SCAN READY</div>
                <button onclick="printCard()" class="btn">🖨️ Print</button>
            </div>
        `;
        card.style.display = 'block';
    } else {
        card.innerHTML = '<p style="color:#ff4444">❌ Invalid Details</p>';
        card.style.display = 'block';
    }
}

function printCard() {
    window.print();
}

// 🥇 LIVE RESULTS UPDATE
setInterval(() => {
    const results = document.getElementById('live-results');
    results.innerHTML = `
        <p>🏏 Cricket: Team Alpha <strong>WINS</strong></p>
        <p>💃 Dance Solo: Priya S. <strong>1st</strong></p>
        <p>🎨 Painting: Rahul K. <strong>2nd</strong></p>
        <p>⚡ Hackathon: Team X <strong>Champion</strong></p>
    `;
}, 10000);
// 🏆 RESULTS & STATUS DATA
let resultsData = {
    cricket: {
        'P001': { rank: 1, name: 'Rahul Kumar', score: 85, status: 'Winner' },
        'P003': { rank: 2, name: 'Amit Sharma', score: 78, status: 'Runner-up' },
        'P005': { rank: 3, name: 'Riya Patel', score: 72, status: '3rd' }
    },
    dance: {
        'P002': { rank: 1, name: 'Priya Singh', score: 92, status: 'Winner' },
        'P007': { rank: 2, name: 'Neha Gupta', score: 88, status: 'Runner-up' },
        'P009': { rank: 3, name: 'Karan Roy', score: 85, status: '3rd' }
    },
    painting: {
        'P004': { rank: 1, name: 'Anjali Verma', score: 95, status: 'Winner' },
        'P006': { rank: 2, name: 'Vikash Yadav', score: 89, status: 'Runner-up' },
        'P008': { rank: 3, name: 'Suman Devi', score: 84, status: '3rd' }
    },
    hackathon: {
        'P010': { rank: 1, name: 'Team Alpha', score: 98, status: 'Champion' },
        'P011': { rank: 2, name: 'Team Beta', score: 94, status: '1st Runner-up' },
        'P012': { rank: 3, name: 'Team Gamma', score: 90, status: '2nd Runner-up' }
    }
};

// 🔍 STATUS CHECKER
function checkStatus() {
    const id = document.getElementById('status-id').value.toUpperCase();
    const result = document.getElementById('status-result');
    
    let found = false;
    for (let eventName in resultsData) {
        if (resultsData[eventName][id]) {
            const data = resultsData[eventName][id];
            result.innerHTML = `
                <div class="status-card">
                    <h4>✅ ${eventName.toUpperCase()}</h4>
                    <p><strong>Name:</strong> ${data.name}</p>
                    <p><strong>Rank:</strong> 🥇 ${data.rank} | Score: ${data.score}</p>
                    <p><strong>Status:</strong> <span style="color:#00ff88">${data.status}</span></p>
                    <button onclick="shareResult('${id}')" class="btn">📱 Share Result</button>
                </div>
            `;
            found = true;
            break;
        }
    }
    
    if (!found) {
        result.innerHTML = '<p style="color:#ff4444">❌ ID not found in any event</p>';
    }
    result.style.display = 'block';
}

// 🏆 LIVE LEADERBOARD
function updateLeaderboard() {
    const eventSelect = document.getElementById('event-select').value;
    const leaderboard = document.getElementById('leaderboard');
    const eventResults = resultsData[eventSelect];
    
    let html = '<div class="rank-list">';
    Object.entries(eventResults).forEach(([id, data]) => {
        html += `
            <div class="rank-item">
                <span class="rank">${data.rank}️⃣</span>
                <span class="name">${data.name}</span>
                <span class="score">${data.score}</span>
            </div>
        `;
    });
    html += '</div>';
    leaderboard.innerHTML = html;
}

// 👑 CHAMPIONS LIST
function loadChampions() {
    const champions = document.getElementById('champions-list');
    let html = '';
    for (let eventName in resultsData) {
        const winner = Object.values(resultsData[eventName])[0];
        html += `<p>🏆 ${eventName.toUpperCase()}: ${winner.name} (${winner.score})</p>`;
    }
    champions.innerHTML = html;
}

// 📱 SHARE RESULT
function shareResult(id) {
    const text = `IHCC Result: My rank ${resultsData.cricket[id]?.rank || 'TBD'} in ${id}! 🎉 #IHCC2026`;
    const url = `https://wa.me/9XXXXXXXXX?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
}

// 🌀 AUTO UPDATE RESULTS (Every 30 sec)
setInterval(() => {
    // Simulate live updates
    Object.keys(resultsData).forEach(event => {
        Object.keys(resultsData[event]).forEach(id => {
            if (Math.random() > 0.9) {
                resultsData[event][id].score += Math.floor(Math.random() * 3);
            }
        });
    });
    if (document.getElementById('leaderboard')) updateLeaderboard();
}, 30000);

// INIT
window.addEventListener('load', () => {
    updateLeaderboard();
    loadChampions();
});
// 📊 REGISTRATION DATABASE (Local Storage)
let participantDB = JSON.parse(localStorage.getItem('participants')) || [];
let memberDB = JSON.parse(localStorage.getItem('members')) || [];

// ➕ PARTICIPANT REGISTRATION
document.getElementById('participant-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('new-name').value;
    const phone = document.getElementById('new-phone').value;
    const events = document.getElementById('new-events').value;
    
    // Generate Unique ID
    const lastId = participantDB.length ? Math.max(...participantDB.map(p => parseInt(p.id.slice(1)))) : 0;
    const newId = 'P' + String(lastId + 1).padStart(3, '0');
    
    // Create Account
    const newParticipant = {
        id: newId,
        name: name,
        phone: phone,
        events: events.split(',').map(e => e.trim()),
        status: 'Pending',
        registered: new Date().toLocaleString('en-IN'),
        payment: 'Pending'
    };
    
    participantDB.push(newParticipant);
    localStorage.setItem('participants', JSON.stringify(participantDB));
    
    document.getElementById('reg-status').innerHTML = `
        ✅ <strong>${newId}</strong> Created Successfully!<br>
        WhatsApp: ${phone}<br>
        <button onclick="copyId('${newId}')" class="btn">📋 Copy ID</button>
    `;
    document.getElementById('reg-status').style.color = '#00ff88';
    
    // Add to results data
    resultsData.cricket[newId] = { rank: '-', name: name, score: 0, status: 'Registered' };
    updateLeaderboard();
});

// 👑 MEMBER REGISTRATION
document.getElementById('member-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('new-member-name').value;
    const phone = document.getElementById('new-member-phone').value;
    const role = document.getElementById('member-role').value;
    
    const lastMemberId = memberDB.length ? Math.max(...memberDB.map(m => parseInt(m.id.slice(3)))) : 0;
    const newMemberId = 'ORG' + String(lastMemberId + 1).padStart(3, '0');
    
    const newMember = {
        id: newMemberId,
        name: name,
        phone: phone,
        role: role,
        status: 'Pending Approval',
        registered: new Date().toLocaleString('en-IN')
    };
    
    memberDB.push(newMember);
    localStorage.setItem('members', JSON.stringify(memberDB));
    
    document.getElementById('member-reg-status').innerHTML = `
        ✅ <strong>${newMemberId}</strong> Registered!<br>
        Role: ${role.toUpperCase()}<br>
        <strong>Pending Admin Approval</strong>
    `;
    document.getElementById('member-reg-status').style.color = '#00ff88';
});

// 🔑 ADMIN APPROVAL FUNCTION (Members login के बाद add)
function approveMember(memberId) {
    const member = memberDB.find(m => m.id === memberId);
    if (member) {
        member.status = 'Approved';
        member.pin = Math.floor(1000 + Math.random() * 9000); // Random 4-digit PIN
        pins[memberId] = member.pin.toString();
        localStorage.setItem('members', JSON.stringify(memberDB));
        alert(`✅ ${memberId} Approved! PIN: ${member.pin}`);
    }
}

// 📋 COPY ID TO CLIPBOARD
function copyId(id) {
    navigator.clipboard.writeText(id);
    alert(`✅ ${id} Copied! Save this ID`);
}

// 🔄 LOAD REGISTRATION DATA ON START
function loadRegistrationData() {
    // Merge with existing participants
    participantDB.forEach(p => {
        if (!participants.find(x => x.id === p.id)) {
            participants.push({ id: p.id, name: p.name, events: p.events, status: p.status });
        }
    });
    
    console.log(`📊 ${participantDB.length} Participants | ${memberDB.length} Members`);
}

// SHARE REGISTRATION
function shareRegistration(type, id) {
    const text = `IHCC ${type}: ${id} Registered! 🎉 #IHCC2026`;
    window.open(`https://wa.me/9XXXXXXXXX?text=${encodeURIComponent(text)}`, '_blank');
}
// script.js में add
function countdownTimer() {
    const eventDate = new Date('Jan 1, 2026 09:00:00').getTime();
    const timer = document.getElementById('countdown');
    setInterval(() => {
        const now = new Date().getTime();
        const distance = eventDate - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        if (timer) timer.innerHTML = `${days}d ${hours}h`;
    }, 1000);
}

});
</script>
