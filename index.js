function appender() {
  let inputer=document.querySelector(".num-inp");
  let add=document.querySelector(".add");
  let days=document.querySelectorAll(".week-day");
  let Total=document.querySelector(".total");
  let Average=document.querySelector(".average");
  let high=document.querySelector(".high");
  let wrapper=document.querySelector(".weekday-cont");
  let goalSave= document.querySelector(".save");
  let goalValue= document.querySelector(".goal-text");
  let target=document.querySelector(".target");

  

  let count = 0;
  let initTotal=0;
  goalSave.addEventListener("click", ()=>{
    let saverCont=document.querySelector(".saver-wrapper");
    target.textContent=goalValue.value;
    goalValue.value="";
    saverCont.style.display="none";
  });

  let newNum=[];
  add.addEventListener("click", ()=>{
    if (inputer.value !=""){
      newNum.push(inputer.value);
      count++;
    }
    inputer.value="";
    for (let i=0;i<days.length;i++) {
      if (newNum[i]!=undefined) {
        days[i].value=newNum[i];
        initTotal=total(newNum);
      }      
    }  

    if (count > 7) {
      let del = wrapper.querySelector('.week-day');
      del.remove();
      let newInp=document.createElement("input");
      newInp.value=`${newNum[count-1]}`
      newInp.classList.add("week-day");
      wrapper.appendChild(newInp);
    }
  
    
  Total.textContent=initTotal; 
  Average.textContent=(initTotal/newNum.length).toFixed(2);
  high.textContent=Math.max(...newNum); 
  let targetPerc = (initTotal/Number(target.textContent)) * 100;

  let progressTotal= document.querySelector(".progress-total");
  progressTotal.textContent= `${initTotal}`;

  targetPerc=targetPerc>100 ? 100: targetPerc;
  let progress=document.querySelector(".progress-circle");
  progress.style.background  = `conic-gradient(#70db70 ${targetPerc}%, #2d3740 ${targetPerc}% 100%)`;
  });
}



appender();

function total(sum) {
  let total=0;
  for (let i=0;i<sum.length;i++) {
    total += parseFloat(sum[i]);
  }
  return total;
}




