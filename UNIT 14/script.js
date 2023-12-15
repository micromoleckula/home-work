fetch('https://api.openweathermap.org/data/2.5/weather?q=Dnipro,ua&lat={lat}&lon={lon}&appid=5d311ea57c6c622ca53a848c5a70b4c9')
  .then(function (resp) { return resp.json() })
  .then(function(data) {
    console.log(data);
    document.querySelector('.package-name').textContent = data.name;
    document.querySelector('.price').innerHTML = Math.round(data.main.temp - 273) + '&deg';
    document.querySelector('.disclaimer').textContent = data.weather[0].description;
    document.querySelector('.features').innerHTML = `<img src={"https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png>`;
  })
  .catch(function () {
    
  })


//https://openweathermap.org/img/wn/02d@2x.png