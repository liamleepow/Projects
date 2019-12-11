const promise = $.ajax({url:'https://rickandmortyapi.com/api/character/'});
$('form').on('submit',(event)=>{
event.preventDefault();
const userInput = $('input[type ="text"]').val();
$.ajax({
    url: 'https://rickandmortyapi.com/api/character/'+userInput


}).then(
(data)=>{
console.log(data);
$('#Character').html(data.name);
$('#Status').html(data.status);
$('#Species').html(data.species);
$('#Type').html(data.type);
$('#Gender').html(data.gender);
$('h2').prepend('<img id="image" src='+data.image+'>');
},
(error)=>{
console.log('Error',error);

}
);
});

addEventListener