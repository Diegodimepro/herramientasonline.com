/* ========================
   CREADOR DE HERRAMIENTAS IA
======================== */
document.addEventListener('DOMContentLoaded', () => {
    const aiPromptInput = document.getElementById('ai-prompt');
    const btnGenerate = document.getElementById('btn-generate');
    const aiResultBox = document.getElementById('ai-result');
    const successResultBox = document.getElementById('success-result');
    const toolImgInput = document.getElementById('tool-img');
    const fileNameDisplay = document.getElementById('file-name-display');

    if(toolImgInput) {
        toolImgInput.addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                fileNameDisplay.textContent = e.target.files[0].name;
            } else {
                fileNameDisplay.textContent = 'Ninguna imagen seleccionada';
            }
        });
    }

    if(btnGenerate) {
        btnGenerate.addEventListener('click', () => {
            const text = aiPromptInput.value.trim();
            if (text === '') {
                alert('¡Por favor, cuéntame qué herramienta necesitas primero!');
                return;
            }

            const customName = document.getElementById('tool-name').value.trim() || text.substring(0, 15) + "...";
            const customDesc = document.getElementById('tool-desc').value.trim() || 'Herramienta generada por Inteligencia Artificial.';
            let iconHtml = '<i class="ph-bold ph-magic-wand"></i>';
            
            if (toolImgInput.files.length > 0) {
                const imgUrl = URL.createObjectURL(toolImgInput.files[0]);
                iconHtml = `<img src="${imgUrl}" alt="Icono" style="width: 100%; height: 100%; object-fit: cover; border-radius: 12px;">`;
            }

            // SIMULADOR DE CEREBRO DE IA (Basado en palabras clave)
            let toolBehavior = 'default';
            const lowerText = text.toLowerCase();
            if (lowerText.includes('contar') || lowerText.includes('palabra') || lowerText.includes('letra')) {
                toolBehavior = 'counter';
            } else if (lowerText.includes('mayuscula') || lowerText.includes('grande')) {
                toolBehavior = 'uppercase';
            } else if (lowerText.includes('reves') || lowerText.includes('invertir') || lowerText.includes('inversa')) {
                toolBehavior = 'reverse';
            } else if (lowerText.includes('par') || lowerText.includes('impar') || lowerText.includes('numero') || lowerText.includes('matematica')) {
                toolBehavior = 'evenodd';
            } else if (lowerText.includes('emoji') || lowerText.includes('carita')) {
                toolBehavior = 'emoji';
            }

            btnGenerate.disabled = true;
            btnGenerate.textContent = "Pensando...";
            btnGenerate.style.opacity = "0.7";
            aiPromptInput.disabled = true;

            successResultBox.classList.add('hidden');
            aiResultBox.classList.remove('hidden');

            // Simular un tiempo de carga mientras la "IA" programa
            setTimeout(() => {
                aiResultBox.classList.add('hidden');
                successResultBox.classList.remove('hidden');

                btnGenerate.disabled = false;
                btnGenerate.textContent = "Generar Herramienta con IA";
                btnGenerate.style.opacity = "1";
                aiPromptInput.disabled = false;
                
                // Añadir al catálogo visualmente
                const toolsGrid = document.querySelector('.tools-grid');
                if (toolsGrid) {
                    const newCardHtml = `
                        <div class="tool-card user-created" style="animation: fadeIn 0.5s ease;">
                            <div class="badge" style="background:#dcfce7; color:#166534">Nueva</div>
                            <div class="tool-icon" style="overflow:hidden; padding:0;">${iconHtml}</div>
                            <h3>${customName}</h3>
                            <p>${customDesc}</p>
                            <button class="btn-text" onclick="openTool('ai-generated', '${customName.replace(/'/g, "\\'")}', '${toolBehavior}', '${text.replace(/'/g, "\\'")}')">Usar Herramienta <i class="ph-bold ph-arrow-right"></i></button>
                        </div>
                    `;
                    toolsGrid.insertAdjacentHTML('afterbegin', newCardHtml);
                }
            }, 3000);
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

window.openTool = function(toolId, customTitle = null, behavior = 'default', originalPrompt = '') {
    const modal = document.getElementById('tool-modal');
    const modalBody = document.getElementById('tool-modal-body');
    modal.classList.remove('hidden');
    
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
                <label>Escribe el texto o enlace:</label>
                <input type="text" id="qr-text" placeholder="Ej: https://google.com">
                <button class="btn-primary" style="width:100%" onclick="generateQR()">Generar QR</button>
                <div id="qr-result" class="result-box hidden" style="text-align:center;">
                    <img id="qr-img" src="" alt="Código QR" style="max-width:100%; border-radius: 8px;">
                </div>
            </div>
        `;
    } else if (toolId === 'palette') {
         modalBody.innerHTML = `
            <div class="tool-ui" style="text-align:center;">
                <h3>Generador de Paletas</h3>
                <div id="color-show" style="width:100px; height:100px; margin:20px auto; border-radius:50%; background:#2563eb;"></div>
                <button class="btn-primary" style="width:100%" onclick="generarColor()">Generar Nuevo Color</button>
                <div id="palette-result" class="result-box" style="margin-top:15px;">#2563eb</div>
            </div>
        `;
    } else if (toolId === 'password') {
        modalBody.innerHTML = `
            <div class="tool-ui" style="text-align:center;">
                <h3>Contraseñas Seguras</h3>
                <p style="margin-bottom:20px; color:#64748b;">Crea claves imposibles de descifrar.</p>
                <button class="btn-primary" style="width:100%" onclick="generarPassword()">Generar Contraseña</button>
                <div id="pass-result" class="result-box hidden" style="margin-top:20px;"></div>
            </div>
        `;
    } else if (toolId === 'cronometro') {
        window.resetTimer();
        modalBody.innerHTML = `
            <div class="tool-ui" style="text-align:center;">
                <h3>Cronómetro</h3>
                <div id="timer-display" style="font-size: 4rem; font-weight: 800; color: var(--primary-blue); margin: 20px 0; font-variant-numeric: tabular-nums;">00:00</div>
                <div style="display:flex; justify-content:center; gap:10px;">
                    <button class="btn-primary" onclick="startTimer()">Iniciar</button>
                    <button class="btn-secondary" onclick="stopTimer()">Pausar</button>
                    <button class="btn-outline" onclick="resetTimer()">00:00</button>
                </div>
            </div>
        `;
    } else if (toolId === 'ai-generated') {
        modalBody.innerHTML = `
            <div class="tool-ui">
                <h3>${customTitle || 'Tu Nueva Herramienta'}</h3>
                ${originalPrompt ? `<p style="font-size:0.8rem; background:var(--light-blue); padding:10px; border-radius:8px; margin-bottom:15px;"><strong>Instrucción original:</strong> "${originalPrompt}"</p>` : ''}
                <p style="text-align:center; margin-bottom:15px; color:#64748b;">(El código de esta herramienta intenta adaptarse a tu instrucción)</p>
                <label>Ingresa tus datos aquí:</label>
                <input type="text" id="ai-tool-input" placeholder="Escribe algo aquí...">
                <button class="btn-primary" style="width:100%" onclick="runSimulatedAiTool('${behavior}', '${originalPrompt.replace(/'/g, "\\'")}')">💡 Procesar</button>
                <div id="ai-tool-result" class="result-box hidden"></div>
            </div>
        `;
    }
};

window.scrollToCatalog = function() {
    const el = document.getElementById('explorar');
    if(el) el.scrollIntoView({ behavior: 'smooth' });
}

window.resetCreator = function() {
    const aiPromptInput = document.getElementById('ai-prompt');
    const toolName = document.getElementById('tool-name');
    const toolDesc = document.getElementById('tool-desc');
    const toolImg = document.getElementById('tool-img');
    const fileName = document.getElementById('file-name-display');
    const successResultBox = document.getElementById('success-result');
    
    if(aiPromptInput) aiPromptInput.value = '';
    if(toolName) toolName.value = '';
    if(toolDesc) toolDesc.value = '';
    if(toolImg) toolImg.value = '';
    if(fileName) fileName.textContent = 'Ninguna imagen seleccionada';
    if(successResultBox) successResultBox.classList.add('hidden');
    if(aiPromptInput) aiPromptInput.focus();
}

/* ========================
   LOGICA DE LAS HERRAMIENTAS
======================== */
window.calcPercentage = function() {
    const p = document.getElementById('calc-percent').value;
    const a = document.getElementById('calc-amount').value;
    const res = document.getElementById('calc-result');
    if(p && a) {
        const result = (p / 100) * a;
        res.innerHTML = `El ${p}% de ${a} es: <br><strong style="font-size:2rem;">${result}</strong>`;
        res.classList.remove('hidden');
    }
}

window.generateQR = function() {
    const txt = document.getElementById('qr-text').value;
    const resBox = document.getElementById('qr-result');
    const img = document.getElementById('qr-img');
    if(txt) {
        img.src = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + encodeURIComponent(txt);
        resBox.classList.remove('hidden');
    }
}

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

window.generarPassword = function() {
    const resBox = document.getElementById('pass-result');
    if(!resBox) return;
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let password = "";
    for (let i = 0; i < 16; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    resBox.innerHTML = `Contraseña Segura:<br><strong style="font-size:1.5rem; letter-spacing:2px; user-select:all; cursor:pointer;">${password}</strong>`;
    resBox.classList.remove('hidden');
}

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

// LÓGICA DE HERRAMIENTAS GENERADAS POR EL CEREBRO SIMULADO
window.runSimulatedAiTool = function(behavior, originalPrompt = '') {
    const inputBox = document.getElementById('ai-tool-input');
    const resBox = document.getElementById('ai-tool-result');
    const val = inputBox.value;
    if(!val) return;
    
    let resultHtml = "";
    
    if (behavior === 'counter') {
        const words = val.trim().split(/\\s+/).filter(w => w.length > 0).length;
        resultHtml = `Tiene <strong>${words}</strong> palabras y <strong>${val.length}</strong> letras.`;
    } else if (behavior === 'uppercase') {
        resultHtml = val.toUpperCase();
    } else if (behavior === 'reverse') {
        resultHtml = val.split('').reverse().join('');
    } else if (behavior === 'evenodd') {
        const num = parseInt(val);
        if (isNaN(num)) resultHtml = "¡Por favor escribe un número válido!";
        else resultHtml = (num % 2 === 0) ? "El número es <strong>PAR</strong>" : "El número es <strong>IMPAR</strong>";
    } else if (behavior === 'emoji') {
        resultHtml = val + " 😎🚀✨";
    } else {
        // Enlaza la respuesta generica con lo que el usuario pedia realmente
        resultHtml = `Ejecutando lógica de: <em>"${originalPrompt}"</em>...<br><br><strong>Dato procesado:</strong> ${val}<br><br><span style="color:#2563eb; font-size:0.9rem;">(Como el Creador está en modo simulado para proteger tu privacidad, procesó tu dato de forma segura y exitosa).</span>`;
    }

    resBox.innerHTML = `<span style="color:var(--text-dark); font-size:1.1rem;">${resultHtml}</span>`;
    resBox.classList.remove('hidden');
}
