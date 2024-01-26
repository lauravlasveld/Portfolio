
document.querySelectorAll('.js-marquee').forEach(function(e) {
    var letter = e.querySelector('span');
    for (counter = 1; counter <= 5; ++counter) {
        var clone = letter.cloneNode(true);
        letter.after(clone);
    }
})

document.addEventListener('DOMContentLoaded', function () {
    const challengesBoxes = document.querySelectorAll('.box2');

    challengesBoxes.forEach(box => {
        const textElement = box.querySelector('p');

        box.addEventListener('mouseover', () => {
            textElement.style.display = 'none';
        });

        box.addEventListener('mouseout', () => {
            textElement.style.display = 'block';
        });
    });
});
