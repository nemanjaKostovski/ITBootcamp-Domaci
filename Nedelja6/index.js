const btn = document.querySelector('#btn').addEventListener('click', btnOnClick);

function btnOnClick(e) {
    e.preventDefault();
    const username = document.querySelector('#text').value;
    const password = document.querySelector('#password').value;

    if (!isNaN(Number(username[0]))){
        return alert('First letter can\'t be number!');
    }

    if (username.length < 3 || username.length > 15) {
        return alert('Username must be between 3 and 15 characters!');
    }

    if (password.length < 3 || password.length > 15) {
        return alert('Password must be between 3 and 15 characters!');
    }

    // Da bi ovo radilo mora se koristiti neka vrsta servera 
    // Dovoljno je i liveserver ekstenzija iz VS Code (dakle lokalni server)
    fetch('./users.json').then(resp => resp.json()).then(data => { 
       const validationResults = data.map(account => {
           if(account.username !== username) return false;
            if(account.password !== password) return false;
            return true;
        });
        if(validationResults.includes(true)){
            alert(`Welcome ${username}`);
        } else{alert('Incorrect credentials!')};

    });
    
};


//5.
/* Nakon sto su inputi prosli validaciju poslali bi API call-om informacije na backend 
i onda bi na osnovu backend response-a znali da li se user ulogovao ili ne */