/* ============================================
   WAY TO SHINE — App Logic
   ============================================ */

// ============ DATA ============

const ednMembers = [
    { id: 'edn01', name: 'Hadsavee', nickname: 'Hua', realName: 'Hadsavee aiyratha', age: 17, ig: '@Hua.edn48official', emoji: '🦦', group: 'edn48', votes: 0 },
    { id: 'edn02', name: 'Stella', nickname: 'สเตลล่า', realName: 'สเตลล่า ภัทรวดี', age: 19, ig: '@stella.edn48', emoji: '🌟', group: 'edn48', votes: 0 },
    { id: 'edn03', name: 'Bright', nickname: 'ไบร์ท', realName: 'ไบร์ท ชลิตา', age: 17, ig: '@bright.edn48', emoji: '✨', group: 'edn48', votes: 0 },
    { id: 'edn04', name: 'Nova', nickname: 'โนว่า', realName: 'โนว่า ปรียานันท์', age: 20, ig: '@nova.edn48', emoji: '💫', group: 'edn48', votes: 0 },
    { id: 'edn05', name: 'Saeng', nickname: 'แสง', realName: 'แสงดาว กัญญ์วรา', age: 18, ig: '@saeng.edn48', emoji: '🔆', group: 'edn48', votes: 0 },
    { id: 'edn06', name: 'Fah', nickname: 'ฟ้า', realName: 'ฟ้าใส มณีรัตน์', age: 19, ig: '@fah.edn48', emoji: '🌠', group: 'edn48', votes: 0 },
    { id: 'edn07', name: 'Napa', nickname: 'นภา', realName: 'นภาพร ศรีสว่าง', age: 17, ig: '@napa.edn48', emoji: '⚡', group: 'edn48', votes: 0 },
    { id: 'edn08', name: 'Prao', nickname: 'พราว', realName: 'พราวพิมล ดาราวงศ์', age: 18, ig: '@prao.edn48', emoji: '🌙', group: 'edn48', votes: 0 },
];

const tlpMembers = [
    { id: 'tlp01', name: 'Tulip', nickname: 'ทิวลิป', realName: 'ทิวลิป ศิริพร', age: 18, ig: '@tulip.tlp48', emoji: '🌷', group: 'tlp48', votes: 0 },
    { id: 'tlp02', name: 'Rose', nickname: 'โรส', realName: 'โรสมารี วรรณดี', age: 19, ig: '@rose.tlp48', emoji: '🌹', group: 'tlp48', votes: 0 },
    { id: 'tlp03', name: 'Lily', nickname: 'ลิลลี่', realName: 'ลิลลี่ ปัทมา', age: 17, ig: '@lily.tlp48', emoji: '🪷', group: 'tlp48', votes: 0 },
    { id: 'tlp04', name: 'Iris', nickname: 'ไอริส', realName: 'ไอริส กมลชนก', age: 20, ig: '@iris.tlp48', emoji: '💐', group: 'tlp48', votes: 0 },
    { id: 'tlp05', name: 'Daisy', nickname: 'เดซี่', realName: 'เดซี่ พิมพ์มาดา', age: 18, ig: '@daisy.tlp48', emoji: '🌸', group: 'tlp48', votes: 0 },
    { id: 'tlp06', name: 'Violet', nickname: 'ไวโอเล็ต', realName: 'ไวโอเล็ต ชนิกานต์', age: 19, ig: '@violet.tlp48', emoji: '🌺', group: 'tlp48', votes: 0 },
    { id: 'tlp07', name: 'Jasmine', nickname: 'แจส', realName: 'แจสมิน ภัทรา', age: 17, ig: '@jasmine.tlp48', emoji: '🌼', group: 'tlp48', votes: 0 },
    { id: 'tlp08', name: 'Orchid', nickname: 'ออร์คิด', realName: 'ออร์คิด สิรินทร์', age: 18, ig: '@orchid.tlp48', emoji: '🏵️', group: 'tlp48', votes: 0 },
];

const ednEvents = [
    { day: '28', month: 'NOV', title: 'EDN48 Mini Concert', desc: 'สยามพารากอน, 18:00', tag: 'LIVE', tagClass: 'tag-live' },
    { day: '03', month: 'DEC', title: 'Fan Meeting Vol.2', desc: 'MCC Hall, 14:00', tag: 'EVENT', tagClass: 'tag-event' },
    { day: '10', month: 'DEC', title: '2nd Single Release', desc: 'ปล่อยซิงเกิลที่ 2', tag: 'RELEASE', tagClass: 'tag-release' },
    { day: '15', month: 'DEC', title: 'EDN48 x TLP48 Joint Live', desc: 'Impact Arena, 19:00', tag: 'LIVE', tagClass: 'tag-live' },
    { day: '25', month: 'DEC', title: 'Christmas Special Show', desc: 'CentralWorld, 17:00', tag: 'EVENT', tagClass: 'tag-event' },
];

const tlpEvents = [
    { day: '29', month: 'NOV', title: 'TLP48 Showcase', desc: 'เซ็นทรัลเวิลด์, 16:00', tag: 'LIVE', tagClass: 'tag-live' },
    { day: '05', month: 'DEC', title: 'TLP48 Fan Sign Event', desc: 'สยามเซ็นเตอร์, 13:00', tag: 'EVENT', tagClass: 'tag-event' },
    { day: '12', month: 'DEC', title: 'Tulip Garden MV Release', desc: 'Music Video ออกอย่างเป็นทางการ', tag: 'RELEASE', tagClass: 'tag-release' },
    { day: '15', month: 'DEC', title: 'EDN48 x TLP48 Joint Live', desc: 'Impact Arena, 19:00', tag: 'LIVE', tagClass: 'tag-live' },
    { day: '31', month: 'DEC', title: 'New Year Countdown Show', desc: 'สยามพารากอน, 22:00', tag: 'EVENT', tagClass: 'tag-event' },
];

const ednSchedule = [
    { week: 'WEEK 1', items: [
        { time: '14:00', title: 'Theater Performance', desc: 'โรงละคร EDN48' },
        { time: '18:00', title: 'Live Streaming', desc: 'YouTube Channel' },
    ]},
    { week: 'WEEK 2', items: [
        { time: '13:00', title: 'Handshake Event', desc: 'ลานกิจกรรม สยามพารากอน' },
        { time: '19:00', title: 'Mini Concert', desc: 'Moonstar Studio' },
    ]},
    { week: 'WEEK 3', items: [
        { time: '15:00', title: 'Fan Meeting', desc: 'MCC Hall' },
        { time: '20:00', title: 'Special Live Show', desc: 'Impact Arena' },
    ]},
    { week: 'WEEK 4', items: [
        { time: '14:00', title: 'Photo Session', desc: 'Studio 48' },
        { time: '17:00', title: 'Year-End Party', desc: 'CentralWorld' },
    ]},
];

const tlpSchedule = [
    { week: 'WEEK 1', items: [
        { time: '14:00', title: 'Theater Performance', desc: 'โรงละคร TLP48' },
        { time: '17:00', title: 'Instagram Live', desc: '@tlp48official' },
    ]},
    { week: 'WEEK 2', items: [
        { time: '13:00', title: 'Fan Sign Event', desc: 'สยามเซ็นเตอร์' },
        { time: '18:00', title: 'Mini Showcase', desc: 'Tulip Garden Stage' },
    ]},
    { week: 'WEEK 3', items: [
        { time: '15:00', title: 'Variety Show Recording', desc: 'Channel 48 Studio' },
        { time: '19:00', title: 'Concert Rehearsal', desc: 'Impact Arena' },
    ]},
    { week: 'WEEK 4', items: [
        { time: '14:00', title: 'Charity Event', desc: 'สวนลุมพินี' },
        { time: '20:00', title: 'New Year Special', desc: 'สยามพารากอน' },
    ]},
];

const ednWorks = [
    { title: 'EDN48 1st Single — Starlight Symphony', type: '1st SINGLE', emoji: '⭐', desc: 'ซิงเกิลแรกของ EDN48', typeClass: 'tag-release' },
    { title: 'Starlight Symphony MV', type: 'MUSIC VIDEO', emoji: '🎬', desc: 'มิวสิกวิดีโอ Starlight Symphony', typeClass: 'tag-live' },
    { title: 'EDN48 1st Concert — Shine Bright', type: 'CONCERT', emoji: '🎤', desc: 'คอนเสิร์ตแรกของ EDN48', typeClass: 'tag-event' },
    { title: 'Behind The Stars — Documentary', type: 'DOCUMENTARY', emoji: '📹', desc: 'สารคดีเบื้องหลัง EDN48', typeClass: 'tag-event' },
];

const tlpWorks = [
    { title: 'TLP48 1st Single — Tulip Garden', type: '1st SINGLE', emoji: '🌷', desc: 'ซิงเกิลแรกของ TLP48', typeClass: 'tag-release' },
    { title: 'Tulip Garden MV', type: 'MUSIC VIDEO', emoji: '🎬', desc: 'มิวสิกวิดีโอ Tulip Garden', typeClass: 'tag-live' },
    { title: 'TLP48 Debut Showcase', type: 'SHOWCASE', emoji: '🎤', desc: 'โชว์เคสเดบิวต์ TLP48', typeClass: 'tag-event' },
    { title: 'Blooming Days — Photo Book', type: 'PHOTOBOOK', emoji: '📸', desc: 'โฟโต้บุ๊ค Blooming Days', typeClass: 'tag-event' },
];

const ednPlaylist = [
    { num: '01', name: 'Starlight Symphony', dur: '4:12' },
    { num: '02', name: 'Shining Forever', dur: '3:48' },
    { num: '03', name: 'Night Sky Promise', dur: '4:05' },
    { num: '04', name: 'Starlight Symphony (Inst.)', dur: '4:12' },
    { num: '05', name: 'Shining Forever (Inst.)', dur: '3:48' },
];

const tlpPlaylist = [
    { num: '01', name: 'Tulip Garden', dur: '3:56' },
    { num: '02', name: 'Bloom With Me', dur: '4:02' },
    { num: '03', name: 'Petal Promise', dur: '3:45' },
    { num: '04', name: 'Tulip Garden (Inst.)', dur: '3:56' },
    { num: '05', name: 'Bloom With Me (Inst.)', dur: '4:02' },
];

const shopItems = [
    { icon: '📸', name: 'Digital Photo Set', price: 50, unit: 'TOKEN' },
    { icon: '🎵', name: 'Exclusive Audio Clip', price: 30, unit: 'TOKEN' },
    { icon: '🃏', name: 'Virtual Photo Card', price: 80, unit: 'TOKEN' },
    { icon: '💌', name: 'Digital Letter', price: 40, unit: 'TOKEN' },
    { icon: '🎁', name: 'Mystery Box', price: 100, unit: 'TOKEN' },
    { icon: '👑', name: 'VIP Badge', price: 200, unit: 'TOKEN' },
];

const redeemCodes = {
    'SHINE2026': { stars: 50, tokens: 100, msg: 'Welcome Gift! ⭐' },
    'EDEN48': { stars: 30, tokens: 50, msg: 'EDEN Club Bonus!' },
    'STARLIGHT': { stars: 100, tokens: 0, msg: '100 Stars สำหรับโหวต! ⭐' },
    'TULIPGARDEN': { stars: 0, tokens: 150, msg: '150 Tokens Shopping! 🛍️' },
    'WAYTOSHINEFOREVER': { stars: 200, tokens: 200, msg: 'Super Reward! 🎉' },
};

// ============ STATE ============

let state = loadState();

function getDefaultState() {
    return {
        stars: 100,
        tokens: 200,
        oshi: [],       // array of member ids
        kamiOshi: null, // single member id
        usedCodes: [],
        memberVotes: {},
    };
}

function loadState() {
    try {
        const saved = localStorage.getItem('wts_state');
        if (saved) return JSON.parse(saved);
    } catch(e) {}
    return getDefaultState();
}

function saveState() {
    localStorage.setItem('wts_state', JSON.stringify(state));
    updateUI();
}

// ============ NAVIGATION ============

let currentPage = 'welcome';

function navigateTo(page) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    // Show target page
    const target = document.getElementById('page-' + page);
    if (target) {
        target.classList.add('active');
        currentPage = page;
    }

    // Update nav active state
    document.querySelectorAll('.nav-links a').forEach(a => {
        a.classList.remove('active');
        if (a.dataset.page === page) a.classList.add('active');
    });

    // Show currency in nav (hide on welcome)
    const navCurrency = document.getElementById('navCurrency');
    if (page !== 'welcome') {
        navCurrency.style.display = 'flex';
    } else {
        navCurrency.style.display = 'none';
    }

    // Close mobile nav
    document.getElementById('navLinks').classList.remove('open');

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    return false;
}

function toggleNav() {
    document.getElementById('navLinks').classList.toggle('open');
}

// ============ TAB SWITCHING ============

function switchGroupTab(group, tab) {
    const page = document.getElementById('page-' + group);
    if (!page) return;

    // Deactivate all tabs & contents in this group
    page.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    page.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

    // Activate selected
    const content = document.getElementById(group + '-' + tab);
    if (content) content.classList.add('active');

    // Activate button
    event.target.classList.add('active');
}

function switchVoteTab(group) {
    document.querySelectorAll('.vote-tab-btn').forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');
    renderVoteGrid(group);
}

// ============ RENDER FUNCTIONS ============

function renderSparkPodium(containerId, members) {
    const container = document.getElementById(containerId);
    const sorted = [...members].sort((a, b) => {
        const aVotes = (state.memberVotes[a.id] || 0) + a.votes;
        const bVotes = (state.memberVotes[b.id] || 0) + b.votes;
        return bVotes - aVotes;
    });
    const top3 = sorted.slice(0, 3);
    const isEdn = containerId.includes('edn');
    const avatarClass = isEdn ? 'edn-avatar' : 'tlp-avatar';
    const ranks = ['gold', 'silver', 'bronze'];
    const order = [1, 0, 2]; // display order: 2nd, 1st, 3rd

    container.innerHTML = order.map(i => {
        if (!top3[i]) return '';
        const m = top3[i];
        const totalVotes = (state.memberVotes[m.id] || 0) + m.votes;
        return `
            <div class="podium-card ${i === 0 ? 'rank-1' : ''}">
                <div class="podium-rank ${ranks[i]}">#${i + 1}</div>
                <div class="podium-avatar ${avatarClass}">${m.emoji}</div>
                <div class="podium-name">${m.name}</div>
                <div class="podium-votes">${totalVotes.toLocaleString()} votes</div>
            </div>
        `;
    }).join('');
}

function renderEvents(containerId, events, isTlp = false) {
    const container = document.getElementById(containerId);
    container.innerHTML = events.map(e => `
        <div class="event-item ${isTlp ? 'tlp-event' : ''}">
            <div class="event-date">
                <div class="event-day">${e.day}</div>
                <div class="event-month">${e.month}</div>
            </div>
            <div class="event-info">
                <h4>${e.title}</h4>
                <p>${e.desc}</p>
            </div>
            <span class="event-tag ${e.tagClass}">${e.tag}</span>
        </div>
    `).join('');
}

function renderMembers(containerId, members) {
    const container = document.getElementById(containerId);
    const isEdn = containerId.includes('edn');
    const memberClass = isEdn ? 'edn-member' : 'tlp-member';

    container.innerHTML = members.map(m => {
        const isOshi = state.oshi.includes(m.id);
        const isKami = state.kamiOshi === m.id;
        return `
            <div class="member-card ${memberClass}" onclick="openMemberModal('${m.id}')">
                <div class="member-photo">
                    <span class="member-kami-badge ${isKami ? 'active' : ''}">KAMI ♛</span>
                    <span class="member-oshi-badge ${isOshi ? 'active' : ''}"><i class="fas fa-heart"></i></span>
                    ${m.emoji}
                </div>
                <div class="member-info">
                    <h4>${m.name}</h4>
                    <p class="member-nickname">${m.nickname} · ${m.age} ปี</p>
                    <div class="member-actions">
                        <button class="btn-oshi ${isOshi ? 'active-oshi' : ''}" onclick="event.stopPropagation(); toggleOshi('${m.id}')">
                            <i class="fas fa-heart"></i> OSHI
                        </button>
                        <button class="btn-kami ${isKami ? 'active-kami' : ''}" onclick="event.stopPropagation(); setKamiOshi('${m.id}')">
                            <i class="fas fa-crown"></i> KAMI
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function renderSchedule(containerId, schedule, isTlp = false) {
    const container = document.getElementById(containerId);
    container.innerHTML = schedule.map(week => `
        <div class="schedule-week">
            <div class="schedule-week-label">${week.week}</div>
            <div class="schedule-items">
                ${week.items.map(item => `
                    <div class="schedule-item ${isTlp ? 'tlp-schedule' : ''}">
                        <span class="schedule-time">${item.time}</span>
                        <div>
                            <div class="schedule-title">${item.title}</div>
                            <div class="schedule-desc">${item.desc}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

function renderWorks(containerId, works, isTlp = false) {
    const container = document.getElementById(containerId);
    container.innerHTML = works.map(w => `
        <div class="work-card">
            <div class="work-cover ${isTlp ? 'tlp-work-cover' : 'edn-work-cover'}">
                ${w.emoji}
            </div>
            <div class="work-info">
                <h4>${w.title}</h4>
                <p>${w.desc}</p>
                <span class="work-type ${w.typeClass}">${w.type}</span>
            </div>
        </div>
    `).join('');
}

function renderPlaylist(containerId, playlist, isTlp = false) {
    const container = document.getElementById(containerId);
    container.innerHTML = playlist.map(t => `
        <div class="track-item">
            <span class="track-num">${t.num}</span>
            <span class="track-name">${t.name}</span>
            <span class="track-dur">${t.dur}</span>
            <button class="track-play ${isTlp ? 'tlp-play' : ''}" onclick="playTrack('${t.name}')">
                <i class="fas fa-play"></i>
            </button>
        </div>
    `).join('');
}

function renderVoteGrid(group = 'edn') {
    const container = document.getElementById('voteGrid');
    const members = group === 'edn' ? ednMembers : tlpMembers;
    const isEdn = group === 'edn';
    const avatarClass = isEdn ? 'edn-avatar' : 'tlp-avatar';

    const sorted = [...members].sort((a, b) => {
        const aV = (state.memberVotes[a.id] || 0) + a.votes;
        const bV = (state.memberVotes[b.id] || 0) + b.votes;
        return bV - aV;
    });

    container.innerHTML = sorted.map(m => {
        const totalVotes = (state.memberVotes[m.id] || 0) + m.votes;
        return `
            <div class="vote-card" onclick="openVoteModal('${m.id}')">
                <div class="vote-avatar ${avatarClass}">${m.emoji}</div>
                <h4>${m.name}</h4>
                <div class="vote-count"><strong>${totalVotes.toLocaleString()}</strong> votes</div>
                <button class="btn-vote-member" onclick="event.stopPropagation(); openVoteModal('${m.id}')">
                    <i class="fas fa-star"></i> VOTE
                </button>
            </div>
        `;
    }).join('');
}

function renderShop() {
    const container = document.getElementById('shopItems');
    container.innerHTML = shopItems.map(item => `
        <div class="shop-item" onclick="buyItem('${item.name}', ${item.price})">
            <div class="shop-item-icon">${item.icon}</div>
            <h5>${item.name}</h5>
            <div class="shop-item-price">${item.price} ${item.unit}</div>
            <button class="btn-buy">BUY</button>
        </div>
    `).join('');
}

function renderArtistsPage() {
    // EDN mini grid
    const ednGrid = document.getElementById('artists-edn-grid');
    ednGrid.innerHTML = ednMembers.map(m => `
        <div class="artist-mini-card" onclick="openMemberModal('${m.id}')">
            <div class="artist-mini-avatar edn-avatar">${m.emoji}</div>
            <h4>${m.name}</h4>
            <p>${m.nickname}</p>
        </div>
    `).join('');

    // TLP mini grid
    const tlpGrid = document.getElementById('artists-tlp-grid');
    tlpGrid.innerHTML = tlpMembers.map(m => `
        <div class="artist-mini-card" onclick="openMemberModal('${m.id}')">
            <div class="artist-mini-avatar tlp-avatar">${m.emoji}</div>
            <h4>${m.name}</h4>
            <p>${m.nickname}</p>
        </div>
    `).join('');
}

function renderAccount() {
    // Update wallet
    document.getElementById('accStars').textContent = state.stars.toLocaleString();
    document.getElementById('accTokens').textContent = state.tokens.toLocaleString();

    // Kami Oshi
    const kamiDisplay = document.getElementById('kamiOshiDisplay');
    if (state.kamiOshi) {
        const m = findMember(state.kamiOshi);
        if (m) {
            const avatarClass = m.group === 'edn48' ? 'edn-avatar' : 'tlp-avatar';
            kamiDisplay.innerHTML = `
                <div class="kami-card">
                    <div class="kami-card-avatar ${avatarClass}">${m.emoji}</div>
                    <div class="kami-card-info">
                        <h4>${m.name}</h4>
                        <p>${m.nickname} · ${m.group.toUpperCase()}</p>
                    </div>
                    <div class="kami-crown">👑</div>
                </div>
            `;
        }
    } else {
        kamiDisplay.innerHTML = `
            <div class="kami-empty">
                <i class="fas fa-heart-broken"></i>
                <p>ยังไม่ได้เลือก Kami Oshi</p>
                <button class="btn-select-kami" onclick="navigateTo('artists')">เลือก Kami Oshi →</button>
            </div>
        `;
    }

    // Oshi List
    const oshiList = document.getElementById('oshiList');
    const oshiCount = document.getElementById('oshiCount');
    oshiCount.textContent = state.oshi.length;

    if (state.oshi.length === 0) {
        oshiList.innerHTML = `
            <div class="oshi-empty">
                <i class="fas fa-heart"></i>
                <p>ยังไม่มี Oshi — ไปกด OSHI ที่หน้า MEMBERS ได้เลย!</p>
            </div>
        `;
    } else {
        oshiList.innerHTML = state.oshi.map(id => {
            const m = findMember(id);
            if (!m) return '';
            const avatarClass = m.group === 'edn48' ? 'edn-avatar' : 'tlp-avatar';
            return `
                <div class="oshi-card">
                    <div class="oshi-card-avatar ${avatarClass}">${m.emoji}</div>
                    <div>
                        <h5>${m.name}</h5>
                        <p>${m.group.toUpperCase()}</p>
                    </div>
                </div>
            `;
        }).join('');
    }
}

// ============ MEMBER MODAL ============

function findMember(id) {
    return [...ednMembers, ...tlpMembers].find(m => m.id === id);
}

function openMemberModal(id) {
    const m = findMember(id);
    if (!m) return;

    const isEdn = m.group === 'edn48';
    const avatarClass = isEdn ? 'edn-avatar' : 'tlp-avatar';
    const bgClass = isEdn
        ? 'background: linear-gradient(135deg, rgba(255,215,0,0.08), rgba(255,140,0,0.05));'
        : 'background: linear-gradient(135deg, rgba(255,105,180,0.08), rgba(255,20,147,0.05));';

    const isOshi = state.oshi.includes(m.id);
    const isKami = state.kamiOshi === m.id;

    const content = document.getElementById('modalContent');
    content.innerHTML = `
        <div class="modal-member-photo" style="${bgClass}">
            <span style="font-size: 4rem;">${m.emoji}</span>
        </div>
        <div class="modal-member-name">${m.name}</div>
        <div class="modal-member-real-name">${m.realName}</div>
        <div class="modal-member-details">
            <div class="modal-detail"><i class="fas fa-user"></i> <span>ชื่อเล่น: ${m.nickname}</span></div>
            <div class="modal-detail"><i class="fas fa-birthday-cake"></i> <span>อายุ: ${m.age} ปี</span></div>
            <div class="modal-detail"><i class="fas fa-users"></i> <span>กลุ่ม: ${m.group.toUpperCase()}</span></div>
            <div class="modal-detail"><i class="fab fa-instagram"></i> <span>Instagram: ${m.ig}</span></div>
        </div>
        <div class="modal-actions">
            <button class="btn-oshi ${isOshi ? 'active-oshi' : ''}" onclick="toggleOshi('${m.id}'); openMemberModal('${m.id}');" style="flex:1; padding:10px;">
                <i class="fas fa-heart"></i> ${isOshi ? 'OSHI ♥' : 'OSHI'}
            </button>
            <button class="btn-kami ${isKami ? 'active-kami' : ''}" onclick="setKamiOshi('${m.id}'); openMemberModal('${m.id}');" style="flex:1; padding:10px;">
                <i class="fas fa-crown"></i> ${isKami ? 'KAMI OSHI ♛' : 'SET KAMI OSHI'}
            </button>
        </div>
    `;

    document.getElementById('memberModal').classList.add('open');
}

function closeModal() {
    document.getElementById('memberModal').classList.remove('open');
}

// ============ VOTE MODAL ============

let voteAmount = 1;
let voteMemberId = null;

function openVoteModal(id) {
    const m = findMember(id);
    if (!m) return;
    voteMemberId = id;
    voteAmount = 1;

    const isEdn = m.group === 'edn48';
    const avatarClass = isEdn ? 'edn-avatar' : 'tlp-avatar';

    const content = document.getElementById('voteModalContent');
    content.innerHTML = `
        <div class="vote-modal-avatar ${avatarClass}">${m.emoji}</div>
        <div class="vote-modal-name">Vote for ${m.name}</div>
        <p style="color: var(--text-secondary); margin-bottom: 16px;">ใช้ STAR เพื่อโหวต</p>
        <div class="vote-amount-selector">
            <button class="vote-amount-btn" onclick="changeVoteAmount(-1)">−</button>
            <div class="vote-amount-display" id="voteAmountDisplay">1</div>
            <button class="vote-amount-btn" onclick="changeVoteAmount(1)">+</button>
        </div>
        <p style="color: var(--text-muted); font-size: 0.8rem; margin-bottom: 16px;">
            Your Stars: <strong style="color: var(--edn-primary);">${state.stars}</strong>
        </p>
        <button class="btn-confirm-vote" onclick="confirmVote()">
            <i class="fas fa-star"></i> VOTE ${voteAmount} STAR
        </button>
    `;

    document.getElementById('voteModal').classList.add('open');
}

function closeVoteModal() {
    document.getElementById('voteModal').classList.remove('open');
    voteMemberId = null;
}

function changeVoteAmount(delta) {
    voteAmount = Math.max(1, Math.min(voteAmount + delta, state.stars));
    document.getElementById('voteAmountDisplay').textContent = voteAmount;
    // Update button text
    const btn = document.querySelector('.btn-confirm-vote');
    if (btn) btn.innerHTML = `<i class="fas fa-star"></i> VOTE ${voteAmount} STAR`;
}

function confirmVote() {
    if (!voteMemberId) return;
    if (state.stars < voteAmount) {
        showToast('STAR ไม่เพียงพอ! ⭐', 'error');
        return;
    }
    state.stars -= voteAmount;
    state.memberVotes[voteMemberId] = (state.memberVotes[voteMemberId] || 0) + voteAmount;
    saveState();

    const m = findMember(voteMemberId);
    showToast(`โหวต ${m.name} สำเร็จ! +${voteAmount} votes ⭐`, 'success');
    closeVoteModal();

    // Re-render if on vote page
    if (currentPage === 'major-vote') {
        const activeTab = document.querySelector('.vote-tab-btn.active');
        const group = activeTab && activeTab.textContent.includes('TLP') ? 'tlp' : 'edn';
        renderVoteGrid(group);
    }
    renderSparkPodium('edn-spark-podium', ednMembers);
    renderSparkPodium('tlp-spark-podium', tlpMembers);
}

// ============ OSHI / KAMI SYSTEM ============

function toggleOshi(id) {
    const idx = state.oshi.indexOf(id);
    if (idx > -1) {
        state.oshi.splice(idx, 1);
        const m = findMember(id);
        showToast(`ลบ ${m.name} ออกจาก Oshi แล้ว`, 'info');
    } else {
        state.oshi.push(id);
        const m = findMember(id);
        showToast(`เพิ่ม ${m.name} เป็น Oshi แล้ว! ❤️`, 'success');
    }
    saveState();
    refreshMemberCards();
}

function setKamiOshi(id) {
    if (state.kamiOshi === id) {
        state.kamiOshi = null;
        const m = findMember(id);
        showToast(`ลบ ${m.name} ออกจาก Kami Oshi แล้ว`, 'info');
    } else {
        state.kamiOshi = id;
        const m = findMember(id);
        showToast(`ตั้ง ${m.name} เป็น Kami Oshi แล้ว! 👑`, 'success');
        // Auto add to oshi if not already
        if (!state.oshi.includes(id)) {
            state.oshi.push(id);
        }
    }
    saveState();
    refreshMemberCards();
}

function refreshMemberCards() {
    renderMembers('edn-members-grid', ednMembers);
    renderMembers('tlp-members-grid', tlpMembers);
    renderAccount();
}

// ============ REDEEM CODE ============

function redeemCode() {
    const input = document.getElementById('redeemInput');
    const result = document.getElementById('redeemResult');
    const code = input.value.trim().toUpperCase();

    if (!code) {
        result.className = 'redeem-result redeem-error';
        result.textContent = 'กรุณากรอก Code!';
        return;
    }

    if (state.usedCodes.includes(code)) {
        result.className = 'redeem-result redeem-error';
        result.textContent = 'Code นี้ถูกใช้ไปแล้ว!';
        return;
    }

    const reward = redeemCodes[code];
    if (!reward) {
        result.className = 'redeem-result redeem-error';
        result.textContent = 'Code ไม่ถูกต้อง!';
        return;
    }

    state.stars += reward.stars;
    state.tokens += reward.tokens;
    state.usedCodes.push(code);
    saveState();

    result.className = 'redeem-result redeem-success';
    let rewardText = reward.msg + ' — ';
    if (reward.stars > 0) rewardText += `+${reward.stars} Stars `;
    if (reward.tokens > 0) rewardText += `+${reward.tokens} Tokens`;
    result.textContent = rewardText;

    showToast(`Redeem สำเร็จ! ${reward.msg}`, 'success');
    input.value = '';
}

// ============ SHOP ============

function buyItem(name, price) {
    if (state.tokens < price) {
        showToast(`Token ไม่เพียงพอ! ต้องการ ${price} TOKEN`, 'error');
        return;
    }
    state.tokens -= price;
    saveState();
    showToast(`ซื้อ ${name} สำเร็จ! 🎉`, 'success');
}

// ============ MUSIC PLAYER ============

function playTrack(name) {
    showToast(`♫ Now Playing: ${name}`, 'info');
}

function togglePlay(group) {
    const disc = document.getElementById(group + '-disc');
    const btn = document.getElementById(group + '-play-btn');
    if (disc.classList.contains('paused')) {
        disc.classList.remove('paused');
        btn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        disc.classList.add('paused');
        btn.innerHTML = '<i class="fas fa-play"></i>';
    }
}

// ============ TOAST ============

function showToast(msg, type = 'info') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = msg;
    container.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// ============ UPDATE UI ============

function updateUI() {
    // Nav currency
    document.getElementById('navStars').textContent = state.stars.toLocaleString();
    document.getElementById('navTokens').textContent = state.tokens.toLocaleString();

    // Club page
    const clubStars = document.getElementById('clubStars');
    const clubTokens = document.getElementById('clubTokens');
    if (clubStars) clubStars.textContent = state.stars.toLocaleString();
    if (clubTokens) clubTokens.textContent = state.tokens.toLocaleString();

    // Vote balance
    const voteBalance = document.getElementById('voteStarBalance');
    if (voteBalance) voteBalance.textContent = state.stars.toLocaleString();

    // Account
    renderAccount();
}

// ============ PARTICLES ============

function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    const symbols = ['⭐', '🌷', '✦', '✧', '·', '★', '☆'];

    for (let i = 0; i < 30; i++) {
        const p = document.createElement('span');
        p.className = 'particle';
        p.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        p.style.left = Math.random() * 100 + '%';
        p.style.top = Math.random() * 100 + '%';
        p.style.fontSize = (Math.random() * 14 + 8) + 'px';
        p.style.animationDuration = (Math.random() * 6 + 4) + 's';
        p.style.animationDelay = (Math.random() * 4) + 's';
        container.appendChild(p);
    }
}

// ============ NAVBAR SCROLL ============

window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ============ INIT ============

function init() {
    createParticles();

    // Render everything
    renderSparkPodium('edn-spark-podium', ednMembers);
    renderSparkPodium('tlp-spark-podium', tlpMembers);
    renderEvents('edn-events', ednEvents);
    renderEvents('tlp-events', tlpEvents, true);
    renderMembers('edn-members-grid', ednMembers);
    renderMembers('tlp-members-grid', tlpMembers);
    renderSchedule('edn-schedule-calendar', ednSchedule);
    renderSchedule('tlp-schedule-calendar', tlpSchedule, true);
    renderWorks('edn-works-grid', ednWorks);
    renderWorks('tlp-works-grid', tlpWorks, true);
    renderPlaylist('edn-playlist', ednPlaylist);
    renderPlaylist('tlp-playlist', tlpPlaylist, true);
    renderVoteGrid('edn');
    renderShop();
    renderArtistsPage();
    renderAccount();
    updateUI();

    // Click outside modal to close
    document.getElementById('memberModal').addEventListener('click', (e) => {
        if (e.target.id === 'memberModal') closeModal();
    });
    document.getElementById('voteModal').addEventListener('click', (e) => {
        if (e.target.id === 'voteModal') closeVoteModal();
    });
}

document.addEventListener('DOMContentLoaded', init);
