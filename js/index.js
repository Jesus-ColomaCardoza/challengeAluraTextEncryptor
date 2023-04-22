const textArea=document.getElementById('form-text-encryptor__text');
const message=document.getElementById('output-zone__message');

const formTextEncrypter=document.getElementById('form-text-encryptor');


const keys=['ai','enter','imes','ober','ufat'];

formTextEncrypter.addEventListener('click',(e)=>{
    e.preventDefault();
    let text;

    if (e.target.classList.contains('button--encrypt')) {
        let encryptText;      
        if (textArea.value!='') {
            //we use regular expresions to validate lowercase letters and no accents
            text=textArea.value.trim()
            encryptText=encrypt(text);
            printOutputZone(encryptText);
        }else{
            console.log('Fill out the field');
        }
    }else if (e.target.classList.contains('button--decrypt')) {
        let decryptText;      
        if (textArea.value!='') {
            //we use regular expresions to validate lowercase letters and no accents
            text=textArea.value.trim()
            decryptText=decrypt(text);
            printOutputZone(decryptText);
        }else{
            console.log('Fill out the field');
        }
    }

})

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
    message.textContent=text;
}