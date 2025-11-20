const Name = document.getElementById('Name');
const Email = document.getElementById('Email')
const Mobile = document.getElementById('Mobile');
const Message = document.getElementById('Message');
const SubmitB = document.getElementById('SubmitButton');
SubmitB.style.display = "none";
const ClearB = document.getElementById('ClearButton');
const Box = document.getElementById('Box');
Box.style.display = "none";
const BoxH1 = document.getElementById('BoxH1');
const BoxP = document.getElementById('BoxP');

Name.addEventListener('input', function(){
    if(Name.value.length === 0 || Email.value.length === 0 || Mobile.value.length === 0 || Message.value.length === 0){
        SubmitB.style.display = "none"
    }
    else{
        SubmitB.removeAttribute("style");
    }
})

Email.addEventListener('input', function(){
    if(Name.value.length === 0 || Email.value.length === 0 || Mobile.value.length === 0 || Message.value.length === 0){
        SubmitB.style.display = "none"
    }
    else{
        SubmitB.removeAttribute("style");
    }
})

Mobile.addEventListener('input', function(){
    if(Name.value.length === 0 || Email.value.length === 0 || Mobile.value.length === 0 || Message.value.length === 0){
        SubmitB.style.display = "none"
    }
    else{
        SubmitB.removeAttribute("style");
    }
})

Message.addEventListener('input', function(){
    if(Name.value.length === 0 || Email.value.length === 0 || Mobile.value.length === 0 || Message.value.length === 0){
        SubmitB.style.display = "none"
    }
    else{
        SubmitB.removeAttribute("style");
    }
})

SubmitB.addEventListener('click', (item) => {
    item.preventDefault();
    Box.style.display = "";
        setTimeout(() => {
        Box.style.display = "none";
        Name.value = "";
        Email.value = "";
        Mobile.value = "";
        Message.value = "";
    }, 3200);
    BoxH1.innerText = "Üzenete sikeresen rögzítve!";
    BoxP.innerText = "Ügyfélszolgálatunk a lehető legharabb 48 órán belül Emailben fog válaszolni üzenetére.";
    let Uzenet = [Name.value,Email.value,Mobile.value,Message.value];
    localStorage.setItem("Uzenet",Uzenet);
})

ClearB.addEventListener('click', (item) =>{
    item.preventDefault();

    Name.value = "";
    Email.value = "";
    Mobile.value = "";
    Message.value = "";
    SubmitB.style.display = "none"
    Box.style.display = "";
    setTimeout(() => {
        Box.style.display = "none";
    }, 3200);
    BoxH1.innerText = "Üzenete sikeresen törölve!";
    BoxP.innerText = "Bármilyen kérdés estén keresse nyugodtan ügyfélszolgálatunk.";
});

