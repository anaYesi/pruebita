var assert = require("assert");

	function multiplicar(arreglo, numero)
	{
	var multiResul = arreglo.reduce(function suma(a,b){
	return a*b;
	});
	var resultado = multiResul * numero;
	return resultado;
	}


	describe("ejercicio 1", function(){
		it("cuando es multiplicar([4,4,5,12],9", function(){
			assert.deepEqual(,ejercicios.edades(multiplicar([4,4,5,12],9));
								});
						});
			});
