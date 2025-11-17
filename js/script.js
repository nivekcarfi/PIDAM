function setScenario(type) {
    const circle = document.getElementById('status-circle');
    const icon = document.getElementById('status-icon');
    const text = document.getElementById('status-text');
    
    // Valors
    const vGlu = document.getElementById('val-glucosa');
    const vCort = document.getElementById('val-cortisol');
    const vHidra = document.getElementById('val-hidra');
    const vTemp = document.getElementById('val-temp');

    // Reset classes
    circle.className = 'status-indicator';

    if (type === 'ok') {
        circle.classList.add('status-ok');
        icon.className = 'fas fa-check';
        text.innerText = "Tot Correcte";
        text.style.color = "#28a745";
        
        vGlu.innerText = "95 mg/dL";
        vCort.innerText = "Normal";
        vHidra.innerText = "Òptima";
        vTemp.innerText = "36.5°C";
    } 
    else if (type === 'stress') {
        circle.classList.add('status-warning');
        icon.className = 'fas fa-exclamation';
        text.innerText = "Nivell d'Estrès Alt";
        text.style.color = "#ffc107";

        vGlu.innerText = "110 mg/dL";
        vCort.innerText = "Elevat (22 ug/dL)";
        vHidra.innerText = "Baixa";
        vTemp.innerText = "36.7°C";
    } 
    else if (type === 'virus') {
        circle.classList.add('status-danger');
        icon.className = 'fas fa-virus';
        text.innerText = "Risc d'Infecció";
        text.style.color = "#dc3545";

        vGlu.innerText = "105 mg/dL";
        vCort.innerText = "Normal";
        vHidra.innerText = "Òptima";
        vTemp.innerText = "37.8°C (Pujant)";
    }
}