function getAndUpdate() {
    console.log("updating")
    tit = document.getElementById('title').value;
    desc = document.getElementById('description').value;
    console.log(tit, desc)
    if (localStorage.getItem('itemsJson') == null) {
      itemJsonarray = [];
      itemJsonarray.push([tit, desc])
      console.log(itemJsonarray)
      localStorage.setItem('itemsJson', JSON.stringify(itemJsonarray))
    } else {
      itemJsonarrayStr = localStorage.getItem('itemsJson')
      itemJsonarray = JSON.parse(itemJsonarrayStr)
    update()
    }
  }

  function update() {
    if (localStorage.getItem('itemsJson') == null) {
      itemJsonarray = [];
      localStorage.setItem('itemsJson', JSON.stringify(itemJsonarray))
    } else {
      itemJsonarrayStr = localStorage.getItem('itemsJson')
      itemJsonarray = JSON.parse(itemJsonarrayStr)
    }

    let tableBody = document.getElementById('tableBody')
    let str = ""
    itemJsonarray.forEach((element, index) => {
      str += `
                <tr>
                <th scope="row">${index + 1}</th>
                <td>${element[0]}</td>
                <td>${element[1]}</td>
                <td> <button class="btn btn-primary" onclick="deleted(${index})">Delete</button></td>
                </tr>`;
    });
    tableBody.innerHTML = str;
  }
  add = document.getElementById('add')
  add.addEventListener("click", getAndUpdate);
  update()

  function deleted(itemIndex) {
    console.log("delete", itemIndex)
    itemJsonarrayStr = localStorage.getItem('itemsJson')
    itemJsonarray = JSON.parse(itemJsonarrayStr)
    itemJsonarray.splice(itemIndex, 1)
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonarray))
    update();
  }

  function clearStore() {
    if (confirm("you really want yo clear"))
      console.log("clearing the storage...")
    localStorage.clear();
    update()
  }