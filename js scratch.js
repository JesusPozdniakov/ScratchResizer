javascript
(function(ext) {
  // Переменные для хранения текущего разрешения экрана
  var currentWidth = window.innerWidth;
  var currentHeight = window.innerHeight;

  // Функция для изменения разрешения экрана
  function changeResolution(width, height) {
    window.resizeTo(width, height);
    currentWidth = width;
    currentHeight = height;
  }

  // Функция для получения текущего разрешения экрана
  function getCurrentResolution() {
    return [currentWidth, currentHeight];
  }

  // Блок "Уменьшить разрешение"
  ext.reduceResolution = function(width, height, callback) {
    changeResolution(width, height);
    callback();
  };

  // Блок "Увеличить разрешение"
  ext.increaseResolution = function(width, height, callback) {
    changeResolution(width, height);
    callback();
  };

  // Блок "Текущее разрешение экрана"
  ext.getCurrentResolution = function(callback) {
    callback(getCurrentResolution());
  };

  // Блок "При запуске"
  ext._getStatus = function() {
    return { status: 2, msg: "Ready" };
  };

  // Описание расширения
  ext._shutdown = function() {};
  ext._getStatusText = function() {
    return "Ready";
  };
  var descriptor = {
    blocks: [
      ["w", "Уменьшить разрешение на %n x %n", "reduceResolution", 800, 600],
      ["w", "Увеличить разрешение на %n x %n", "increaseResolution", 1280, 720],
      ["R", "Текущее разрешение экрана", "getCurrentResolution"],
    ],
  };
  ScratchExtensions.register("Resolution Extension", descriptor, ext);
})({});