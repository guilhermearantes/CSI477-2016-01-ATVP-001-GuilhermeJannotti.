
    function calcula() {
        var d = document.indice;
        var amp = parseInt(d.amp.value);
        var temp = parseInt(d.temp.value);
        var mag = Math.log10(amp) + 3 * Math.log10(8 * temp) - 2.92;

        if (mag < 3.5) {
            d.resultado.value = mag.toFixed(2) + " - Geralmente não sentido, mas gravado.";
        }
        if (mag >= 3.5 && mag <= 5.4) {
            d.resultado.value = mag.toFixed(2) + " - As vezes sentido, mas raramente causa danos.";
        }
        if (mag >= 5.5 && mag <= 6.0) {
            d.resultado.value = mag.toFixed(2) + " - No máximo, pequenos danos";
        }
        if (mag >= 6.1 && mag <= 6.9) {
            d.resultado.value = mag.toFixed(2) + " - Destrutivo nos 100km entornos ao epicentro ";
        }
        if (mag >= 7 && mag <= 7.9) {
            d.resultado.value = mag.toFixed(2) + " - Grande terremoto.";
        }
        if (mag >= 8) {
            d.resultado.value = mag.toFixed(2) + " - Enorme terremoto. Caos.";
        }

    }
