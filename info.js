
const nextPage = document.querySelector('#next')


nextPage.addEventListener('click' , (e)=>{
    e.preventDefault()
    location.replace('/edu.html')

})

// this is for year and Select

    
    let startYearSelect = document.querySelector('#startYear')
    let endYearSelect = document.querySelector('#endYear')
    let certificateSelect = document.querySelector('#edu-year')
    let currentYear = (new Date()).getFullYear()
    let StartFrom = currentYear - 100
    // for بداية العمل 
    for(let i = StartFrom; i<= currentYear; i++){
        let option = document.createElement('option')
        option.innerHTML = i
        option.value = i
        startYearSelect.appendChild(option)
        
    }
    // for نهاية العمل
    for(let i = StartFrom; i<= currentYear; i++){
        let option = document.createElement('option')
        option.innerHTML = i
        option.value = i
        endYearSelect.appendChild(option)
        
    }
    for(let i = StartFrom; i<= currentYear; i++){
        let option = document.createElement('option')
        option.innerHTML = i
        option.value = i
        certificateSelect.appendChild(option)
        
    }



    


// // something wrong ill do it after i finish the whole page


// this is for  countries phoneNumbers
const countries = [
    { name: "Bahrain", code: "BH", phone: 973 },
    { name: "Egypt", code: "EG", phone: 20 },
    { name: "Iraq", code: "IQ", phone: 964 },
    { name: "Jordan", code: "JO", phone: 962 },
    { name: "Kuwait", code: "KW", phone: 965 },
    { name: "Lebanon", code: "LB", phone: 961 },
    { name: "Morocco", code: "MA", phone: 212 },
    { name: "Oman", code: "OM", phone: 968 },
    { name: "Qatar", code: "QA", phone: 974 },
    { name: "Saudi Arabia", code: "SA", phone: 966 },
    { name: "Sudan", code: "SD", phone: 249 },
    { name: "Syrian Arab Republic", code: "SY", phone: 963 },
    { name: "Yemen", code: "YE", phone: 967 },
    
],

    select_box = document.querySelector('.options'),
    search_box = document.querySelector('.phone'),
    input_box = document.querySelector('input[type="tel"]'),
    selected_option = document.querySelector('.flag');

let options = null;

for (country of countries) {
    const option = `
    <li class="option">
        <div>
            <span class="iconify" data-icon="flag:${country.code.toLowerCase()}-4x3"></span>
            <span class="country-name">${country.name}</span>
        </div>
        <strong>+${country.phone}</strong>
    </li> `;

    select_box.querySelector('ol').insertAdjacentHTML('beforeend', option);
    options = document.querySelectorAll('.option');
}

function selectOption() {
    const icon = this.querySelector('.iconify').cloneNode(true),
        phone_code = this.querySelector('strong').cloneNode(true);

    selected_option.innerHTML = '';
    selected_option.append(icon, phone_code);

    input_box.value = phone_code.innerText;

    select_box.classList.remove('active');
    selected_option.classList.remove('active');

    search_box.value = '';
    select_box.querySelectorAll('.hide').forEach(el => el.classList.remove('hide'));
}

function searchCountry() {
    let search_query = search_box.value.toLowerCase();
    for (option of options) {
        let is_matched = option.querySelector('.country-name').innerText.toLowerCase().includes(search_query);
        option.classList.toggle('hide', !is_matched)
    }
}


selected_option.addEventListener('click', () => {
    select_box.classList.toggle('active');
    selected_option.classList.toggle('active');
})

options.forEach(option => option.addEventListener('click', selectOption));
search_box.addEventListener('input', searchCountry);

function validNumber(phoneNumber){
    phoneNumber = phoneNumber.replace(/\s/g, '')

     const mobilePhonePattern = /^(\+966\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?d{3}$/
     const landLinePhonePattern = /\s*\(?([1-6]{1}[0-9]{3}\)?[0-9]{3})\s*/
     const phoneInput = document.querySelector('#phone')
     if( mobilePhonePattern.test(phoneNumber) || landLinePhonePattern.test(phoneNumber)){
        console.log('first')
     }else{
        console.log(
            'noe'
        )
     }
}

console.log(validNumber('034333883'))
