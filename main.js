response = document.querySelector('#response');
rateselected = document.querySelectorAll('.rating_value');
postform = document.querySelector('#post');
getform = document.querySelector('#get');
submit = document.querySelector('.send');
let submit_rating = 0;

for (let i = 0; i < rateselected.length; i++) {
    // active

    rateselected[i].addEventListener('click', function () {
        remove_class_active(this);
        this.classList.add('active');
        submit_rating = parseInt(this.text);

    });

}


function remove_class_active(rate) {
    for (let i = 0; i < rateselected.length; i++) {
        let element = rateselected[i];


        if (element.classList.contains('active') && element !== rate) {

            element.classList.remove('active');

        }
    }



}

submit.addEventListener('click', function (e) {
    if (submit_rating > 0){
        getform.style = 'display:none;';
        postform.style = 'display:flex;';
        response.innerHTML = "You selected "+submit_rating+" out of 5"
    }
});