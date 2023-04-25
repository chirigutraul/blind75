function bubbleSort(a){
  for(let i = 0; i < a.length; i++){
    for(let j = i+1; j < a.length; j++){
      if(a[i] > a[j]){
        const temp = a[i];
        a[i] = a[j];
        a[j] = temp; 
      }
    }
  }
}

bubbleSort([4,3,2,1]);