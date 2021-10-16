const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo
function sendMarsTemperature() {
  setTimeout(() => {
    const temperatura = getMarsTemperature();
    console.log(`Mars temperature is: ${temperatura}`)
  },messageDelay())

}
sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo