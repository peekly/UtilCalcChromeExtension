const calculateBtn = document.querySelector("#calculateBtn");
calculateBtn.addEventListener("click", doMath);

function doMath(){
    let totalSeatsInput = parseInt(document.querySelector("#totalSeats").value)
    let seatsWantedInput = parseInt(document.querySelector("#seatsWanted").value)
    let percentInput = parseInt(document.querySelector("#percent").value)

    let penalizedSeatsLabel = document.querySelector("#penalizedSeats")
    let noPenaltySeatsLabel = document.querySelector("#noPenaltySeats")

    var percentFix = percentInput * 0.01
    var roundNewTotal = Math.floor(totalSeatsInput*percentFix)

    var noPen = totalSeatsInput-roundNewTotal
    var penalty = (totalSeatsInput-seatsWantedInput) - noPen 


   
    noPenaltySeatsLabel.innerHTML = "Seats Without Penalty: "+ noPen
    penalizedSeatsLabel.innerHTML = "Penalized Seats: "+ penalty

}


