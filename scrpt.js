// --- 1. CONSTANTES DE DATOS ---

const data = {
    municipios: [
        { nombre: 'Bogotá D.C.', poblacion: 7743955, area: 1587, densidad: 4879 },
        { nombre: 'Medellín', poblacion: 2427129, area: 380, densidad: 6387 },
        { nombre: 'Cali', poblacion: 2172527, area: 564, densidad: 3853 },
        { nombre: 'Barranquilla', poblacion: 1205284, area: 154, densidad: 7827 },
        { nombre: 'Cartagena', poblacion: 876885, area: 572, densidad: 1533 }
    ],
    crecimientoPoblacional: [
        { año: 2018, poblacion: 49648685 },
        { año: 2019, poblacion: 50339443 },
        { año: 2020, poblacion: 51049498 },
        { año: 2021, poblacion: 51609474 },
        { año: 2022, poblacion: 52156254 },
        { año: 2023, poblacion: 52695952 }
    ],
    distribucionEdad: [
        { rango: '0-14', porcentaje: 22.8 },
        { rango: '15-24', porcentaje: 16.3 },
        { rango: '25-54', porcentaje: 42.1 },
        { rango: '55-64', porcentaje: 9.7 },
        { rango: '65+', porcentaje: 9.1 }
    ],
    usoSuelo: [
        { tipo: 'Agrícola', porcentaje: 38.5 },
        { tipo: 'Forestal', porcentaje: 52.2 },
        { tipo: 'Urbano', porcentaje: 1.8 },
        { tipo: 'Cuerpos de agua', porcentaje: 2.1 },
        { tipo: 'Otros', porcentaje: 5.4 }
    ]
};

const colombiaData = {
    'Cundinamarca': {
        municipios: {
            'Bogotá D.C.': { poblacion: 7743955, area: 1587, densidad: 4879, altitud: 2640, temperatura: 14 },
            'Soacha': { poblacion: 711767, area: 184, densidad: 3868, altitud: 2566, temperatura: 14 },
            'Facatativá': { poblacion: 139598, area: 158, densidad: 883, altitud: 2586, temperatura: 14 },
            'Zipaquirá': { poblacion: 137466, area: 194, densidad: 709, altitud: 2650, temperatura: 14 },
            'Chía': { poblacion: 132717, area: 79, densidad: 1680, altitud: 2564, temperatura: 13 }
        }
    },
    'Antioquia': {
        municipios: {
            'Medellín': { poblacion: 2427129, area: 380, densidad: 6387, altitud: 1495, temperatura: 24 },
            'Bello': { poblacion: 506072, area: 142, densidad: 3564, altitud: 1450, temperatura: 23 },
            'Itagüí': { poblacion: 281853, area: 21, densidad: 13421, altitud: 1550, temperatura: 22 },
            'Envigado': { poblacion: 236529, area: 78, densidad: 3033, altitud: 1575, temperatura: 22 },
            'Rionegro': { poblacion: 126722, area: 196, densidad: 647, altitud: 2125, temperatura: 17 }
        }
    },
    'Valle del Cauca': {
        municipios: {
            'Cali': { poblacion: 2172527, area: 564, densidad: 3853, altitud: 1018, temperatura: 25 },
            'Palmira': { poblacion: 318483, area: 1162, densidad: 274, altitud: 1001, temperatura: 24 },
            'Buenaventura': { poblacion: 413774, area: 6078, densidad: 68, altitud: 7, temperatura: 27 },
            'Tuluá': { poblacion: 215916, area: 910, densidad: 237, altitud: 960, temperatura: 24 },
            'Jamundí': { poblacion: 134083, area: 619, densidad: 217, altitud: 967, temperatura: 24 }
        }
    },
    'Atlántico': {
        municipios: {
            'Barranquilla': { poblacion: 1205284, area: 154, densidad: 7827, altitud: 18, temperatura: 28 },
            'Soledad': { poblacion: 670188, area: 67, densidad: 10003, altitud: 25, temperatura: 28 },
            'Malambo': { poblacion: 133294, area: 108, densidad: 1234, altitud: 15, temperatura: 28 },
            'Sabanalarga': { poblacion: 105799, area: 983, densidad: 108, altitud: 98, temperatura: 27 },
            'Puerto Colombia': { poblacion: 29517, area: 93, densidad: 317, altitud: 5, temperatura: 28 }
        }
    },
    'Bolívar': {
        municipios: {
            'Cartagena': { poblacion: 876885, area: 572, densidad: 1533, altitud: 2, temperatura: 28 },
            'Magangué': { poblacion: 124964, area: 1141, densidad: 110, altitud: 15, temperatura: 28 },
            'Turbaco': { poblacion: 93550, area: 158, densidad: 592, altitud: 140, temperatura: 27 },
            'Arjona': { poblacion: 82814, area: 277, densidad: 299, altitud: 158, temperatura: 27 },
            'El Carmen de Bolívar': { poblacion: 74852, area: 954, densidad: 78, altitud: 154, temperatura: 28 }
        }
    },
    'Santander': {
        municipios: {
            'Bucaramanga': { poblacion: 613400, area: 165, densidad: 3717, altitud: 959, temperatura: 23 },
            'Floridablanca': { poblacion: 277934, area: 107, densidad: 2597, altitud: 945, temperatura: 24 },
            'Girón': { poblacion: 181699, area: 479, densidad: 379, altitud: 777, temperatura: 27 },
            'Piedecuesta': { poblacion: 158029, area: 442, densidad: 357, altitud: 987, temperatura: 20 },
            'Barrancabermeja': { poblacion: 191403, area: 1347, densidad: 142, altitud: 126, temperatura: 28 }
        }
    }
};

// Colores a juego con la marca
const COLORS = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E2'];


// --- 2. FUNCIONES DE LÓGICA DE INTERFAZ ---

function populateDepartamentos() {
    const select = document.getElementById('departamento');
    const departamentos = Object.keys(colombiaData).sort();
    
    departamentos.forEach(dept => {
        const option = document.createElement('option');
        option.value = dept;
        option.textContent = dept;
        select.appendChild(option);
    });
}

function updateMunicipios() {
    const deptSelect = document.getElementById('departamento');
    const munSelect = document.getElementById('municipio');
    const selectedDept = deptSelect.value;
    
    munSelect.innerHTML = '<option value="">Selecciona un municipio</option>';
    document.getElementById('locationDataCards').innerHTML = '<div class="info-message">Selecciona un municipio para ver los datos específicos</div>';
    
    if (selectedDept) {
        const municipios = Object.keys(colombiaData[selectedDept].municipios).sort();
        municipios.forEach(mun => {
            const option = document.createElement('option');
            option.value = mun;
            option.textContent = mun;
            munSelect.appendChild(option);
        });
    }
}

function updateLocationData() {
    const deptSelect = document.getElementById('departamento');
    const munSelect = document.getElementById('municipio');
    const selectedDept = deptSelect.value;
    const selectedMun = munSelect.value;
    
    if (selectedDept && selectedMun) {
        const munData = colombiaData[selectedDept].municipios[selectedMun];
        
        const cardsHTML = `
            <div class="location-card">
                <div class="icon">👥</div>
                <div class="value">${munData.poblacion.toLocaleString()}</div>
                <div class="label">Población</div>
            </div>
            <div class="location-card">
                <div class="icon">📏</div>
                <div class="value">${munData.area.toLocaleString()}</div>
                <div class="label">Área (km²)</div>
            </div>
            <div class="location-card">
                <div class="icon">📊</div>
                <div class="value">${munData.densidad.toLocaleString()}</div>
                <div class="label">Densidad (hab/km²)</div>
            </div>
            <div class="location-card">
                <div class="icon">⛰️</div>
                <div class="value">${munData.altitud.toLocaleString()}</div>
                <div class="label">Altitud (msnm)</div>
            </div>
            <div class="location-card">
                <div class="icon">🌡️</div>
                <div class="value">${munData.temperatura}°C</div>
                <div class="label">Temperatura Media</div>
            </div>
        `;
        
        document.getElementById('locationDataCards').innerHTML = cardsHTML;
    }
}

function toggleMenu() {
    const nav = document.getElementById('mainNav');
    nav.classList.toggle('active');
}

// Lógica de formulario
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); 

            const successMessage = document.getElementById('successMessage');
            if (successMessage) {
                successMessage.classList.add('show');
            }

            setTimeout(() => {
                contactForm.reset();
                if (successMessage) {
                    successMessage.classList.remove('show');
                }
            }, 5000); 
        });
    }
});


// --- 3. CREACIÓN DINÁMICA DE CONTENEDORES DE GRÁFICOS ---

function createChartContainers() {
    const chartsContainer = document.getElementById('chartsContainer');
    if (!chartsContainer) return;

    chartsContainer.className = 'chart-grid';

    // Chart 1: Población por Municipio (Bar Chart)
    const chart1 = document.createElement('div');
    chart1.className = 'chart-card';
    chart1.innerHTML = `
        <h3>Población por Principales Ciudades</h3>
        <canvas id="chart1" class="chart-wrapper"></canvas>
    `;
    chartsContainer.appendChild(chart1);

    // Chart 2: Crecimiento Poblacional (Line Chart)
    const chart2 = document.createElement('div');
    chart2.className = 'chart-card';
    chart2.innerHTML = `
        <h3>Crecimiento Poblacional Nacional (2018-2023)</h3>
        <canvas id="chart2" class="chart-wrapper"></canvas>
    `;
    chartsContainer.appendChild(chart2);

    // Chart 3: Distribución por Edad (Doughnut Chart)
    const chart3 = document.createElement('div');
    chart3.className = 'chart-card';
    chart3.innerHTML = `
        <h3>Distribución de Población por Edad</h3>
        <canvas id="chart3" class="chart-wrapper"></canvas>
    `;
    chartsContainer.appendChild(chart3);

    // Chart 4: Uso del Suelo (Pie Chart)
    const chart4 = document.createElement('div');
    chart4.className = 'chart-card';
    chart4.innerHTML = `
        <h3>Uso del Suelo </h3>
        <canvas id="chart4" class="chart-wrapper"></canvas>
    `;
    chartsContainer.appendChild(chart4);
}


// --- 4. FUNCIÓN PRINCIPAL PARA DIBUJAR LOS GRÁFICOS (con Chart.js) ---

function initializeCharts() {
    if (typeof Chart === 'undefined') {
        console.error("Chart.js no está cargado. Asegúrate de incluir la etiqueta <script> de Chart.js antes de tu script.");
        return;
    }

    // Opciones base para asegurar la responsividad
    const baseOptions = {
        responsive: true,
        maintainAspectRatio: false, // CLAVE: Permite que el gráfico use el tamaño definido por CSS
        plugins: {
            legend: {
                position: 'right',
            }
        }
    };
    
    // CHART 1: Población por Municipio (Bar Chart)
    const ctx1 = document.getElementById('chart1');
    if (ctx1) {
        new Chart(ctx1.getContext('2d'), {
            type: 'bar',
            data: {
                labels: data.municipios.map(m => m.nombre),
                datasets: [{
                    label: 'Población',
                    data: data.municipios.map(m => m.poblacion),
                    backgroundColor: COLORS.slice(0, data.municipios.length),
                    borderColor: COLORS.slice(0, data.municipios.length),
                    borderWidth: 1
                }]
            },
            options: {
                ...baseOptions,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: { display: true, text: 'Población' }
                    }
                }
            }
        });
    }

    // CHART 2: Crecimiento Poblacional (Line Chart)
    const ctx2 = document.getElementById('chart2');
    if (ctx2) {
        new Chart(ctx2.getContext('2d'), {
            type: 'line',
            data: {
                labels: data.crecimientoPoblacional.map(d => d.año),
                datasets: [{
                    label: 'Población Nacional',
                    data: data.crecimientoPoblacional.map(d => d.poblacion),
                    borderColor: COLORS[1],
                    backgroundColor: 'rgba(78, 205, 196, 0.2)',
                    borderWidth: 3,
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                ...baseOptions,
                scales: {
                    y: {
                        beginAtZero: false,
                        title: { display: true, text: 'Población' }
                    }
                }
            }
        });
    }

    // CHART 3: Distribución por Edad (Doughnut Chart)
    const ctx3 = document.getElementById('chart3');
    if (ctx3) {
        new Chart(ctx3.getContext('2d'), {
            type: 'doughnut',
            data: {
                labels: data.distribucionEdad.map(d => `${d.rango} (${d.porcentaje}%)`),
                datasets: [{
                    data: data.distribucionEdad.map(d => d.porcentaje),
                    backgroundColor: COLORS.slice(0, data.distribucionEdad.length),
                    hoverOffset: 10
                }]
            },
            options: baseOptions // Utiliza las opciones base
        });
    }

    // CHART 4: Uso del Suelo (Pie Chart)
    const ctx4 = document.getElementById('chart4');
    if (ctx4) {
        new Chart(ctx4.getContext('2d'), {
            type: 'pie',
            data: {
                labels: data.usoSuelo.map(d => `${d.tipo} (${d.porcentaje}%)`),
                datasets: [{
                    data: data.usoSuelo.map(d => d.porcentaje),
                    backgroundColor: COLORS.slice(0, data.usoSuelo.length).reverse(),
                    hoverOffset: 10
                }]
            },
            options: baseOptions // Utiliza las opciones base
        });
    }
}


// --- 5. INICIALIZACIÓN DE LA APLICACIÓN ---

window.addEventListener('DOMContentLoaded', function() {
    populateDepartamentos();
    createChartContainers(); 
    initializeCharts();      
});