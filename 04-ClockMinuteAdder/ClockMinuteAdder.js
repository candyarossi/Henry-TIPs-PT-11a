function clockMinuteAdder(time, minutesToAdd) {
  // Tu código aquí

  // Opción 1

  let arrTime = time.split(":");
  let horas = Number(arrTime[0]);
  let minutos = Number(arrTime[1]);

  minutos += minutesToAdd;

  if (minutos >= 60) {
    horas = horas + Math.floor(minutos / 60);
    minutos = minutos % 60;
    horas > 12 && horas % 12 === 0 ? (horas = 12) : (horas = horas % 12);
  }

  horas = horas < 10 ? "0" + horas : horas;
  minutos = minutos < 10 ? "0" + minutos : minutos;

  return horas + ":" + minutos;

  // Opción 2

  let [hours, minutes] = time.split(":");

  minutes = Number(minutes) + minutesToAdd;
  hours = Number(hours) + Math.floor(minutes / 60);
  minutes = minutes % 60;
  hours = ((hours - 1) % 12) + 1;

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  return hours + ":" + minutes;
}

module.exports = clockMinuteAdder;
