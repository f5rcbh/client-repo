 const nextPage = document.querySelector('#next')
 const FInfo = document.querySelector('.first-info')
 const porfilePic = document.querySelector('.profilePic')
 const midIfno = document.querySelector('.mid-layer')
 const infoPic = document.querySelector('.infoPic')



 
 nextPage.addEventListener('click',(e)=>{
     e.preventDefault()
     FInfo.classList.add('hide')
     porfilePic.classList.add('hide')
     midIfno.classList.add('active')
     infoPic.classList.add('active')
     
    
 })



// something wrong ill do it after i finish the whole page