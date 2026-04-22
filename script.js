/* ========================
   1. DICCIONARIO DE TRADUCCIONES (i18n)
======================== */
const i18n = {
    es: {
        logo: "HerramientasOnline",
        nav_catalog: "Catálogo",
        hero_title: "Todo lo que necesitas,<br><span>en un solo lugar.</span>",
        hero_desc: "Descubre nuestro extenso catálogo de herramientas rápidas, gratuitas y listas para usar. Simplifica tu día a día con utilidades locales y seguras.",
        hero_btn: "Explorar Catálogo",
        float_calc: "Calculadora", float_text: "Contador de Palabras", float_timer: "Cronómetro PRO",
        cat_title: "Catálogo de Herramientas",
        cat_subtitle: "Úsalas gratis ahora mismo. Rápidas, seguras y locales.",
        tab_all: "Todas", tab_math: "🔢 Matemáticas", tab_prod: "⚡ Productividad", tab_design: "🎨 Diseño/Texto", tab_util: "🎲 Utilidades",
        search_ph: "Buscar herramienta (ej. código QR, calculadora...)",
        use_tool: "Usar Herramienta",
        t_calc_perc_title: "Calculadora de %", t_calc_perc_desc: "Saca el porcentaje rápido de cualquier cantidad.",
        t_qr_title: "Generador QR", t_qr_desc: "Convierte cualquier link en un código QR para escanear.",
        t_pal_title: "Generador de Paletas", t_pal_desc: "Descubre colores increíbles para usar en tus diseños.",
        t_pass_title: "Contraseñas", t_pass_desc: "Genera contraseñas fuertes, seguras y difíciles de adivinar.",
        t_timer_title: "Cronómetro", t_timer_desc: "Mide el tiempo exacto para tus rutinas o tareas.",
        t_imc_title: "Calculadora IMC", t_imc_desc: "Averigua tu Índice de Masa Corporal de forma fácil.",
        t_pom_title: "Reloj Pomodoro", t_pom_desc: "Técnica de 25 min para maximizar tu concentración.",
        t_todo_title: "Lista de Tareas", t_todo_desc: "Anota lo que tienes que hacer para no olvidarlo y táchalo al terminar.",
        t_cur_title: "Conversor de Moneda", t_cur_desc: "Calcula y convierte el cambio aproximado entre distintas monedas.",
        t_note_title: "Anotador Rápido", t_note_desc: "Escribe, borra y copia notas temporalmente directo en pantalla Automáticamente guardado.",
        t_calcb_title: "Calculadora", t_calcb_desc: "Realiza operaciones matemáticas simples y rápidas.",
        t_lorem_title: "Lorem Ipsum", t_lorem_desc: "Crea texto de relleno automático para tus diseños o maquetaciones.",
        t_dice_title: "Lanzar Dados", t_dice_desc: "Obtén un número al azar (1 a 6) lanzando dados virtuales instantáneos.",
        t_coin_title: "Cara o Cruz", t_coin_desc: "Lanza una moneda virtual al aire para tomar decisiones ágilmente.",
        t_count_title: "Contador de Texto", t_count_desc: "Cuenta la cantidad de palabras y caracteres para tus redacciones o SEO.",
        footer: "@ 2026 HerramientasOnline."
    },
    en: {
        logo: "ToolsOnline",
        nav_catalog: "Catalog",
        hero_title: "Everything you need,<br><span>in one place.</span>",
        hero_desc: "Discover our extensive catalog of fast, free, and ready-to-use tools. Simplify your daily life with secure local utilities.",
        hero_btn: "Explore Catalog",
        float_calc: "Calculator", float_text: "Word Counter", float_timer: "PRO Stopwatch",
        cat_title: "Tools Catalog",
        cat_subtitle: "Use them for free right now. Fast, secure, and local.",
        tab_all: "All", tab_math: "🔢 Math", tab_prod: "⚡ Productivity", tab_design: "🎨 Design/Text", tab_util: "🎲 Utilities",
        search_ph: "Search tool (e.g. QR code, calculator...)",
        use_tool: "Use Tool",
        t_calc_perc_title: "% Calculator", t_calc_perc_desc: "Calculate the percentage of any quantity quickly.",
        t_qr_title: "QR Generator", t_qr_desc: "Convert any link into a scannable QR code.",
        t_pal_title: "Palette Generator", t_pal_desc: "Discover amazing color palettes for your designs.",
        t_pass_title: "Passwords", t_pass_desc: "Generate strong, secure, and hard-to-guess passwords.",
        t_timer_title: "Stopwatch", t_timer_desc: "Measure exact time for your routines or tasks.",
        t_imc_title: "BMI Calculator", t_imc_desc: "Find out your Body Mass Index easily.",
        t_pom_title: "Pomodoro Timer", t_pom_desc: "25-min technique to maximize your concentration.",
        t_todo_title: "To-Do List", t_todo_desc: "Write tasks so you don't forget them and cross them off when done.",
        t_cur_title: "Currency Converter", t_cur_desc: "Calculate approximate exchange rates between currencies.",
        t_note_title: "Quick Notes", t_note_desc: "Write, delete, and copy notes temporarily on screen. Auto-saved.",
        t_calcb_title: "Calculator", t_calcb_desc: "Perform simple and fast mathematical operations.",
        t_lorem_title: "Lorem Ipsum", t_lorem_desc: "Create automatic placeholder text for your designs.",
        t_dice_title: "Roll Dice", t_dice_desc: "Get an instant random number (1 to 6) by throwing virtual dice.",
        t_coin_title: "Flip a Coin", t_coin_desc: "Flip a virtual coin to make quick decisions.",
        t_count_title: "Text Counter", t_count_desc: "Count the total words and characters for your articles or SEO.",
        footer: "@ 2026 HerramientasOnline."
    }
};

/* ========================
   2. PLANTILLAS DE HERRAMIENTAS (MODALES PWA/IFRAME)
======================== */
const LOCAL_TEMPLATES = {
    'pomodoro': `<!DOCTYPE html><html><head><style>body{font-family:'Inter',sans-serif;display:flex;justify-content:center;align-items:center;height:100vh;margin:0;background:#f8fafc;} .card{background:#fff;padding:40px;border-radius:24px;box-shadow:0 20px 25px -5px rgba(0,0,0,0.1);text-align:center;} h1{color:#1e293b;margin-bottom:10px;} .time{font-size:5rem;font-weight:800;color:#2563eb;font-variant-numeric:tabular-nums;line-height:1;} .btn{background:#2563eb;color:white;border:none;padding:12px 24px;border-radius:12px;font-size:1.1rem;cursor:pointer;margin:5px;font-weight:600;} .btn:hover{background:#1d4ed8;} .btn.red{background:#ef4444;} .btn.red:hover{background:#dc2626;} </style></head><body><div class="card"><h1>Reloj Pomodoro</h1><div class="time" id="t">25:00</div><div style="margin-top:30px;"><button class="btn" onclick="start()">Iniciar</button><button class="btn red" onclick="stop()">Pausar</button><button class="btn" style="background:#64748b" onclick="reset()">Reiniciar</button></div></div><script>let s=1500,int=null;const d=document.getElementById('t');function u(){let m=Math.floor(s/60),sc=s%60;d.textContent=m.toString().padStart(2,'0')+':'+sc.toString().padStart(2,'0');}function start(){if(!int)int=setInterval(()=>{if(s>0){s--;u();}else stop();},1000);}function stop(){clearInterval(int);int=null;}function reset(){stop();s=1500;u();}</script></body></html>`,
    
    // Tareas actualizadas CON Memoria Local (Auto-Save)
    'tareas': `<!DOCTYPE html><html><head><style>body{font-family:'Inter',sans-serif;margin:0;padding:20px;background:#f0fdf4; height:100vh; box-sizing:border-box;} .c{max-width:400px;margin:0 auto;background:#fff;padding:30px;border-radius:20px;box-shadow:0 10px 15px -3px rgba(0,0,0,0.1);} h2{color:#166534;margin-top:0;} input{width:100%;padding:12px;box-sizing:border-box;border:2px solid #bbf7d0;border-radius:10px;margin-bottom:15px;font-size:1rem;outline:none;} input:focus{border-color:#22c55e;} button{width:100%;background:#22c55e;color:white;border:none;padding:12px;border-radius:10px;font-size:1rem;cursor:pointer;font-weight:bold;} button:hover{background:#16a34a;} ul{list-style:none;padding:0;margin-top:20px; overflow-y:auto; max-height:250px;} li{display:flex;justify-content:space-between;align-items:center;padding:12px;background:#f8fafc;border-radius:8px;margin-bottom:8px;} .del{background:#fee2e2;color:#ef4444;border:none;border-radius:6px;cursor:pointer;padding:6px 10px;font-weight:bold; width:auto;}</style></head><body><div class="c"><h2>Gestor de Tareas</h2><input type="text" id="i" placeholder="¿Qué necesitas hacer?"><button onclick="add()">Añadir Tarea</button><ul id="l"></ul></div><script>const i=document.getElementById('i'),l=document.getElementById('l'); l.innerHTML=localStorage.getItem('mis_tareas')||''; i.addEventListener('keypress', function (e) { if (e.key === 'Enter') add(); }); function add(){if(!i.value)return;const li=document.createElement('li');li.innerHTML='<span>'+i.value+'</span><button class="del" onclick="this.parentElement.remove(); window.s()">X</button>';l.appendChild(li);window.s();i.value='';i.focus();} window.s=function(){localStorage.setItem('mis_tareas', l.innerHTML);};</script></body></html>`,
    
    'calculadora': `<!DOCTYPE html><html><head><style>body{font-family:'Inter',sans-serif;display:flex;justify-content:center;align-items:center;height:100vh;margin:0;background:#f3f4f6;} .calc{background:#1e293b;padding:25px;border-radius:24px;box-shadow:0 25px 50px -12px rgba(0,0,0,0.4);width:300px;} .pantalla{background:#0f172a;color:#10b981;font-size:2.5rem;text-align:right;padding:20px;border-radius:16px;margin-bottom:20px;font-family:monospace;overflow:hidden;} .grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;} .b{background:#334155;color:white;border:none;padding:15px;font-size:1.5rem;border-radius:12px;cursor:pointer;font-weight:bold;} .b:hover{background:#475569;} .b.op{background:#6366f1;} .b.op:hover{background:#4f46e5;} .b.eq{background:#10b981;} .b.eq:hover{background:#059669;} </style></head><body><div class="calc"><div class="pantalla" id="p">0</div><div class="grid"><button class="b op" onclick="c('')">C</button><button class="b op" onclick="a('(')">(</button><button class="b op" onclick="a(')')">)</button><button class="b op" onclick="a('/')">÷</button><button class="b" onclick="a('7')">7</button><button class="b" onclick="a('8')">8</button><button class="b" onclick="a('9')">9</button><button class="b op" onclick="a('*')">×</button><button class="b" onclick="a('4')">4</button><button class="b" onclick="a('5')">5</button><button class="b" onclick="a('6')">6</button><button class="b op" onclick="a('-')">-</button><button class="b" onclick="a('1')">1</button><button class="b" onclick="a('2')">2</button><button class="b" onclick="a('3')">3</button><button class="b op" onclick="a('+')">+</button><button class="b" onclick="a('0')" style="grid-column:span 2">0</button><button class="b" onclick="a('.')">.</button><button class="b eq" onclick="e()">=</button></div></div><script>const p=document.getElementById('p');let t='';function a(v){if(p.innerText==='0'&&!isNaN(v))p.innerText='';p.innerText+=v;t+=v;}function c(){p.innerText='0';t=''}function e(){try{const res=eval(t);p.innerText=res;t=res.toString();}catch(_){p.innerText='Error';t='';}}</script></body></html>`,
    'imc': `<!DOCTYPE html><html><head><style>body{font-family:'Inter',sans-serif;display:flex;justify-content:center;align-items:center;height:100vh;margin:0;background:#fef2f2;} .card{background:#fff;padding:30px;border-radius:24px;box-shadow:0 10px 25px -5px rgba(0,0,0,0.1);max-width:350px;} h2{color:#b91c1c;margin-top:0;} label{display:block;margin-bottom:8px;font-weight:600;color:#475569;} input{width:100%;padding:12px;box-sizing:border-box;border:2px solid #e2e8f0;border-radius:10px;margin-bottom:20px;font-size:1rem;} button{width:100%;background:#ef4444;color:white;border:none;padding:12px;border-radius:10px;font-size:1rem;cursor:pointer;font-weight:bold;} #res{margin-top:20px;padding:15px;background:#f8fafc;border-radius:10px;text-align:center;font-weight:bold;color:#0f172a;display:none;}</style></head><body><div class="card"><h2>Calculadora IMC</h2><label>Peso (kg):</label><input type="number" id="p" placeholder="Ej: 70"><label>Altura (cm):</label><input type="number" id="a" placeholder="Ej: 175"><button onclick="calc()">Calcular mi IMC</button><div id="res"></div></div><script>function calc(){const p=parseFloat(document.getElementById('p').value);const a=parseFloat(document.getElementById('a').value)/100;const res=document.getElementById('res');if(p>0&&a>0){const imc=(p/(a*a)).toFixed(1);let msg='';if(imc<18.5)msg='Bajo peso';else if(imc<24.9)msg='Peso Normal';else if(imc<29.9)msg='Sobrepeso';else msg='Obesidad';res.innerHTML='Tu IMC es: <span style="font-size:1.5rem;color:#ef4444;">'+imc+'</span><br>'+msg;res.style.display='block';}else{alert('Ingresa valores válidos');}}</script></body></html>`,
    'moneda': `<!DOCTYPE html><html><head><style>body{font-family:'Inter',sans-serif;display:flex;justify-content:center;align-items:center;height:100vh;margin:0;background:#f0f9ff;} .card{background:#fff;padding:30px;border-radius:24px;box-shadow:0 10px 25px -5px rgba(0,0,0,0.1);max-width:350px;width:100%;} h2{color:#0284c7;margin-top:0;} .in{display:flex;gap:10px;margin-bottom:20px;} input{width:100%;padding:12px;background:#f1f5f9;border:none;border-radius:10px;font-size:1rem;font-weight:bold;} select{padding:12px;border:none;background:#e0f2fe;color:#0369a1;border-radius:10px;font-weight:bold;} button{width:100%;background:#0ea5e9;color:white;border:none;padding:12px;border-radius:10px;font-size:1.1rem;cursor:pointer;font-weight:bold;margin-top:10px;} #res{margin-top:20px;font-size:2rem;text-align:center;color:#0f172a;font-weight:800;}</style></head><body><div class="card"><h2>Conversor de Divisas</h2><p style="color:#64748b;font-size:0.9rem;margin-bottom:20px;">Tasas de cambio aproximadas</p><div class="in"><input type="number" id="m" placeholder="Monto" value="100"><select id="f"><option value="USD">USD</option><option value="EUR">EUR</option><option value="COP">COP</option><option value="MXN">MXN</option><option value="ARS">ARS</option></select></div><div class="in" style="justify-content:center;">a</div><div class="in"><select id="to" style="width:100%"><option value="EUR">EUR</option><option value="USD">USD</option><option value="COP">COP</option><option value="MXN">MXN</option><option value="ARS">ARS</option></select></div><button onclick="c()">Convertir</button><div id="res">---</div></div><script>const rates={USD:1,EUR:0.92,COP:4000,MXN:16.80,ARS:900};function c(){const m=parseFloat(document.getElementById('m').value);const f=document.getElementById('f').value;const t=document.getElementById('to').value;if(m){const inUSD=m/rates[f];const res=(inUSD*rates[t]).toFixed(2);document.getElementById('res').innerText=res+' '+t;}}c();</script></body></html>`,
    
    // Anotador actualizacdo CON Memoria Local (Auto-Save)
    'universal': `<!DOCTYPE html><html><head><style>body{font-family:'Inter',sans-serif;margin:0;padding:20px;background:#fff7ed;height:100vh;box-sizing:border-box;} .w{background:#fff;height:calc(100% - 40px);border-radius:24px;box-shadow:0 10px 15px -3px rgba(0,0,0,0.1);padding:30px;display:flex;flex-direction:column;} h2{color:#c2410c;margin-top:0;} textarea{margin-top:10px;flex-grow:1;border:none;border-radius:12px;padding:15px;background:#fafaf9;resize:none;font-size:1.1rem;line-height:1.6;outline:none;font-family:'Inter',sans-serif;} textarea:focus{background:#fff;box-shadow:inset 0 0 0 2px #fdba74;} .bar{display:flex;justify-content:space-between;align-items:center;padding-top:15px;color:#9a3412;} button{background:#ea580c;color:#fff;border:none;padding:10px 20px;border-radius:8px;cursor:pointer;font-weight:bold;} button:hover{background:#c2410c;}</style></head><body><div class="w"><h2>Anotador Rápido</h2><textarea id="t" placeholder="Escribe aquí... (Es temporal y privado)"></textarea><div class="bar"><span style="font-size:0.9rem" id="status">Borrador auto-guardado 💾</span><button onclick="navigator.clipboard.writeText(document.getElementById('t').value);alert('¡Copiado!')">Copiar Todo</button></div></div><script>const t=document.getElementById('t'); t.value=localStorage.getItem('mis_notas')||''; t.addEventListener('input', ()=>{localStorage.setItem('mis_notas', t.value)});</script></body></html>`,
    
    'lorem': `<!DOCTYPE html><html><head><style>body{font-family:'Inter',sans-serif;display:flex;flex-direction:column;justify-content:center;align-items:center;height:100vh;margin:0;background:#f5f3ff;padding:20px;box-sizing:border-box;} .card{background:#fff;padding:30px;border-radius:24px;box-shadow:0 10px 25px -5px rgba(0,0,0,0.05);width:100%;max-width:500px;} h2{color:#6d28d9;margin-top:0;} .in{display:flex;gap:10px;margin-bottom:20px;} input{width:100px;padding:12px;border:2px solid #ede9fe;border-radius:10px;font-size:1rem;outline:none;} button{background:#7c3aed;color:white;border:none;padding:12px 20px;border-radius:10px;font-size:1rem;cursor:pointer;font-weight:bold;flex-grow:1;} button:hover{background:#6d28d9;} textarea{width:100%;height:180px;padding:15px;border:2px solid #ede9fe;border-radius:12px;resize:none;outline:none;font-family:sans-serif;line-height:1.5;box-sizing:border-box;} textarea:focus{border-color:#7c3aed;}</style></head><body><div class="card"><h2>Generador de Lorem Ipsum</h2><div class="in"><input type="number" id="p" value="3" min="1" max="20"><button onclick="g()">Generar Párrafos</button></div><textarea id="t" placeholder="El texto aparecerá aquí..."></textarea></div><script>function g(){const v=document.getElementById('p').value;let res="";const block="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ";for(let i=0;i<v;i++){res+=block+"\\n\\n";}document.getElementById('t').value=res.trim();}</script></body></html>`,
    'dados': `<!DOCTYPE html><html><head><style>body{font-family:'Inter',sans-serif;display:flex;justify-content:center;align-items:center;height:100vh;margin:0;background:#ecfccb;} .c{background:#fff;padding:40px;border-radius:30px;text-align:center;box-shadow:0 10px 20px rgba(0,0,0,0.05);} h2{color:#4d7c0f;margin-top:0;} .dado{font-size:8rem;margin:20px;display:inline-block;color:#65a30d;} button{background:#84cc16;color:white;padding:15px 30px;border:none;border-radius:15px;font-size:1.2rem;font-weight:bold;cursor:pointer;} button:hover{background:#65a30d;}</style></head><body><div class="c"><h2>Lanzador de Dados</h2><div id="d" class="dado">🎲</div><br><button onclick="r()">Lanzar Dado</button></div><script>const ds=['⚀','⚁','⚂','⚃','⚄','⚅'];function r(){const el=document.getElementById('d');el.style.transform='rotate(360deg) scale(1.2)';el.style.transition='transform 0.3s ease';setTimeout(()=>{el.innerText=ds[Math.floor(Math.random()*6)];el.style.transform='none';},300);}</script></body></html>`,
    'moneda_azar': `<!DOCTYPE html><html><head><style>body{font-family:'Inter',sans-serif;display:flex;justify-content:center;align-items:center;height:100vh;margin:0;background:#fdf4ff;} .c{background:#fff;padding:40px;border-radius:30px;text-align:center;box-shadow:0 10px 20px rgba(0,0,0,0.05);} h2{color:#a21caf;margin-top:0;} .coin{font-size:3rem;margin:30px auto;display:flex;justify-content:center;align-items:center;background:#fce7f3;border-radius:50%;width:150px;height:150px;font-weight:900;color:#db2777;border:10px solid #fbcfe8;} button{background:#d946ef;color:white;padding:15px 30px;border:none;border-radius:15px;font-size:1.2rem;font-weight:bold;cursor:pointer;} button:hover{background:#c026d3;}</style></head><body><div class="c"><h2>Cara o Cruz</h2><div id="m" class="coin">?</div><br><button onclick="f()">Lanzar al Aire</button></div><script>function f(){const m=document.getElementById('m');m.style.transform='scaleY(0)';m.style.transition='transform 0.2s';setTimeout(()=>{const res=Math.random()>0.5?'CARA':'CRUZ';m.innerText=res;m.style.transform='scaleY(1)';},200);}</script></body></html>`,
    'contador': `<!DOCTYPE html><html><head><style>body{font-family:'Inter',sans-serif;margin:0;padding:20px;background:#eef2ff;height:100vh;box-sizing:border-box;} .w{background:#fff;height:calc(100% - 40px);border-radius:24px;padding:30px;display:flex;flex-direction:column;box-shadow:0 10px 25px -5px rgba(0,0,0,0.05);} h2{color:#4338ca;margin-top:0;} textarea{flex-grow:1;border:2px solid #e0e7ff;border-radius:12px;padding:15px;resize:none;font-size:1.1rem;outline:none;font-family:'Inter',sans-serif;} textarea:focus{border-color:#6366f1;} .bar{display:flex;justify-content:space-around;padding-top:20px;gap:15px;} .stat{background:#f5f3ff;padding:15px;border-radius:12px;text-align:center;flex:1;} .v{font-size:2rem;font-weight:900;color:#4f46e5;display:block;} .l{color:#6b7280;font-size:0.9rem;font-weight:bold;text-transform:uppercase;}</style></head><body><div class="w"><h2>Contador de Texto</h2><textarea id="t" placeholder="Pega o escribe tu texto aquí para contarlo..."></textarea><div class="bar"><div class="stat"><span class="v" id="w">0</span><span class="l">Palabras</span></div><div class="stat"><span class="v" id="c">0</span><span class="l">Caracteres</span></div></div></div><script>const t=document.getElementById('t'),w=document.getElementById('w'),c=document.getElementById('c');t.addEventListener('input',()=>{const txt=t.value;c.innerText=txt.length;const wds=txt.trim().split(/\\s+/);w.innerText=txt.trim()===''?0:wds.length;});</script></body></html>`
};

/* ========================
   3. ESTADO Y LOCALSTORAGE (App Principal)
======================== */
window.addEventListener('DOMContentLoaded', () => {
    // ---- TRADUCTOR ----
    const langBtn = document.getElementById('lang-toggle');
    let currentLang = localStorage.getItem('app_lang') || 'es';
    
    const applyLanguage = (lang) => {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if(i18n[lang][key]) el.innerHTML = i18n[lang][key];
        });
        document.querySelectorAll('[data-i18n-ph]').forEach(el => {
            const key = el.getAttribute('data-i18n-ph');
            if(i18n[lang][key]) el.placeholder = i18n[lang][key];
        });
        
        // Custom translations for static variables inside tool openers
        // This handles standard tools that aren't strings
        window._txt_calc1 = lang === 'es' ? 'Calculadora de Porcentajes' : 'Percentage Calculator';
        window._txt_calc2 = lang === 'es' ? '¿Cuánto es el...' : 'How much is...';
        window._txt_calc3 = lang === 'es' ? 'de la cantidad...' : 'of the amount...';
        window._txt_calc4 = lang === 'es' ? 'Calcular' : 'Calculate';
    };
    
    applyLanguage(currentLang);
    
    langBtn.addEventListener('click', () => {
        currentLang = currentLang === 'es' ? 'en' : 'es';
        localStorage.setItem('app_lang', currentLang);
        applyLanguage(currentLang);
    });

    // ---- MODO OSCURO ----
    const themeBtn = document.getElementById('theme-toggle');
    const isDark = localStorage.getItem('app_theme') === 'dark';
    
    if(isDark) document.body.classList.add('dark-theme');
    
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        localStorage.setItem('app_theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
    });

    // ---- FAVORITOS ----
    let favorites = JSON.parse(localStorage.getItem('app_favorites')) || [];
    const grid = document.getElementById('catalog-grid');
    const cards = Array.from(document.querySelectorAll('.tool-card'));
    
    // Función para renderizar el Grid para que los favoritos estén primeros
    const sortAndRenderGrid = () => {
        cards.sort((a, b) => {
            const aId = a.getAttribute('data-id');
            const bId = b.getAttribute('data-id');
            const aFav = favorites.includes(aId) ? 1 : 0;
            const bFav = favorites.includes(bId) ? 1 : 0;
            return bFav - aFav; // Descending, 1 is favored over 0
        });
        
        // Limpiamos y re-añadimos en orden
        cards.forEach(card => grid.appendChild(card));
        
        // Pintamos correctamente los íconos de estrellas
        cards.forEach(card => {
            const aId = card.getAttribute('data-id');
            const favBtn = card.querySelector('.fav-btn');
            if (favorites.includes(aId)) {
                favBtn.classList.add('active');
            } else {
                favBtn.classList.remove('active');
            }
        });
    }

    sortAndRenderGrid();

    // Eventos Click a los botones Favoritos
    document.querySelectorAll('.fav-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation(); // Evitar triggers raros
            const cardId = btn.closest('.tool-card').getAttribute('data-id');
            
            if(favorites.includes(cardId)) {
                favorites = favorites.filter(id => id !== cardId);
            } else {
                favorites.push(cardId);
            }
            
            localStorage.setItem('app_favorites', JSON.stringify(favorites));
            sortAndRenderGrid(); // Reorganizamos en caliente
        });
    });

    // ---- BUSCADOR DE TEXTO ----
    let searchTimeout;
    const searchInput = document.getElementById('search-tools');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const val = e.target.value.toLowerCase().trim();
            
            // Trigger secreto para panel de Analytics
            if (val === 'analytics') {
                const p = prompt("Contraseña de acceso al Dashboard:");
                if (p === "admin" || p === "1234") {
                    e.target.value = '';
                    executeFilters();
                    window.openAnalytics();
                } else if (p !== null) {
                    alert("Contraseña incorrecta.");
                }
                return;
            }

            executeFilters();

            // Trackear búsquedas locales (con debounce para no saturar con cada letra)
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                if(val.length > 2 && val !== 'analytics') {
                    let sHistory = JSON.parse(localStorage.getItem('app_analytics_searches')) || {};
                    sHistory[val] = (sHistory[val] || 0) + 1;
                    localStorage.setItem('app_analytics_searches', JSON.stringify(sHistory));
                }
            }, 1000);
        });
    }

    // ---- CATEGORÍAS TABS ----
    let currentCategory = 'all';
    const catBtns = document.querySelectorAll('.cat-btn');

    catBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            catBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.getAttribute('data-cat');
            executeFilters();
        });
    });

    function executeFilters() {
        const term = (searchInput ? searchInput.value.toLowerCase().trim() : '');
        
        cards.forEach(card => {
            const title = card.getAttribute('data-title').toLowerCase();
            const desc = card.getAttribute('data-desc').toLowerCase();
            const cat = card.getAttribute('data-category');
            
            const matchText = title.includes(term) || desc.includes(term);
            const matchCat = currentCategory === 'all' || cat === currentCategory;
            
            if (matchText && matchCat) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    }
});

/* ========================
   4. LOGICA DE VENTANAS (MODALES) 
======================== */
window.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('tool-modal');
    const closeBtn = document.querySelector('.close-modal');

    // Cerrar al click en la cruz
    if(closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.classList.add('hidden');
        });
    }

    // Cerrar si hace click en la parte negra
    if(modal) {
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('hidden');
            }
        });
    }
});

/* ========================
   5. MANEJADOR PRINCIPAL DE HERRAMIENTAS Y ANALYTICS
======================== */
window.openTool = function(toolId) {
    // Analytics: Registrar herramienta usada
    let tUsage = JSON.parse(localStorage.getItem('app_analytics_tools')) || {};
    tUsage[toolId] = (tUsage[toolId] || 0) + 1;
    localStorage.setItem('app_analytics_tools', JSON.stringify(tUsage));

    const modal = document.getElementById('tool-modal');
    const modalBody = document.getElementById('tool-modal-body');
    modal.classList.remove('hidden');
    
    // Obtener idioma (en caso de que las herramientas nativas lo usen)
    const lang = localStorage.getItem('app_lang') || 'es';
    
    // Si la herramienta está en las plantillas HTML (iframes complejas)
    if (LOCAL_TEMPLATES[toolId]) {
        let htmlCode = LOCAL_TEMPLATES[toolId];
        
        if (lang === 'en') {
            htmlCode = htmlCode
                .replace('Reloj Pomodoro', 'Pomodoro Timer')
                .replace('Iniciar', 'Start')
                .replace('Pausar', 'Pause')
                .replace('Reiniciar', 'Reset')
                .replace('Gestor de Tareas', 'Task Manager')
                .replace('¿Qué necesitas hacer?', 'What do you need to do?')
                .replace('Añadir Tarea', 'Add Task')
                .replace('Calculadora IMC', 'BMI Calculator')
                .replace('Peso (kg):', 'Weight (kg):')
                .replace('Altura (cm):', 'Height (cm):')
                .replace('Calcular mi IMC', 'Calculate my BMI')
                .replace('Tu IMC es:', 'Your BMI is:')
                .replace('Ingresa valores válidos', 'Enter valid values')
                .replace('Bajo peso', 'Underweight')
                .replace('Peso Normal', 'Normal Weight')
                .replace('Sobrepeso', 'Overweight')
                .replace('Obesidad', 'Obesity')
                .replace('Conversor de Divisas', 'Currency Converter')
                .replace('Tasas de cambio aproximadas', 'Approximate exchange rates')
                .replace('Monto', 'Amount')
                .replace('Convertir', 'Convert')
                .replace('Anotador Rápido', 'Quick Notes')
                .replace('Escribe aquí... (Es temporal y privado)', 'Write here... (It is temporary and private)')
                .replace('Copiar Todo', 'Copy All')
                .replace('Borrador auto-guardado 💾', 'Auto-saved draft 💾')
                .replace('¡Copiado!', 'Copied!')
                .replace('Generador de Lorem Ipsum', 'Lorem Ipsum Generator')
                .replace('Generar Párrafos', 'Generate Paragraphs')
                .replace('El texto aparecerá aquí...', 'Text will appear here...')
                .replace('Lanzador de Dados', 'Dice Roller')
                .replace('Lanzar Dado', 'Roll Dice')
                .replace('Cara o Cruz', 'Heads or Tails')
                .replace('Lanzar al Aire', 'Flip Coin')
                .replace('CARA', 'HEADS')
                .replace('CRUZ', 'TAILS')
                .replace('Contador de Texto', 'Word Counter')
                .replace('Pega o escribe tu texto aquí para contarlo...', 'Paste or type your text here to count it...')
                .replace('Palabras', 'Words')
                .replace('Caracteres', 'Characters');
        }

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

    // Herramientas manejadas con UI nativa
    if (toolId === 'calc') {
        modalBody.innerHTML = `
            <div class="tool-ui">
                <h3>${window._txt_calc1 || 'Calculadora'}</h3>
                <label>${window._txt_calc2 || '¿Cuánto es el...'}</label>
                <input type="number" id="calc-percent" placeholder="20">
                <label>${window._txt_calc3 || 'de la cantidad...'}</label>
                <input type="number" id="calc-amount" placeholder="150">
                <button class="btn-primary" style="width:100%" onclick="calcPercentage()">${window._txt_calc4 || 'Calcular'}</button>
                <div id="calc-result" class="result-box hidden"></div>
            </div>
        `;
    } else if (toolId === 'qr') {
        modalBody.innerHTML = `
            <div class="tool-ui">
                <h3>${lang === 'es' ? 'Generador de Código QR' : 'QR Code Generator'}</h3>
                <label>${lang === 'es' ? 'Enlace (URL):' : 'Link (URL):'}</label>
                <input type="text" id="qr-text" placeholder="https://google.com">
                <button class="btn-primary" style="width:100%" onclick="generateQR()">${lang === 'es' ? 'Generar Código QR' : 'Generate QR Code'}</button>
                <div id="qr-result" class="result-box hidden" style="text-align:center;">
                    <img id="qr-img" src="" alt="QR" style="max-width:100%; border-radius: 8px;">
                </div>
            </div>
        `;
    } else if (toolId === 'palette') {
         modalBody.innerHTML = `
            <div class="tool-ui" style="text-align:center;">
                <h3>${lang === 'es' ? 'Generador de Paletas HEX' : 'HEX Palette Generator'}</h3>
                <div id="color-show" style="width:120px; height:120px; margin:20px auto; border-radius:50%; background:#2563eb; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);"></div>
                <button class="btn-primary" style="width:100%" onclick="generarColor()">${lang === 'es' ? 'Generar Nuevo Color' : 'Generate New Color'}</button>
                <div id="palette-result" class="result-box" style="margin-top:15px; font-weight:bold; font-family:monospace; font-size:1.5rem;">#2563eb</div>
            </div>
        `;
    } else if (toolId === 'password') {
        modalBody.innerHTML = `
            <div class="tool-ui" style="text-align:center;">
                <h3>${lang === 'es' ? 'Contraseñas Seguras' : 'Secure Passwords'}</h3>
                <p style="margin-bottom:20px; color:var(--text-muted);">${lang === 'es' ? 'Crea claves aleatorias y robustas.' : 'Create robust random keys.'}</p>
                <button class="btn-primary" style="width:100%" onclick="generarPassword()">${lang === 'es' ? 'Generar Contraseña' : 'Generate Password'}</button>
                <div id="pass-result" class="result-box hidden" style="margin-top:20px;"></div>
            </div>
        `;
    } else if (toolId === 'cronometro') {
        window.resetTimer();
        modalBody.innerHTML = `
            <div class="tool-ui" style="text-align:center;">
                <h3>${lang === 'es' ? 'Cronómetro' : 'Stopwatch'}</h3>
                <div id="timer-display" style="font-size: 5rem; font-weight: 800; color: var(--primary-blue); margin: 20px 0; font-variant-numeric: tabular-nums;">00:00</div>
                <div style="display:flex; justify-content:center; gap:10px;">
                    <button class="btn-primary" onclick="startTimer()">${lang === 'es' ? 'Iniciar' : 'Start'}</button>
                    <button class="btn-secondary" onclick="stopTimer()">${lang === 'es' ? 'Pausar' : 'Pause'}</button>
                    <button class="btn-outline" onclick="resetTimer()">${lang === 'es' ? 'Reiniciar' : 'Reset'}</button>
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
    const l = localStorage.getItem('app_lang') || 'es';
    if(p && a) {
        const result = (p / 100) * a;
        const msg = l === 'es' ? `El ${p}% de ${a} es:` : `The ${p}% of ${a} is:`;
        res.innerHTML = `${msg} <br><strong style="font-size:2rem;">${result.toFixed(2).replace('.00', '')}</strong>`;
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
    const l = localStorage.getItem('app_lang') || 'es';
    const clck = l === 'es' ? 'Click en la clave para copiarla' : 'Click the key to copy';
    const cpd = l === 'es' ? '¡Copiado!' : 'Copied!';
    resBox.innerHTML = `<strong style="font-size:1.5rem; letter-spacing:2px; user-select:all; cursor:pointer;" onclick="navigator.clipboard.writeText(this.innerText);alert('${cpd}');">${password}</strong><br><small style="color:var(--text-muted); font-size:0.8rem; margin-top:10px; display:block;">${clck}</small>`;
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

/* ========================
   LOGICA DEL PANEL DE ANALYTICS
======================== */
window.openAnalytics = function() {
    const aModal = document.getElementById('analytics-modal');
    if(!aModal) return;
    
    aModal.classList.remove('hidden');

    const tUsage = JSON.parse(localStorage.getItem('app_analytics_tools')) || {};
    const sHistory = JSON.parse(localStorage.getItem('app_analytics_searches')) || {};

    let totalUsos = 0;
    for(let k in tUsage) totalUsos += tUsage[k];
    
    const countEl = document.getElementById('total-tools');
    if(countEl) countEl.innerText = totalUsos;

    const topToolsList = document.getElementById('analytics-top-tools');
    const topSearchesList = document.getElementById('analytics-top-searches');
    
    if(topToolsList) topToolsList.innerHTML = '';
    if(topSearchesList) topSearchesList.innerHTML = '';

    // Render Herramientas Top
    const sortedTools = Object.entries(tUsage).sort((a,b) => b[1] - a[1]).slice(0, 10);
    if(sortedTools.length === 0 && topToolsList) {
        topToolsList.innerHTML = '<li>No hay datos aún.</li>';
    } else if(topToolsList) {
        sortedTools.forEach(([tool, count]) => {
            topToolsList.innerHTML += `<li style="display:flex; justify-content:space-between; margin-bottom:10px; border-bottom:1px solid var(--border-color); padding-bottom:5px;"><span>${tool.toUpperCase()}</span> <strong><span style="color:var(--primary-blue)">${count}</span> usos</strong></li>`;
        });
    }

    // Render Búsquedas Top
    const sortedSearches = Object.entries(sHistory).sort((a,b) => b[1] - a[1]).slice(0, 10);
    if(sortedSearches.length === 0 && topSearchesList) {
        topSearchesList.innerHTML = '<li>No hay búsquedas aún.</li>';
    } else if(topSearchesList) {
        sortedSearches.forEach(([search, count]) => {
            topSearchesList.innerHTML += `<li style="display:flex; justify-content:space-between; margin-bottom:10px; border-bottom:1px solid var(--border-color); padding-bottom:5px;"><span>"${search}"</span> <strong><span style="color:var(--primary-blue)">${count}</span> veces</strong></li>`;
        });
    }
}

window.clearAnalytics = function() {
    if(confirm('¿Estás seguro de que quieres borrar todos los datos de analytics? Esta acción no se puede deshacer.')) {
        localStorage.removeItem('app_analytics_tools');
        localStorage.removeItem('app_analytics_searches');
        window.openAnalytics(); // Refresh panel
    }
}

// Event Listeners for Analytics Modal
window.addEventListener('DOMContentLoaded', () => {
    const aModal = document.getElementById('analytics-modal');
    const closeABtn = document.querySelector('.close-analytics');
    
    if(closeABtn) {
        closeABtn.addEventListener('click', () => {
            aModal.classList.add('hidden');
        });
    }
    
    if(aModal) {
        window.addEventListener('click', (e) => {
            if (e.target === aModal) {
                aModal.classList.add('hidden');
            }
        });
    }
});
