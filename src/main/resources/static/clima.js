console.log("Holanda");
function get_coordenadas () {
    const pos = navigator.geolocation.getCurrentPosition(function (pos){
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;

        get_pronostico(lat, lon)
    });
    console.log("LISTO");
}
async function get_pronostico(lat, lon){
    const api_key = '2bdf10150d50db57371b2264645c68b5'
    //1. Creamos la URL con  nuestra ubicacion actual  y el API key
    const url = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`
    //2. Realizamos la consult a la API  de OpenWeather
const resp = await fetch(url);
    //3. Desempaquetamos la respuesta obtenida
const data = await resp.json()
    //4. Obtenemos la   temperatura
    const temperature = data.main.temp - 273;
    //5. Renderizamos la temperatura en la interfaz
    $('#pronostico').html("En este momento hay una temperatura de " + temperature + "°C")
console.log(data);

}

get_coordenadas();