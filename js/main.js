const numeroChilometri = parseInt(prompt("inserisci i chilometri che vuoi percorrere"));
const etaPasseggero = parseInt(prompt("inserisci la tua età"));

let prezzoBiglietto = numeroChilometri * 0.21;
let prezzoBigliettoRidotto;

if(etaPasseggero < 18){
    prezzoBigliettoRidotto = prezzoBiglietto * 0.8; 
    prezzoBigliettoRidotto = prezzoBigliettoRidotto.toFixed(2);
    console.log('il prezzo del tuo biglietto è:' + ' ' + prezzoBigliettoRidotto + '€'); 
    document.getElementById("prezzoFinale").innerHTML = prezzoBigliettoRidotto + ' ' + '€';
}
else if (etaPasseggero >= 65) { 
    prezzoBigliettoRidotto = prezzoBiglietto * 0.6; 
    prezzoBigliettoRidotto = prezzoBigliettoRidotto.toFixed(2);
    console.log('il prezzo del tuo biglietto è:' + ' ' + prezzoBigliettoRidotto + '€'); 
    document.getElementById("prezzoFinale").innerHTML = prezzoBigliettoRidotto + ' ' + '€';
}

else { 
    prezzoBiglietto = prezzoBiglietto.toFixed(2)
    console.log('il prezzo del tuo biglietto è:' + ' ' + prezzoBiglietto + '€'); 
    document.getElementById("prezzoFinale").innerHTML = prezzoBiglietto + ' ' + '€';
}
