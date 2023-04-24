const textArea=document.getElementById('form-text-encryptor__text');
const outputText=document.getElementById('output-zone__text');
const formTextEncrypter=document.getElementById('form-text-encryptor');
const buttonCopy=document.getElementById('button--copy');
const outputDescription=document.getElementById('output-zone__description');

const keys=['ai','enter','imes','ober','ufat'];

formTextEncrypter.addEventListener('click',(e)=>{
    e.preventDefault();
    let text;

    if (e.target.classList.contains('button--encrypt')) {
        let encryptText;      
        if (textArea.value!='') {
            text=textArea.value.trim(); 
            console.log(text);
            if (validateText(text)) {
                encryptText=encrypt(text);
                printOutputZone(encryptText);                
            }else{
                console.log('Incorrect text, strange characters or uppercase letters');
            }
            hideDescription();
            showButton(buttonCopy);
        }else{
            console.log('Error encrypting, Fill out the field!!!');
            resetOutputText();
            showDescription();
            hideButton(buttonCopy);
        }
    }else if (e.target.classList.contains('button--decrypt')) {
        let decryptText;      
        if (textArea.value!='') {
            text=textArea.value.trim()
            if (validateText(text)) {
                decryptText=decrypt(text);
                printOutputZone(decryptText);
            }else{
                console.log('Incorrect text, strange characters or uppercase letters');
            }
            hideDescription();
            showButton(buttonCopy);
        }else{
            console.log('Error decrypting, Fill out the field!!!');
            resetOutputText();
            showDescription();
            hideButton(buttonCopy);
        }
    }
})
buttonCopy.addEventListener('click',()=>{
    let text=outputText.textContent;
    if (text!='') {
        // console.log(text);
        navigator.clipboard.writeText(text)
    }else{
        console.log('There is not text');
    }
})

const resetOutputText=()=>{
    outputText.textContent='';
}
const hideDescription=()=>{
    outputDescription.classList.add('output-zone__description--hide')   
}
const showDescription=()=>{
    outputDescription.classList.remove('output-zone__description--hide')   
}
const showButton=(button)=>{
    button.classList.add('button--shown');
}
const hideButton=(button)=>{
    button.classList.remove('button--shown');
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
