
            let hour = document.getElementById('hour')
            let minute = document.getElementById('minute')
            let second = document.getElementById('second')
            

             const clock = setInterval  (function time (){

                let dataTime = new Date()

                let hr = dataTime.getHours()
                let min = dataTime.getMinutes()
                let sec = dataTime.getSeconds()

                if(hr < 10) hr = '0' + hr
                if( min < 10) min = '0' + min
                if( sec < 10 ) min = '0' + sec


                hour.textContent = hr
                minute.textContent = min
                second.textContent = sec

            })