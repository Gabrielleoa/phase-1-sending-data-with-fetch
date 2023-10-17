function submitData(){
    const formData ={
        name:'Steve',
        email:'steve@steve.com',
    };
    const configurationObject= {
        method : "POST",
        headers: {
            "content-type":"application/json",
            Accept: "application/json",

        },
    body : JSON.stringify(formData),
        };

    fetch('http://localhost:3000/users', configurationObject)
    .then(function (response) {
        return response.json();
    })
    .then(function (object) {
        console.log(object);
    })
        
    .then((data) => {
        const id =data.id;
        const idElement =document.creatElemente("p")
        idElement.textContent = `New ID: ${id}`;
        const resultElement= document.getElementById("result");
        resultElement.appendChild()
    })
    .catch((error)=>{
        alert("unauthorized access");
        console.log(error.message);
        
    });
}


