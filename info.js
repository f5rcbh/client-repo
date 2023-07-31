 const nextPage = document.querySelector('#next')
 const pageInfo = document.querySelector('.first-info')
 const porfilePic = document.querySelector('.profilePic')
 const midIfno = document.querySelector('.mid-layer')
 const infoPic = document.querySelector('.infoPic')


 // input section

 const firstName = document.querySelector('input[name="Fname"]')
 const lastName = document.querySelector('input[name="Lname"]')
 const email = document.querySelector('input[name="email"]')
 const phoneNumber = document.querySelector('input[name="phone"]')
 const jobPlace = document.querySelector('input[name="jobPlace"]')
 const jobName = document.querySelector('input[name="jobName"]')
 const startDate = document.querySelector('input[name="startJob"]')

nextPage.addEventListener('click' ,()=>{
    if(firstName.value == '' || lastName.value == '' || email.value == '' || phoneNumber.value == '' || jobPlace.value == '' || jobName.value == '' || startDate.value == ''){
        alert('need to fill the thing')
    }else {
        pageInfo.classList.add('hide')
        porfilePic.classList.add('hide')
        midIfno.classList.add('active')
        infoPic.classList.add('active')
    }
})






// something wrong ill do it after i finish the whole page