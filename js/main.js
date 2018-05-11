var b_title = document.getElementById('title');
var b_img_url = document.getElementById('img_url');
var b_bp1 = document.getElementById('bp1');
var b_bp2 = document.getElementById('bp2');
var b_bp3 = document.getElementById('bp3');
var b_author_name = document.getElementById('author_name');

function isValid(){

    // console.log(b_title.value);
    // console.log(b_img_url.value);
    // console.log(b_bp1.value);
    // console.log(b_bp2.value);
    // console.log(b_bp3.value);
    // console.log(b_author_name.value);
    
    var re1 = /^((https?|ftp):)?\/\/.*(jpeg|jpg|png|gif|bmp)/;

    if (re1.test(b_img_url.value)){
        console.log('valid url 1');
        makeJson();
    }else{
        alert('Enter valid url for the image')
        console.log('invalid url');
    }

    

    return false;

    
};

function makeJson(){

    document.getElementById('output').innerHTML = 'JSON data is as follows: <br>' + 
        '{<br>' + 
            '"title": "' + blog.title.value + '"<br>' +
            '"image-url": "' + blog.img_url.value + '"<br>' +
            '"paragrapph 1": "' + blog.bp1.value + '"<br>' +
            '"paragrapph 2": "' + blog.bp2.value + '"<br>' +
            '"paragrapph 3": "' + blog.bp3.value + '"<br>' +
            '"author-name": "' + blog.author_name.value + '"<br>' +
        '}';

};

