let h1 = document.getElementById('h1');
let h2 = document.getElementById('h2');
let h3 = document.getElementById('h3');
let arabic = document.getElementById('arabic');
let english = document.getElementById('english');


arabic.onclick =()=>{
    setLanugage('arabic');
    localStorage.setItem('lang','arabic')
};
english.onclick =()=>{
    setLanugage('english');
    localStorage.setItem('lang','english')
};
onload = () =>{
    setLanugage(localStorage.getItem('lang'))
}
function setLanugage(getLanugage){
    if(getLanugage == 'arabic'){
        h1.innerHTML = "مرحبا أكادمية شيار"
        h2.innerHTML = "سعدت بالتعلم من خبرتكم في هذا المجال"
        h3.innerHTML = "شكرا على كل شيئ"
    }else if(getLanugage == 'english'){
        h1.innerHTML = "hello academy shiyar"
        h2.innerHTML = "I was glad to learn from your experience in this field"
        h3.innerHTML = "Thanks for everything"

    }
}