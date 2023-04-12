function serverApi(url, cb, options = {}) {
  fetch(`http://localhost:3000/${url}`, options)
    .then((res) => res.json())
    .then((data) => cb(data));
}

document.getElementById('allButtons').addEventListener('click', (e) => {
  const target = e.target;

  if (!target.dataset.action) {
    return;
  }

  const command = target.dataset.action;
  if (target.dataset.type === 'get') {
    serverApi(command, onDataCome);
  }

  if (target.dataset.type === 'post') {
    const optionsPOST = {
      method: 'POST',
      body: JSON.stringify({
        title: 'This is title for comment',
        body: '---------------',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    };
    serverApi(command, onDataCome, optionsPOST);
  }

  if (target.dataset.type === 'put') {
    const optionsPUT = {
      method: 'PUT',
      body: JSON.stringify({
        title: 'Title PUT',
        body: '----PUT-----------',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    };
    serverApi(command, onDataCome, optionsPUT);
  }

  if (target.dataset.type === 'patch') {
    const optionsPATCH = {
      method: 'PATCH',
      body: JSON.stringify({
        title: 'Patched title',
        body: 'patched body',
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    };
    serverApi(command, onDataCome, optionsPATCH);
  }


  if (target.dataset.type === 'del') {
    const optionsDELETE = {
      method: 'DELETE',     
    };
    serverApi(command, onDataCome, optionsDELETE);
  }
});

function onDataCome(data) {
  document.body.insertAdjacentHTML('beforeend', JSON.stringify(data) + '<hr>');
}
