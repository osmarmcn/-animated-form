

const formDados = document.getElementById('form')

const enviar = document.getElementById('enviar').addEventListener('click', (e) =>{
    e.preventDefault()
    console.log('oi')

   const dados = new FormData(formDados)

   const jsonData = {}
   for (const [key, value] of dados.entries()) {
       jsonData[key] = value

    console.log(jsonData)

   }

   const data = JSON.stringify(jsonData)

   fetch('http://localhost:3000/cadastro', {
    method:"POST",
    body:data,
    headers:{
        'Content-Type': 'application/json'
    }
   })
   .then(result => result.json())
   .then(data =>{
       
        console.log(data)
        listar()
   })
   .catch(error => console.log(error))


})

function listar() {
    fetch('http://localhost:3000/cadastro')
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        const table_cadastro = document.getElementById('tbody_cadastro');
        table_cadastro.innerHTML = "";
        json.forEach(function(item){
            let colunaNome = "<td>"+item.nome+"</td>";
            let colunaSobreNome = "<td>"+item.sobrenome+"</td>";
            let colunaCpf = "<td>"+item.cpf+"</td>";
            let colunaIdade = "<td>"+item.idade+"</td>";
            let linha = "<tr>"+colunaNome+colunaSobreNome+colunaCpf+colunaIdade+"</tr>";
            // Corrigindo o nome da tabela para atualizar
            table_cadastro.innerHTML = table_cadastro.innerHTML + linha;
        });
    })
    .catch(function(error){
        console.error(error);
    });
}
listar();
// function listar(){
//     fetch('http://localhost:3000/cadastro')
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(json){
//         const table_cadastro = document.getElementById('tbody_cadastro');
//         table_cadastro.innerHTML = "";
//         json.forEach(function(item){
//             let colunaNome = "<td>"+item.nome+"</td>";
//             let colunaSobreNome = "<td>"+item.sobrenome+"</td>";
//             let colunaCpf = "<td>"+item.cpf+"</td>";
//             let colunaIdade = "<td>"+item.idade+"</td>";
//             let linha = "<tr>"+colunaNome+colunaSobreNome+colunaCpf+colunaIdade+"</tr>"
//             table_categorias.innerHTML = table_cadastro.innerHTML + linha
//         });
//     })
//     .catch(function(error){
//         console.error(error);
//     });
// }
// listar();