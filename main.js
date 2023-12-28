let FAQsLab = [...document.querySelectorAll('.FAQs_card')]
let FAQsLabParagraph = [...document.querySelectorAll('.faqs_card-text')]
for (let i = 0; i <= FAQsLab.length; i++) {
    FAQsLab[i].addEventListener('click',function(){
        FAQsLabParagraph[i].classList.toggle("active")
    })
}