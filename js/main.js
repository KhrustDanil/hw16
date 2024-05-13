let score = 0;
 
const a = +prompt("Скільки буде 2+2?", 4);

if (a == 4) {
   console.log(score);
    score += 10;
   const b = confirm("Сонце встає на сході?")
   console.log(score);

   if (b == true) {
       const c = +prompt("Скільки буде 5 / 0?", 0);
       score += 10;
       console.log(score);

       if (c == 0) {
           const d = prompt("Якого кольору небо", "Блакитне");
           score += 10;
           console.log(score);

           if (d == "Блакитне") {
               const e = +prompt("Яка правильна відповідь на головне питання життя, всесвіту та всього такого", 42);
               score += 10;
               console.log(score);

               if ( e == 42) {
                   score += 10;
                   console.log(score);
               }
           }
       }
   }
   alert("Вітаю ви набрали: " + score + " балів");
} else {
   alert('Ви набрали 0');
}
