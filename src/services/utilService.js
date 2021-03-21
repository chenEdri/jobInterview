
export const utilService={
    getRandomColor,
    getRandomNumber,
    findIdxById,
    makeId,
    makeColorFromMouseMoveX
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function getRandomNumber(min, max){
      return Math.floor(Math.random()*(max-min)+min);
  }

  
function findIdxById(arr, id){
    return arr.findIndex(item=> item._id === id)
}

function makeId(length = 5) {
  var txt = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return txt;
}

function makeColorFromMouseMoveX(x){
  return `rgb(4,${x % 256},9`
}
