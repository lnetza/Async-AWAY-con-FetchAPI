

async function leerTodos(){
    
    //esperar la respuesta
    const respuesta = await fetch
    ('https://jsonplaceholder.typicode.com/photos');

    //Procede cuando la respuesta esta hecha

    const datos = await respuesta.json();

    return datos;

}

leerTodos()
    .then(data=>{
        let html ='';
        data.forEach(item=>{
            html +=`
                <li>${item.id}</li>
                <li>${item.title}</li>
                <li><a target="_blank" href="${item.url}">${item.url}</a></li>
                <p></p>
            `;
        })
        document.getElementById('resultado').innerHTML=html;
    })
    .catch(error=> {
        document.getElementById('resultado').innerHTML="Error al cargar información de la API";
    })