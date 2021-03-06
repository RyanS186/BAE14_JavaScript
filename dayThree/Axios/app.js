console.log("Hello World!")
// GET REQUEST
function getTodos() {
    axios({
        method:'get',
        url: "https://jsonplaceholder.typicode.com/todos"
    }).then(res => showOutput(res))
    .catch(err => alert(err))
    console.log('GET Request');
  }

function getAllPosts() {
    axios.get("https://jsonplaceholder.typicode.com/posts", {
        params: {
        _limit: 10
        }
    }).then(res => showOutput(res))
    .catch(err => alert(err));

    console.log('GET Request');
}

function getPoke() {
    axios.get("https://pokeapi.co/api/v2/pokemon/blaziken")
    .then(res => showOutput(res))
    .catch(err => alert(err));

    console.log('GET Request');
}

  // POST REQUEST  
  function addTodo() {
    axios ({
      method: 'post',
      url: "https://jsonplaceholder.typicode.com/posts",
      data: {
        title: "I am new",
        completed: true
      }
  }).then(res => showOutput(res))
  .catch(err => alert(err));

  console.log('POST Request');
  }
  
  // PUT/PATCH REQUEST  
  function updateTodo() {
    axios ({
      method: "patch",
      url:"https://jsonplaceholder.typicode.com/posts/5",
      data: {
        title:"This is a patch"
      }
    }).then(res => showOutput(res))
    .catch(err => alert(err));
    
    console.log('PUT/PATCH Request');
  }
  // DELETE REQUEST  
  function removeTodo() {
    axios ({
      method: "delete",
      url:"https://jsonplaceholder.typicode.com/posts/5",
      }).then(res => showOutput(res))
      .catch(err => alert(err));

    console.log('DELETE Request');
  }
  // SIMULTANEOUS DATA  
  function getData() {
    console.log('Simultaneous Request');
  }
  // CUSTOM HEADERS  
  function customHeaders() {
    console.log('Custom Headers');
  }
  // TRANSFORMING REQUESTS & RESPONSES  
  function transformResponse() {
    console.log('Transform Response');
  }
  // ERROR HANDLING  
  function errorHandling() {
    console.log('Error Handling');
  }
  // CANCEL TOKEN  
  function cancelToken() {
    console.log('Cancel Token');
  }
  // INTERCEPTING REQUESTS & RESPONSES  // AXIOS INSTANCES  // Show output in browser  
  function showOutput(res) {
    document.getElementById('res').innerHTML = `
    <div class="card card-body mb-4">
        <h5>Status: ${res.status}</h5>
    </div>
    <div class="card mt-3">
        <div class="card-header">
            Headers
        </div>
        <div class="card-body">
            <pre>${JSON.stringify(res.headers, null, 2)}</pre>
        </div>
    </div>
    
    <div class="card mt-3">
        <div class="card-header">
            Data
        </div>
        <div class="card-body">
            <pre>${JSON.stringify(res.data, null, 2)}</pre>
        </div>
    </div>

    <div class="card mt-3">
        <div class="card-header">
            Config
        </div>
        <div class="card-body">
            <pre>${JSON.stringify(res.config, null, 2)}</pre>
        </div>
    </div>  `;
  }
  // Event listeners  
  document.getElementById('get').addEventListener('click', getTodos);
  document.getElementById('getTwo').addEventListener('click', getAllPosts);
  document.getElementById('getPoke').addEventListener('click', getPoke);
  document.getElementById('post').addEventListener('click', addTodo);
  document.getElementById('update').addEventListener('click', updateTodo);
  document.getElementById('delete').addEventListener('click', removeTodo);
  document.getElementById('sim').addEventListener('click', getData);
  document.getElementById('headers').addEventListener('click', customHeaders);
  document.getElementById('transform').addEventListener('click', transformResponse);
  document.getElementById('error').addEventListener('click', errorHandling);
  document.getElementById('cancel').addEventListener('click', cancelToken);