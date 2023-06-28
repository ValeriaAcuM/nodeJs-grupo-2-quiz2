const fs = require("fs");
const path = require("path");

function copyFile(archOrigen, archDestino) {
  fs.readFile(path.join(__dirname, "files", archOrigen), 'utf8', (err, data) => {
    if (err) throw err; {
      console.error("Error al leer el archivo de origen:", err);
    }

    fs.writeFile(path.join(__dirname, "files", archDestino), data, 'utf8', (err) => {
      if (err) throw err; {
        console.log("El archivo fue copiado exitosamente.");
      }
    });
  });
}