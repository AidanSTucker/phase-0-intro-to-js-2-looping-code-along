// Code your solutions in this file



function writeCards(name, eventName) {
    let messagesArray = [];
    

    for(let i = 0; i < name.length; i++) {
        let message =  `Thank you, ${name[i]}, for the wonderful ${eventName} gift!`;
        messagesArray.push(message);
    }

    return messagesArray
}



function countDown(num) {
    while (num >= 0) {
      console.log(num);
      num--;
    }
  }
  