let cargador =['pium!','pium!','pium!','pium!','pium!','pium!','pium!'];
function chaunchat(cargador) { 

    if (Math.random() < 0.8) {
        console.log("Fallo, se quedó pillada");
        return;
    }

    let contador = 0;

    for (let i = 0; i < cargador.length; i++) {

        console.log(cargador[i]);

        contador++;

        if (contador === 3) {
            console.log('');
            contador = 0;
        }
    }
}


chaunchat(cargador)
