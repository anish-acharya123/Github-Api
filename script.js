
async function getGithubuser(){
    let response = await fetch('https://api.github.com/users');
    console.log(response);
    let data = await response.json();
    console.log(data)
    let display = '';
    data.map((val)=>{
        display += ` <div class="cards">
        <img src=${val.avatar_url} alt="${val.login}">
       <h1>${val.login}</h1>
    </div>`
    });
    document.getElementById('root').innerHTML = display

    let a = await new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('hello')
        }, 2000);
    })
    console.log(a);
}
getGithubuser();