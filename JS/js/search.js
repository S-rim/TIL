let data = ["Chuck Norris", "Bruce Lee", "Jackie Chan", "Jet Li"];

let searchKeyword = 'Ch';
let filterKey = searchKeyword && searchKeyword.toLowerCase();

if ( filterKey ) {
    data = data.filter(function(name, index) {
        name = name.toLowerCase();
        return name.indexOf(filterKey) > -1;
    });
}

console.log(data);