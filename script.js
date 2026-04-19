/* ========================
   MEGACATÁLOGO DE HERRAMIENTAS - LÓGICA LOCAL
======================== */

// Plantillas de herramientas complejas aisladas
const LOCAL_TEMPLATES = {
    'pomodoro': `<!DOCTYPE html><html><head><style>body{font-family:'Inter',sans-serif;display:flex;justify-content:center;align-items:center;height:100vh;margin:0;background:#f8fafc;} .card{background:#fff;padding:40px;border-radius:24px;box-shadow:0 20px 25px -5px rgba(0,0,0,0.1);text-align:center;} h1{color:#1e293b;margin-bottom:10px;} .time{font-size:5rem;font-weight:800;color:#2563eb;font-variant-numeric:tabular-nums;line-height:1;} .btn{background:#2563eb;color:white;border:none;padding:12px 24px;border-radius:12px;font-size:1.1rem;cursor:pointer;margin:5px;font-weight:600;} .btn:hover{background:#1d4ed8;} .btn.red{background:#ef4444;} .btn.red:hover{background:#dc2626;} </style></head><body><div class="card"><h1>Reloj Pomodoro</h1><div class="time" id="t">25:00</div><div style="margin-top:30px;"><button class="btn" onclick="start()">Iniciar</button><button class="btn red" onclick="stop()">Pausar</button><button class="btn" style="background:#64748b" onclick="reset()">Reiniciar</button></div></div><script>let s=1500,int=null;const d=document.getElementById('t');function u(){let m=Math.floor(s/60),sc=s%60;d.textContent=m.toString().padStart(2,'0')+':'+sc.toString().padStart(2,'0');}function start(){if(!int)int=setInterval(()=>{if(s>0){s--;u();}else stop();},1000);}function stop(){clearInterval(int);int=null;}function reset(){stop();s=1500;u();}</script></body></html>`,
    'tareas': `<!DOCTYPE html><html><head><style>body{font-family:'Inter',sans-serif;margin:0;padding:20px;background:#f0fdf4; height:100vh; box-sizing:border-box;} .c{max-width:400px;margin:0 auto;background:#fff;padding:30px;border-radius:20px;box-shadow:0 10px 15px -3px rgba(0,0,0,0.1);} h2{color:#166534;margin-top:0;} input{width:100%;padding:12px;box-sizing:border-box;border:2px solid #bbf7d0;border-radius:10px;margin-bottom:15px;font-size:1rem;outline:none;} input:focus{border-color:#22c55e;} button{width:100%;background:#22c55e;color:white;border:none;padding:12px;border-radius:10px;font-size:1rem;cursor:pointer;font-weight:bold;} button:hover{background:#16a34a;} ul{list-style:none;padding:0;margin-top:20px; overflow-y:auto; max-height:250px;} li{display:flex;justify-content:space-between;align-items:center;padding:12px;background:#f8fafc;border-radius:8px;margin-bottom:8px;animation:slideIn 0.3s ease;} .del{background:#fee2e2;color:#ef4444;border:none;border-radius:6px;cursor:pointer;padding:6px 10px;font-weight:bold; width:auto;} @keyframes slideIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}</style></head><body><div class="c"><h2>Gestor de Tareas</h2><input type="text" id="i" placeholder="¿Qué necesitas hacer?"><button onclick="add()">Añadir Tarea</button><ul id="l"></ul></div><script>const i=document.getElementById('i'),l=document.getElementById('l'); i.addEventListener('keypress', function (e) { if (e.key === 'Enter') add(); }); function add(){if(!i.value)return;const li=document.createElement('li');li.innerHTML='<span>'+i.value+'</span><button class="del" onclick="this.parentElement.remove()">X</button>';l.appendChild(li);i.value='';i.focus();}</script></body></html>`,
    'calculadora': `<!DOCTYPE html><html><head><style>body{font-family:'Inter',sans-serif;display:flex;justify-content:center;align-items:center;height:100vh;margin:0;background:#f3f4f6;} .calc{background:#1e293b;padding:25px;border-radius:24px;box-shadow:0 25px 50px -12px rgba(0,0,0,0.4);width:300px;} .pantalla{background:#0f172a;color:#10b981;font-size:2.5rem;text-align:right;padding:20px;border-radius:16px;margin-bottom:20px;font-family:monospace;overflow:hidden;} .grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;} .b{background:#334155;color:white;border:none;padding:15px;font-size:1.5rem;border-radius:12px;cursor:pointer;font-weight:bold;} .b:hover{background:#475569;} .b.op{background:#6366f1;} .b.op:hover{background:#4f46e5;} .b.eq{background:#10b981;} .b.eq:hover{background:#059669;} </style></head><body><div class="calc"><div class="pantalla" id="p">0</div><div class="grid"><button class="b op" onclick="c('')">C</button><button class="b op" onclick="a('(')">(</button><button class="b op" onclick="a(')')">)</button><button class="b op" onclick="a('/')">÷</button><button class="b" onclick="a('7')">7</button><button class="b" onclick="a('8')">8</button><button class="b" onclick="a('9')">9</button><button class="b op" onclick="a('*')">×</button><button class="b" onclick="a('4')">4</button><button class="b" onclick="a('5')">5</button><button class="b" onclick="a('6')">6</button><button class="b op" onclick="a('-')">-</button><button class="b" onclick="a('1')">1</button><button class="b" onclick="a('2')">2</button><button class="b" onclick="a('3')">3</button><button class="b op" onclick="a('+')">+</button><button class="b" onclick="a('0')" style="grid-column:span 2">0</button><button class="b" onclick="a('.')">.</button><button class="b eq" onclick="e()">=</button></div></div><script>const p=document.getElementById('p');let t='';function a(v){if(p.innerText==='0'&&!isNaN(v))p.innerText='';p.innerText+=v;t+=v;}function c(){p.innerText='0';t=''}function e(){try{const res=eval(t);p.innerText=res;t=res.toString();}catch(_){p.innerText='Error';t='';}}</script></body></html>`,
    'imc': `<!DOCTYPE html><html><head><style>body{font-family:'Inter',sans-serif;display:flex;justify-content:center;align-items:center;height:100vh;margin:0;background:#fef2f2;} .card{background:#fff;padding:30px;border-radius:24px;box-shadow:0 10px 25px -5px rgba(0,0,0,0.1);max-width:350px;} h2{color:#b91c1c;margin-top:0;} label{display:block;margin-bottom:8px;font-weight:600;color:#475569;} input{width:100%;padding:12px;box-sizing:border-box;border:2px solid #e2e8f0;border-radius:10px;margin-bottom:20px;font-size:1rem;} button{width:100%;background:#ef4444;color:white;border:none;padding:12px;border-radius:10px;font-size:1rem;cursor:pointer;font-weight:bold;} #res{margin-top:20px;padding:15px;background:#f8fafc;border-radius:10px;text-align:center;font-weight:bold;color:#0f172a;display:none;}</style></head><body><div class="card"><h2>Calculadora IMC</h2><label>Peso (kg):</label><input type="number" id="p" placeholder="Ej: 70"><label>Altura (cm):</label><input type="number" id="a" placeholder="Ej: 175"><button onclick="calc()">Calcular mi IMC</button><div id="res"></div></div><script>function calc(){const p=parseFloat(document.getElementById('p').value);const a=parseFloat(document.getElementById('a').value)/100;const res=document.getElementById('res');if(p>0&&a>0){const imc=(p/(a*a)).toFixed(1);let msg='';if(imc<18.5)msg='Bajo peso';else if(imc<24.9)msg='Peso Normal';else if(imc<29.9)msg='Sobrepeso';else msg='Obesidad';res.innerHTML='Tu IMC es: <span style="font-size:1.5rem;color:#ef4444;">'+imc+'</span><br>'+msg;res.style.display='block';}else{alert('Ingresa valores válidos');}}</script></body></html>`,
    'moneda': `<!DOCTYPE html><html><head><style>body{font-family:'Inter',sans-serif;display:flex;justify-content:center;align-items:center;height:100vh;margin:0;background:#f0f9ff;} .card{background:#fff;padding:30px;border-radius:24px;box-shadow:0 10px 25px -5px rgba(0,0,0,0.1);max-width:350px;width:100%;} h2{color:#0284c7;margin-top:0;} .in{display:flex;gap:10px;margin-bottom:20px;} input{width:100%;padding:12px;background:#f1f5f9;border:none;border-radius:10px;font-size:1rem;font-weight:bold;} select{padding:12px;border:none;background:#e0f2fe;color:#0369a1;border-radius:10px;font-weight:bold;} button{width:100%;background:#0ea5e9;color:white;border:none;padding:12px;border-radius:10px;font-size:1.1rem;cursor:pointer;font-weight:bold;margin-top:10px;} #res{margin-top:20px;font-size:2rem;text-align:center;color:#0f172a;font-weight:800;}</style></head><body><div class="card"><h2>Conversor de Divisas</h2><p style="color:#64748b;font-size:0.9rem;margin-bottom:20px;">Tasas de cambio aproximadas</p><div class="in"><input type="number" id="m" placeholder="Monto" value="100"><select id="f"><option value="USD">USD</option><option value="EUR">EUR</option><option value="COP">COP</option><option value="MXN">MXN</option><option value="ARS">ARS</option></select></div><div class="in" style="justify-content:center;">a</div><div class="in"><select id="to" style="width:100%"><option value="EUR">EUR</option><option value="USD">USD</option><option value="COP">COP</option><option value="MXN">MXN</option><option value="ARS">ARS</option></select></div><button onclick="c()">Convertir</button><div id="res">---</div></div><script>const rates={USD:1,EUR:0.92,COP:4000,MXN:16.80,ARS:900};function c(){const m=parseFloat(document.getElementById('m').value);const f=document.getElementById('f').value;const t=document.getElementById('to').value;if(m){const inUSD=m/rates[f];const res=(inUSD*rates[t]).toFixed(2);document.getElementById('res').innerText=res+' '+t;}}c();</script></body></html>`,
    'universal': `<!DOCTYPE html><html><head><style>body{font-family:'Inter',sans-serif;margin:0;padding:20px;background:#fff7ed;height:100vh;box-sizing:border-box;} .w{background:#fff;height:calc(100% - 40px);border-radius:24px;box-shadow:0 10px 15px -3px rgba(0,0,0,0.1);padding:30px;display:flex;flex-direction:column;} h2{color:#c2410c;margin-top:0;} textarea{margin-top:10px;flex-grow:1;border:none;border-radius:12px;padding:15px;background:#fafaf9;resize:none;font-size:1.1rem;line-height:1.6;outline:none;font-family:'Inter',sans-serif;} textarea:focus{background:#fff;box-shadow:inset 0 0 0 2px #fdba74;} .bar{display:flex;justify-content:space-between;align-items:center;padding-top:15px;color:#9a3412;} button{background:#ea580c;color:#fff;border:none;padding:10px 20px;border-radius:8px;cursor:pointer;font-weight:bold;} button:hover{background:#c2410c;}</style></head><body><div class="w"><h2>Anotador Rápido</h2><textarea id="t" placeholder="Escribe aquí... (Es temporal y privado)"></textarea><div class="bar"><span style="font-size:0.9rem">Notas locales</span><button onclick="navigator.clipboard.writeText(document.getElementById('t').value);alert('¡Copiado!')">Copiar Todo</button></div></div></body></html>`,
    'lorem': `<!DOCTYPE html><html><head><style>body{font-family:'Inter',sans-serif;display:flex;flex-direction:column;justify-content:center;align-items:center;height:100vh;margin:0;background:#f5f3ff;padding:20px;box-sizing:border-box;} .card{background:#fff;padding:30px;border-radius:24px;box-shadow:0 10px 25px -5px rgba(0,0,0,0.05);width:100%;max-width:500px;} h2{color:#6d28d9;margin-top:0;} .in{display:flex;gap:10px;margin-bottom:20px;} input{width:100px;padding:12px;border:2px solid #ede9fe;border-radius:10px;font-size:1rem;outline:none;} button{background:#7c3aed;color:white;border:none;padding:12px 20px;border-radius:10px;font-size:1rem;cursor:pointer;font-weight:bold;flex-grow:1;} button:hover{background:#6d28d9;} textarea{width:100%;height:180px;padding:15px;border:2px solid #ede9fe;border-radius:12px;resize:none;outline:none;font-family:sans-serif;line-height:1.5;box-sizing:border-box;} textarea:focus{border-color:#7c3aed;}</style></head><body><div class="card"><h2>Generador de Lorem Ipsum</h2><div class="in"><input type="number" id="p" value="3" min="1" max="20"><button onclick="g()">Generar Párrafos</button></div><textarea id="t" placeholder="El texto aparecerá aquí..."></textarea></div><script>function g(){const v=document.getElementById('p').value;let res="";const block="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ";for(let i=0;i<v;i++){res+=block+"\\n\\n";}document.getElementById('t').value=res.trim();}</script></body></html>`,
    'dados': `<!DOCTYPE html><html><head><style>body{font-family:'Inter',sans-serif;display:flex;justify-content:center;align-items:center;height:100vh;margin:0;background:#ecfccb;} .c{background:#fff;padding:40px;border-radius:30px;text-align:center;box-shadow:0 10px 20px rgba(0,0,0,0.05);} h2{color:#4d7c0f;margin-top:0;} .dado{font-size:8rem;margin:20px;display:inline-block;color:#65a30d;} button{background:#84cc16;color:white;padding:15px 30px;border:none;border-radius:15px;font-size:1.2rem;font-weight:bold;cursor:pointer;} button:hover{background:#65a30d;}</style></head><body><div class="c"><h2>Lanzador de Dados</h2><div id="d" class="dado">🎲</div><br><button onclick="r()">Lanzar Dado</button></div><script>const ds=['⚀','⚁','⚂','⚃','⚄','⚅'];function r(){const el=document.getElementById('d');el.style.transform='rotate(360deg) scale(1.2)';el.style.transition='transform 0.3s ease';setTimeout(()=>{el.innerText=ds[Math.floor(Math.random()*6)];el.style.transform='none';},300);}</script></body></html>`,
    'moneda_azar': `<!DOCTYPE html><html><head><style>body{font-family:'Inter',sans-serif;display:flex;justify-content:center;align-items:center;height:100vh;margin:0;background:#fdf4ff;} .c{background:#fff;padding:40px;border-radius:30px;text-align:center;box-shadow:0 10px 20px rgba(0,0,0,0.05);} h2{color:#a21caf;margin-top:0;} .coin{font-size:3rem;margin:30px auto;display:flex;justify-content:center;align-items:center;background:#fce7f3;border-radius:50%;width:150px;height:150px;font-weight:900;color:#db2777;border:10px solid #fbcfe8;} button{background:#d946ef;color:white;padding:15px 30px;border:none;border-radius:15px;font-size:1.2rem;font-weight:bold;cursor:pointer;} button:hover{background:#c026d3;}</style></head><body><div class="c"><h2>Cara o Cruz</h2><div id="m" class="coin">?</div><br><button onclick="f()">Lanzar al Aire</button></div><script>function f(){const m=document.getElementById('m');m.style.transform='scaleY(0)';m.style.transition='transform 0.2s';setTimeout(()=>{const res=Math.random()>0.5?'CARA':'CRUZ';m.innerText=res;m.style.transform='scaleY(1)';},200);}</script></body></html>`,
    'contador': `<!DOCTYPE html><html><head><style>body{font-family:'Inter',sans-serif;margin:0;padding:20px;background:#eef2ff;height:100vh;box-sizing:border-box;} .w{background:#fff;height:calc(100% - 40px);border-radius:24px;padding:30px;display:flex;flex-direction:column;box-shadow:0 10px 25px -5px rgba(0,0,0,0.05);} h2{color:#4338ca;margin-top:0;} textarea{flex-grow:1;border:2px solid #e0e7ff;border-radius:12px;padding:15px;resize:none;font-size:1.1rem;outline:none;font-family:'Inter',sans-serif;} textarea:focus{border-color:#6366f1;} .bar{display:flex;justify-content:space-around;padding-top:20px;gap:15px;} .stat{background:#f5f3ff;padding:15px;border-radius:12px;text-align:center;flex:1;} .v{font-size:2rem;font-weight:900;color:#4f46e5;display:block;} .l{color:#6b7280;font-size:0.9rem;font-weight:bold;text-transform:uppercase;}</style></head><body><div class="w"><h2>Contador de Texto</h2><textarea id="t" placeholder="Pega o escribe tu texto aquí para contarlo..."></textarea><div class="bar"><div class="stat"><span class="v" id="w">0</span><span class="l">Palabras</span></div><div class="stat"><span class="v" id="c">0</span><span class="l">Caracteres</span></div></div></div><script>const t=document.getElementById('t'),w=document.getElementById('w'),c=document.getElementById('c');t.addEventListener('input',()=>{const txt=t.value;c.innerText=txt.length;const wds=txt.trim().split(/\\s+/);w.innerText=txt.trim()===''?0:wds.length;});</script></body></html>`
};

/* ========================
   BUSCADOR DE TEXTO
======================== */
window.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-tools');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase().trim();
            const cards = document.querySelectorAll('.tool-card');
            
            cards.forEach(card => {
                const title = card.getAttribute('data-title').toLowerCase();
                const desc = card.getAttribute('data-desc').toLowerCase();
                
                if (title.includes(term) || desc.includes(term)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
});

/* ========================
   LOGICA DE VENTANAS (MODALES) 
======================== */
window.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('tool-modal');
    const closeBtn = document.querySelector('.close-modal');

    if(closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.classList.add('hidden');
        });
    }

    if(modal) {
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('hidden');
            }
        });
    }
});

/* ========================
   MANEJADOR PRINCIPAL DE HERRAMIENTAS
======================== */
window.openTool = function(toolId) {
    const modal = document.getElementById('tool-modal');
    const modalBody = document.getElementById('tool-modal-body');
    modal.classList.remove('hidden');
    
    // 1. Si la herramienta está en las plantillas HTML (iframes complejas)
    if (LOCAL_TEMPLATES[toolId]) {
        const htmlCode = LOCAL_TEMPLATES[toolId];
        modalBody.innerHTML = `
            <div class="tool-ui" style="padding:0; height:80vh; width: 100%; display:flex; flex-direction:column; overflow:hidden;">
                <iframe 
                    title="Herramienta ${toolId}"
                    style="width: 100%; height: 100%; border: none; border-radius: 12px; background: #fff;"
                    srcdoc="${htmlCode.replace(/"/g, '&quot;')}">
                </iframe>
            </div>
        `;
        return;
    }

    // 2. Herramientas manejadas con UI nativa
    if (toolId === 'calc') {
        modalBody.innerHTML = `
            <div class="tool-ui">
                <h3>Calculadora de Porcentajes</h3>
                <label>¿Cuánto es el...</label>
                <input type="number" id="calc-percent" placeholder="Ej: 20">
                <label>de la cantidad...</label>
                <input type="number" id="calc-amount" placeholder="Ej: 150">
                <button class="btn-primary" style="width:100%" onclick="calcPercentage()">Calcular</button>
                <div id="calc-result" class="result-box hidden"></div>
            </div>
        `;
    } else if (toolId === 'qr') {
        modalBody.innerHTML = `
            <div class="tool-ui">
                <h3>Generador de Código QR</h3>
                <label>Escribe el texto o enlace (URL):</label>
                <input type="text" id="qr-text" placeholder="Ej: https://google.com">
                <button class="btn-primary" style="width:100%" onclick="generateQR()">Generar Código QR</button>
                <div id="qr-result" class="result-box hidden" style="text-align:center;">
                    <img id="qr-img" src="" alt="Código QR" style="max-width:100%; border-radius: 8px;">
                </div>
            </div>
        `;
    } else if (toolId === 'palette') {
         modalBody.innerHTML = `
            <div class="tool-ui" style="text-align:center;">
                <h3>Generador de Paletas HEX</h3>
                <div id="color-show" style="width:120px; height:120px; margin:20px auto; border-radius:50%; background:#2563eb; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);"></div>
                <button class="btn-primary" style="width:100%" onclick="generarColor()">Generar Nuevo Color</button>
                <div id="palette-result" class="result-box" style="margin-top:15px; font-weight:bold; font-family:monospace; font-size:1.5rem;">#2563eb</div>
            </div>
        `;
    } else if (toolId === 'password') {
        modalBody.innerHTML = `
            <div class="tool-ui" style="text-align:center;">
                <h3>Contraseñas Seguras</h3>
                <p style="margin-bottom:20px; color:#64748b;">Crea claves aleatorias y robustas de 16 caracteres al instante.</p>
                <button class="btn-primary" style="width:100%" onclick="generarPassword()">Generar Contraseña</button>
                <div id="pass-result" class="result-box hidden" style="margin-top:20px;"></div>
            </div>
        `;
    } else if (toolId === 'cronometro') {
        window.resetTimer();
        modalBody.innerHTML = `
            <div class="tool-ui" style="text-align:center;">
                <h3>Cronómetro</h3>
                <div id="timer-display" style="font-size: 5rem; font-weight: 800; color: var(--primary-blue); margin: 20px 0; font-variant-numeric: tabular-nums;">00:00</div>
                <div style="display:flex; justify-content:center; gap:10px;">
                    <button class="btn-primary" onclick="startTimer()">Iniciar</button>
                    <button class="btn-secondary" onclick="stopTimer()">Pausar</button>
                    <button class="btn-outline" onclick="resetTimer()">Reiniciar</button>
                </div>
            </div>
        `;
    }
};

/* ========================
   LOGICA FUNCIONAL DE HERRAMIENTAS MANUALES
======================== */

// Porcentajes
window.calcPercentage = function() {
    const p = document.getElementById('calc-percent').value;
    const a = document.getElementById('calc-amount').value;
    const res = document.getElementById('calc-result');
    if(p && a) {
        const result = (p / 100) * a;
        res.innerHTML = `El ${p}% de ${a} es: <br><strong style="font-size:2rem;">${result.toFixed(2).replace('.00', '')}</strong>`;
        res.classList.remove('hidden');
    }
}

// Códigos QR
window.generateQR = function() {
    const txt = document.getElementById('qr-text').value;
    const resBox = document.getElementById('qr-result');
    const img = document.getElementById('qr-img');
    if(txt) {
        img.src = "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=" + encodeURIComponent(txt);
        resBox.classList.remove('hidden');
    }
}

// Colores Hexadecimales
window.generarColor = function() {
    const box = document.getElementById('color-show');
    const res = document.getElementById('palette-result');
    if(box && res) {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const hex = "#" + randomColor.padStart(6, '0');
        box.style.background = hex;
        res.innerText = hex;
    }
}

// Generador de Contraseñas
window.generarPassword = function() {
    const resBox = document.getElementById('pass-result');
    if(!resBox) return;
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_+=<>?";
    let password = "";
    for (let i = 0; i < 16; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    resBox.innerHTML = `Tu nueva contraseña:<br><strong style="font-size:1.5rem; letter-spacing:2px; user-select:all; cursor:pointer;" onclick="navigator.clipboard.writeText(this.innerText);alert('Copiado');">${password}</strong><br><small style="color:var(--text-muted); font-size:0.8rem; margin-top:10px; display:block;">Click en la clave para copiarla.</small>`;
    resBox.classList.remove('hidden');
}

// Cronómetro Manual
let timerInterval;
let timerSeconds = 0;

window.startTimer = function() {
    const display = document.getElementById('timer-display');
    if(timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timerSeconds++;
        const mins = Math.floor(timerSeconds / 60).toString().padStart(2, '0');
        const secs = (timerSeconds % 60).toString().padStart(2, '0');
        if(display) display.textContent = `${mins}:${secs}`;
    }, 1000);
}

window.stopTimer = function() {
    if(timerInterval) clearInterval(timerInterval);
}

window.resetTimer = function() {
    if(timerInterval) clearInterval(timerInterval);
    timerSeconds = 0;
    const display = document.getElementById('timer-display');
    if(display) display.textContent = "00:00";
}
