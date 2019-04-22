for (let numberCollection = 1; numberCollection <=100; numberCollection +=1) {
	if (numberCollection %3 == 0 && numberCollection %5 == 0){
		console.log('FizzBuzz')
	}

	else if (numberCollection %3 == 0) {
		console.log('Fizz');
	}

	else if (numberCollection %5 == 0) {
		console.log('Buzz');
	}
	else{
		console.log(numberCollection);
	}

}