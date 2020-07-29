//Написати функцију која враћа максимум од 3 броја (Параметри функције су 3 броја)

function max(a, b, c) {
    if(a>b && a>c)
		{
            console.log(`${a} je najveći broj od zadata tri - ${a}, ${b}, ${c}.`)
			return a
		}
		else if(b>a && b>c)
		{
            console.log(`${b} je najveći broj od zadata tri - ${a}, ${b}, ${c}.`)
			return b
		}
		else if(c>a && c>a)
		{
            console.log(`${c} je najveći broj od zadata tri - ${a}, ${b}, ${c}.`)
			return c
		}
}
max(9, 5, 10)