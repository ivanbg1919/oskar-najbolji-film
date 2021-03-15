var filmovi = [
    {
        naslov: 'Parasite',
        godina: 2020,
        rezija: 'Bong Joon Ho',
        ocena: 8.6
        		
    },    
	{
        naslov: 'Green Book',
        godina: 2019,
        rezija: 'Peter Farrelly',
        ocena: 8.2
        		
    },
	{
        naslov: 'The Shape of Water',
        godina: 2018,
        rezija: 'Guillermo del Toro',
        ocena: 7.3        		
    }, 
    {
       naslov: 'Moonlight',
       godina: 2017,
       rezija: 'Barry Jenkins',
       ocena:  7.4
    }, 
    {
        naslov: 'Spotlight',
        godina: 2016,
        rezija: 'Tom McCarthy',
        ocena:  8.1
     },
     {
        naslov: 'Birdman',
        godina: 2015,
        rezija: 'Alejandro G. Iñárritu',
        ocena: 7.7
     },
     {
        naslov: '12 Years a Slave',
        godina: 2014,
        rezija: 'Steve McQueen',
        ocena:  8.1
     },
     {
        naslov: 'Argo',
        godina: 2013,
        rezija: 'Ben Affleck',
        ocena: 7.7
     },   
     {
        naslov: 'The Artist',
        godina: 2012,
        rezija: 'Michel Hazanavicius',
        ocena: 7.9
     },  
     {
        naslov: "The King's Speech",
        godina: 2011,
        rezija: 'Tom Hooper',
        ocena: 8.0
    },
    {
        naslov: 'The Hurt Locker',
        godina: 2010,
        rezija: 'Kathryn Bigelow',
        ocena: 7.5
    },              
];
// Sortable Table Columns
$('th').on('click', function(){
    var column = $(this).data('column')
    var order = $(this).data('order')
    var text = $(this).html()
    text = text.substring(0, text.length - 1)

    if (order == 'desc') {
        $(this).data('order', 'asc')
        filmovi = filmovi.sort((a,b) => a[column] > b[column] ? 1 : -1)
        text += '&#9660'
    }else {
        $(this).data('order', 'desc')
        filmovi = filmovi.sort((a,b) => a[column] < b[column] ? 1 : -1)
       text += '&#9650'     
    }
    $(this).html(text)
    buildTable(filmovi)
});


// call search input
$('#search-input').on('keyup', function() {
    var value = $(this).val()
    /*console.log('Value:', value);*/
    var data = searchTeable(value, filmovi)
    buildTable(data)
})

buildTable(filmovi)


function searchTeable(value, data) {
    var filteredData = [];

    for (var i =0; i < data.length; i++) {
        value = value.toLowerCase()
        var naslov = data[i].naslov.toLowerCase()

        if(naslov.includes(value)) {
            filteredData.push(data[i])
        }
    }

    return filteredData
}

function buildTable (data) {    

    var table = document.getElementById('myTable')
    
    table.innerHTML = '';

    for (var i = 0; i < data.length; i++) {
        var row = `<tr>
                      <td>${data[i].naslov}</td>  
                      <td>${data[i].godina}</td>
                      <td>${data[i].rezija}</td>
                      <td>${data[i].ocena}</td>
                  </tr>`
        table.innerHTML += row;    
    }
 }
    


