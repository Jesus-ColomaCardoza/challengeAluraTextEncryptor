const textArea=document.getElementById('form-text-encryptor__text');
const outputText=document.getElementById('output-zone__text');
const formTextEncrypter=document.getElementById('form-text-encryptor');
const buttonCopy=document.getElementById('button--copy');
const outputDescription=document.getElementById('output-zone__description');
const outputResult=document.getElementById('output-zone__result');

const keys=['ai','enter','imes','ober','ufat'];

formTextEncrypter.addEventListener('click',(e)=>{
    e.preventDefault();
    
    if (e.target.classList.contains('button--encrypt')) {
        let text;
        let encryptText;      
        if (textArea.value!='') {
            text=textArea.value.trim(); 
            // console.log(text);
            if (validateText(text)) {
                encryptText=encrypt(text);
                printOutputZone(encryptText);                
            }else{
                showMessage('Incorrect text, strange characters or uppercase letters');
            }
            hideElement(outputDescription);
            showElement(outputResult);
        }else{
            showMessage('Error encrypting, Fill out the field!!!');
            resetOutputText();
            showElement(outputDescription);
            hideElement(outputResult);
        }
    }else if (e.target.classList.contains('button--decrypt')) {
        let text;
        let decryptText;      
        if (textArea.value!='') {
            text=textArea.value.trim()
            if (validateText(text)) {
                decryptText=decrypt(text);
                printOutputZone(decryptText);
            }else{
                showMessage('Incorrect text, strange characters or uppercase letters');
            }
            hideElement(outputDescription);
            showElement(outputResult);
        }else{
            showMessage('Error decrypting, Fill out the field!!!');
            resetOutputText();
            showElement(outputDescription);
            hideElement(outputResult);
        }
    }
})
buttonCopy.addEventListener('click',()=>{
    let text=outputText.textContent;
    if (text!='') {
        // console.log(text);
        navigator.clipboard.writeText(text)
    }else{
        showMessage('There is not text')
    }
})

const showMessage=(message)=>{
    alert(message)
}
const resetOutputText=()=>{
    outputText.textContent='';
}
const hideElement=(element)=>{
    element.classList.replace('show','hide')   
}
const showElement=(element)=>{
    element.classList.replace('hide','show')   
}
const decrypt=(text)=>{
    let decryptText=text;
    if (decryptText.includes('ai')) {
        decryptText=decryptText.replace(/ai/gm,'a')
    }
    if (decryptText.includes('enter')) {
        decryptText=decryptText.replace(/enter/gm,'e')
    }
    if (decryptText.includes('imes')) {
        decryptText=decryptText.replace(/imes/gm,'i')
    }
    if (decryptText.includes('ober')) {
        decryptText=decryptText.replace(/ober/gm,'o')
    }
     if (decryptText.includes('ufat')) {
        decryptText=decryptText.replace(/ufat/gm,'u')
    }
    return decryptText; 
}
const encrypt=(text)=>{
    let encryptText=''
    Array.from(text).forEach(character => {
        switch (character) {
            case 'a':
                encryptText+=keys[0];
                break;
            case 'e':
                encryptText+=keys[1];
                break;
            case 'i':
                encryptText+=keys[2];
                break;
            case 'o':
                encryptText+=keys[3];
                break;
            case 'u':
                encryptText+=keys[4];
                break;
            default:
                encryptText+=character;
                break;
        }
    });
    return encryptText;
}
const printOutputZone=(text)=>{
    outputText.textContent=text;
}
const validateText=(text)=>{
    let validate;
    const regex= /^([a-z0-9]*\s*\ñ*[a-z0-9]*)*$/gm ;
    regex.test(text) ? validate=true : validate=false;
    return validate;
}
