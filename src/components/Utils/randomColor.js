export let generateRandomColor = () => {
    
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
  
    // Создание строки с кодом цвета в формате RGB
    var color = "rgb(" + red + ", " + green + ", " + blue + ")";
  
    return color;
  }
  
 