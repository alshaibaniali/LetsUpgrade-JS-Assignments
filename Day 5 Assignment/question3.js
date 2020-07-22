//fetch('http://jsonplaceholder.typicode.com/todos').then(response=>response.json())
//.then(data=>console.log(data));

async function fetchtodos() {
    const response = await fetch('http://jsonplaceholder.typicode.com/todos/random');
    const data = await response.json();
    console.log(data);
}
fetchtodos();