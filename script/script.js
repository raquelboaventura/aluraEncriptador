let mensagem = document.getElementById('inseretexto')
let btncriptografar = document.getElementById('criptografar') 
let btndescriptografar = document.getElementById('descriptografar')
let segundatela = document.getElementById('aparecetexto')


/*function botaoCopia() {
  let btn = document.createElement('input')
    btn.setAttribute.type = 'button'
    btn.setAttribute.value = 'Copiar'
    btn.body.appendChild(btn)
    let btncopiar = document.getElementById('btncopiar')
    btncopiar.appendChild(btn)
  btn.onclick = function copiar() {
    let copiatxt = segundatela.value
    copiatxt.select()
    copiatxt.execCommand('copy')
    alert('deu')
  }
}*/

function criptografar() {
  let vogais = {a: "ai", e: "enter", i: "imes", o: "ober", u: "ufat"}
  let msg = mensagem.value
  let novamsg = msg.replace(/a|e|i|o|u/gi,function(matched){
    return vogais[matched]
  })
  segundatela.innerHTML = novamsg
  segundatela.style.cssText = 'color: #495057;' + 'font-size: 2em;' + 'margin-top: 72px;' + 'margin-left:80px;'
  //botaoCopia()
} 

function descriptografar() {
  let codigo = {ai:"a",enter:"e",imes:"i",ober:"o",ufat:"u"}
  let result = mensagem.value.replace(/ai|enter|imes|ober|ufat/gi, function(troca){
    return codigo[troca]
  })
  segundatela.innerHTML = result
}

btncriptografar.onclick = criptografar
btndescriptografar.onclick = descriptografar 


