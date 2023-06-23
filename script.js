 
 let key = "2cfda1f27f8f18422038c85cc30073ad"
 let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${42.882004}&lon=${74.582748}&lang=ru&units=metric&appid=${key}`

let city=document.querySelector('#city')
let currentTemp=document.querySelector('#currentTemp')
let currentDesc=document.querySelector('#currentDesc')
let currentImg=document.querySelector('#currentImg')
let hourly=document.querySelector('.hourly')
let daily=document.querySelector('.daily')


async function getData(url){
  let resp=await fetch(url)
  let data=await resp.json()

  console.log(data);
  currentData(data.current)
  hourlyData(data.hourly)
  dailyData(data.daily)
}

getData(url)

function currentData(){
    console.log(current);
}

function hourlyData(){
   console.log(hourly);
}

function dailyData(){
  console.log(daily);
}
let arrOfDays=['Вc', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']

fetch(url)
.then((response)=> response.json())
.then(function(data){
    console.log(data)
    
    city.textContent=data.timezone
    currentTemp.textContent=Math.floor(data.current.temp)+ '°'
    currentDesc.textContent=data.current.weather[0].description
    currentImg.setAttribute('src',`https://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`)
  


    let hours=data.hourly
    let days=data.daily

    hours.forEach((element,index) => {
      let hour=new Date().getHours()+index
        hourly.insertAdjacentHTML('beforeend',`
        <div class="hour">
        <p>${index  ==  0  ?  'Сейчас'  :  hour < 24  ?  hour  :  hour - 24 * Math.floor(hour/24)}</p>
        <img src="https://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png">
        <p>${Math.floor(element.temp)+ '°'}</p>
        </div>
        `)
      });

        chooseCity.addEventListener('change', function () {
        city.textContent = chooseCity.value
      })


      days.forEach((element,index) => {
        let arrOfDays=['Вc', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
        let days=new Date(element.dt*1000).getDay()
          daily.insertAdjacentHTML('beforeend',`
          <div class="day">
          <p>${index  ==  0  ?  'Сегодня'  : arrOfDays[days]}</p>
          <img src="https://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png">
          <p>${Math.floor(element.temp.day)+ '°'}</p>
          </div>
          `)
      
  
        });
      
      
        navigator.geolocation.getCurrentPosition(function(position) {
          do_something(position.coords.latitude, position.coords.longitude);
        });
})




// let promise=new Promise(function(resolve,reject){

//   console.log('Запрос на сервер');
//   let user={
//     name:'Aman',
//     age:15
//   }

//   if (1==2){
//     resolve(user)
//   }else{
//     reject('Данные не нашли')
//   }
// })


// promise.then((data)=>{
//    console.log('Данные получили из сервера');
//    console.log(data);
// })
// .catch((error)=>{
//   console.log(`Вы сделали запрос код  ошибки ${error}`);
// })


//организация асинхронного кода 

// try{
//    console.log('WOW');    
//    sum()
//    //go()
//    //jgfh
//    fetch()
// }catch{
//    console.log('Ошибка');   //работает когда есть ошибка
// }

// function sum(){
//   console.log('sum 2+2==4');
// }