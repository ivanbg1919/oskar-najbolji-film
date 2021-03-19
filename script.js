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
    {
        naslov: 'Slumdog Millionaire',
        godina: 2009,
        rezija: 'Danny Boyle',
        ocena: 8.0
    },   
    {
        naslov: 'No Country for Old Men',
        godina: 2008,
        rezija: 'Ethan Coen, Joel Coen',
        ocena: 8.1
    },
    {
        naslov: 'The Departed',
        godina: 2007,
        rezija: 'Martin Scorsese',
        ocena: 8.5
    },
    {
        naslov: 'Crash',
        godina: 2006,
        rezija: 'Paul Haggis',
        ocena: 7.7
    },
    {
        naslov: 'Million Dollar Baby',
        godina: 2005,
        rezija: 'Clint Eastwood',
        ocena: 8.1
    },    
    {
        naslov: 'The Lord of the Rings: The Return of the King',
        godina: 2004,
        rezija: 'Peter Jackson',
        ocena: 8.8
    },  
    {
        naslov: 'Chicago',
        godina: 2003,
        rezija: 'Rob Marshall',
        ocena: 7.2
    },
    {
        naslov: 'A Beautiful Mind',
        godina: 2002,
        rezija: 'Ron Howard',
        ocena: 8.2
    },
    {
        naslov: 'Gladiator',
        godina: 2001,
        rezija: 'Ridley Scott',
        ocena: 8.5
    },
    {
        naslov: 'American Beauty',
        godina: 2000,
        rezija: 'Sam Mendes',
        ocena: 8.3
    },
    {
        naslov: 'Shakespeare in Love',
        godina: 1999,
        rezija: 'John Madden',
        ocena: 7.1
    },
    {
        naslov: 'Titanic',
        godina: 1998,
        rezija: 'James Cameron',
        ocena: 7.8
    },
    {
        naslov: 'The English Patient',
        godina: 1997,
        rezija: 'Anthony Minghella',
        ocena: 7.4
    },
    {
        naslov: 'Braveheart',
        godina: 1996,
        rezija: 'Mel Gibson',
        ocena: 8.3
    },
    {
        naslov: 'Forrest Gump',
        godina: 1995,
        rezija: 'Robert Zemeckis',
        ocena: 8.8
    },
    {
        naslov: 'Schindler’s List',
        godina: 1994,
        rezija: 'Steven Spielberg',
        ocena: 8.9
    },
    {
        naslov: 'Unforgiven',
        godina: 1993,
        rezija: 'Clint Eastwood',
        ocena: 8.2
    },
    {
        naslov: 'The Silence of the Lambs',
        godina: 1992,
        rezija: 'Jonathan Demme',
        ocena: 8.6
    },
    {
        naslov: 'Dances With Wolves',
        godina: 1991,
        rezija: 'Kevin Costner',
        ocena: 8.0
    },
    {
        naslov: 'Driving Miss Daisy',
        godina: 1990,
        rezija: 'Bruce Beresford',
        ocena: 7.3
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
    


