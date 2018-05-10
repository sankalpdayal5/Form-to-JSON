function isValid(){
    if (blog.title.value == '' || blog.img_url.value == '' || blog.bp1.value == '' || blog.author_name.value == ''){
        alert ('Enter the required fields correctly');
    }else{
        makeJson();
    }
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

