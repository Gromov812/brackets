module.exports = function check(str, bracketsConfig) {


  let objBrackets = Object.fromEntries(bracketsConfig);
  console.log(objBrackets);


  let stack = [];

  for (let bracket of str) {

  
  console.log(bracket);

/* ФУНКЦИЯ ПРОВЕРКИ СТЭКА */


          let checkStack = (arg) => {
              
              let temp = arg.pop();
              let temp2 = arg.pop();
              console.log('CHECHSTACK() >> СТЭК ПОСЛЕ ОПЕРАЦИИ POP', arg, 'В TEMP СЕЙЧАС ЛЕЖИТ >>', temp, ' И ', temp2);

              if (temp == objBrackets[temp2] && temp != undefined && temp2 != undefined) {
                  console.log(`CHECHSTACK() >> СТЭК ПРОВЕРЕН, СКОБКИ ${temp} и ${objBrackets[temp]} СОВПАЛИ! >> УДАЛЯЕМ ИХ!`);
                  
                  console.log('CHECHSTACK() >> СТЭК ПОСЛЕ УДАЛЕНИЯ СОВПАВШИХ >> ', arg);
                  return checkStack(arg);
              }
              else {
                  if (temp2 != undefined) arg.push(temp2)
                  if (temp != undefined) arg.push(temp)
                  console.log('CHECHSTACK() >> СТЭК ПРОВЕРЕН, ДУБЛЕЙ БОЛЬШЕ НЕТ, ВОЗВРАЩАЕМ TEMP ЕСЛИ ОН НЕ UNDEFINED', arg);   
                  return false;
              }
          } 

          
/* ФУНКЦИЯ ПРОВЕРКИ СТЭКА */



  if (bracket in objBrackets) {
      stack.push(bracket); // если открывающая скобка, то пушим
      if (stack.length > 1) {
          console.log('СТЭК БОЛЬШЕ 1! НУЖНО ПРОВЕРИТЬ! >>', stack); 
          checkStack(stack);
      }
  }
      else {
      if (objBrackets[stack[stack.length - 1]] == bracket) {

          console.log('СОВПАЛИ! Уладяем из стэка стэк >>', stack);// проверяем псоледнюю открывающую из стэка с актуальной закрывающей
          stack.pop(); // если совпали, то удаляем из стэка.
          console.log('Стэк после удаления >>', stack);
          // когда удалили из стэка
      }
      else {
          console.log('СКОБКА ЗАКРЫВАЮЩАЯ, НО СОВПАДЕНИЯ НЕТ, ПУШИМ В СТЕК');
          stack.push(bracket)
      };
  }
} 
return stack.length < 1;
}