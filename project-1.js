// Variables

let btn = document.querySelector('#new-quote');
let quote = document.getElementById('qoute');
let person = document.querySelector('.person');


const quotes =  [{
    quote: '“Good friends, good books, and a sleepy conscience: this is the ideal life.”',
    person :  'Mark Twain'
},{
    quote: '“The best way to predict the future is to create it.”',
    person :  'Abraham Lincoln'
},{
    quote: '“The best way to find yourself is to lose yourself in the service of others.”',
    person :  'Mahatma Gandhi'
},{
    quote:  '“Violence is the last refuge of the incompetent.”',
    person : 'Isaac Asimov'
},{
    quote: '“The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.”',
    person : 'Helen Keller'
},{
    quote : '“The greatest happiness is to know the source of unhappiness.”',
    person : 'Fyodor Dostoyevsky'
},{
    quote : '“Whatever else is unsure in this stinking dunghill of a world a mother’s love is not.”',
    person : 'James Joyce'
},{
    quote : '“A man is lucky if he is the first love of a woman. A woman is lucky if she is the last love of a man.”',
    person : 'Charles Dickens'
},{
    quote : '“Life without love is like a tree without blossoms or fruit.”',
    person :  'Halil Cibran'
},{
  quote : 'Olmuyorsa zorlamayın, bazıları unutlmayı sevilmekten daha çok hak ediyor.',
  person : 'Anonim'
}, ];

btn.addEventListener('click',function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person; 
})
