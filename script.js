function toggle(ramo) {
  if (ramo.classList.contains("pendiente")) {
    ramo.className = "ramo aprobado";
  } else if (ramo.classList.contains("aprobado")) {
    ramo.className = "ramo reprobado";
  } else {
    ramo.className = "ramo pendiente";
  }
}
