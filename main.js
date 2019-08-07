var panels = [
    {"icon": "fa-shopping-cart", "title": "Sales", "value": "$135,000"},
    {"icon": "fa-money", "title": "Expenses", "value": "$36,000"},
    {"icon": "fa-users", "title": "Users", "value": "15,000"},
    {"icon": "fa-line-chart", "title": "Visitors", "value": "45,000"}
]

$(document).ready(function(){
    var user_template = $('#user-template').html();
    var $sidebar = $('#slidebar-content');
    loadJSON('GET', 'https://api.myjson.com/bins/16lk1t', function(response){
       $sidebar.html(render(response, user_template));
    });
    loadJSON('GET', 'https://api.myjson.com/bins/cs62p', function(response){
       console.log(response);
    });

    function render(data, template){
        var t = Handlebars.compile(template);
        var html = t(data);
        return html;
    }
    function loadJSON(method, url, callback){
        $.ajax({
            'type': method,
            'url': url,
            'success': callback
        });
    }

});


// var response = null;
// var index = null;
// window.onload = init;

// function init() {
//     loadJSON(function(res) {
//         response = res;
//         users_output.innerHTML = build(res, user_temp);
//     }, 'GET', 'https://api.myjson.com/bins/a2zjh');


// }

// function loadJSON(callback, method, url) {
//     var xHR = new XMLHttpRequest;
//     xHR.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             // var $this = this;
//             callback(JSON.parse(this.response));
//         }
//     }
//     xHR.open(method, url, true);
//     xHR.send();
// }



// function update($this) {
//     index = $this.getAttribute('m');
//     loadJSON(function(res) {
//         comments_output.innerHTML = build(res, comments_temp);
//     }, 'GET', 'https://jsonplaceholder.typicode.com/posts?userId=' + response[index].id);

// }