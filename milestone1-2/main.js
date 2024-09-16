var tagbutton = document.getElementById('toggle-skills');
var skilling = document.getElementById('skills');
tagbutton.addEventListener('click', function () {
    if (skilling.style.display === 'none') {
        skilling.style.display = 'block';
    }
    else {
        skilling.style.display = 'none';
    }
});
