const sliders = document.querySelectorAll("input[type='range']");
sliders.forEach(function (slider) {
  slider.addEventListener("input", calculate);
});

const billInput = document.getElementById("billamount");
billInput.addEventListener("change", calculate);

function calculate() {
  let bill = parseFloat(billInput.value);
  let tippercent = document.getElementById("tippercent").value;
  let noofppl = document.getElementById("noofpeople").value;

  billInput.value = bill.toFixed(2);
  let totaltip = parseFloat((bill * (tippercent / 100)).toFixed(2));

  let total = parseFloat((bill + totaltip).toFixed(2));

  let tipperperson = (totaltip / noofppl).toFixed(2);
  let totalperperson = total / noofppl;

  document.getElementById("tipamount").textContent = `\$ ${totaltip}`;
  document.getElementById("totalamount").textContent = `\$ ${total} `;
  document.getElementById("ppl").textContent = `\$ ${noofppl}`;
  document.getElementById("tip").textContent = `\$ ${tippercent}%`;

  document.getElementById("tpprsn").textContent = `\$ ${tipperperson}`;
  document.getElementById("ttlprsn").textContent = `\$ ${totalperperson}`;
}
