<!-- comincio chiamando due const, uno chiamato numeroChilometri e l'altro chiamato etaPasseggero, con all'interno la richiesta di un input numerico "parseInt(prompt()); -->

<!-- chiamo un const che contiene il prezzo del biglietto base chiamato prezzoBiglietto dandogli il valore con l'operazione prezzoBiglietto = numeroChilometri * 0.21 -->

<!-- chiamo un let prezzoBigliettoRidotto -->

<!-- creo un "if(etaPasseggero < 18){ prezzoBigliettoRidotto = prezzoBiglietto * 0.8; console.log(prezzoBigliettoRidotto); alert(prezzoBigliettoRidotto);}" -->
    <!-- questo if serve per calcolare il 20 percento di prezzoBiglietto se l'input inserito dall'utente nel const etaPasseggero è inferiore a 18 e stamparlo nella console e nell'alert -->

<!-- creo un else if  "else if (etaPasseggero >= 65) {let prezzoBigliettoRidotto = prezzoBiglietto * 0.6; console.log(prezzoBigliettoRidotto); alert(prezzoBigliettoRidotto);}" -->
    <!-- questo else if serve per calcolare il 40 percento di prezzoBiglietto se l'input inserito dall'utente nel const etaPasseggero è maggiore o uguale a 65 e stamparlo nella console e nell'alert -->

<!-- creo un "else {console.log(prezzoBiglietto); alert(prezzoBiglietto);} -->
    <!-- questo else serve per stampare il prezzo del biglietto senza sconti se i due casi precedenti non si presentano, quindi se l'utente ha inserito in etaPasseggero un numero compreso tra 18 e 64 -->