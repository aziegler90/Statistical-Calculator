function calcMean(meanArray){
	var x = meanArray.length;
	var y = calcSum(meanArray);
	var mean = y / x;
	
	return mean.toFixed(2);
}

function calcMedian(medArray){
    var median;
    var mid = Math.floor(medArray.length / 2);

    if (medArray.length % 2){
        median = medArray[mid];
    }
	else{
        median = (medArray[mid - 1] + medArray[mid]) / 2;
	}
	
	return median.toFixed(2);
}

function calcMode(modeArray){
	var mode = [];
	var	count = [];
	var maxIndex = 0;
	var	x, number;
	
	for (x = 0; x < modeArray.length; x++){
		number = modeArray[x];
		count[number] = (count[number] || 0) + 1;
		if (count[number] > maxIndex) {
			maxIndex = count[number];
		}
	}
	
	for (x in count) if (count.hasOwnProperty(x)) {
		if (count[x] === maxIndex) {
			mode.push(Number(x));
		}
	}
	
	var myMode = mode.join(" ");
	
	return myMode;
}

function calcStdDev(sdArray){
	var stDev = Math.sqrt(calcVariance(sdArray));
	
	return stDev.toFixed(2);
}

function calcSum(sumArray){
	function getSum(x, y){
		return x + y;
	}
	
	var mySum = sumArray.reduce(getSum);

	return mySum.toFixed(2);	
}

function calcVariance(varArray){
	var myMean = calcMean(varArray);
	var newArray = [];
	var x, myVar;
	
	for (x = 0; x < varArray.length; x++){
		newArray.push((varArray[x] - myMean) ** 2);
	}

	myVar = calcMean(newArray);
	
	return myVar;
}

function findMax(maxArray){
	var maximum = maxArray[maxArray.length - 1];
	
	return maximum.toFixed(2);
}

function findMin(minArray){
	var minimum = minArray[0];
	
	return minimum.toFixed(2);
}

function performStatistics(){
	
	var x, y;
	var myNums = document.getElementById("numbers").value;
	var strCheck = /[^\d\s-]/.test(myNums);

    if(strCheck){
        alert('Please enter numbers separated by spaces.');
        return false;
    }
	
	var numsArray = myNums.split(" ");
	
	for (x = 0; x < numsArray.length; x++){
		numsArray[x] = parseInt(numsArray[x], 10);
	}	
	
	numsArray.sort(function(a, b) {return a - b;});
	
	if ((numsArray.length < 5) || (numsArray.length > 20)){
		alert("Please enter 5 - 20 numbers.");
		return false;
	}
	
	for (y = 0; y < numsArray.length; y++){
		if ((numsArray[y] < 0) || (numsArray[y] > 100)){
			alert("Numbers must be between 0 - 100.");
			return false;
		}	
	}	
	
	document.getElementById("min").value = findMin(numsArray);
	document.getElementById("max").value = findMax(numsArray);
	document.getElementById("sum").value = calcSum(numsArray);
	document.getElementById("mean").value = calcMean(numsArray);
	document.getElementById("median").value = calcMedian(numsArray);
	document.getElementById("mode").value = calcMode(numsArray);
	document.getElementById("variance").value = calcVariance(numsArray);
	document.getElementById("stdDev").value = calcStdDev(numsArray);
	
	return false;
}