const buttonFriendList = document.getElementById('boton');
const loadingImg = document.querySelector('img');
const searchByInput = document.getElementById('input');
const buttonSearch = document.getElementById('search');
const friendBySearch = document.getElementById('amigo');
const buttonDeleteFriend = document.getElementById('delete');
const inputIdDeleteFriend = document.getElementById('inputDelete');
const wasDelete = document.getElementById('sucess');

const functionGetFriendList = (info) => {
    $('#lista').empty()
    $.ajax({
        url: 'http://localhost:5000/amigos',
        type: 'get',
        success: (info)=>{
            loadingImg.setAttribute('src', '');
            info.forEach(element => {
                let list = document.createElement('li');
                list.innerHTML = `<b>Id ${element.id}.</b> ${element.name}`;
                document.getElementById('lista').appendChild(list);
            })
        }
    })
};

const size = (info) => info.length;

const functionGetFriendById = (info) => {
    $.ajax({
        url: `http://localhost:5000/amigos/${searchByInput.value}`,
        type: 'get',
        success: (info)=>{
            searchByInput.value = null;
            friendBySearch.innerHTML = `${info.name} `;
            
        },
        error: (error) => {
            if(searchByInput.value <1 || searchByInput.value > size) {
                alert(`${searchByInput.value} Amigo no encontrado.`);
            } 
        }
    })
};

const functionDeleteFriend = (info) => {
    $.ajax({
        url: `http://localhost:5000/amigos/${inputIdDeleteFriend.value}`,
        type: 'delete',
        success: (info)=> {
            wasDelete.innerHTML = `Tu amigo fue borrado con exito.`;
        },
        error: (error) => {
            if(inputDelete.value <1 || inputDelete.value > size) {
                alert(`${inputDelete.value} Amigo no encontrado.`);
            } 
        }
    })
}





buttonFriendList.addEventListener('click', functionGetFriendList);
buttonSearch.addEventListener('click', functionGetFriendById);
buttonDeleteFriend.addEventListener('click', functionDeleteFriend);




