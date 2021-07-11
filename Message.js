function toast({ title = '', message = '', type = '', duration = 3000 }) {
    const isMain = document.getElementById('toast1');
    if (isMain) {
        const createDivToast = document.createElement('div');
        const icon = {
            success : 'fas fa-check-circle',
            info : 'fas fa-info-circle',
            warning : 'fas fa-exclamation-circle',
            fail : 'fas fa-bomb'
        }
        // auto remove
        var autoRemove = setTimeout(function(){
            isMain.removeChild(createDivToast);
        }, duration + 1000);
        // click for remove
        createDivToast.onclick = function (event){
            if( event.target.closest ('.toast1__close' )){
                isMain.removeChild(createDivToast);
                clearTimeout(autoRemove);
            }
        }
        const icons = icon[type];
        //thêm tên cho thẻ div là toast
        createDivToast.classList.add('toast1',`toast1--${type}`); 
        const timeDelay = (duration / 1000).toFixed(2);
        createDivToast.style.animation = `messSlip linear 0.5s, fadeOut linear 1s ${timeDelay}s forwards`;
        createDivToast.innerHTML = `
            <div class="toast1__icon">
                <i class="${icons}"></i>
            </div>
            <div class="toast1__bodyMess">
                <h3 class="toast1_title">${title}</h3>
                <p class="toast1_msg">${message}</p>
            </div>
            <div class="toast1__close">
                <i class="fas fa-times"></i>
            </div>
        `;
        // tạo xong cái toast trong if thì append no vào main
        isMain.appendChild(createDivToast);
        
    }
    

}

function showMessageSuccess(){
    toast({
        title : 'Thành Công',
        message: 'Bạn đã thành công awwwwwwwwwww',
        type: 'success',
        duration : 1000
    })

}
function showMessageError(){
    toast({
        title : 'Thất bại',
        message: 'Bạn đã thất bại abbbbbbbbbbbbbb',
        type: 'fail',
        duration : 3000
    })
}

