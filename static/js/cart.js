var updateBtns = document.getElementsByClassName('update-cart')

for (var i =0; i < updateBtns.length; i++) {
    updateBtns[i].addEventListener('click', function(){
    var productId = this.dataset.product
    var action = this.dataset.action
    console.log('productId:', productId, 'action', action)

    console.log('USER:', user)
    if (user === 'AnonymousUser'){
        console.log('USER not signed in')
    }
    else {
        updateUserOrder(productId, action)
    }
    })
}

function updateUserOrder(productId, action){
    console.log('USER signed in')
    var url = '/update_item/'

    fetch(url, {
        method: 'POST',
        headeers:{
            'Content-Type':'application/json',
            'X-CSRFToken': csrftoken,
        },

        body:JSON.stringify({'productId': productId, 'action': action})
    })

    .then((response) =>{
        return response.json()
    })

    .then((data) =>{
        console.log('data:', data)
        location.reload()
    })
}